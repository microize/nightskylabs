const mongoose = require('mongoose');

class QueryMonitor {
  constructor() {
    this.queries = [];
    this.slowQueries = [];
    this.queryStats = new Map();
    this.slowQueryThreshold = 100; // 100ms
    this.maxStoredQueries = 100;
    
    this.setupMongooseHooks();
  }

  setupMongooseHooks() {
    // Hook into mongoose queries
    mongoose.set('debug', (collectionName, method, query, doc, options) => {
      const queryKey = `${collectionName}.${method}`;
      const startTime = Date.now();
      
      // Store query info
      const queryInfo = {
        collection: collectionName,
        method,
        query: JSON.stringify(query),
        timestamp: new Date(),
        id: Math.random().toString(36).substr(2, 9)
      };

      // Track query start
      this.trackQueryStart(queryInfo);

      // Set up completion tracking (this is a simplified approach)
      // In production, you'd use mongoose middleware for accurate timing
      setTimeout(() => {
        const duration = Date.now() - startTime;
        this.trackQueryComplete(queryInfo.id, duration);
      }, 0);
    });

    // Mongoose middleware for accurate query timing
    mongoose.plugin((schema) => {
      // Pre-hook for all queries
      schema.pre(/^find/, function() {
        this._startTime = Date.now();
        this._queryInfo = {
          model: this.model.modelName,
          method: this.op,
          conditions: JSON.stringify(this.getQuery()),
          id: Math.random().toString(36).substr(2, 9)
        };
      });

      schema.pre(/^(update|delete|save|remove)/, function() {
        this._startTime = Date.now();
        this._queryInfo = {
          model: this.model?.modelName || this.constructor.modelName,
          method: this.op || 'save',
          conditions: JSON.stringify(this.getQuery?.() || {}),
          id: Math.random().toString(36).substr(2, 9)
        };
      });

      // Post-hook for all queries
      schema.post(/^find/, function(result) {
        if (this._startTime && this._queryInfo) {
          const duration = Date.now() - this._startTime;
          this._queryInfo.duration = duration;
          this._queryInfo.resultCount = Array.isArray(result) ? result.length : result ? 1 : 0;
          
          global.queryMonitor?.trackQueryComplete(this._queryInfo.id, duration, this._queryInfo);
        }
      });

      schema.post(/^(update|delete|save|remove)/, function(result) {
        if (this._startTime && this._queryInfo) {
          const duration = Date.now() - this._startTime;
          this._queryInfo.duration = duration;
          this._queryInfo.resultCount = result?.modifiedCount || result?.deletedCount || 1;
          
          global.queryMonitor?.trackQueryComplete(this._queryInfo.id, duration, this._queryInfo);
        }
      });
    });
  }

  trackQueryStart(queryInfo) {
    // Add to queries list (keep only recent ones)
    this.queries.unshift({
      ...queryInfo,
      status: 'running'
    });

    if (this.queries.length > this.maxStoredQueries) {
      this.queries = this.queries.slice(0, this.maxStoredQueries);
    }
  }

  trackQueryComplete(queryId, duration, queryInfo = null) {
    // Update existing query or create new entry
    const existingQueryIndex = this.queries.findIndex(q => q.id === queryId);
    
    const completeQueryInfo = {
      ...queryInfo,
      id: queryId,
      duration,
      status: 'completed',
      timestamp: new Date()
    };

    if (existingQueryIndex >= 0) {
      this.queries[existingQueryIndex] = {
        ...this.queries[existingQueryIndex],
        ...completeQueryInfo
      };
    } else {
      this.queries.unshift(completeQueryInfo);
    }

    // Track slow queries
    if (duration > this.slowQueryThreshold) {
      this.slowQueries.unshift({
        ...completeQueryInfo,
        slow: true
      });

      // Log slow query warning
      console.warn(`🐌 Slow Query Detected (${duration}ms):`, {
        model: queryInfo?.model || 'unknown',
        method: queryInfo?.method || 'unknown',
        duration: `${duration}ms`,
        conditions: queryInfo?.conditions || 'unknown'
      });

      // Keep only recent slow queries
      if (this.slowQueries.length > 50) {
        this.slowQueries = this.slowQueries.slice(0, 50);
      }
    }

    // Update query statistics
    const queryType = queryInfo?.method || 'unknown';
    const stats = this.queryStats.get(queryType) || {
      count: 0,
      totalDuration: 0,
      avgDuration: 0,
      slowCount: 0
    };

    stats.count++;
    stats.totalDuration += duration;
    stats.avgDuration = stats.totalDuration / stats.count;
    if (duration > this.slowQueryThreshold) {
      stats.slowCount++;
    }

    this.queryStats.set(queryType, stats);
  }

  getRecentQueries(limit = 20) {
    return this.queries.slice(0, limit);
  }

  getSlowQueries(limit = 10) {
    return this.slowQueries.slice(0, limit);
  }

  getQueryStats() {
    const stats = {};
    this.queryStats.forEach((value, key) => {
      stats[key] = value;
    });

    return {
      queryTypes: stats,
      totalQueries: this.queries.length,
      totalSlowQueries: this.slowQueries.length,
      slowQueryThreshold: this.slowQueryThreshold
    };
  }

  getPerformanceReport() {
    const now = new Date();
    const oneHourAgo = new Date(now.getTime() - 60 * 60 * 1000);
    
    const recentQueries = this.queries.filter(q => 
      q.timestamp && q.timestamp > oneHourAgo && q.status === 'completed'
    );

    const avgDuration = recentQueries.length > 0 
      ? recentQueries.reduce((sum, q) => sum + (q.duration || 0), 0) / recentQueries.length
      : 0;

    return {
      timeframe: '1 hour',
      totalQueries: recentQueries.length,
      averageDuration: Math.round(avgDuration),
      slowQueries: recentQueries.filter(q => (q.duration || 0) > this.slowQueryThreshold).length,
      queryBreakdown: this.getQueryStats().queryTypes,
      recommendations: this.generateRecommendations(recentQueries)
    };
  }

  generateRecommendations(queries) {
    const recommendations = [];
    const stats = this.getQueryStats();

    // Check for too many slow queries
    const slowQueryPercentage = (stats.totalSlowQueries / Math.max(queries.length, 1)) * 100;
    if (slowQueryPercentage > 10) {
      recommendations.push({
        type: 'warning',
        message: `${slowQueryPercentage.toFixed(1)}% of queries are slow (>${this.slowQueryThreshold}ms)`,
        action: 'Consider adding database indexes or optimizing query conditions'
      });
    }

    // Check for common slow query patterns
    const findQueries = stats.queryTypes.find || {};
    if (findQueries.avgDuration > 50) {
      recommendations.push({
        type: 'info',
        message: `Find queries averaging ${findQueries.avgDuration.toFixed(1)}ms`,
        action: 'Review indexes on frequently queried fields'
      });
    }

    return recommendations;
  }

  setSlowQueryThreshold(ms) {
    this.slowQueryThreshold = ms;
  }

  clearStats() {
    this.queries = [];
    this.slowQueries = [];
    this.queryStats.clear();
  }

  // Middleware for Express routes
  middleware() {
    return (req, res, next) => {
      req.queryMonitor = this;
      next();
    };
  }
}

// Create global instance
const queryMonitor = new QueryMonitor();
global.queryMonitor = queryMonitor;

module.exports = queryMonitor;
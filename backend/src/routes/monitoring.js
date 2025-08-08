const express = require('express');
const auth = require('../middleware/auth');
const permissions = require('../middleware/permissions');
const queryMonitor = require('../middleware/queryMonitor');
const { cacheService } = require('../middleware/cache');

const router = express.Router();

// Get recent database queries
router.get('/queries', 
  auth, 
  permissions.requireRole(['admin']), 
  (req, res) => {
    try {
      const limit = parseInt(req.query.limit) || 20;
      const queries = queryMonitor.getRecentQueries(limit);

      res.json({
        success: true,
        data: {
          queries,
          count: queries.length,
          timestamp: new Date().toISOString()
        }
      });
    } catch (error) {
      console.error('Error fetching query data:', error);
      res.status(500).json({
        success: false,
        message: 'Failed to fetch query monitoring data',
        error: error.message
      });
    }
  }
);

// Get slow queries
router.get('/queries/slow', 
  auth, 
  permissions.requireRole(['admin']), 
  (req, res) => {
    try {
      const limit = parseInt(req.query.limit) || 10;
      const slowQueries = queryMonitor.getSlowQueries(limit);

      res.json({
        success: true,
        data: {
          slowQueries,
          count: slowQueries.length,
          threshold: queryMonitor.slowQueryThreshold,
          timestamp: new Date().toISOString()
        }
      });
    } catch (error) {
      console.error('Error fetching slow query data:', error);
      res.status(500).json({
        success: false,
        message: 'Failed to fetch slow query data',
        error: error.message
      });
    }
  }
);

// Get query statistics
router.get('/queries/stats', 
  auth, 
  permissions.requireRole(['admin']), 
  (req, res) => {
    try {
      const stats = queryMonitor.getQueryStats();

      res.json({
        success: true,
        data: stats,
        timestamp: new Date().toISOString()
      });
    } catch (error) {
      console.error('Error fetching query stats:', error);
      res.status(500).json({
        success: false,
        message: 'Failed to fetch query statistics',
        error: error.message
      });
    }
  }
);

// Get performance report
router.get('/performance', 
  auth, 
  permissions.requireRole(['admin']), 
  (req, res) => {
    try {
      const report = queryMonitor.getPerformanceReport();

      res.json({
        success: true,
        data: report,
        timestamp: new Date().toISOString()
      });
    } catch (error) {
      console.error('Error generating performance report:', error);
      res.status(500).json({
        success: false,
        message: 'Failed to generate performance report',
        error: error.message
      });
    }
  }
);

// Update slow query threshold
router.put('/queries/threshold', 
  auth, 
  permissions.requireRole(['admin']), 
  (req, res) => {
    try {
      const { threshold } = req.body;
      
      if (!threshold || threshold < 1 || threshold > 5000) {
        return res.status(400).json({
          success: false,
          message: 'Threshold must be between 1 and 5000 milliseconds'
        });
      }

      queryMonitor.setSlowQueryThreshold(threshold);

      res.json({
        success: true,
        message: `Slow query threshold updated to ${threshold}ms`,
        data: { threshold }
      });
    } catch (error) {
      console.error('Error updating threshold:', error);
      res.status(500).json({
        success: false,
        message: 'Failed to update threshold',
        error: error.message
      });
    }
  }
);

// Clear monitoring data
router.delete('/queries', 
  auth, 
  permissions.requireRole(['admin']), 
  (req, res) => {
    try {
      queryMonitor.clearStats();

      res.json({
        success: true,
        message: 'Query monitoring data cleared',
        timestamp: new Date().toISOString()
      });
    } catch (error) {
      console.error('Error clearing query data:', error);
      res.status(500).json({
        success: false,
        message: 'Failed to clear query data',
        error: error.message
      });
    }
  }
);

// System metrics endpoint
router.get('/system', 
  auth, 
  permissions.requireRole(['admin']), 
  (req, res) => {
    try {
      const memUsage = process.memoryUsage();
      const uptime = process.uptime();
      
      res.json({
        success: true,
        data: {
          memory: {
            rss: Math.round(memUsage.rss / 1024 / 1024), // MB
            heapUsed: Math.round(memUsage.heapUsed / 1024 / 1024), // MB
            heapTotal: Math.round(memUsage.heapTotal / 1024 / 1024), // MB
            external: Math.round(memUsage.external / 1024 / 1024) // MB
          },
          uptime: {
            seconds: Math.round(uptime),
            formatted: `${Math.floor(uptime / 3600)}h ${Math.floor((uptime % 3600) / 60)}m ${Math.floor(uptime % 60)}s`
          },
          nodeVersion: process.version,
          platform: process.platform,
          timestamp: new Date().toISOString()
        }
      });
    } catch (error) {
      console.error('Error fetching system metrics:', error);
      res.status(500).json({
        success: false,
        message: 'Failed to fetch system metrics',
        error: error.message
      });
    }
  }
);

// Cache management endpoints

// Get cache statistics
router.get('/cache/stats', 
  auth, 
  permissions.requireRole(['admin']), 
  (req, res) => {
    try {
      const stats = cacheService.getStats();

      res.json({
        success: true,
        data: stats,
        timestamp: new Date().toISOString()
      });
    } catch (error) {
      console.error('Error fetching cache stats:', error);
      res.status(500).json({
        success: false,
        message: 'Failed to fetch cache statistics',
        error: error.message
      });
    }
  }
);

// Clear cache
router.delete('/cache', 
  auth, 
  permissions.requireRole(['admin']), 
  async (req, res) => {
    try {
      const { pattern } = req.query;
      
      if (pattern) {
        const deletedCount = await cacheService.invalidatePattern(pattern);
        res.json({
          success: true,
          message: `Cache cleared for pattern: ${pattern}`,
          data: { deletedCount }
        });
      } else {
        await cacheService.flush();
        res.json({
          success: true,
          message: 'All cache cleared',
          timestamp: new Date().toISOString()
        });
      }
    } catch (error) {
      console.error('Error clearing cache:', error);
      res.status(500).json({
        success: false,
        message: 'Failed to clear cache',
        error: error.message
      });
    }
  }
);

// Get cache key
router.get('/cache/:key', 
  auth, 
  permissions.requireRole(['admin']), 
  async (req, res) => {
    try {
      const { key } = req.params;
      const value = await cacheService.get(key);

      if (value === null) {
        return res.status(404).json({
          success: false,
          message: 'Cache key not found'
        });
      }

      res.json({
        success: true,
        data: {
          key,
          value,
          exists: true
        }
      });
    } catch (error) {
      console.error('Error fetching cache key:', error);
      res.status(500).json({
        success: false,
        message: 'Failed to fetch cache key',
        error: error.message
      });
    }
  }
);

// Set cache key
router.put('/cache/:key', 
  auth, 
  permissions.requireRole(['admin']), 
  async (req, res) => {
    try {
      const { key } = req.params;
      const { value, ttl = 300 } = req.body;

      const success = await cacheService.set(key, value, ttl);

      res.json({
        success,
        message: success ? 'Cache key set successfully' : 'Failed to set cache key',
        data: { key, ttl }
      });
    } catch (error) {
      console.error('Error setting cache key:', error);
      res.status(500).json({
        success: false,
        message: 'Failed to set cache key',
        error: error.message
      });
    }
  }
);

module.exports = router;
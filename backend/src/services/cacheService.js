const redis = require('redis');
const NodeCache = require('node-cache');

class CacheService {
  constructor() {
    this.isRedisConnected = false;
    this.redisClient = null;
    this.nodeCache = new NodeCache({
      stdTTL: 600, // 10 minutes default
      checkperiod: 120, // Check for expired keys every 2 minutes
      useClones: false
    });

    this.initializeRedis();
  }

  async initializeRedis() {
    try {
      if (process.env.REDIS_URL || process.env.REDIS_HOST) {
        const redisConfig = process.env.REDIS_URL ? 
          { url: process.env.REDIS_URL } :
          {
            host: process.env.REDIS_HOST || 'localhost',
            port: process.env.REDIS_PORT || 6379,
            password: process.env.REDIS_PASSWORD || undefined
          };

        this.redisClient = redis.createClient(redisConfig);

        this.redisClient.on('connect', () => {
          console.log('🔗 Connected to Redis cache server');
          this.isRedisConnected = true;
        });

        this.redisClient.on('error', (err) => {
          console.warn('⚠️ Redis connection error, falling back to in-memory cache:', err.message);
          this.isRedisConnected = false;
        });

        this.redisClient.on('end', () => {
          console.log('🔌 Redis connection closed');
          this.isRedisConnected = false;
        });

        await this.redisClient.connect();
      } else {
        console.log('📝 No Redis configuration found, using in-memory cache only');
      }
    } catch (error) {
      console.warn('⚠️ Failed to connect to Redis, using in-memory cache:', error.message);
      this.isRedisConnected = false;
    }
  }

  /**
   * Get value from cache
   * @param {string} key - Cache key
   * @returns {Promise<any>} Cached value or null
   */
  async get(key) {
    try {
      if (this.isRedisConnected && this.redisClient) {
        const value = await this.redisClient.get(key);
        return value ? JSON.parse(value) : null;
      } else {
        return this.nodeCache.get(key) || null;
      }
    } catch (error) {
      console.warn(`Cache get error for key ${key}:`, error.message);
      return null;
    }
  }

  /**
   * Set value in cache
   * @param {string} key - Cache key
   * @param {any} value - Value to cache
   * @param {number} ttl - Time to live in seconds (optional)
   * @returns {Promise<boolean>} Success status
   */
  async set(key, value, ttl = 600) {
    try {
      if (this.isRedisConnected && this.redisClient) {
        await this.redisClient.setEx(key, ttl, JSON.stringify(value));
        return true;
      } else {
        this.nodeCache.set(key, value, ttl);
        return true;
      }
    } catch (error) {
      console.warn(`Cache set error for key ${key}:`, error.message);
      return false;
    }
  }

  /**
   * Delete key from cache
   * @param {string} key - Cache key
   * @returns {Promise<boolean>} Success status
   */
  async del(key) {
    try {
      if (this.isRedisConnected && this.redisClient) {
        await this.redisClient.del(key);
        return true;
      } else {
        this.nodeCache.del(key);
        return true;
      }
    } catch (error) {
      console.warn(`Cache delete error for key ${key}:`, error.message);
      return false;
    }
  }

  /**
   * Clear all cache
   * @returns {Promise<boolean>} Success status
   */
  async flush() {
    try {
      if (this.isRedisConnected && this.redisClient) {
        await this.redisClient.flushAll();
      }
      this.nodeCache.flushAll();
      return true;
    } catch (error) {
      console.warn('Cache flush error:', error.message);
      return false;
    }
  }

  /**
   * Check if key exists in cache
   * @param {string} key - Cache key
   * @returns {Promise<boolean>} Exists status
   */
  async exists(key) {
    try {
      if (this.isRedisConnected && this.redisClient) {
        return await this.redisClient.exists(key) === 1;
      } else {
        return this.nodeCache.has(key);
      }
    } catch (error) {
      console.warn(`Cache exists check error for key ${key}:`, error.message);
      return false;
    }
  }

  /**
   * Get cache statistics
   * @returns {Object} Cache statistics
   */
  getStats() {
    const nodeStats = this.nodeCache.getStats();
    
    return {
      provider: this.isRedisConnected ? 'redis' : 'memory',
      isRedisConnected: this.isRedisConnected,
      nodeCache: {
        keys: nodeStats.keys,
        hits: nodeStats.hits,
        misses: nodeStats.misses,
        hitRate: nodeStats.hits / (nodeStats.hits + nodeStats.misses) || 0,
        ksize: nodeStats.ksize,
        vsize: nodeStats.vsize
      }
    };
  }

  /**
   * Get or set cache with function
   * @param {string} key - Cache key
   * @param {Function} fn - Function to execute if cache miss
   * @param {number} ttl - Time to live in seconds
   * @returns {Promise<any>} Cached or computed value
   */
  async getOrSet(key, fn, ttl = 600) {
    try {
      // Try to get from cache first
      const cached = await this.get(key);
      if (cached !== null) {
        return cached;
      }

      // Cache miss - execute function
      const result = await fn();
      
      // Cache the result
      await this.set(key, result, ttl);
      
      return result;
    } catch (error) {
      console.warn(`Cache getOrSet error for key ${key}:`, error.message);
      // If caching fails, still return the computed result
      try {
        return await fn();
      } catch (fnError) {
        throw fnError;
      }
    }
  }

  /**
   * Generate cache key with namespace
   * @param {string} namespace - Cache namespace
   * @param {string} key - Base key
   * @param {Object} params - Additional parameters to include in key
   * @returns {string} Generated cache key
   */
  generateKey(namespace, key, params = {}) {
    const paramString = Object.keys(params).length > 0 
      ? ':' + Object.entries(params)
          .sort(([a], [b]) => a.localeCompare(b))
          .map(([k, v]) => `${k}=${v}`)
          .join('&')
      : '';
    
    return `${namespace}:${key}${paramString}`;
  }

  /**
   * Cache invalidation by pattern
   * @param {string} pattern - Pattern to match keys
   * @returns {Promise<number>} Number of deleted keys
   */
  async invalidatePattern(pattern) {
    try {
      let deletedCount = 0;

      if (this.isRedisConnected && this.redisClient) {
        const keys = await this.redisClient.keys(pattern);
        if (keys.length > 0) {
          await this.redisClient.del(keys);
          deletedCount += keys.length;
        }
      }

      // Also clear from node cache (limited pattern matching)
      const nodeKeys = this.nodeCache.keys();
      const matchingKeys = nodeKeys.filter(key => 
        key.includes(pattern.replace('*', ''))
      );
      
      matchingKeys.forEach(key => this.nodeCache.del(key));
      deletedCount += matchingKeys.length;

      return deletedCount;
    } catch (error) {
      console.warn(`Cache invalidate pattern error for ${pattern}:`, error.message);
      return 0;
    }
  }

  /**
   * Graceful shutdown
   */
  async close() {
    try {
      if (this.redisClient) {
        await this.redisClient.quit();
      }
      this.nodeCache.close();
      console.log('🔌 Cache service closed gracefully');
    } catch (error) {
      console.warn('Error closing cache service:', error.message);
    }
  }
}

// Create singleton instance
const cacheService = new CacheService();

// Graceful shutdown handler
process.on('SIGTERM', async () => {
  await cacheService.close();
});

process.on('SIGINT', async () => {
  await cacheService.close();
});

module.exports = cacheService;
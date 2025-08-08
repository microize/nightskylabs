const cacheService = require('../services/cacheService');

/**
 * HTTP response caching middleware
 * @param {Object} options - Caching options
 * @param {number} options.ttl - Time to live in seconds (default: 300)
 * @param {string} options.namespace - Cache namespace (default: 'http')
 * @param {Function} options.keyGenerator - Custom key generator function
 * @param {Function} options.shouldCache - Function to determine if response should be cached
 * @param {Array} options.varyBy - Array of request properties to vary cache by
 * @returns {Function} Express middleware
 */
const cacheMiddleware = (options = {}) => {
  const {
    ttl = 300, // 5 minutes default
    namespace = 'http',
    keyGenerator = null,
    shouldCache = null,
    varyBy = ['url', 'method', 'user']
  } = options;

  return async (req, res, next) => {
    // Skip caching for non-GET requests by default
    if (req.method !== 'GET') {
      return next();
    }

    try {
      // Generate cache key
      const cacheKey = keyGenerator ? 
        keyGenerator(req) : 
        generateDefaultKey(req, namespace, varyBy);

      // Try to get cached response
      const cached = await cacheService.get(cacheKey);
      if (cached) {
        // Set cache headers
        res.set('X-Cache', 'HIT');
        res.set('X-Cache-Key', cacheKey);
        
        // Send cached response
        return res.status(cached.status || 200).json(cached.data);
      }

      // Cache miss - continue to route handler
      res.set('X-Cache', 'MISS');
      res.set('X-Cache-Key', cacheKey);

      // Override res.json to cache the response
      const originalJson = res.json;
      res.json = function(data) {
        // Check if response should be cached
        const statusCode = res.statusCode;
        const shouldCacheResponse = shouldCache ? 
          shouldCache(req, res, data) : 
          (statusCode >= 200 && statusCode < 300);

        if (shouldCacheResponse) {
          // Cache the response
          const responseToCache = {
            status: statusCode,
            data: data,
            headers: res.getHeaders(),
            timestamp: new Date().toISOString()
          };

          cacheService.set(cacheKey, responseToCache, ttl)
            .catch(err => console.warn('Failed to cache response:', err.message));
        }

        // Call original json method
        return originalJson.call(this, data);
      };

      next();
    } catch (error) {
      console.warn('Cache middleware error:', error.message);
      next();
    }
  };
};

/**
 * Generate default cache key
 */
function generateDefaultKey(req, namespace, varyBy) {
  const keyParts = [namespace];

  varyBy.forEach(property => {
    switch (property) {
      case 'url':
        keyParts.push(req.originalUrl || req.url);
        break;
      case 'method':
        keyParts.push(req.method);
        break;
      case 'user':
        keyParts.push(req.user?.id || 'anonymous');
        break;
      case 'query':
        const sortedQuery = Object.keys(req.query || {})
          .sort()
          .map(key => `${key}=${req.query[key]}`)
          .join('&');
        if (sortedQuery) keyParts.push(sortedQuery);
        break;
      case 'body':
        if (req.body && Object.keys(req.body).length > 0) {
          keyParts.push(JSON.stringify(req.body));
        }
        break;
      default:
        if (req[property]) {
          keyParts.push(String(req[property]));
        }
    }
  });

  return keyParts.join(':');
}

/**
 * Cache invalidation middleware
 * Invalidates cache entries based on patterns
 */
const invalidateCache = (patterns) => {
  return async (req, res, next) => {
    try {
      if (!Array.isArray(patterns)) {
        patterns = [patterns];
      }

      const invalidationPromises = patterns.map(pattern => {
        if (typeof pattern === 'function') {
          pattern = pattern(req);
        }
        return cacheService.invalidatePattern(pattern);
      });

      await Promise.all(invalidationPromises);
      
      console.log(`🗑️ Cache invalidated for patterns: ${patterns.join(', ')}`);
    } catch (error) {
      console.warn('Cache invalidation error:', error.message);
    }

    next();
  };
};

/**
 * Predefined cache configurations
 */
const cacheConfigs = {
  // Short-term cache for frequently accessed data
  short: {
    ttl: 300, // 5 minutes
    namespace: 'short'
  },

  // Medium-term cache for semi-static data
  medium: {
    ttl: 1800, // 30 minutes
    namespace: 'medium'
  },

  // Long-term cache for static data
  long: {
    ttl: 3600, // 1 hour
    namespace: 'long'
  },

  // Content-specific cache
  content: {
    ttl: 900, // 15 minutes
    namespace: 'content',
    shouldCache: (req, res, data) => {
      // Only cache successful content responses
      return res.statusCode === 200 && data?.success === true;
    }
  },

  // User-specific cache
  user: {
    ttl: 600, // 10 minutes
    namespace: 'user',
    varyBy: ['url', 'method', 'user'],
    shouldCache: (req, res, data) => {
      // Don't cache sensitive user data
      return res.statusCode === 200 && 
             data?.success === true && 
             !data?.data?.password &&
             !data?.data?.token;
    }
  },

  // Public content cache (no user variation)
  public: {
    ttl: 1800, // 30 minutes
    namespace: 'public',
    varyBy: ['url', 'method'],
    shouldCache: (req, res, data) => {
      return res.statusCode === 200 && data?.success === true;
    }
  }
};

/**
 * Helper functions for common caching patterns
 */
const cacheHelpers = {
  /**
   * Cache response data directly
   */
  cacheData: async (key, data, ttl = 300) => {
    return await cacheService.set(key, data, ttl);
  },

  /**
   * Get cached data
   */
  getCachedData: async (key) => {
    return await cacheService.get(key);
  },

  /**
   * Cache with automatic key generation
   */
  cacheWithKey: async (namespace, identifier, data, ttl = 300) => {
    const key = cacheService.generateKey(namespace, identifier);
    return await cacheService.set(key, data, ttl);
  },

  /**
   * Get cached data with automatic key generation
   */
  getCachedWithKey: async (namespace, identifier) => {
    const key = cacheService.generateKey(namespace, identifier);
    return await cacheService.get(key);
  },

  /**
   * Invalidate content cache when content is updated
   */
  invalidateContentCache: async (contentId) => {
    const patterns = [
      `content:*`,
      `public:*content*`,
      `short:*content*`,
      `medium:*content*`
    ];
    
    const results = await Promise.all(
      patterns.map(pattern => cacheService.invalidatePattern(pattern))
    );
    
    return results.reduce((sum, count) => sum + count, 0);
  }
};

module.exports = {
  cache: cacheMiddleware,
  invalidateCache,
  cacheConfigs,
  cacheHelpers,
  cacheService
};
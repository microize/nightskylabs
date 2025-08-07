// Role-based access control middleware
const requireRole = (roles) => {
  return (req, res, next) => {
    // Check if user is authenticated
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: 'Authentication required'
      });
    }

    // Check if user has required role
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        success: false,
        message: 'Insufficient permissions'
      });
    }

    next();
  };
};

// Permission-based access control
const requirePermission = (resource, action) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: 'Authentication required'
      });
    }

    // Admin has all permissions
    if (req.user.role === 'admin') {
      return next();
    }

    // Check specific permission
    if (!req.user.hasPermission(resource, action)) {
      return res.status(403).json({
        success: false,
        message: `Permission denied: ${action} ${resource}`
      });
    }

    next();
  };
};

// Product access control
const requireProductAccess = (req, res, next) => {
  if (!req.user) {
    return res.status(401).json({
      success: false,
      message: 'Authentication required'
    });
  }

  const productId = req.params.productId || req.body.productId;
  
  if (productId && !req.user.hasProductAccess(productId)) {
    return res.status(403).json({
      success: false,
      message: `Access denied to product: ${productId}`
    });
  }

  next();
};

// Content ownership check
const requireContentOwnership = async (req, res, next) => {
  try {
    const Content = require('../models/Content');
    const contentId = req.params.id;

    const content = await Content.findById(contentId);
    if (!content) {
      return res.status(404).json({
        success: false,
        message: 'Content not found'
      });
    }

    // Admin and editors can access all content
    if (['admin', 'editor'].includes(req.user.role)) {
      return next();
    }

    // Authors can only access their own content
    if (content.author.toString() !== req.user.id) {
      return res.status(403).json({
        success: false,
        message: 'You can only modify your own content'
      });
    }

    next();
  } catch (error) {
    console.error('Content ownership check error:', error);
    return res.status(500).json({
      success: false,
      message: 'Error checking content ownership'
    });
  }
};

// Rate limiting for specific endpoints
const rateLimitByRole = (limits) => {
  return (req, res, next) => {
    const userRole = req.user?.role || 'anonymous';
    const limit = limits[userRole] || limits.default || 100;

    // This would integrate with a rate limiting service like Redis
    // For now, just pass through
    next();
  };
};

module.exports = {
  requireRole,
  requirePermission,
  requireProductAccess,
  requireContentOwnership,
  rateLimitByRole
};
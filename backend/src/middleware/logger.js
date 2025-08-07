const logger = (req, res, next) => {
  const startTime = Date.now();

  // Override res.json to capture response
  const originalJson = res.json;
  res.json = function(body) {
    const responseTime = Date.now() - startTime;
    
    // Log request details
    const logData = {
      method: req.method,
      url: req.originalUrl,
      ip: req.ip,
      userAgent: req.get('User-Agent'),
      statusCode: res.statusCode,
      responseTime: `${responseTime}ms`,
      timestamp: new Date().toISOString()
    };

    // Add user info if authenticated
    if (req.user) {
      logData.userId = req.user.id;
      logData.userRole = req.user.role;
    }

    // Add session info if available
    if (req.headers['x-session-id']) {
      logData.sessionId = req.headers['x-session-id'];
    }

    // Color code by status
    let color = '';
    if (res.statusCode >= 500) {
      color = '\x1b[31m'; // Red
    } else if (res.statusCode >= 400) {
      color = '\x1b[33m'; // Yellow
    } else if (res.statusCode >= 300) {
      color = '\x1b[36m'; // Cyan
    } else {
      color = '\x1b[32m'; // Green
    }

    const resetColor = '\x1b[0m';

    // Console log
    console.log(
      `${color}${logData.method} ${logData.url} ${logData.statusCode} - ${logData.responseTime}${resetColor}`
    );

    // In production, you might want to send this to a logging service
    if (process.env.NODE_ENV === 'production') {
      // Example: send to logging service
      // loggingService.log(logData);
    }

    return originalJson.call(this, body);
  };

  next();
};

module.exports = logger;
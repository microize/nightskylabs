const express = require('express');
const Analytics = require('../models/Analytics');
const auth = require('../middleware/auth');
const permissions = require('../middleware/permissions');

const router = express.Router();

// Get dashboard analytics (admin/editor only)
router.get('/dashboard', auth, permissions.requireRole(['admin', 'editor']), async (req, res) => {
  try {
    const { days = 30 } = req.query;
    
    const stats = await Analytics.getDashboardStats(parseInt(days));
    
    res.json({
      success: true,
      data: stats[0] || {
        totalEvents: [{ count: 0 }],
        eventTypes: [],
        dailyStats: [],
        topCountries: []
      }
    });
  } catch (error) {
    console.error('Dashboard analytics error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch dashboard analytics',
      error: error.message
    });
  }
});

// Get popular content (admin/editor only)
router.get('/popular-content', auth, permissions.requireRole(['admin', 'editor']), async (req, res) => {
  try {
    const { limit = 10, days = 30 } = req.query;
    
    const popularContent = await Analytics.getPopularContent(parseInt(limit), parseInt(days));
    
    res.json({
      success: true,
      data: popularContent
    });
  } catch (error) {
    console.error('Popular content analytics error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch popular content analytics',
      error: error.message
    });
  }
});

// Get content views for specific content
router.get('/content/:contentId/views', auth, permissions.requireRole(['admin', 'editor', 'author']), async (req, res) => {
  try {
    const { contentId } = req.params;
    const { startDate, endDate } = req.query;
    
    const views = await Analytics.getContentViews(contentId, startDate, endDate);
    
    res.json({
      success: true,
      data: views[0] || { totalViews: 0, uniqueViews: 0 }
    });
  } catch (error) {
    console.error('Content views analytics error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch content views',
      error: error.message
    });
  }
});

// Get user behavior analytics (admin only)
router.get('/user/:userId/behavior', auth, permissions.requireRole(['admin']), async (req, res) => {
  try {
    const { userId } = req.params;
    const { days = 30 } = req.query;
    
    const behavior = await Analytics.getUserBehavior(userId, parseInt(days));
    
    res.json({
      success: true,
      data: behavior
    });
  } catch (error) {
    console.error('User behavior analytics error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch user behavior analytics',
      error: error.message
    });
  }
});

// Track analytics event (public endpoint)
router.post('/track', async (req, res) => {
  try {
    const {
      contentId,
      event,
      metadata = {}
    } = req.body;

    if (!event) {
      return res.status(400).json({
        success: false,
        message: 'Event type is required'
      });
    }

    const analyticsData = {
      contentId: contentId || null,
      event,
      sessionId: req.headers['x-session-id'] || 'anonymous',
      userId: req.user?.id || null,
      ipAddress: req.ip,
      userAgent: req.headers['user-agent'],
      referrer: req.headers.referer,
      metadata,
      timestamp: new Date()
    };

    // Extract device and location info (simplified)
    const userAgent = req.headers['user-agent'] || '';
    if (userAgent.includes('Mobile')) {
      analyticsData.device = { type: 'mobile' };
    } else if (userAgent.includes('Tablet')) {
      analyticsData.device = { type: 'tablet' };
    } else {
      analyticsData.device = { type: 'desktop' };
    }

    await Analytics.trackEvent(analyticsData);

    res.json({
      success: true,
      message: 'Event tracked successfully'
    });
  } catch (error) {
    console.error('Track analytics error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to track event',
      error: error.message
    });
  }
});

// Get analytics summary for content author
router.get('/my-content', auth, permissions.requireRole(['author', 'editor', 'admin']), async (req, res) => {
  try {
    const { days = 30 } = req.query;
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - parseInt(days));

    // Get user's content performance
    const Content = require('../models/Content');
    const userContent = await Content.find({ author: req.user.id });
    const contentIds = userContent.map(c => c._id);

    const analytics = await Analytics.aggregate([
      {
        $match: {
          contentId: { $in: contentIds },
          timestamp: { $gte: startDate }
        }
      },
      {
        $group: {
          _id: {
            contentId: '$contentId',
            event: '$event'
          },
          count: { $sum: 1 }
        }
      },
      {
        $group: {
          _id: '$_id.contentId',
          events: {
            $push: {
              event: '$_id.event',
              count: '$count'
            }
          },
          totalEvents: { $sum: '$count' }
        }
      },
      {
        $lookup: {
          from: 'contents',
          localField: '_id',
          foreignField: '_id',
          as: 'content'
        }
      },
      { $unwind: '$content' },
      {
        $project: {
          title: '$content.title',
          slug: '$content.slug',
          events: 1,
          totalEvents: 1
        }
      },
      { $sort: { totalEvents: -1 } }
    ]);

    res.json({
      success: true,
      data: analytics
    });
  } catch (error) {
    console.error('My content analytics error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch content analytics',
      error: error.message
    });
  }
});

module.exports = router;
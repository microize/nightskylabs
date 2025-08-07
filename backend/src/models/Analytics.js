const mongoose = require('mongoose');

const AnalyticsSchema = new mongoose.Schema({
  // Content analytics
  contentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Content',
    required: true
  },
  
  // Event tracking
  event: {
    type: String,
    enum: ['view', 'like', 'bookmark', 'share', 'download', 'search', 'feedback'],
    required: true
  },
  
  // User context
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  sessionId: {
    type: String,
    required: true
  },
  
  // Request context
  ipAddress: String,
  userAgent: String,
  referrer: String,
  
  // Geographic data
  country: String,
  region: String,
  city: String,
  
  // Device info
  device: {
    type: {
      type: String,
      enum: ['desktop', 'mobile', 'tablet']
    },
    os: String,
    browser: String
  },
  
  // Additional metadata
  metadata: {
    searchQuery: String,
    shareDestination: String,
    feedbackRating: Number,
    feedbackComment: String,
    scrollDepth: Number,
    timeOnPage: Number
  },
  
  // Timestamp
  timestamp: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: false // Using custom timestamp field
});

// Indexes for analytics queries
AnalyticsSchema.index({ contentId: 1, event: 1, timestamp: -1 });
AnalyticsSchema.index({ timestamp: -1 });
AnalyticsSchema.index({ event: 1, timestamp: -1 });
AnalyticsSchema.index({ userId: 1, timestamp: -1 });
AnalyticsSchema.index({ sessionId: 1 });

// Static method to track event
AnalyticsSchema.statics.trackEvent = async function(data) {
  const analytics = new this(data);
  return await analytics.save();
};

// Static method to get content views
AnalyticsSchema.statics.getContentViews = function(contentId, startDate, endDate) {
  const match = {
    contentId: mongoose.Types.ObjectId(contentId),
    event: 'view'
  };
  
  if (startDate || endDate) {
    match.timestamp = {};
    if (startDate) match.timestamp.$gte = new Date(startDate);
    if (endDate) match.timestamp.$lte = new Date(endDate);
  }
  
  return this.aggregate([
    { $match: match },
    {
      $group: {
        _id: null,
        totalViews: { $sum: 1 },
        uniqueViews: { $addToSet: '$sessionId' }
      }
    },
    {
      $project: {
        totalViews: 1,
        uniqueViews: { $size: '$uniqueViews' }
      }
    }
  ]);
};

// Static method to get popular content
AnalyticsSchema.statics.getPopularContent = function(limit = 10, days = 30) {
  const startDate = new Date();
  startDate.setDate(startDate.getDate() - days);
  
  return this.aggregate([
    {
      $match: {
        event: 'view',
        timestamp: { $gte: startDate }
      }
    },
    {
      $group: {
        _id: '$contentId',
        views: { $sum: 1 },
        uniqueViews: { $addToSet: '$sessionId' }
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
        contentType: '$content.contentType',
        productId: '$content.productId',
        views: 1,
        uniqueViews: { $size: '$uniqueViews' }
      }
    },
    { $sort: { views: -1 } },
    { $limit: limit }
  ]);
};

// Static method to get user behavior
AnalyticsSchema.statics.getUserBehavior = function(userId, days = 30) {
  const startDate = new Date();
  startDate.setDate(startDate.getDate() - days);
  
  return this.aggregate([
    {
      $match: {
        userId: mongoose.Types.ObjectId(userId),
        timestamp: { $gte: startDate }
      }
    },
    {
      $group: {
        _id: '$event',
        count: { $sum: 1 }
      }
    },
    { $sort: { count: -1 } }
  ]);
};

// Static method to get analytics dashboard data
AnalyticsSchema.statics.getDashboardStats = function(days = 30) {
  const startDate = new Date();
  startDate.setDate(startDate.getDate() - days);
  
  return this.aggregate([
    {
      $match: {
        timestamp: { $gte: startDate }
      }
    },
    {
      $facet: {
        totalEvents: [
          { $count: 'count' }
        ],
        eventTypes: [
          {
            $group: {
              _id: '$event',
              count: { $sum: 1 }
            }
          }
        ],
        dailyStats: [
          {
            $group: {
              _id: {
                $dateToString: {
                  format: '%Y-%m-%d',
                  date: '$timestamp'
                }
              },
              events: { $sum: 1 },
              uniqueSessions: { $addToSet: '$sessionId' }
            }
          },
          {
            $project: {
              date: '$_id',
              events: 1,
              uniqueSessions: { $size: '$uniqueSessions' }
            }
          },
          { $sort: { date: 1 } }
        ],
        topCountries: [
          {
            $match: {
              country: { $exists: true, $ne: null }
            }
          },
          {
            $group: {
              _id: '$country',
              count: { $sum: 1 }
            }
          },
          { $sort: { count: -1 } },
          { $limit: 10 }
        ]
      }
    }
  ]);
};

module.exports = mongoose.model('Analytics', AnalyticsSchema);
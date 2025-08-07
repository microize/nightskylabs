const Content = require('../models/Content');
const Analytics = require('../models/Analytics');
const { validationResult } = require('express-validator');
const slugify = require('slugify');

// Get all content with filtering and pagination
exports.getAllContent = async (req, res) => {
  try {
    const {
      page = 1,
      limit = 20,
      contentType,
      productId,
      sectionId,
      category,
      status,
      search,
      featured,
      sortBy = 'publishedAt',
      sortOrder = 'desc'
    } = req.query;

    // Build filter object
    const filter = {};
    
    if (contentType) filter.contentType = contentType;
    if (productId) filter.productId = productId;
    if (sectionId) filter.sectionId = sectionId;
    if (category) filter.category = category;
    if (status) filter.status = status;
    if (featured !== undefined) filter.featured = featured === 'true';

    // Add search functionality
    if (search) {
      filter.$text = { $search: search };
    }

    // Calculate pagination
    const skip = (parseInt(page) - 1) * parseInt(limit);
    const sortOptions = {};
    sortOptions[sortBy] = sortOrder === 'desc' ? -1 : 1;

    // Execute query
    const [content, total] = await Promise.all([
      Content.find(filter)
        .populate('author', 'name email avatar')
        .sort(sortOptions)
        .skip(skip)
        .limit(parseInt(limit)),
      Content.countDocuments(filter)
    ]);

    // Calculate pagination info
    const totalPages = Math.ceil(total / parseInt(limit));
    const hasNextPage = parseInt(page) < totalPages;
    const hasPrevPage = parseInt(page) > 1;

    res.json({
      success: true,
      data: content,
      pagination: {
        currentPage: parseInt(page),
        totalPages,
        totalItems: total,
        itemsPerPage: parseInt(limit),
        hasNextPage,
        hasPrevPage
      }
    });
  } catch (error) {
    console.error('Get all content error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch content',
      error: error.message
    });
  }
};

// Get single content by slug
exports.getContentBySlug = async (req, res) => {
  try {
    const { slug } = req.params;
    
    const content = await Content.findOne({ slug, status: 'published' })
      .populate('author', 'name email avatar bio');

    if (!content) {
      return res.status(404).json({
        success: false,
        message: 'Content not found'
      });
    }

    // Track view analytics
    if (req.headers['x-session-id']) {
      await Analytics.trackEvent({
        contentId: content._id,
        event: 'view',
        sessionId: req.headers['x-session-id'],
        userId: req.user?.id,
        ipAddress: req.ip,
        userAgent: req.headers['user-agent'],
        referrer: req.headers.referer
      });
    }

    // Increment view count
    await content.incrementViews();

    res.json({
      success: true,
      data: content
    });
  } catch (error) {
    console.error('Get content by slug error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch content',
      error: error.message
    });
  }
};

// Get content by product structure
exports.getContentByProduct = async (req, res) => {
  try {
    const { productId, sectionId, pageId } = req.params;
    
    let filter = { productId, status: 'published' };
    
    if (sectionId) filter.sectionId = sectionId;
    if (pageId) filter.pageId = pageId;

    const content = await Content.find(filter)
      .populate('author', 'name email avatar')
      .sort({ order: 1, publishedAt: -1 });

    res.json({
      success: true,
      data: content
    });
  } catch (error) {
    console.error('Get content by product error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch product content',
      error: error.message
    });
  }
};

// Create new content
exports.createContent = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array()
      });
    }

    const contentData = {
      ...req.body,
      author: req.user.id
    };

    // Generate slug if not provided
    if (!contentData.slug) {
      contentData.slug = slugify(contentData.title, {
        lower: true,
        strict: true
      });
    }

    const content = new Content(contentData);
    await content.save();

    await content.populate('author', 'name email avatar');

    res.status(201).json({
      success: true,
      data: content,
      message: 'Content created successfully'
    });
  } catch (error) {
    console.error('Create content error:', error);
    
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: 'Content with this slug already exists'
      });
    }

    res.status(500).json({
      success: false,
      message: 'Failed to create content',
      error: error.message
    });
  }
};

// Update content
exports.updateContent = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array()
      });
    }

    const { id } = req.params;
    const updateData = { ...req.body };

    // Remove immutable fields
    delete updateData.author;
    delete updateData.createdAt;

    const content = await Content.findById(id);
    if (!content) {
      return res.status(404).json({
        success: false,
        message: 'Content not found'
      });
    }

    // Check permissions
    if (content.author.toString() !== req.user.id && !req.user.hasPermission('content', 'update')) {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to update this content'
      });
    }

    // Add to changelog if content is being modified
    if (updateData.content && updateData.content !== content.content) {
      content.changelog.push({
        version: content.version + 1,
        changes: 'Content updated',
        modifiedBy: req.user.id
      });
      content.version += 1;
    }

    Object.assign(content, updateData);
    await content.save();

    await content.populate('author', 'name email avatar');

    res.json({
      success: true,
      data: content,
      message: 'Content updated successfully'
    });
  } catch (error) {
    console.error('Update content error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update content',
      error: error.message
    });
  }
};

// Delete content
exports.deleteContent = async (req, res) => {
  try {
    const { id } = req.params;

    const content = await Content.findById(id);
    if (!content) {
      return res.status(404).json({
        success: false,
        message: 'Content not found'
      });
    }

    // Check permissions
    if (content.author.toString() !== req.user.id && !req.user.hasPermission('content', 'delete')) {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to delete this content'
      });
    }

    await Content.findByIdAndDelete(id);

    res.json({
      success: true,
      message: 'Content deleted successfully'
    });
  } catch (error) {
    console.error('Delete content error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to delete content',
      error: error.message
    });
  }
};

// Publish content
exports.publishContent = async (req, res) => {
  try {
    const { id } = req.params;
    const { scheduledAt } = req.body;

    const content = await Content.findById(id);
    if (!content) {
      return res.status(404).json({
        success: false,
        message: 'Content not found'
      });
    }

    // Check permissions
    if (!req.user.hasPermission('content', 'publish')) {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to publish content'
      });
    }

    if (scheduledAt) {
      content.status = 'scheduled';
      content.scheduledAt = new Date(scheduledAt);
    } else {
      content.status = 'published';
      content.publishedAt = new Date();
    }

    await content.save();

    res.json({
      success: true,
      data: content,
      message: scheduledAt ? 'Content scheduled successfully' : 'Content published successfully'
    });
  } catch (error) {
    console.error('Publish content error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to publish content',
      error: error.message
    });
  }
};

// Add reaction to content
exports.addReaction = async (req, res) => {
  try {
    const { id } = req.params;
    const { type } = req.body;

    const content = await Content.findById(id);
    if (!content) {
      return res.status(404).json({
        success: false,
        message: 'Content not found'
      });
    }

    await content.addReaction(type);

    // Track reaction analytics
    if (req.headers['x-session-id']) {
      await Analytics.trackEvent({
        contentId: content._id,
        event: type,
        sessionId: req.headers['x-session-id'],
        userId: req.user?.id,
        ipAddress: req.ip,
        userAgent: req.headers['user-agent']
      });
    }

    res.json({
      success: true,
      data: content.reactions,
      message: 'Reaction added successfully'
    });
  } catch (error) {
    console.error('Add reaction error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to add reaction',
      error: error.message
    });
  }
};

// Search content
exports.searchContent = async (req, res) => {
  try {
    const { q, contentType, productId, limit = 10 } = req.query;

    if (!q) {
      return res.status(400).json({
        success: false,
        message: 'Search query is required'
      });
    }

    const filter = {
      $text: { $search: q },
      status: 'published'
    };

    if (contentType) filter.contentType = contentType;
    if (productId) filter.productId = productId;

    const content = await Content.find(filter)
      .select('title excerpt slug contentType productId publishedAt')
      .populate('author', 'name')
      .limit(parseInt(limit))
      .sort({ score: { $meta: 'textScore' } });

    // Track search analytics
    if (req.headers['x-session-id']) {
      await Analytics.trackEvent({
        contentId: null,
        event: 'search',
        sessionId: req.headers['x-session-id'],
        userId: req.user?.id,
        ipAddress: req.ip,
        userAgent: req.headers['user-agent'],
        metadata: { searchQuery: q }
      });
    }

    res.json({
      success: true,
      data: content,
      query: q
    });
  } catch (error) {
    console.error('Search content error:', error);
    res.status(500).json({
      success: false,
      message: 'Search failed',
      error: error.message
    });
  }
};
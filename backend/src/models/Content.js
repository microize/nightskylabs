const mongoose = require('mongoose');
const slugify = require('slugify');

const ContentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    maxLength: 200
  },
  slug: {
    type: String,
    unique: true,
    lowercase: true
  },
  excerpt: {
    type: String,
    required: true,
    maxLength: 500
  },
  content: {
    type: String,
    required: true
  },
  contentType: {
    type: String,
    enum: ['blog', 'documentation', 'research', 'case-study', 'help'],
    required: true
  },
  status: {
    type: String,
    enum: ['draft', 'published', 'archived', 'scheduled'],
    default: 'draft'
  },
  
  // Product-specific fields
  productId: {
    type: String,
    enum: ['soul', 'voice', 'qurious', 'general'],
    default: 'general'
  },
  sectionId: {
    type: String,
    trim: true
  },
  pageId: {
    type: String,
    trim: true
  },
  
  // Metadata
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  category: {
    type: String,
    required: true,
    trim: true
  },
  tags: [{
    type: String,
    trim: true,
    lowercase: true
  }],
  
  // Content organization
  order: {
    type: Number,
    default: 0
  },
  featured: {
    type: Boolean,
    default: false
  },
  
  // Technical fields
  difficulty: {
    type: String,
    enum: ['All Levels', 'Beginner', 'Intermediate', 'Advanced', 'Expert'],
    default: 'All Levels'
  },
  estimatedReadTime: {
    type: String,
    default: '5 min'
  },
  prerequisites: [{
    type: String,
    trim: true
  }],
  
  // SEO and Meta
  meta: {
    title: String,
    description: String,
    keywords: [String],
    ogImage: String
  },
  
  // Media
  featuredImage: {
    url: String,
    alt: String,
    caption: String
  },
  attachments: [{
    filename: String,
    url: String,
    type: String,
    size: Number
  }],
  
  // Publishing
  publishedAt: Date,
  scheduledAt: Date,
  lastModified: {
    type: Date,
    default: Date.now
  },
  
  // Analytics
  views: {
    type: Number,
    default: 0
  },
  reactions: {
    likes: { type: Number, default: 0 },
    helpful: { type: Number, default: 0 },
    bookmarks: { type: Number, default: 0 }
  },
  
  // Version control
  version: {
    type: Number,
    default: 1
  },
  changelog: [{
    version: Number,
    changes: String,
    modifiedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    modifiedAt: {
      type: Date,
      default: Date.now
    }
  }]
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Indexes for better query performance
ContentSchema.index({ contentType: 1, status: 1, publishedAt: -1 });
ContentSchema.index({ productId: 1, sectionId: 1, pageId: 1 });
ContentSchema.index({ slug: 1 }, { unique: true });
ContentSchema.index({ tags: 1 });
ContentSchema.index({ category: 1 });
ContentSchema.index({ 'meta.keywords': 1 });
ContentSchema.index({ title: 'text', excerpt: 'text', content: 'text' });

// Pre-save middleware to generate slug
ContentSchema.pre('save', function(next) {
  if (this.isModified('title') && !this.slug) {
    this.slug = slugify(this.title, {
      lower: true,
      strict: true,
      remove: /[*+~.()'"!:@]/g
    });
  }
  
  // Update lastModified
  this.lastModified = new Date();
  
  // Set publishedAt when status changes to published
  if (this.isModified('status') && this.status === 'published' && !this.publishedAt) {
    this.publishedAt = new Date();
  }
  
  next();
});

// Virtual for full URL path
ContentSchema.virtual('fullPath').get(function() {
  if (this.contentType === 'documentation' && this.productId && this.sectionId && this.pageId) {
    return `/docs/${this.productId}/${this.sectionId}/${this.pageId}`;
  }
  return `/${this.contentType}/${this.slug}`;
});

// Virtual for reading time calculation
ContentSchema.virtual('readingTime').get(function() {
  if (!this.content) return '1 min';
  
  const wordsPerMinute = 200;
  const wordCount = this.content.split(/\s+/).length;
  const readTime = Math.ceil(wordCount / wordsPerMinute);
  
  return `${readTime} min`;
});

// Static method to find published content
ContentSchema.statics.findPublished = function(filter = {}) {
  return this.find({
    ...filter,
    status: 'published',
    publishedAt: { $lte: new Date() }
  }).sort({ publishedAt: -1 });
};

// Static method to find by product
ContentSchema.statics.findByProduct = function(productId, options = {}) {
  const filter = { productId, status: 'published' };
  
  if (options.sectionId) filter.sectionId = options.sectionId;
  if (options.category) filter.category = options.category;
  
  return this.find(filter)
    .sort({ order: 1, publishedAt: -1 })
    .populate('author', 'name email avatar');
};

// Instance method to increment views
ContentSchema.methods.incrementViews = function() {
  this.views += 1;
  return this.save();
};

// Instance method to add reaction
ContentSchema.methods.addReaction = function(type) {
  if (this.reactions[type] !== undefined) {
    this.reactions[type] += 1;
    return this.save();
  }
  throw new Error('Invalid reaction type');
};

module.exports = mongoose.model('Content', ContentSchema);
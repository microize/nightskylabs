const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    maxLength: 100
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: function() {
      return !this.googleId; // Password required if not Google auth
    },
    minLength: 8
  },
  
  // OAuth fields
  googleId: {
    type: String,
    sparse: true
  },
  
  // Profile
  avatar: {
    url: String,
    filename: String
  },
  bio: {
    type: String,
    maxLength: 500
  },
  title: {
    type: String,
    maxLength: 100
  },
  
  // Role and permissions
  role: {
    type: String,
    enum: ['admin', 'editor', 'author', 'contributor', 'reader'],
    default: 'reader'
  },
  permissions: [{
    resource: {
      type: String,
      enum: ['content', 'users', 'analytics', 'settings']
    },
    actions: [{
      type: String,
      enum: ['create', 'read', 'update', 'delete', 'publish']
    }]
  }],
  
  // Product access
  productAccess: [{
    type: String,
    enum: ['soul', 'voice', 'qurious', 'all']
  }],
  
  // Account status
  isActive: {
    type: Boolean,
    default: true
  },
  isEmailVerified: {
    type: Boolean,
    default: false
  },
  
  // Security
  passwordResetToken: String,
  passwordResetExpires: Date,
  emailVerificationToken: String,
  emailVerificationExpires: Date,
  
  // Activity tracking
  lastLoginAt: Date,
  loginCount: {
    type: Number,
    default: 0
  },
  
  // Preferences
  preferences: {
    theme: {
      type: String,
      enum: ['light', 'dark', 'system'],
      default: 'light'
    },
    notifications: {
      email: {
        type: Boolean,
        default: true
      },
      contentPublished: {
        type: Boolean,
        default: true
      },
      systemUpdates: {
        type: Boolean,
        default: true
      }
    },
    editor: {
      autoSave: {
        type: Boolean,
        default: true
      },
      autoSaveInterval: {
        type: Number,
        default: 30 // seconds
      }
    }
  }
}, {
  timestamps: true,
  toJSON: { 
    virtuals: true,
    transform: function(doc, ret) {
      delete ret.password;
      delete ret.passwordResetToken;
      delete ret.passwordResetExpires;
      delete ret.emailVerificationToken;
      delete ret.emailVerificationExpires;
      return ret;
    }
  }
});

// Indexes
UserSchema.index({ email: 1 }, { unique: true });
UserSchema.index({ googleId: 1 }, { sparse: true });
UserSchema.index({ role: 1 });
UserSchema.index({ isActive: 1 });

// Pre-save middleware to hash password
UserSchema.pre('save', async function(next) {
  // Only hash password if it's been modified (or is new)
  if (!this.isModified('password')) return next();
  
  // Hash password with cost of 12
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

// Instance method to check password
UserSchema.methods.correctPassword = async function(candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

// Instance method to check permissions
UserSchema.methods.hasPermission = function(resource, action) {
  if (this.role === 'admin') return true;
  
  const permission = this.permissions.find(p => p.resource === resource);
  return permission && permission.actions.includes(action);
};

// Instance method to check product access
UserSchema.methods.hasProductAccess = function(productId) {
  if (this.role === 'admin') return true;
  return this.productAccess.includes('all') || this.productAccess.includes(productId);
};

// Static method to find by email
UserSchema.statics.findByEmail = function(email) {
  return this.findOne({ email: email.toLowerCase() });
};

// Virtual for full name display
UserSchema.virtual('displayName').get(function() {
  return this.name || this.email;
});

module.exports = mongoose.model('User', UserSchema);
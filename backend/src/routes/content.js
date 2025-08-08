const express = require('express');
const { body } = require('express-validator');
const contentController = require('../controllers/contentController');
const auth = require('../middleware/auth');
const permissions = require('../middleware/permissions');
const { cache, cacheConfigs, invalidateCache } = require('../middleware/cache');

const router = express.Router();

// Validation middleware
const validateContent = [
  body('title')
    .notEmpty()
    .withMessage('Title is required')
    .isLength({ max: 200 })
    .withMessage('Title must be less than 200 characters'),
  
  body('excerpt')
    .notEmpty()
    .withMessage('Excerpt is required')
    .isLength({ max: 500 })
    .withMessage('Excerpt must be less than 500 characters'),
  
  body('content')
    .notEmpty()
    .withMessage('Content is required'),
  
  body('contentType')
    .isIn(['blog', 'documentation', 'research', 'case-study', 'help'])
    .withMessage('Invalid content type'),
  
  body('category')
    .notEmpty()
    .withMessage('Category is required'),
  
  body('productId')
    .optional()
    .isIn(['soul', 'voice', 'qurious', 'general'])
    .withMessage('Invalid product ID'),
  
  body('tags')
    .optional()
    .isArray()
    .withMessage('Tags must be an array'),
  
  body('difficulty')
    .optional()
    .isIn(['All Levels', 'Beginner', 'Intermediate', 'Advanced', 'Expert'])
    .withMessage('Invalid difficulty level'),
  
  body('meta.title')
    .optional()
    .isLength({ max: 60 })
    .withMessage('Meta title must be less than 60 characters'),
  
  body('meta.description')
    .optional()
    .isLength({ max: 160 })
    .withMessage('Meta description must be less than 160 characters')
];

// Public routes with caching
router.get('/', cache(cacheConfigs.public), contentController.getAllContent);
router.get('/search', cache(cacheConfigs.short), contentController.searchContent);
router.get('/slug/:slug', cache(cacheConfigs.content), contentController.getContentBySlug);
router.get('/product/:productId', cache(cacheConfigs.content), contentController.getContentByProduct);
router.get('/product/:productId/:sectionId', cache(cacheConfigs.content), contentController.getContentByProduct);
router.get('/product/:productId/:sectionId/:pageId', cache(cacheConfigs.content), contentController.getContentByProduct);

// Protected routes - require authentication
router.use(auth);

// Create content - authors and above
router.post('/', 
  permissions.requireRole(['author', 'editor', 'admin']),
  validateContent,
  contentController.createContent,
  invalidateCache(['content:*', 'public:*', 'short:*', 'medium:*'])
);

// Update content - content owner or editors/admins
router.put('/:id',
  validateContent,
  contentController.updateContent,
  invalidateCache(['content:*', 'public:*', 'short:*', 'medium:*'])
);

// Delete content - content owner or admins
router.delete('/:id', 
  contentController.deleteContent,
  invalidateCache(['content:*', 'public:*', 'short:*', 'medium:*'])
);

// Publish content - editors and admins only
router.patch('/:id/publish',
  permissions.requireRole(['editor', 'admin']),
  contentController.publishContent
);

// Add reaction - authenticated users
router.post('/:id/reaction',
  body('type').isIn(['likes', 'helpful', 'bookmarks']).withMessage('Invalid reaction type'),
  contentController.addReaction
);

module.exports = router;
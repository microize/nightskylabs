/**
 * Content Type Definitions and Interfaces
 * Standardized data structures for all content types
 */

// Base content interface that all content types extend
export const BaseContentSchema = {
  id: 'string|number',
  title: 'string',
  excerpt: 'string',
  content: 'string',
  author: 'string',
  date: 'string', // ISO format: YYYY-MM-DD
  readTime: 'string',
  tags: 'array<string>',
  category: 'string',
  featured: 'boolean',
  image: 'string|null',
  meta: {
    title: 'string',
    description: 'string',
    keywords: 'array<string>'
  }
};

// Blog-specific content schema
export const BlogContentSchema = {
  ...BaseContentSchema,
  type: 'blog'
};

// Research-specific content schema
export const ResearchContentSchema = {
  ...BaseContentSchema,
  type: 'research',
  difficulty: 'string', // Beginner, Intermediate, Advanced
  estimatedTime: 'string',
  researchType: 'string' // Paper, Whitepaper, Technical Report
};

// Case Study-specific content schema
export const CaseStudyContentSchema = {
  ...BaseContentSchema,
  type: 'case-study',
  client: 'string',
  industry: 'string',
  duration: 'string',
  results: 'array<string>',
  technologies: 'array<string>',
  challenges: 'array<string>',
  solutions: 'array<string>'
};

// Documentation-specific content schema
export const DocumentationContentSchema = {
  ...BaseContentSchema,
  type: 'documentation',
  difficulty: 'string', // Beginner, Intermediate, Advanced
  estimatedTime: 'string',
  docType: 'string', // API Reference, Guide, Tutorial, Examples
  prerequisites: 'array<string>',
  lastUpdated: 'string'
};

// Help Center-specific content schema
export const HelpContentSchema = {
  ...BaseContentSchema,
  type: 'help',
  difficulty: 'string', // All Levels, Beginner, Advanced
  lastUpdated: 'string',
  helpType: 'string', // FAQ, Troubleshooting, Getting Started
  relatedArticles: 'array<string>',
  priority: 'string' // High, Medium, Low
};

// Product configuration schema
export const ProductConfigSchema = {
  id: 'string',
  name: 'string',
  slug: 'string',
  tagline: 'string',
  description: 'string',
  meta: {
    title: 'string',
    description: 'string',
    keywords: 'array<string>'
  },
  hero: {
    title: 'string',
    subtitle: 'string',
    description: 'string',
    videoSrc: 'string|null',
    ctaText: 'string',
    ctaLink: 'string'
  },
  features: 'array<{
    title: string,
    description: string,
    icon: string,
    tags: array<string>
  }>',
  benefits: 'array<{
    title: string,
    description: string,
    metric: string|null
  }>',
  testimonials: 'array<{
    quote: string,
    author: string,
    role: string,
    company: string
  }>',
  pricing: {
    free: object|null,
    pro: object|null,
    enterprise: object|null
  }
};

// Service configuration schema
export const ServiceConfigSchema = {
  id: 'string',
  name: 'string',
  slug: 'string',
  category: 'string', // Strategic, Implementation
  description: 'string',
  detailedDescription: 'string',
  icon: 'string',
  deliverables: 'array<string>',
  processSteps: 'array<{
    title: string,
    description: string,
    duration: string
  }>',
  pricing: {
    startingPrice: 'string',
    model: 'string' // Fixed, Hourly, Project-based
  },
  caseStudies: 'array<string>' // References to case study IDs
};

// Validation helpers
export const validateContent = (content, schema) => {
  const errors = [];
  
  const validateField = (obj, path, expectedType) => {
    const value = path.split('.').reduce((o, key) => o?.[key], obj);
    
    if (expectedType.includes('|null') && (value === null || value === undefined)) {
      return; // Nullable field
    }
    
    if (value === undefined) {
      errors.push(`Missing required field: ${path}`);
      return;
    }
    
    const type = Array.isArray(value) ? 'array' : typeof value;
    const cleanType = expectedType.split('|')[0].split('<')[0];
    
    if (type !== cleanType) {
      errors.push(`Invalid type for ${path}: expected ${expectedType}, got ${type}`);
    }
  };
  
  const validateSchema = (obj, schemaObj, prefix = '') => {
    Object.entries(schemaObj).forEach(([key, expectedType]) => {
      const path = prefix ? `${prefix}.${key}` : key;
      
      if (typeof expectedType === 'object') {
        validateSchema(obj[key], expectedType, path);
      } else {
        validateField(obj, path, expectedType);
      }
    });
  };
  
  validateSchema(content, schema);
  
  return {
    isValid: errors.length === 0,
    errors
  };
};

// Content categories and tags
export const CONTENT_CATEGORIES = {
  blog: [
    'All',
    'Technology', 
    'AI Research',
    'Education',
    'Ethics',
    'Business',
    'Engineering',
    'Development'
  ],
  research: [
    'All',
    'AI Research',
    'Machine Learning', 
    'Computer Vision',
    'Natural Language Processing',
    'Robotics',
    'Data Science'
  ],
  caseStudy: [
    'All',
    'FinTech',
    'Healthcare',
    'E-commerce', 
    'Manufacturing',
    'Education',
    'Enterprise'
  ],
  documentation: [
    'All',
    'API Reference', 
    'Guides',
    'Tutorials',
    'Examples',
    'Integration',
    'Advanced'
  ],
  help: [
    'All',
    'FAQ',
    'Troubleshooting', 
    'Getting Started',
    'Account & Billing',
    'Technical Support',
    'Product Guides'
  ]
};

// Difficulty levels
export const DIFFICULTY_LEVELS = [
  'All Levels',
  'Beginner',
  'Intermediate', 
  'Advanced',
  'Expert'
];

// Content status types
export const CONTENT_STATUS = {
  DRAFT: 'draft',
  PUBLISHED: 'published',
  ARCHIVED: 'archived',
  SCHEDULED: 'scheduled'
};
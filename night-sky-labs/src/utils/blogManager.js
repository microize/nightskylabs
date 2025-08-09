// Blog Management System
// This module handles the creation, management, and automatic detection of blog posts

import { generateBlogTemplate, generateSlug } from './blogLoader';

/**
 * Instructions for adding new blog posts to the NightSkyLabs website
 * 
 * HOW TO ADD A NEW BLOG POST:
 * 
 * 1. Create a new .md file in /src/content/blog/ with a descriptive filename
 *    Example: "ai-automation-trends-2025.md"
 * 
 * 2. Use the template below or call generateBlogTemplate() for a starter template
 * 
 * 3. The system will automatically:
 *    - Generate a URL-friendly slug from the filename or frontmatter slug
 *    - Make the post available at /blog/{slug}
 *    - Include it in the blog listing at /blog
 *    - Generate reading time estimates
 *    - Parse tags and categories for filtering
 * 
 * FRONTMATTER FIELDS (required fields marked with *):
 * 
 * title: *"Your Blog Post Title"
 * excerpt: *"Brief description that appears in listings and SEO"
 * author: *"Author Name"
 * date: *"2025-01-15" (YYYY-MM-DD format)
 * tags: ["Tag1", "Tag2", "Tag3"] (array of strings)
 * category: "Technology" (single category)
 * featured: true|false (appears in featured section)
 * slug: "custom-url-slug" (optional, auto-generated from filename if not provided)
 * image: "hero-image.jpg" (optional, stored in /public/images/blog/)
 * metaTitle: "SEO optimized title" (optional, uses title if not provided)
 * metaDescription: "SEO description" (optional, uses excerpt if not provided)
 * status: "published"|"draft"|"archived" (optional, defaults to published)
 * 
 */

// Standard blog post template with all available frontmatter options
export const BLOG_POST_TEMPLATE = `---
title: "Your Blog Post Title Here"
excerpt: "A compelling description of your blog post that appears in listings and search results. Keep it under 160 characters for SEO."
author: "Author Name"
date: "2025-01-15"
tags: ["Technology", "AI", "Development"]
category: "Technology"
featured: false
slug: "your-post-url-slug"
image: "hero-image.jpg"
metaTitle: "SEO Optimized Title | NightSkyLabs Blog"
metaDescription: "SEO optimized description for search engines"
status: "published"
---

# Your Blog Post Title Here

Start your blog post with a compelling introduction that hooks the reader and clearly explains what they'll learn or gain from reading this article.

## Section Heading

Use clear, descriptive headings to structure your content. This helps with both readability and SEO.

### Subsection Heading

Break down complex topics into digestible sections with subheadings.

## Writing Style Guidelines

- **Be conversational**: Write like you're explaining to a colleague
- **Use active voice**: "We implemented the solution" vs "The solution was implemented"
- **Include examples**: Concrete examples make abstract concepts easier to understand
- **Keep paragraphs short**: 2-3 sentences maximum for web readability

## Code Examples

When including code, use proper syntax highlighting:

\`\`\`javascript
const exampleFunction = (parameter) => {
  console.log(\`Processing: \${parameter}\`);
  return parameter.toUpperCase();
};

// Usage
const result = exampleFunction("hello world");
\`\`\`

Inline code should be wrapped in backticks: \`const variable = "value"\`

## Images

To include images, place them in \`/public/images/blog/\` and reference them:

![Alt text for accessibility](image-filename.jpg "Optional caption")

You can also add captions by using the pipe separator:
![Alt text](image.jpg|This caption will appear below the image)

## Lists

Use bullet points for unordered lists:

- First important point
- Second key insight
- Third valuable takeaway

Or numbered lists for processes:

1. First step in the process
2. Second step with details
3. Final step and conclusion

## Quotes and Callouts

Use blockquotes for important insights or quotes:

> "This is an important insight that deserves special attention. Use blockquotes to highlight key points or quotes from experts."

## Best Practices

### SEO Optimization
- Use keywords naturally throughout the content
- Include internal links to other relevant blog posts or pages
- Optimize images with descriptive alt text
- Keep URLs short and descriptive

### Content Quality
- **Research thoroughly**: Back up claims with credible sources
- **Tell stories**: Use case studies and real examples
- **Add value**: Every post should teach something new or solve a problem
- **Edit ruthlessly**: Remove fluff and get to the point

### Engagement
- **Ask questions**: Encourage reader reflection
- **Use "you" language**: Speak directly to the reader
- **Include CTAs**: Guide readers to next steps
- **Encourage sharing**: Make content worth sharing

## Conclusion

End your blog post with a strong conclusion that:

1. Summarizes the key points
2. Reinforces the main value proposition
3. Provides clear next steps for readers
4. Encourages engagement (comments, shares, etc.)

Remember: Great blog posts solve problems, provide value, and leave readers better informed than when they started.

---

*Ready to publish? Save this file as \`your-slug.md\` in the \`/src/content/blog/\` directory and it will automatically appear on the website.*
`;

// Available categories (add new ones as needed)
export const BLOG_CATEGORIES = [
  'Technology',
  'AI Development', 
  'Machine Learning',
  'Developer Tools',
  'Voice AI',
  'Education',
  'Ethics',
  'Product Updates',
  'Industry Insights',
  'Tutorials',
  'Case Studies',
  'Research'
];

// Available tags (commonly used tags - authors can create new ones)
export const COMMON_TAGS = [
  'Artificial Intelligence',
  'Machine Learning',
  'Deep Learning',
  'Natural Language Processing',
  'Computer Vision',
  'Developer Tools',
  'CLI Tools',
  'Automation',
  'Voice AI',
  'Conversational AI',
  'Real-time Processing',
  'Interview Technology',
  'Personalized Learning',
  'EdTech',
  'Adaptive Algorithms',
  'Cognitive Science',
  'AI Ethics',
  'Responsible AI',
  'Bias Mitigation',
  'Privacy',
  'Fairness',
  'Transparency',
  'Software Development',
  'Code Analysis',
  'Testing',
  'DevOps',
  'Performance',
  'Security',
  'User Experience',
  'Product Management',
  'Startups',
  'Innovation',
  'Future Technology',
  'Industry Trends'
];

/**
 * Create a new blog post template with custom data
 * @param {object} options - Blog post options
 * @returns {string} Formatted markdown template
 */
export const createBlogPost = (options = {}) => {
  return generateBlogTemplate(options);
};

/**
 * Validate blog post frontmatter
 * @param {object} frontmatter - Parsed frontmatter
 * @returns {object} Validation result with isValid and errors
 */
export const validateBlogPost = (frontmatter) => {
  const errors = [];
  const warnings = [];

  // Required fields
  if (!frontmatter.title) errors.push('Title is required');
  if (!frontmatter.excerpt) errors.push('Excerpt is required');  
  if (!frontmatter.author) errors.push('Author is required');
  if (!frontmatter.date) errors.push('Date is required');

  // Date format validation
  if (frontmatter.date && !/^\d{4}-\d{2}-\d{2}$/.test(frontmatter.date)) {
    errors.push('Date must be in YYYY-MM-DD format');
  }

  // SEO recommendations
  if (frontmatter.title && frontmatter.title.length > 60) {
    warnings.push('Title should be under 60 characters for SEO');
  }
  
  if (frontmatter.excerpt && frontmatter.excerpt.length > 160) {
    warnings.push('Excerpt should be under 160 characters for SEO');
  }

  if (!frontmatter.tags || frontmatter.tags.length === 0) {
    warnings.push('Adding tags helps with discoverability');
  }

  if (frontmatter.tags && frontmatter.tags.length > 5) {
    warnings.push('Consider using fewer than 5 tags for better focus');
  }

  return {
    isValid: errors.length === 0,
    errors,
    warnings
  };
};

/**
 * Generate SEO-optimized metadata for a blog post
 * @param {object} post - Blog post object
 * @returns {object} SEO metadata
 */
export const generateSEOMetadata = (post) => {
  const baseUrl = 'https://nightskylabs.com';
  
  return {
    title: post.metaTitle || `${post.title} | NightSkyLabs Blog`,
    description: post.metaDescription || post.excerpt,
    keywords: post.tags.join(', '),
    author: post.author,
    publishedTime: post.date,
    modifiedTime: post.updatedAt || post.date,
    url: `${baseUrl}/blog/${post.slug}`,
    image: post.image ? `${baseUrl}/images/blog/${post.image}` : `${baseUrl}/images/blog-default.jpg`,
    type: 'article',
    section: post.category
  };
};

/**
 * Blog management utilities and instructions
 */
export const BlogManager = {
  // Template generation
  createPost: createBlogPost,
  generateTemplate: generateBlogTemplate,
  
  // Validation
  validate: validateBlogPost,
  
  // SEO
  generateSEO: generateSEOMetadata,
  
  // Utilities
  generateSlug,
  
  // Reference data
  categories: BLOG_CATEGORIES,
  commonTags: COMMON_TAGS,
  template: BLOG_POST_TEMPLATE,

  // Instructions for content creators
  instructions: {
    addNewPost: `
1. Create a new .md file in /src/content/blog/
2. Use a descriptive filename (becomes the URL slug)
3. Copy the template from BlogManager.template
4. Fill in the frontmatter with your post details
5. Write your content using Markdown
6. Save the file and it will automatically appear on the website

Example filename: "ai-automation-future-2025.md"
This creates URL: /blog/ai-automation-future-2025
    `,
    
    frontmatterFields: `
Required: title, excerpt, author, date
Optional: tags, category, featured, slug, image, metaTitle, metaDescription, status
    `,
    
    bestPractices: `
- Keep titles under 60 characters
- Keep excerpts under 160 characters
- Use descriptive, SEO-friendly slugs
- Include 3-5 relevant tags
- Add compelling hero images to /public/images/blog/
- Use clear headings and structure
- Include internal links to other content
- Optimize for readability and engagement
    `
  }
};

export default BlogManager;
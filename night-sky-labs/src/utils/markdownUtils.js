import matter from 'gray-matter';
import { marked } from 'marked';

// Configure marked options
marked.setOptions({
  breaks: true,
  gfm: true,
  headerIds: false,
  mangle: false
});

// Custom renderer for better styling
const renderer = new marked.Renderer();

// Custom heading renderer
renderer.heading = function(text, level) {
  return `<h${level} class="text-${level === 1 ? '3xl' : level === 2 ? '2xl' : 'xl'} font-thin text-black mb-4 mt-8 first:mt-0">${text}</h${level}>`;
};

// Custom paragraph renderer
renderer.paragraph = function(text) {
  return `<p class="text-base font-thin text-gray-600 mb-6 leading-relaxed">${text}</p>`;
};

// Custom list renderers
renderer.list = function(body, ordered) {
  const type = ordered ? 'ol' : 'ul';
  return `<${type} class="space-y-2 mb-6 ${ordered ? 'list-decimal' : 'list-disc'} list-inside">${body}</${type}>`;
};

renderer.listitem = function(text) {
  return `<li class="text-base font-thin text-gray-600">${text}</li>`;
};

// Custom blockquote renderer
renderer.blockquote = function(quote) {
  return `<blockquote class="border-l-4 border-gray-200 pl-6 py-4 my-6 bg-gray-50 rounded-r-lg"><p class="text-base font-thin text-gray-600 italic mb-0">${quote.replace(/<\/?p[^>]*>/g, '')}</p></blockquote>`;
};

// Custom code renderer
renderer.code = function(code, language) {
  return `<pre class="bg-gray-100 rounded-lg p-4 mb-6 overflow-x-auto"><code class="text-sm font-mono text-gray-800">${code}</code></pre>`;
};

// Custom inline code renderer
renderer.codespan = function(code) {
  return `<code class="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-gray-800">${code}</code>`;
};

// Custom image renderer with enhanced features
renderer.image = function(href, title, text) {
  // Handle relative paths for blog images
  let src = href;
  if (!href.startsWith('http') && !href.startsWith('/')) {
    src = `/images/blog/${href}`;
  }
  
  // Parse image attributes from alt text (alt text can contain metadata)
  const altParts = text.split('|');
  const altText = altParts[0] || '';
  const caption = altParts[1] || title || '';
  const className = altParts[2] || 'w-full max-w-4xl mx-auto';
  
  let imageHtml = `<img src="${src}" alt="${altText}" class="${className} rounded-lg shadow-sm" loading="lazy"`;
  
  if (title) {
    imageHtml += ` title="${title}"`;
  }
  
  imageHtml += ' />';
  
  // Wrap with figure if there's a caption
  if (caption) {
    return `
      <figure class="my-8 text-center">
        ${imageHtml}
        <figcaption class="mt-3 text-sm font-thin text-gray-500 italic">${caption}</figcaption>
      </figure>
    `;
  }
  
  return `<div class="my-8 text-center">${imageHtml}</div>`;
};

marked.use({ renderer });

/**
 * Parse a markdown file with frontmatter
 * @param {string} markdownContent - Raw markdown content with frontmatter
 * @returns {object} Parsed blog post object
 */
export const parseMarkdown = (markdownContent, filename) => {
  const { data: frontmatter, content } = matter(markdownContent);
  
  // Parse the markdown content to HTML
  const htmlContent = marked(content);
  
  // Extract slug from filename
  const slug = filename.replace(/\.md$/, '');
  
  // Calculate reading time
  const wordCount = content.split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / 200);
  
  return {
    id: slug,
    slug,
    title: frontmatter.title || 'Untitled',
    excerpt: frontmatter.excerpt || '',
    content: htmlContent,
    author: frontmatter.author || 'NightSkyLabs Team',
    date: frontmatter.date || new Date().toISOString().split('T')[0],
    readTime: frontmatter.readTime || `${readingTime} min read`,
    tags: frontmatter.tags || [],
    category: frontmatter.category || 'Technology',
    featured: frontmatter.featured || false,
    image: frontmatter.image || null,
    // Keep original frontmatter for additional metadata
    metadata: frontmatter
  };
};

// Static content data - parsed from markdown files
// This approach works better with Create React App without ejecting
const STATIC_CONTENT = {
  blog: [
    {
      id: 'ai-powered-development',
      slug: 'ai-powered-development',
      title: "The Future of AI-Powered Development: How Soul CLI is Transforming Developer Workflows",
      excerpt: "Exploring how AI-powered command-line tools are revolutionizing software development, from automated code analysis to intelligent workflow optimization.",
      content: `<p>The landscape of software development is undergoing a fundamental transformation. Traditional development workflows, while functional, often involve repetitive tasks that consume valuable time and mental energy. From manually analyzing code quality to writing boilerplate configurations, developers spend significant portions of their day on activities that could be intelligently automated.</p>

<p>This is where AI-powered development tools like Soul CLI are making a profound impact. By understanding the context of your codebase, these tools can provide intelligent suggestions, automate routine tasks, and even predict potential issues before they become problems.</p>

<h2>The Developer Experience Revolution</h2>

<p>Traditional development workflows have served us well, but they're showing their age. Modern applications are more complex than ever, with intricate dependencies, multiple deployment environments, and increasingly sophisticated architecture patterns.</p>`,
      author: "Alex Chen",
      date: "2025-01-15",
      readTime: "8 min read",
      tags: ["AI Development", "Developer Tools", "Automation", "CLI Tools"],
      category: "Technology",
      featured: true,
      image: "ai-development-hero.jpg"
    },
    {
      id: 'voice-first-applications',
      slug: 'voice-first-applications',
      title: "Building Voice-First AI Applications: Lessons from Real-Time Interview Systems",
      excerpt: "Deep dive into the architecture and challenges of building AI-powered voice applications that can conduct real-time interviews with human-like conversational abilities.",
      content: `<p>Voice-first applications represent the next frontier in AI-human interaction. Unlike traditional text-based interfaces, voice applications must process natural language in real-time, understand context, and respond with appropriate tone and timing.</p>

<p>Our Voice platform has conducted over 10,000 interviews, teaching us valuable lessons about building robust voice AI systems that can handle the nuances of human conversation in professional settings.</p>

<h2>Technical Architecture Considerations</h2>

<p>The key to successful voice AI is not just understanding what people say, but understanding what they mean in the context of ongoing conversation.</p>`,
      author: "Sarah Martinez",
      date: "2025-01-10",
      readTime: "12 min read",
      tags: ["Voice AI", "Real-time Processing", "Interview Technology", "Conversational AI"],
      category: "Technology",
      featured: true,
      image: "voice-ai-hero.jpg"
    },
    {
      id: 'personalized-learning',
      slug: 'personalized-learning',
      title: "Personalized AI Learning: How Qurious Adapts to Individual Learning Styles",
      excerpt: "Exploring the science behind adaptive learning algorithms and how AI can create truly personalized educational experiences that evolve with each learner.",
      content: `<p>Every learner is unique, with distinct preferences, strengths, and challenges. Traditional one-size-fits-all educational approaches often fail to accommodate this diversity, leading to disengagement and suboptimal learning outcomes.</p>

<p>Qurious represents a new paradigm in educational technology, where AI algorithms continuously adapt to each learner's individual style, pace, and preferences, creating a truly personalized learning journey.</p>

<h2>The Science of Adaptive Learning</h2>

<p>Our approach combines cognitive science research with advanced machine learning to understand how individuals learn best.</p>`,
      author: "Dr. Emily Watson",
      date: "2025-01-05",
      readTime: "10 min read",
      tags: ["Personalized Learning", "EdTech", "Adaptive Algorithms", "Cognitive Science"],
      category: "Education",
      featured: false,
      image: "personalized-learning.jpg"
    },
    {
      id: 'ai-ethics-practice',
      slug: 'ai-ethics-practice',
      title: "AI Ethics in Practice: Building Responsible AI Systems at Scale",
      excerpt: "A comprehensive guide to implementing ethical AI principles in production systems, with real-world case studies and practical frameworks for responsible AI development.",
      content: `<p>As AI systems become more prevalent in critical decision-making processes, the importance of ethical AI development cannot be overstated. This article explores practical approaches to building responsible AI systems that prioritize fairness, transparency, and accountability.</p>

<h2>The Ethical Imperative</h2>

<p>AI ethics is not just about avoiding bias—it's about creating systems that enhance human capability while respecting human values and rights.</p>

<h2>Practical Implementation Framework</h2>

<p>We've developed a comprehensive framework for implementing ethical AI principles in production environments.</p>`,
      author: "Marcus Thompson",
      date: "2025-01-02",
      readTime: "15 min read",
      tags: ["AI Ethics", "Responsible AI", "Fairness", "Transparency"],
      category: "Ethics",
      featured: false,
      image: "ai-ethics.jpg"
    }
  ],
  research: [
    {
      id: 'neural-network-optimization',
      slug: 'neural-network-optimization',
      title: "Neural Network Optimization: Advanced Techniques for Production AI Systems",
      excerpt: "Comprehensive research on optimizing neural networks for real-world deployment, focusing on efficiency, accuracy, and scalability trade-offs.",
      content: `<p>This research explores cutting-edge optimization techniques for deploying neural networks in production environments, where performance, efficiency, and reliability are critical factors.</p>

<h2>Abstract</h2>

<p>As neural networks become increasingly complex and ubiquitous in production systems, the need for sophisticated optimization techniques has become paramount. This research presents novel approaches to neural network optimization that balance accuracy, computational efficiency, and deployment scalability.</p>`,
      author: "Dr. Sarah Kim",
      date: "2025-01-12",
      readTime: "20 min read",
      tags: ["Neural Networks", "Optimization", "Production AI", "Performance"],
      category: "AI Research",
      featured: true,
      image: "neural-network-research.jpg"
    }
  ],
  'case-studies': [
    {
      id: 'fintech-ai-transformation',
      slug: 'fintech-ai-transformation',
      title: "FinTech AI Transformation: Revolutionizing Risk Assessment and Fraud Detection",
      excerpt: "How we helped a leading financial services company implement AI-powered risk assessment, reducing fraud by 73% while improving customer experience.",
      content: `<p>Our comprehensive AI transformation helped a global financial services company modernize their risk assessment and fraud detection systems, achieving remarkable results in security and customer experience.</p>

<h2>The Challenge</h2>

<p>The client faced increasing fraud attempts and slow manual risk assessment processes that impacted customer satisfaction.</p>

<h2>Our Solution</h2>

<p>We implemented a comprehensive AI system that revolutionized their approach to risk assessment and fraud detection.</p>`,
      author: "Michael Rodriguez",
      date: "2025-01-08",
      readTime: "12 min read",
      tags: ["FinTech", "Risk Assessment", "Fraud Detection", "Machine Learning"],
      category: "Case Study",
      featured: true,
      image: "fintech-transformation.jpg",
      client: "Global Financial Services",
      industry: "Financial Services",
      duration: "8 months",
      results: ["73% reduction in fraud", "45% faster approval times", "92% customer satisfaction"]
    }
  ],
  documentation: [
    {
      id: 'soul-cli-getting-started',
      slug: 'soul-cli-getting-started',
      title: "Soul CLI: Getting Started Guide",
      excerpt: "Complete guide to getting started with Soul CLI, the AI-powered command-line tool for developers. Learn installation, basic commands, and workflow integration.",
      content: `<p>Soul CLI is an AI-powered command-line interface designed to enhance developer productivity through intelligent automation and context-aware assistance.</p>

<h2>Installation</h2>

<p>Follow these steps to install Soul CLI on your system.</p>

<h2>Basic Usage</h2>

<p>Learn the fundamental commands and workflows that will transform your development experience.</p>`,
      author: "NightSkyLabs Team",
      date: "2025-01-10",
      readTime: "5 min read",
      tags: ["Soul CLI", "Installation", "Getting Started", "Developer Tools"],
      category: "Documentation",
      featured: true,
      image: "soul-cli-docs.jpg"
    }
  ],
  help: [
    {
      id: 'troubleshooting-common-issues',
      slug: 'troubleshooting-common-issues',
      title: "Troubleshooting Common Issues with NightSkyLabs Products",
      excerpt: "Quick solutions to the most frequently encountered issues across Soul CLI, Voice platform, and Qurious learning system.",
      content: `<p>This guide covers the most common issues users encounter with our products and provides step-by-step solutions to resolve them quickly.</p>

<h2>Soul CLI Issues</h2>

<p>Common installation and usage problems with Soul CLI and their solutions.</p>

<h2>Voice Platform Issues</h2>

<p>Audio and connectivity troubleshooting for the Voice interview platform.</p>`,
      author: "Support Team",
      date: "2025-01-14",
      readTime: "8 min read",
      tags: ["Troubleshooting", "Support", "Soul CLI", "Voice", "Qurious"],
      category: "Technical Support",
      featured: true,
      image: "troubleshooting-guide.jpg"
    }
  ]
};

/**
 * Load content from static data by content type
 * @param {string} contentType - blog, research, case-studies, documentation, help
 * @returns {Promise<Array>} Array of content objects
 */
export const loadContent = async (contentType) => {
  return new Promise((resolve) => {
    // Simulate loading time
    setTimeout(() => {
      const content = STATIC_CONTENT[contentType] || [];
      resolve(content.sort((a, b) => new Date(b.date) - new Date(a.date)));
    }, 100);
  });
};

/**
 * Load all blog posts from markdown files
 * @returns {Promise<Array>} Array of parsed blog post objects
 */
export const loadBlogPosts = async () => {
  return loadContent('blog');
};

/**
 * Load research posts from markdown files
 * @returns {Promise<Array>} Array of parsed research post objects
 */
export const loadResearchPosts = async () => {
  return loadContent('research');
};

/**
 * Load case study posts from markdown files
 * @returns {Promise<Array>} Array of parsed case study objects
 */
export const loadCaseStudies = async () => {
  return loadContent('case-studies');
};

/**
 * Load documentation posts from markdown files
 * @returns {Promise<Array>} Array of parsed documentation objects
 */
export const loadDocumentation = async () => {
  return loadContent('documentation');
};

/**
 * Load help posts from markdown files
 * @returns {Promise<Array>} Array of parsed help objects
 */
export const loadHelpPosts = async () => {
  return loadContent('help');
};

/**
 * Generate categories from content
 * @param {Array} content - Array of content objects
 * @returns {Array} Array of unique categories with 'All' prepended
 */
export const generateCategories = (content) => {
  const categories = new Set(['All']);
  content.forEach(item => {
    if (item.category) {
      categories.add(item.category);
    }
  });
  return Array.from(categories);
};

/**
 * Get a single blog post by slug
 * @param {string} slug - Post slug
 * @returns {object|null} Blog post object or null if not found
 */
export const getBlogPost = async (slug) => {
  const posts = await loadBlogPosts();
  return posts.find(post => post.slug === slug) || null;
};

/**
 * Generate blog post template
 * @param {object} postData - Blog post metadata
 * @returns {string} Markdown template
 */
export const generatePostTemplate = (postData = {}) => {
  const {
    title = 'New Blog Post',
    excerpt = 'Brief description of your blog post',
    author = 'NightSkyLabs Team',
    date = new Date().toISOString().split('T')[0],
    tags = ['Technology'],
    category = 'Technology',
    featured = false
  } = postData;
  
  return `---
title: "${title}"
excerpt: "${excerpt}"
author: "${author}"
date: "${date}"
tags: [${tags.map(tag => `"${tag}"`).join(', ')}]
category: "${category}"
featured: ${featured}
---

# ${title}

Your blog post content goes here. You can use **bold text**, *italic text*, and other markdown features.

## Section Heading

Write your content using standard Markdown syntax:

- Bullet points
- Are supported
- Along with other formatting

### Subsection

You can include code blocks:

\`\`\`javascript
const example = "This is a code block";
console.log(example);
\`\`\`

And inline code like \`const variable = "value"\`.

> Blockquotes are also supported for highlighting important information.

Continue writing your blog post content here...
`;
};

export default {
  parseMarkdown,
  loadBlogPosts,
  getBlogPost,
  generatePostTemplate
};
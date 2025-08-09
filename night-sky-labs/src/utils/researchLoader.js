import matter from 'gray-matter';
import { marked } from 'marked';

// Configure marked options for research paper rendering
marked.setOptions({
  breaks: true,
  gfm: true,
  headerIds: true,
  mangle: false
});

// Custom renderer for research papers
const renderer = new marked.Renderer();

// Custom heading renderer with bronze colors and anchor links
renderer.heading = function(text, level) {
  const escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');
  return `<h${level} id="${escapedText}" class="text-${level === 1 ? '4xl' : level === 2 ? '3xl' : level === 3 ? '2xl' : 'xl'} font-thin text-[#998664] mb-6 mt-12 first:mt-0 scroll-mt-20">
    <a href="#${escapedText}" class="anchor-link hover:text-[#aa9678] transition-colors">${text}</a>
  </h${level}>`;
};

// Custom paragraph renderer
renderer.paragraph = function(text) {
  return `<p class="text-base font-thin text-gray-700 mb-6 leading-relaxed">${text}</p>`;
};

// Custom list renderers with bronze styling
renderer.list = function(body, ordered) {
  const type = ordered ? 'ol' : 'ul';
  return `<${type} class="space-y-3 mb-6 ${ordered ? 'list-decimal' : 'list-disc'} list-inside ml-4">${body}</${type}>`;
};

renderer.listitem = function(text) {
  return `<li class="text-base font-thin text-gray-700 leading-relaxed">${text}</li>`;
};

// Custom blockquote renderer with bronze accent
renderer.blockquote = function(quote) {
  return `<blockquote class="border-l-4 border-[#998664] bg-gray-50 rounded-r-lg pl-6 py-4 my-8">
    <div class="text-lg font-thin text-[#998664] leading-relaxed italic">${quote.replace(/<\/?p[^>]*>/g, '')}</div>
  </blockquote>`;
};

// Custom code block renderer
renderer.code = function(code, language) {
  const langClass = language ? `language-${language}` : '';
  return `<pre class="bg-gray-100 rounded-lg p-6 mb-8 overflow-x-auto border border-gray-200">
    <code class="text-sm font-mono text-gray-800 ${langClass}">${this.options.highlight ? this.options.highlight(code, language) : code}</code>
  </pre>`;
};

// Custom inline code renderer
renderer.codespan = function(code) {
  return `<code class="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-gray-800 border">${code}</code>`;
};

// Custom link renderer with bronze colors
renderer.link = function(href, title, text) {
  const titleAttr = title ? ` title="${title}"` : '';
  const external = href.startsWith('http') ? ' target="_blank" rel="noopener noreferrer"' : '';
  return `<a href="${href}"${titleAttr}${external} class="text-[#998664] hover:text-[#aa9678] transition-colors underline">${text}</a>`;
};

// Custom image renderer with responsive styling
renderer.image = function(href, title, text) {
  let src = href;
  if (!href.startsWith('http') && !href.startsWith('/')) {
    src = `/images/research/${href}`;
  }
  
  const altParts = text.split('|');
  const altText = altParts[0] || '';
  const caption = altParts[1] || title || '';
  const className = altParts[2] || 'w-full max-w-4xl mx-auto';
  
  let imageHtml = `<img src="${src}" alt="${altText}" class="${className} rounded-lg shadow-lg" loading="lazy"`;
  
  if (title) {
    imageHtml += ` title="${title}"`;
  }
  
  imageHtml += ' />';
  
  if (caption) {
    return `
      <figure class="my-10 text-center">
        ${imageHtml}
        <figcaption class="mt-4 text-sm font-thin text-gray-500 italic">${caption}</figcaption>
      </figure>
    `;
  }
  
  return `<div class="my-10 text-center">${imageHtml}</div>`;
};

// Custom table renderer
renderer.table = function(header, body) {
  return `<div class="my-8 overflow-x-auto">
    <table class="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-lg">
      <thead class="bg-gray-50">
        ${header}
      </thead>
      <tbody class="bg-white divide-y divide-gray-200">
        ${body}
      </tbody>
    </table>
  </div>`;
};

marked.use({ renderer });

/**
 * Generate slug from filename or title
 * @param {string} input - Filename or title
 * @returns {string} URL-friendly slug
 */
export const generateSlug = (input) => {
  return input
    .toLowerCase()
    .replace(/\.md$/, '') // Remove .md extension
    .replace(/[^a-z0-9]+/g, '-') // Replace non-alphanumeric with dashes
    .replace(/^-+|-+$/g, '') // Remove leading/trailing dashes
    .trim();
};

/**
 * Parse a markdown file with frontmatter for research papers
 * @param {string} markdownContent - Raw markdown content with frontmatter
 * @param {string} filename - Original filename for slug generation
 * @returns {object} Parsed research paper object
 */
export const parseResearchPaper = (markdownContent, filename) => {
  try {
    const { data: frontmatter, content } = matter(markdownContent);
    
    // Generate slug from filename or title
    const slug = frontmatter.slug || generateSlug(filename || frontmatter.title || 'untitled');
    
    // Parse the markdown content to HTML
    const htmlContent = marked(content);
    
    // Calculate reading time
    const wordCount = content.split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / 200);
    
    // Generate abstract from content if not provided
    let abstract = frontmatter.abstract || frontmatter.excerpt || '';
    if (!abstract && content) {
      // Take first paragraph or first 200 words
      const firstParagraph = content.split('\n\n')[0];
      abstract = firstParagraph.replace(/#+\s*/, '').substring(0, 250) + '...';
    }
    
    return {
      id: slug,
      slug,
      title: frontmatter.title || 'Untitled Research Paper',
      abstract,
      content: htmlContent,
      rawContent: content, // Keep raw content for editing
      authors: Array.isArray(frontmatter.authors) ? frontmatter.authors : [frontmatter.author || 'NightSkyLabs Team'],
      field: frontmatter.field || 'Artificial Intelligence',
      publishedDate: frontmatter.publishedDate || frontmatter.date || new Date().toISOString().split('T')[0],
      readTime: `${readingTime} min read`,
      tags: Array.isArray(frontmatter.tags) ? frontmatter.tags : [],
      keywords: Array.isArray(frontmatter.keywords) ? frontmatter.keywords : [],
      methodology: frontmatter.methodology || '',
      keyFindings: frontmatter.keyFindings || [],
      citations: Array.isArray(frontmatter.citations) ? frontmatter.citations : [],
      pdfUrl: frontmatter.pdfUrl || null,
      datasetUrl: frontmatter.datasetUrl || null,
      codeUrl: frontmatter.codeUrl || null,
      image: frontmatter.image || null,
      featured: frontmatter.featured || false,
      // SEO meta
      metaTitle: frontmatter.metaTitle || frontmatter.title,
      metaDescription: frontmatter.metaDescription || abstract,
      // Additional metadata
      publishedAt: frontmatter.publishedAt || frontmatter.publishedDate,
      updatedAt: frontmatter.updatedAt || frontmatter.publishedDate,
      status: frontmatter.status || 'published', // published, draft, archived
      // Keep original frontmatter for additional metadata
      metadata: frontmatter
    };
  } catch (error) {
    console.error('Error parsing research paper:', error);
    return null;
  }
};

/**
 * Dynamic research loader that reads from markdown files
 * This function would be used to read actual markdown files from the research directory
 * For now, it includes the static content but structured for dynamic loading
 */
export const loadResearchFromFiles = async () => {
  // In a real implementation, this would:
  // 1. Read all .md files from /src/content/research/
  // 2. Parse each file with parseResearchPaper()
  // 3. Return sorted array of research papers
  
  // For now, returning the existing static content but properly structured
  const researchPapers = [
    {
      filename: 'neural-network-optimization.md',
      content: `---
title: "Neural Network Optimization Techniques"
authors: ["Dr. Sarah Chen", "Prof. Michael Rodriguez"]
field: "Machine Learning"
publishedDate: "2024-01-15"
tags: ["neural-networks", "optimization", "machine-learning", "deep-learning"]
abstract: "This research explores advanced optimization techniques for neural networks, focusing on gradient descent variants and adaptive learning rates."
featured: true
image: "/images/research/neural-optimization.jpg"
pdfUrl: "/papers/neural-optimization-2024.pdf"
keyFindings:
  - title: "Adaptive Learning Rates"
    description: "Dynamic adjustment of learning rates improved convergence by 40%"
  - title: "Gradient Clipping"
    description: "Prevented exploding gradients in deep networks"
  - title: "Batch Normalization Impact"
    description: "Reduced training time while maintaining accuracy"
citations:
  - "Kingma, D. P., & Ba, J. (2014). Adam: A method for stochastic optimization."
  - "Ioffe, S., & Szegedy, C. (2015). Batch normalization: Accelerating deep network training."
---

# Introduction

Neural network optimization remains one of the most critical aspects of deep learning model development. This research investigates various optimization techniques and their impact on model performance, convergence speed, and stability.

## Methodology

Our approach involved testing multiple optimization algorithms across different neural network architectures, measuring performance metrics including:

- Convergence speed
- Final accuracy
- Training stability
- Computational efficiency

## Results

The results demonstrate significant improvements in training efficiency when combining adaptive learning rates with proper gradient clipping techniques.

### Key Findings

1. **Adaptive Learning Rates**: Implementation of adaptive learning rate schedules resulted in 40% faster convergence compared to fixed learning rates.

2. **Gradient Clipping**: Proper gradient clipping prevented training instabilities in deeper networks, particularly those with more than 50 layers.

3. **Batch Normalization**: Strategic placement of batch normalization layers reduced overall training time by 25% while maintaining model accuracy.

## Conclusion

These optimization techniques provide a robust framework for training neural networks more efficiently. The combination of adaptive learning rates, gradient clipping, and strategic batch normalization offers significant improvements over traditional optimization approaches.`
    }
  ];

  return researchPapers.map(paper => parseResearchPaper(paper.content, paper.filename)).filter(Boolean);
};

/**
 * Get a specific research paper by slug
 * @param {string} slug - The research paper slug
 * @returns {Promise<object|null>} Research paper object or null if not found
 */
export const getResearchPaper = async (slug) => {
  const allResearch = await loadResearchFromFiles();
  return allResearch.find(paper => paper.slug === slug) || null;
};

/**
 * Generate all available research fields
 * @returns {Promise<string[]>} Array of unique research fields
 */
export const generateResearchFields = async () => {
  const allResearch = await loadResearchFromFiles();
  const fields = [...new Set(allResearch.map(paper => paper.field))];
  return fields.sort();
};

/**
 * Generate a research paper template
 * @param {object} options - Template options
 * @returns {string} Markdown template
 */
export const generateResearchTemplate = (options = {}) => {
  const {
    title = 'Your Research Paper Title',
    authors = ['Your Name'],
    field = 'Artificial Intelligence',
    tags = ['ai', 'research']
  } = options;

  return `---
title: "${title}"
authors: ${JSON.stringify(authors)}
field: "${field}"
publishedDate: "${new Date().toISOString().split('T')[0]}"
tags: ${JSON.stringify(tags)}
abstract: "Brief summary of your research findings and contributions."
featured: false
image: "/images/research/your-image.jpg"
pdfUrl: "/papers/your-paper.pdf"
keyFindings:
  - title: "Finding 1"
    description: "Description of your first key finding"
  - title: "Finding 2"
    description: "Description of your second key finding"
citations:
  - "Author, A. (Year). Title of paper. Journal Name."
---

# Introduction

Introduce your research topic and objectives here.

## Methodology

Describe your research methodology and approach.

## Results

Present your findings and results.

## Conclusion

Summarize your conclusions and future work.
`;
};

const researchLoader = {
  parseResearchPaper,
  loadResearchFromFiles,
  getResearchPaper,
  generateResearchFields,
  generateResearchTemplate,
  generateSlug
};

export default researchLoader;
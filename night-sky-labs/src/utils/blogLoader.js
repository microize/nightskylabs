import matter from 'gray-matter';
import { marked } from 'marked';

// Configure marked options for blog rendering
marked.setOptions({
  breaks: true,
  gfm: true,
  headerIds: true,
  mangle: false
});

// Custom renderer for blog posts
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
    src = `/images/blog/${href}`;
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
 * Parse a markdown file with frontmatter for blog posts
 * @param {string} markdownContent - Raw markdown content with frontmatter
 * @param {string} filename - Original filename for slug generation
 * @returns {object} Parsed blog post object
 */
export const parseBlogPost = (markdownContent, filename) => {
  try {
    const { data: frontmatter, content } = matter(markdownContent);
    
    // Generate slug from filename or title
    const slug = frontmatter.slug || generateSlug(filename || frontmatter.title || 'untitled');
    
    // Parse the markdown content to HTML
    const htmlContent = marked(content);
    
    // Calculate reading time
    const wordCount = content.split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / 200);
    
    // Generate excerpt from content if not provided
    let excerpt = frontmatter.excerpt || '';
    if (!excerpt && content) {
      // Take first paragraph or first 150 words
      const firstParagraph = content.split('\n\n')[0];
      excerpt = firstParagraph.replace(/#+\s*/, '').substring(0, 200) + '...';
    }
    
    return {
      id: slug,
      slug,
      title: frontmatter.title || 'Untitled',
      excerpt,
      content: htmlContent,
      rawContent: content, // Keep raw content for editing
      author: frontmatter.author || 'NightSkyLabs Team',
      date: frontmatter.date || new Date().toISOString().split('T')[0],
      readTime: `${readingTime} min read`,
      tags: Array.isArray(frontmatter.tags) ? frontmatter.tags : [],
      category: frontmatter.category || 'Technology',
      featured: frontmatter.featured || false,
      image: frontmatter.image || null,
      // SEO meta
      metaTitle: frontmatter.metaTitle || frontmatter.title,
      metaDescription: frontmatter.metaDescription || excerpt,
      // Additional metadata
      publishedAt: frontmatter.publishedAt || frontmatter.date,
      updatedAt: frontmatter.updatedAt || frontmatter.date,
      status: frontmatter.status || 'published', // published, draft, archived
      // Keep original frontmatter for additional metadata
      metadata: frontmatter
    };
  } catch (error) {
    console.error('Error parsing blog post:', error);
    return null;
  }
};

/**
 * Dynamic blog post loader that reads from markdown files
 * This function would be used to read actual markdown files from the blog directory
 * For now, it includes the static content but structured for dynamic loading
 */
export const loadBlogPostsFromFiles = async () => {
  // In a real implementation, this would:
  // 1. Read all .md files from /src/content/blog/
  // 2. Parse each file with parseBlogPost()
  // 3. Return sorted array of blog posts
  
  // For now, returning the existing static content but properly structured
  const blogPosts = [
    {
      filename: 'ai-ethics-practice.md',
      content: `---
title: "AI Ethics in Practice: Building Responsible AI Systems"
excerpt: "Exploring the practical challenges of implementing ethical AI principles in real-world applications and the frameworks we use to ensure responsible development."
author: "Michael Chen"
date: "2025-01-05"
tags: ["AI Ethics", "Responsible AI", "Bias Mitigation", "Privacy"]
category: "Ethics"
featured: true
---

# AI Ethics in Practice: Building Responsible AI Systems

As AI systems become more powerful and ubiquitous, the importance of building ethical, responsible AI cannot be overstated. At NightSkyLabs, we've developed a comprehensive framework for ensuring our AI products are fair, transparent, and beneficial.

The challenge isn't just understanding ethical principles—it's implementing them in practice while building systems that deliver real value to users. This requires both technical solutions and organizational commitment to doing the right thing, even when it's difficult or expensive.

## The Ethics Implementation Gap

Many organizations talk about AI ethics, but far fewer successfully implement ethical practices in their development workflows. Common challenges include:

### Theoretical vs. Practical Ethics
- **Abstract principles**: Concepts like "fairness" are difficult to define precisely
- **Technical constraints**: Ethical ideals often conflict with technical limitations
- **Business pressures**: Ethical development can slow time-to-market
- **Measurement challenges**: Quantifying ethical outcomes is complex

### Organizational Barriers  
- **Skills gap**: Teams lack expertise in ethical AI implementation
- **Resource allocation**: Ethics work isn't always prioritized in budgets
- **Accountability unclear**: Responsibility for ethical outcomes often undefined
- **Cultural resistance**: "Move fast and break things" mentality conflicts with careful ethical consideration

## Our Ethical AI Framework

Building ethical AI systems requires a systematic approach that goes beyond good intentions. We've developed a comprehensive framework that addresses the key challenges of implementing AI ethics in practice.

### Principle 1: Bias Detection and Mitigation

Every AI system reflects the biases present in its training data and development process. Our approach includes comprehensive bias auditing, data quality management, and algorithmic interventions to ensure fair outcomes across all user populations.

### Principle 2: Transparency and Explainability

Users have a right to understand how AI makes decisions that affect them. Our implementation includes explainable AI architecture, user-facing transparency features, and comprehensive documentation for both users and developers.

### Principle 3: Privacy by Design

Privacy protection must be built into AI systems from the ground up through data minimization, technical privacy protections, and robust consent and control mechanisms.

### Principle 4: Human Oversight

Maintaining meaningful human control over AI decision-making through human-in-the-loop systems, continuous monitoring, and clear escalation procedures.

## Building Ethical AI at Scale

As AI becomes more integrated into society, the importance of ethical development practices will only grow. Organizations that prioritize ethics today will be better positioned to navigate the challenges and opportunities of tomorrow's AI-powered world.

Building ethical AI systems is not easy, but it is essential. The future depends on getting it right.`
    },
    {
      filename: 'ai-powered-development.md',
      content: `---
title: "The Future of AI-Powered Development: How Soul CLI is Transforming Developer Workflows"
excerpt: "Exploring how AI-powered command-line tools are revolutionizing software development, from automated code analysis to intelligent workflow optimization."
author: "Alex Chen"
date: "2025-01-15"
tags: ["AI Development", "Developer Tools", "Automation", "CLI Tools"]
category: "Technology"
featured: true
---

# The Future of AI-Powered Development: How Soul CLI is Transforming Developer Workflows

The landscape of software development is undergoing a fundamental transformation. Traditional development workflows, while functional, often involve repetitive tasks that consume valuable time and mental energy. From manually analyzing code quality to writing boilerplate configurations, developers spend significant portions of their day on activities that could be intelligently automated.

This is where AI-powered development tools like Soul CLI are making a profound impact. By understanding the context of your codebase, these tools can provide intelligent suggestions, automate routine tasks, and even predict potential issues before they become problems.

## The Developer Experience Revolution

Traditional development workflows have served us well, but they are showing their age. Modern applications are more complex than ever, with intricate dependencies, multiple deployment environments, and increasingly sophisticated architecture patterns.

Soul CLI represents a new paradigm in developer tooling—one where AI does not replace human creativity and problem-solving, but amplifies it. By handling the routine and predictable aspects of development, AI frees developers to focus on the creative and strategic work that truly drives innovation.

## Key Capabilities of AI-Powered Development

### Intelligent Code Analysis
Soul CLI can analyze your entire codebase in seconds, identifying patterns, potential issues, and optimization opportunities that would take hours of manual review to discover.

### Natural Language Programming
Describe what you want to accomplish in plain English, and Soul CLI translates your intent into precise code modifications, test cases, or documentation updates.

### Context-Aware Automation
Unlike simple automation tools, Soul CLI understands the context of your project—its architecture, conventions, and goals—allowing it to make intelligent decisions about how to help.

### Continuous Learning
The more you use Soul CLI with your codebase, the better it becomes at understanding your specific patterns and preferences, creating a truly personalized development experience.

## The Impact on Developer Productivity

Early adopters of Soul CLI report significant improvements in their development workflows:

- **75% reduction** in time spent on routine code maintenance tasks
- **60% faster** implementation of new features with AI assistance
- **90% fewer** bugs introduced through automated testing and analysis
- **50% improvement** in code quality metrics across projects

## Looking Forward: The Next Generation of Development

As AI technology continues to advance, we can expect even more sophisticated development assistance. The future of software development is not about replacing developers—it is about empowering them with AI that understands not just code, but the intent and context behind it.

Soul CLI is just the beginning. We are building toward a future where AI and human creativity work together to solve complex problems and build amazing software faster than ever before.`
    },
    {
      filename: 'voice-first-applications.md',
      content: `---
title: "Building Voice-First AI Applications: Lessons from Real-Time Interview Systems"
excerpt: "Deep dive into the architecture and challenges of building AI-powered voice applications that can conduct real-time interviews with human-like conversational abilities."
author: "Sarah Martinez"
date: "2025-01-10"
tags: ["Voice AI", "Real-time Processing", "Interview Technology", "Conversational AI"]
category: "Technology"
featured: true
---

# Building Voice-First AI Applications: Lessons from Real-Time Interview Systems

Voice-first applications represent the next frontier in AI-human interaction. Unlike traditional text-based interfaces, voice applications must process natural language in real-time, understand context, and respond with appropriate tone and timing.

Our Voice platform has conducted over 10,000 interviews, teaching us valuable lessons about building robust voice AI systems that can handle the nuances of human conversation in professional settings.

## The Architecture of Voice AI

Building effective voice AI requires careful consideration of multiple technical layers:

### Real-Time Audio Processing
Processing spoken language in real-time requires sophisticated audio analysis, noise reduction, and speech-to-text conversion that maintains accuracy even in challenging acoustic environments.

### Natural Language Understanding
Converting speech to text is only the beginning. The system must understand context, intent, and emotional subtext to respond appropriately.

### Conversational Flow Management
Managing the flow of conversation, knowing when to speak, when to listen, and when to redirect requires sophisticated state management and contextual awareness.

### Voice Generation and Synthesis
Generating natural-sounding responses that match the tone and pace of the conversation is crucial for maintaining engagement.

## Key Technical Challenges

### Latency Optimization
In voice applications, every millisecond matters. Users expect immediate responses, which means optimizing the entire pipeline from audio input to voice output.

### Context Preservation
Maintaining context throughout long conversations while managing memory constraints requires efficient data structures and intelligent context summarization.

### Error Recovery
When the system mishears or misunderstands, it must gracefully recover and guide the conversation back on track without breaking the flow.

### Emotional Intelligence
Understanding not just what someone says, but how they are feeling, allows the system to adjust its approach and provide more empathetic responses.

## Real-World Applications

Voice AI is not just about interviews. The same principles apply to:

- **Customer Service**: Automated support that understands context and emotion
- **Education**: Personalized tutoring that adapts to learning pace and style
- **Healthcare**: Patient interactions that capture both medical history and emotional state
- **Sales**: Qualification conversations that feel natural and engaging

## The Future of Voice AI

As voice technology continues to advance, we are moving toward AI that can:

- Understand multiple languages and accents seamlessly
- Detect and respond to subtle emotional cues
- Maintain coherent conversations across multiple sessions
- Integrate with visual and contextual information for richer interactions

Voice AI represents a fundamental shift in how we interact with technology. By making these interactions more natural and intuitive, we are building a future where technology truly serves human needs.`
    },
    {
      filename: 'personalized-learning.md',
      content: `---
title: "Personalized AI Learning: How Qurious Adapts to Individual Learning Styles"
excerpt: "Exploring the science behind adaptive learning algorithms and how AI can create truly personalized educational experiences that evolve with each learner."
author: "Dr. Emily Watson"
date: "2025-01-05"
tags: ["Personalized Learning", "EdTech", "Adaptive Algorithms", "Cognitive Science"]
category: "Education"
featured: false
---

# Personalized AI Learning: How Qurious Adapts to Individual Learning Styles

Every learner is unique, with distinct preferences, strengths, and challenges. Traditional one-size-fits-all educational approaches often fail to accommodate this diversity, leading to disengagement and suboptimal learning outcomes.

Qurious represents a new paradigm in educational technology, where AI algorithms continuously adapt to each learner's individual style, pace, and preferences, creating a truly personalized learning journey.

## The Science of Adaptive Learning

Our approach combines cognitive science research with advanced machine learning to understand how individuals learn best.

### Learning Style Detection
Qurious analyzes how learners interact with different types of content—visual, auditory, kinesthetic—to understand their preferred learning modalities.

### Knowledge Gap Analysis
By continuously assessing comprehension and retention, the system identifies specific areas where additional support or practice is needed.

### Motivation and Engagement Patterns
Understanding what motivates each learner allows the system to present content and challenges in ways that maintain engagement and drive progress.

### Cognitive Load Management
The system monitors signs of cognitive overload and adjusts the pace and complexity of material to maintain optimal learning conditions.

## Adaptive Learning Mechanisms

### Dynamic Content Sequencing
Content is presented in an order that makes sense for each individual learner, building on their existing knowledge and addressing their specific gaps.

### Real-Time Difficulty Adjustment
If a learner is struggling, the system provides additional scaffolding and practice. If they're excelling, it introduces more challenging material to maintain engagement.

### Multimodal Content Delivery
The same concept can be explained through text, video, interactive simulations, or practice exercises, depending on what works best for each learner.

### Spaced Repetition Optimization
The system determines the optimal timing for reviewing previously learned material based on individual retention patterns.

## Measuring Learning Effectiveness

### Competency-Based Assessment
Rather than time-based progression, learners advance based on demonstrated mastery of skills and concepts.

### Continuous Feedback Loops
Regular, low-stakes assessments provide ongoing data about learning progress and areas for improvement.

### Long-Term Retention Tracking
The system monitors not just immediate understanding but long-term retention and ability to apply knowledge in new contexts.

## The Future of Personalized Education

As AI becomes more sophisticated, we can expect even more personalized learning experiences:

- **Predictive Learning Analytics**: Anticipating learning challenges before they occur
- **Emotional Learning Support**: Detecting and responding to learner frustration or confusion
- **Collaborative Adaptation**: Personalizing group learning experiences
- **Cross-Domain Learning Transfer**: Helping learners apply skills across different subjects and contexts

Qurious is pioneering this future of education—one where technology adapts to human learning rather than forcing humans to adapt to technology.`
    }
  ];

  // Process each blog post
  const processedPosts = [];
  for (const { filename, content } of blogPosts) {
    const parsed = parseBlogPost(content, filename);
    if (parsed) {
      processedPosts.push(parsed);
    }
  }

  // Sort by date (newest first) and featured status
  return processedPosts.sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return new Date(b.date) - new Date(a.date);
  });
};

/**
 * Get a single blog post by slug
 * @param {string} slug - Post slug
 * @returns {Promise<object|null>} Blog post object or null if not found
 */
export const getBlogPost = async (slug) => {
  const posts = await loadBlogPostsFromFiles();
  return posts.find(post => post.slug === slug) || null;
};

/**
 * Generate categories from blog posts
 * @param {Array} posts - Array of blog post objects
 * @returns {Array} Array of unique categories with 'All' prepended
 */
export const generateBlogCategories = (posts) => {
  const categories = new Set(['All']);
  posts.forEach(post => {
    if (post.category) {
      categories.add(post.category);
    }
  });
  return Array.from(categories);
};

/**
 * Generate blog post template for new posts
 * @param {object} postData - Blog post metadata
 * @returns {string} Markdown template
 */
export const generateBlogTemplate = (postData = {}) => {
  const {
    title = 'New Blog Post',
    excerpt = 'Brief description of your blog post',
    author = 'NightSkyLabs Team',
    date = new Date().toISOString().split('T')[0],
    tags = ['Technology'],
    category = 'Technology',
    featured = false,
    slug = generateSlug(title)
  } = postData;
  
  return `---
title: "${title}"
excerpt: "${excerpt}"
author: "${author}"
date: "${date}"
tags: [${tags.map(tag => `"${tag}"`).join(', ')}]
category: "${category}"
featured: ${featured}
slug: "${slug}"
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

const blogLoader = {
  parseBlogPost,
  loadBlogPostsFromFiles,
  getBlogPost,
  generateBlogCategories,
  generateBlogTemplate,
  generateSlug
};

export default blogLoader;
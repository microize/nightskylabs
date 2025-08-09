import matter from 'gray-matter';
import { marked } from 'marked';

// Configure marked options for case study rendering
marked.setOptions({
  breaks: true,
  gfm: true,
  headerIds: true,
  mangle: false
});

// Custom renderer for case studies
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
    src = `/images/case-studies/${href}`;
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
 * Parse a markdown file with frontmatter for case studies
 * @param {string} markdownContent - Raw markdown content with frontmatter
 * @param {string} filename - Original filename for slug generation
 * @returns {object} Parsed case study object
 */
export const parseCaseStudy = (markdownContent, filename) => {
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
      title: frontmatter.title || 'Untitled Case Study',
      excerpt,
      content: htmlContent,
      rawContent: content, // Keep raw content for editing
      client: frontmatter.client || 'Confidential Client',
      industry: frontmatter.industry || 'Technology',
      date: frontmatter.date || new Date().toISOString().split('T')[0],
      readTime: `${readingTime} min read`,
      tags: Array.isArray(frontmatter.tags) ? frontmatter.tags : [],
      challenge: frontmatter.challenge || '',
      solution: frontmatter.solution || '',
      results: frontmatter.results || [],
      technologies: Array.isArray(frontmatter.technologies) ? frontmatter.technologies : [],
      image: frontmatter.image || null,
      featured: frontmatter.featured || false,
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
    console.error('Error parsing case study:', error);
    return null;
  }
};

/**
 * Dynamic case study loader that reads from markdown files
 * This function would be used to read actual markdown files from the case studies directory
 * For now, it includes the static content but structured for dynamic loading
 */
export const loadCaseStudiesFromFiles = async () => {
  // In a real implementation, this would:
  // 1. Read all .md files from /src/content/case-studies/
  // 2. Parse each file with parseCaseStudy()
  // 3. Return sorted array of case studies
  
  // For now, returning the existing static content but properly structured
  const caseStudies = [
    {
      filename: 'fintech-ai-transformation.md',
      content: `---
title: "FinTech AI Transformation: Revolutionizing Personal Banking"
excerpt: "How we helped a leading financial institution implement AI-powered personal banking solutions that increased customer engagement by 300% and reduced operational costs by 45%."
client: "Major Financial Institution"
industry: "Financial Technology"
date: "2024-12-15"
tags: ["FinTech", "AI Implementation", "Customer Experience", "Banking Innovation"]
challenge: "Traditional banking processes were slow, inefficient, and failing to meet modern customer expectations"
solution: "Comprehensive AI-powered banking platform with personalized experiences and intelligent automation"
results: [
  { "metric": "300%", "description": "Increase in customer engagement" },
  { "metric": "45%", "description": "Reduction in operational costs" },
  { "metric": "60%", "description": "Faster transaction processing" }
]
technologies: ["Machine Learning", "Natural Language Processing", "Predictive Analytics", "Cloud Computing"]
featured: true
---

# FinTech AI Transformation: Revolutionizing Personal Banking

The financial services industry is undergoing a fundamental transformation driven by artificial intelligence and changing customer expectations. Traditional banking institutions face pressure to modernize their operations while maintaining security, compliance, and customer trust.

Our client, a major financial institution with over 2 million customers, approached us with a clear challenge: their traditional banking processes were slow, inefficient, and failing to meet modern customer expectations. Customers were leaving for more agile fintech competitors, and operational costs were rising due to manual processes and outdated systems.

## The Challenge

### Legacy System Limitations
The institution was operating on decades-old core banking systems that were:
- **Slow to process transactions**: Simple transfers took 2-3 business days
- **Limited in functionality**: Basic features that customers expected from modern banking
- **Expensive to maintain**: High operational costs due to manual processing
- **Poor user experience**: Confusing interfaces that frustrated customers

### Market Competition
New fintech companies were capturing market share with:
- Instant transactions and real-time notifications
- Personalized financial insights and recommendations
- Seamless mobile-first experiences
- Lower fees and transparent pricing

### Regulatory Compliance
The financial services industry requires strict adherence to:
- Data privacy regulations (GDPR, CCPA)
- Financial compliance standards (PCI DSS, SOX)
- Anti-money laundering (AML) requirements
- Know Your Customer (KYC) protocols

## Our AI-Powered Solution

We designed and implemented a comprehensive AI transformation strategy that addressed each of these challenges while positioning the institution for future growth.

### 1. Intelligent Transaction Processing

**Real-time Decision Engine**
- Machine learning models that assess transaction risk in milliseconds
- Automated fraud detection with 99.8% accuracy
- Instant transaction approval for low-risk scenarios
- Dynamic risk assessment based on user behavior patterns

**Smart Routing System**
- AI-optimized transaction routing to minimize processing time
- Predictive load balancing to handle peak transaction volumes
- Automatic failover systems to ensure 99.9% uptime

### 2. Personalized Banking Experience

**AI-Powered Financial Assistant**
Our AI-powered financial assistant analyzes customer data to provide personalized insights and recommendations. The system includes recommendation engines, spending pattern analysis, and goal tracking capabilities.

\`\`\`python
class PersonalBankingAI:
    def __init__(self):
        self.recommendation_engine = MLRecommendationEngine()
\`\`\`

**Personalized Recommendations**
- Customized product suggestions based on transaction history
- Intelligent budgeting advice tailored to spending patterns
- Investment recommendations aligned with risk tolerance
- Automated savings suggestions and goal tracking

**Natural Language Interface**
- Voice-powered banking through smart speakers and mobile apps
- Chatbot assistance for common banking tasks
- Natural language query processing for account information
- Multi-language support for diverse customer base

### 3. Advanced Security and Compliance

**Behavioral Biometrics**
- Continuous authentication based on typing patterns and device usage
- Anomaly detection for unusual account access patterns
- Risk-based authentication that adapts to threat levels
- Seamless user experience without compromising security

**AI-Powered Compliance Monitoring**
- Automated transaction monitoring for suspicious activity
- Real-time AML screening with machine learning models
- Intelligent KYC document verification
- Compliance reporting automation

### 4. Operational Intelligence

**Predictive Customer Service**
- AI models that predict customer service needs before issues arise
- Automated resolution for common problems
- Intelligent routing of complex issues to specialized agents
- Customer satisfaction optimization through predictive analytics

**Resource Optimization**
- Demand forecasting for branch staffing and ATM cash management
- Predictive maintenance for banking infrastructure
- Energy optimization for branch operations
- Cost optimization through intelligent resource allocation

## Implementation Strategy

### Phase 1: Foundation (Months 1-3)
- Infrastructure modernization and cloud migration
- Data integration and quality improvement
- Core AI platform development
- Security framework implementation

### Phase 2: Core Features (Months 4-8)
- Real-time transaction processing implementation
- Fraud detection system deployment
- Basic personalization features launch
- Mobile app redesign and deployment

### Phase 3: Advanced AI (Months 9-12)
- Advanced personalization and recommendation engine
- Natural language interface development
- Behavioral biometrics implementation
- Predictive analytics and insights

### Phase 4: Optimization (Months 13-18)
- Performance tuning and optimization
- Advanced compliance automation
- Customer experience enhancement
- Expansion to additional product lines

## Technical Architecture

### AI Model Infrastructure
Our real-time fraud detection pipeline includes data ingestion from multiple sources (transaction streams, behavioral analytics, threat intelligence), a model ensemble with multiple classifiers (gradient boosting, neural networks, anomaly detection, graph networks), and a decision engine with weighted predictions and dynamic thresholds.

### Data Architecture
- **Real-time streaming**: Apache Kafka for transaction processing
- **Data lake**: Cloud-native storage for all customer interactions
- **Feature store**: Centralized feature management for ML models
- **API gateway**: Secure, scalable access to AI services

### Security Framework
- **Zero-trust architecture**: Every request authenticated and authorized
- **End-to-end encryption**: All data encrypted in transit and at rest
- **Audit logging**: Comprehensive tracking of all system interactions
- **Compliance automation**: Automated generation of regulatory reports

## Results and Impact

### Customer Experience Transformation

**Engagement Metrics**
- **300% increase** in mobile app usage
- **85% reduction** in customer service call volume
- **4.8/5** customer satisfaction rating (up from 3.2/5)
- **90% customer retention** rate (up from 70%)

**Transaction Processing**
- **Instant** transaction processing (down from 2-3 days)
- **99.8% accuracy** in fraud detection
- **60% faster** account opening process
- **24/7** availability with 99.9% uptime

### Operational Excellence

**Cost Reduction**
- **45% reduction** in operational costs
- **70% reduction** in manual processing time
- **50% reduction** in compliance reporting time
- **30% reduction** in customer acquisition costs

**Risk Management**
- **80% reduction** in fraud losses
- **95% faster** suspicious activity detection
- **100% automated** compliance monitoring
- **Zero** regulatory violations since implementation

### Business Growth

**Revenue Growth**
- **25% increase** in cross-selling success rate
- **40% increase** in new customer acquisition
- **15% increase** in average account value
- **20% increase** in customer lifetime value

**Market Position**
- **#1 rated** mobile banking app in customer surveys
- **50% market share** growth in target demographics
- **Industry recognition** for AI innovation
- **Regulatory partnership** as a compliance best-practice example

## Innovation Highlights

### Predictive Banking
Our AI system doesn't just react to customer needs—it anticipates them:
- **Cash flow prediction**: Alert customers about potential overdrafts before they occur
- **Spending optimization**: Identify recurring subscriptions customers may have forgotten
- **Investment timing**: Recommend optimal times for investments based on personal cash flow
- **Bill prediction**: Forecast upcoming expenses to help with budgeting

### Conversational Banking
Our conversational banking system processes natural language queries, executes voice commands, generates personalized responses, and handles complex banking intents through advanced API interfaces.

Natural language processing that understands context and intent:
- "How much did I spend on restaurants last month?"
- "Set up automatic savings for my vacation goal"
- "What's the best credit card for my spending pattern?"
- "Help me budget for buying a house"

### Ethical AI Framework
We implemented comprehensive ethical AI practices:
- **Bias detection**: Regular auditing of AI decisions for fairness
- **Transparency**: Clear explanations for all AI-driven recommendations
- **Privacy protection**: Advanced privacy-preserving machine learning
- **Human oversight**: Expert review of high-impact AI decisions

## Lessons Learned

### Technical Insights
- **Start with data quality**: Clean, well-organized data is essential for AI success
- **Gradual rollout**: Phased implementation reduces risk and allows for optimization
- **User feedback integration**: Continuous improvement based on real user behavior
- **Security from day one**: Build security into the foundation, don't add it later

### Business Insights
- **Change management**: Employee training and buy-in are crucial for success
- **Customer communication**: Clear communication about AI benefits builds trust
- **Regulatory engagement**: Early collaboration with regulators smooths approval processes
- **Competitive advantage**: AI implementation creates lasting competitive moats

## Future Roadmap

### Next-Generation Features
- **Quantum-resistant security**: Preparation for post-quantum cryptography
- **Advanced behavioral analytics**: Even more sophisticated fraud detection
- **Ecosystem integration**: Seamless integration with fintech partners
- **Autonomous banking**: Fully automated financial management for customers

### Market Expansion
- **International deployment**: Adapting the platform for global markets
- **SMB banking**: Extending AI capabilities to small business customers
- **Embedded finance**: API-first approach for third-party integration
- **Open banking**: Collaboration with the broader fintech ecosystem

## Conclusion

This AI transformation project demonstrates that traditional financial institutions can successfully modernize and compete with fintech disruptors. By focusing on customer experience, operational efficiency, and regulatory compliance, we created a comprehensive solution that delivered measurable results.

The key to success was treating AI not as a technology solution,. Every AI implementation was designed to solve real customer problems and create tangible business value.

> "This AI transformation has revolutionized how we serve our customers. We've gone from playing catch-up to leading the market in innovation while maintaining the trust and security our customers expect from us." - Chief Technology Officer

The financial services industry will continue to evolve, and institutions that embrace AI-powered transformation today will be best positioned to thrive in the future. This case study provides a blueprint for others looking to undertake similar transformations while maintaining the highest standards of security, compliance, and customer trust.`
    }
  ];

  // Process each case study
  const processedCaseStudies = [];
  for (const { filename, content } of caseStudies) {
    const parsed = parseCaseStudy(content, filename);
    if (parsed) {
      processedCaseStudies.push(parsed);
    }
  }

  // Sort by date (newest first) and featured status
  return processedCaseStudies.sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return new Date(b.date) - new Date(a.date);
  });
};

/**
 * Get a single case study by slug
 * @param {string} slug - Case study slug
 * @returns {Promise<object|null>} Case study object or null if not found
 */
export const getCaseStudy = async (slug) => {
  const caseStudies = await loadCaseStudiesFromFiles();
  return caseStudies.find(cs => cs.slug === slug) || null;
};

/**
 * Generate industries from case studies
 * @param {Array} caseStudies - Array of case study objects
 * @returns {Array} Array of unique industries with 'All' prepended
 */
export const generateCaseStudyIndustries = (caseStudies) => {
  const industries = new Set(['All']);
  caseStudies.forEach(cs => {
    if (cs.industry) {
      industries.add(cs.industry);
    }
  });
  return Array.from(industries);
};

/**
 * Generate case study template for new case studies
 * @param {object} caseStudyData - Case study metadata
 * @returns {string} Markdown template
 */
export const generateCaseStudyTemplate = (caseStudyData = {}) => {
  const {
    title = 'New Case Study',
    excerpt = 'Brief description of the case study and its impact',
    client = 'Client Name',
    industry = 'Technology',
    date = new Date().toISOString().split('T')[0],
    tags = ['Technology'],
    challenge = 'Brief description of the challenge',
    solution = 'Brief description of the solution',
    results = [],
    technologies = ['AI', 'Machine Learning'],
    featured = false,
    slug = generateSlug(title)
  } = caseStudyData;
  
  return `---
title: "${title}"
excerpt: "${excerpt}"
client: "${client}"
industry: "${industry}"
date: "${date}"
tags: [${tags.map(tag => `"${tag}"`).join(', ')}]
challenge: "${challenge}"
solution: "${solution}"
results: [
  { "metric": "50%", "description": "Improvement in key metric" },
  { "metric": "30%", "description": "Reduction in costs" }
]
technologies: [${technologies.map(tech => `"${tech}"`).join(', ')}]
featured: ${featured}
slug: "${slug}"
---

# ${title}

Your case study content goes here. Start with a compelling introduction that explains the client's situation and the challenge they faced.

## The Challenge

Describe the specific challenges your client was facing:

- **Challenge 1**: Description of the first major challenge
- **Challenge 2**: Description of the second challenge
- **Challenge 3**: Additional challenges

## Our Solution

Explain your approach and solution:

### Technical Implementation
````javascript
// Example code or technical details
const solution = {
  approach: "comprehensive AI implementation",
  technologies: ["machine learning", "cloud computing"],
  timeline: "6 months"
};
````

### Key Features
- **Feature 1**: Description of key feature
- **Feature 2**: Description of another feature
- **Feature 3**: Additional important features

## Results and Impact

Detail the measurable results achieved:

### Performance Improvements
- **Metric 1**: Specific improvement with percentage
- **Metric 2**: Another measurable result
- **Metric 3**: Additional impact measurement

### Business Value
Explain the broader business impact of your solution.

## Conclusion

Summarize the key takeaways and success of the project.

> "Quote from the client about the project's success and impact on their business."

Continue with additional sections as needed for your case study...
`;
};

const caseStudyLoader = {
  parseCaseStudy,
  loadCaseStudiesFromFiles,
  getCaseStudy,
  generateCaseStudyIndustries,
  generateCaseStudyTemplate,
  generateSlug
};

export default caseStudyLoader;
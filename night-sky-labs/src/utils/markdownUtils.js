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
      title: "Getting Started with Soul CLI",
      excerpt: "Complete guide to installing, configuring, and using Soul CLI for AI-powered development workflows.",
      content: `<h1>Getting Started with Soul CLI</h1>

<p>Soul CLI is an AI-powered command-line tool that transforms your development workflow by providing intelligent code analysis, automated refactoring, and natural language programming assistance.</p>

<h2>Installation</h2>

<h3>Prerequisites</h3>
<ul>
<li>Node.js 16.0 or higher</li>
<li>npm or yarn package manager</li>
<li>Git (for repository analysis)</li>
</ul>

<h3>Install Soul CLI</h3>

<pre><code># Install globally via npm
npm install -g @nightskylabs/soul-cli

# Or using yarn
yarn global add @nightskylabs/soul-cli

# Verify installation
soul --version</code></pre>

<h2>Initial Setup</h2>

<h3>Authentication</h3>
<pre><code># Login to your NightSkyLabs account
soul auth login

# Verify authentication
soul auth whoami</code></pre>

<h3>Project Configuration</h3>
<pre><code># Initialize Soul in your project
cd your-project
soul init

# This creates a .soul directory with:
# - Configuration files
# - Local AI model cache
# - Project analysis data</code></pre>

<h2>Basic Usage</h2>

<h3>Natural Language Commands</h3>
<p>Soul CLI understands natural language instructions:</p>

<pre><code># Code analysis
soul "analyze this component for performance issues"

# Refactoring
soul "extract this logic into a reusable function"

# Testing
soul "generate unit tests for the authentication module"

# Documentation
soul "add JSDoc comments to all public methods"</code></pre>

<h3>File-Specific Operations</h3>
<pre><code># Analyze specific files
soul analyze src/components/UserProfile.js

# Optimize a file
soul optimize --file src/utils/dataProcessor.js

# Generate tests
soul test --generate src/services/apiClient.js</code></pre>

<h2>Next Steps</h2>

<ul>
<li><a href="#soul-api">API Reference</a> - Complete command reference</li>
<li><a href="#advanced-usage">Advanced Usage</a> - Power user features</li>
<li><a href="#integrations">Integrations</a> - IDE and tool integrations</li>
</ul>`,
      author: "NightSkyLabs Team",
      date: "2025-01-15",
      readTime: "10 min read",
      tags: ["Soul CLI", "Getting Started", "Installation", "Setup"],
      category: "API Reference",
      featured: true,
      difficulty: "Beginner",
      estimatedTime: "10 minutes",
      prerequisites: ["Node.js 16.0 or higher", "Basic command line knowledge"],
      lastUpdated: "2025-01-15"
    },
    {
      id: 'voice-getting-started',
      slug: 'voice-getting-started', 
      title: "Voice Platform Setup",
      excerpt: "Get started with the Voice AI interview platform. Learn setup, configuration, and basic usage.",
      content: `<h1>Voice Platform Setup</h1>

<p>The Voice platform enables AI-powered real-time interviews with natural conversation capabilities.</p>

<h2>Account Setup</h2>

<h3>Create Account</h3>
<ol>
<li>Visit <a href="https://voice.nightskylabs.com">voice.nightskylabs.com</a></li>
<li>Sign up with your email address</li>
<li>Verify your email</li>
<li>Complete organization setup</li>
</ol>

<h3>API Keys</h3>
<pre><code># Get your API key from dashboard
export VOICE_API_KEY="your-api-key-here"

# Test connection
curl -H "Authorization: Bearer $VOICE_API_KEY" \\
  https://api.voice.nightskylabs.com/v1/health</code></pre>

<h2>First Interview</h2>

<h3>Create Interview Template</h3>
<pre><code>{
  "name": "Technical Interview",
  "duration": 30,
  "questions": [
    {
      "type": "technical",
      "topic": "JavaScript",
      "difficulty": "intermediate"
    }
  ],
  "evaluation_criteria": [
    "Technical Knowledge",
    "Problem Solving",
    "Communication"
  ]
}</code></pre>

<h3>Schedule Interview</h3>
<pre><code># Using CLI
voice schedule \\
  --template "Technical Interview" \\
  --candidate "john@example.com" \\
  --date "2025-01-20T10:00:00Z"</code></pre>

<h2>Integration</h2>

<h3>Webhook Setup</h3>
<p>Configure webhooks to receive interview results:</p>

<pre><code>{
  "webhook_url": "https://your-app.com/webhooks/voice",
  "events": ["interview.completed", "interview.scored"],
  "secret": "your-webhook-secret"
}</code></pre>`,
      author: "NightSkyLabs Team",
      date: "2025-01-14",
      readTime: "8 min read",
      tags: ["Voice", "Setup", "API", "Interviews"],
      category: "API Reference", 
      difficulty: "Beginner",
      estimatedTime: "15 minutes",
      prerequisites: ["Basic API knowledge", "Webhook understanding"],
      lastUpdated: "2025-01-14"
    },
    {
      id: 'soul-api',
      slug: 'soul-api',
      title: "Soul CLI API Reference",
      excerpt: "Complete API reference for Soul CLI commands, options, and programmatic usage.",
      content: `<h1>Soul CLI API Reference</h1>

<p>Complete reference for all Soul CLI commands and programmatic API usage.</p>

<h2>Command Line Interface</h2>

<h3>Global Options</h3>
<pre><code>soul [command] [options]

Global Options:
  --version, -v     Show version number
  --help, -h        Show help
  --config, -c      Specify config file path
  --debug, -d       Enable debug mode
  --quiet, -q       Suppress output</code></pre>

<h3>Analysis Commands</h3>

<h4>soul analyze</h4>
<pre><code>soul analyze [files...] [options]

Options:
  --type            Analysis type (security|performance|maintainability)
  --format          Output format (json|text|html)
  --output, -o      Output file path
  --threshold       Quality threshold (0-100)
  --exclude         Exclude patterns</code></pre>

<h4>soul refactor</h4>
<pre><code>soul refactor [options]

Options:
  --suggest         Show refactoring suggestions only
  --apply           Apply suggested refactoring
  --type            Refactoring type (extract|rename|optimize)
  --selection       Code selection (line:start-end)
  --dry-run         Preview changes without applying</code></pre>

<h3>Testing Commands</h3>

<h4>soul test</h4>
<pre><code>soul test [options]

Options:
  --generate        Generate new tests
  --coverage        Target coverage percentage
  --type            Test type (unit|integration|e2e)
  --framework       Test framework (jest|vitest|mocha)
  --output-dir      Test output directory</code></pre>

<h2>Programmatic API</h2>

<h3>Node.js SDK</h3>
<pre><code>const { SoulClient } = require('@nightskylabs/soul-sdk');

const soul = new SoulClient({
  apiKey: process.env.SOUL_API_KEY,
  endpoint: 'https://api.nightskylabs.com'
});

// Analyze code
const analysis = await soul.analyze({
  code: sourceCode,
  language: 'javascript',
  type: 'security'
});

// Generate tests
const tests = await soul.generateTests({
  sourceFile: 'src/utils/parser.js',
  framework: 'jest',
  coverage: 90
});</code></pre>

<h3>REST API</h3>

<h4>Authentication</h4>
<pre><code>curl -X POST https://api.nightskylabs.com/v1/auth/login \\
  -H "Content-Type: application/json" \\
  -d '{"email": "your@email.com", "password": "password"}'</code></pre>

<h4>Code Analysis</h4>
<pre><code>curl -X POST https://api.nightskylabs.com/v1/analyze \\
  -H "Authorization: Bearer $API_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{
    "code": "function example() { return true; }",
    "language": "javascript",
    "analysis_type": "quality"
  }'</code></pre>`,
      author: "NightSkyLabs Team",
      date: "2025-01-12", 
      readTime: "15 min read",
      tags: ["Soul CLI", "API", "Reference", "SDK"],
      category: "API Reference",
      difficulty: "Intermediate",
      estimatedTime: "20 minutes",
      prerequisites: ["Soul CLI installed", "Basic API knowledge"],
      lastUpdated: "2025-01-12"
    },
    {
      id: 'advanced-usage',
      slug: 'advanced-usage',
      title: "Advanced Usage Patterns",
      excerpt: "Advanced techniques and patterns for power users of NightSkyLabs AI tools.",
      content: `<h1>Advanced Usage Patterns</h1>

<p>Advanced techniques for maximizing productivity with NightSkyLabs AI tools.</p>

<h2>Soul CLI Advanced Features</h2>

<h3>Custom Analysis Rules</h3>
<pre><code># .soul/config.json
{
  "rules": {
    "custom-security-check": {
      "pattern": "eval\\(.*\\)",
      "severity": "high",
      "message": "Avoid using eval() for security"
    }
  },
  "rulesets": [
    "@nightskylabs/rules-security",
    "@nightskylabs/rules-performance"
  ]
}</code></pre>

<h3>Batch Processing</h3>
<pre><code># Process multiple projects
find . -name "package.json" -execdir soul analyze \\;

# Generate reports for all services
for service in services/*; do
  soul analyze "$service" --format json > "reports/$(basename $service).json"
done</code></pre>

<h2>Voice Platform Integration</h2>

<h3>Custom Interview Flows</h3>
<pre><code>const interviewFlow = {
  stages: [
    {
      name: "screening",
      questions: [
        {
          type: "open",
          prompt: "Tell me about your experience with {technology}",
          followups: [
            "Can you give a specific example?",
            "What challenges did you face?"
          ]
        }
      ],
      evaluation: {
        criteria: ["relevance", "depth", "communication"],
        weights: [0.4, 0.4, 0.2]
      }
    }
  ]
};</code></pre>

<h3>Real-time Analysis</h3>
<pre><code>// WebSocket connection for live interview analysis
const ws = new WebSocket('wss://api.voice.nightskylabs.com/v1/live');

ws.on('message', (data) => {
  const analysis = JSON.parse(data);
  
  if (analysis.type === 'sentiment') {
    updateInterviewerDashboard(analysis.sentiment);
  }
  
  if (analysis.type === 'technical_assessment') {
    highlightKeyPoints(analysis.key_points);
  }
});</code></pre>

<h2>Workflow Automation</h2>

<h3>CI/CD Integration</h3>
<pre><code># GitHub Actions
name: AI Code Review
on: [pull_request]

jobs:
  ai-review:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Soul CLI Analysis
        run: |
          soul analyze --format json > analysis.json
          soul comment --pr $PR_NUMBER</code></pre>

<h3>Pre-commit Hooks</h3>
<pre><code># .pre-commit-config.yaml
repos:
  - repo: local
    hooks:
      - id: soul-analyze
        name: Soul AI Analysis
        entry: soul analyze --staged --fail-on-issues
        language: system
        pass_filenames: false</code></pre>`,
      author: "NightSkyLabs Team",
      date: "2025-01-10",
      readTime: "20 min read", 
      tags: ["Advanced", "Automation", "Integration", "Workflows"],
      category: "Guides",
      difficulty: "Advanced",
      estimatedTime: "30 minutes",
      prerequisites: ["Basic tool knowledge", "CI/CD experience", "Webhook setup"],
      lastUpdated: "2025-01-10"
    }
  ],
  help: [
    {
      id: 'troubleshooting-common-issues',
      slug: 'troubleshooting-common-issues',
      title: "Troubleshooting Common Issues with NightSkyLabs Products",
      excerpt: "Quick solutions to the most frequently encountered issues across Soul CLI, Voice platform, and Qurious learning system.",
      content: `<h1>Troubleshooting Common Issues</h1>

<p>This comprehensive guide covers the most common issues users encounter with NightSkyLabs products and provides step-by-step solutions to resolve them quickly.</p>

<h2>Soul CLI Issues</h2>

<h3>Installation Problems</h3>

<h4>Error: Command not found</h4>
<p><strong>Problem:</strong> After installation, the <code>soul</code> command is not recognized.</p>
<p><strong>Solution:</strong></p>
<ol>
<li>Verify installation: <code>npm list -g @nightskylabs/soul-cli</code></li>
<li>Check PATH: <code>echo $PATH</code></li>
<li>Reinstall globally: <code>npm install -g @nightskylabs/soul-cli</code></li>
<li>Restart terminal</li>
</ol>

<h4>Permission Denied Errors</h4>
<p><strong>Problem:</strong> Getting permission errors during installation or usage.</p>
<p><strong>Solution:</strong></p>
<ol>
<li>Use npm with proper permissions: <code>sudo npm install -g @nightskylabs/soul-cli</code></li>
<li>Or configure npm to use a different directory</li>
<li>For macOS/Linux: Check file ownership with <code>ls -la</code></li>
</ol>

<h3>Authentication Issues</h3>

<h4>Login Failures</h4>
<p><strong>Problem:</strong> Cannot authenticate with NightSkyLabs account.</p>
<p><strong>Solutions:</strong></p>
<ul>
<li>Verify credentials are correct</li>
<li>Clear auth cache: <code>soul auth logout && soul auth login</code></li>
<li>Check network connectivity</li>
<li>Ensure account is active and verified</li>
</ul>

<h2>Voice Platform Issues</h2>

<h3>Audio Problems</h3>

<h4>No Audio Input/Output</h4>
<p><strong>Problem:</strong> Interview participants cannot hear each other or audio is not recorded.</p>
<p><strong>Solutions:</strong></p>
<ol>
<li>Check browser microphone permissions</li>
<li>Test audio devices in browser settings</li>
<li>Use Chrome or Firefox (recommended browsers)</li>
<li>Close other applications using microphone</li>
<li>Restart browser and try again</li>
</ol>

<h4>Poor Audio Quality</h4>
<p><strong>Problem:</strong> Audio is choppy, delayed, or low quality.</p>
<p><strong>Solutions:</strong></p>
<ul>
<li>Check internet connection speed (minimum 1 Mbps recommended)</li>
<li>Use wired internet connection instead of WiFi</li>
<li>Close bandwidth-heavy applications</li>
<li>Use headphones to prevent echo</li>
</ul>

<h3>Connection Issues</h3>

<h4>Interview Room Won't Load</h4>
<p><strong>Problem:</strong> Cannot join or create interview rooms.</p>
<p><strong>Solutions:</strong></p>
<ol>
<li>Check API key validity</li>
<li>Verify account subscription status</li>
<li>Clear browser cache and cookies</li>
<li>Try incognito/private browsing mode</li>
<li>Check firewall and corporate proxy settings</li>
</ol>

<h2>Qurious Learning Platform</h2>

<h3>Content Loading Issues</h3>

<h4>Courses Not Loading</h4>
<p><strong>Problem:</strong> Learning content fails to load or appears broken.</p>
<p><strong>Solutions:</strong></p>
<ul>
<li>Refresh the page</li>
<li>Clear browser cache</li>
<li>Check internet connection</li>
<li>Try different browser</li>
<li>Disable browser extensions temporarily</li>
</ul>

<h4>Progress Not Saving</h4>
<p><strong>Problem:</strong> Learning progress is lost or not tracking correctly.</p>
<p><strong>Solutions:</strong></p>
<ol>
<li>Ensure you're logged in to your account</li>
<li>Complete lessons fully before navigating away</li>
<li>Check browser cookies are enabled</li>
<li>Contact support if progress data is corrupted</li>
</ol>

<h2>General Account Issues</h2>

<h3>Billing and Subscription</h3>

<h4>Payment Failed</h4>
<p><strong>Problem:</strong> Credit card payment was declined.</p>
<p><strong>Solutions:</strong></p>
<ul>
<li>Verify card details and expiration date</li>
<li>Check with your bank for transaction blocks</li>
<li>Try a different payment method</li>
<li>Contact our billing support</li>
</ul>

<h4>Subscription Not Active</h4>
<p><strong>Problem:</strong> Premium features are not accessible.</p>
<p><strong>Solutions:</strong></p>
<ol>
<li>Check subscription status in account settings</li>
<li>Verify payment processed successfully</li>
<li>Wait up to 10 minutes for activation</li>
<li>Contact support with payment reference</li>
</ol>

<h2>Getting More Help</h2>

<p>If these solutions don't resolve your issue:</p>

<ol>
<li><strong>Check Service Status:</strong> Visit our status page for known outages</li>
<li><strong>Search Documentation:</strong> Browse our complete documentation</li>
<li><strong>Contact Support:</strong> Submit a support ticket with:
   <ul>
   <li>Detailed description of the problem</li>
   <li>Steps to reproduce the issue</li>
   <li>Screenshots or error messages</li>
   <li>Your operating system and browser version</li>
   </ul>
</li>
<li><strong>Community Forum:</strong> Ask questions and get help from other users</li>
</ol>

<h3>Support Channels</h3>
<ul>
<li><strong>Email:</strong> support@nightskylabs.com (24-48 hour response)</li>
<li><strong>Live Chat:</strong> Available Monday-Friday, 9 AM - 6 PM PST</li>
<li><strong>Community:</strong> community.nightskylabs.com</li>
<li><strong>Status Page:</strong> status.nightskylabs.com</li>
</ul>`,
      author: "Support Team",
      date: "2025-01-14",
      readTime: "8 min read",
      tags: ["Troubleshooting", "Support", "Soul CLI", "Voice", "Qurious"],
      category: "Troubleshooting",
      priority: "high",
      lastUpdated: "2025-01-14",
      helpType: "Troubleshooting"
    },
    {
      id: 'account-setup-guide',
      slug: 'account-setup-guide',
      title: "Account Setup and Getting Started Guide",
      excerpt: "Complete walkthrough for setting up your NightSkyLabs account and getting started with our AI products.",
      content: `<h1>Account Setup and Getting Started Guide</h1>

<p>Welcome to NightSkyLabs! This guide will walk you through setting up your account and getting started with our AI-powered tools.</p>

<h2>Creating Your Account</h2>

<h3>Sign Up Process</h3>
<ol>
<li>Visit <a href="https://nightskylabs.com/signup">nightskylabs.com/signup</a></li>
<li>Enter your email address and create a secure password</li>
<li>Choose your account type (Individual, Team, or Enterprise)</li>
<li>Verify your email address by clicking the confirmation link</li>
<li>Complete your profile setup</li>
</ol>

<h3>Account Verification</h3>
<p>For security purposes, new accounts require verification:</p>
<ul>
<li><strong>Email Verification:</strong> Click the link sent to your email</li>
<li><strong>Phone Verification:</strong> Add and verify your phone number (optional but recommended)</li>
<li><strong>Identity Verification:</strong> Required for Enterprise accounts</li>
</ul>

<h2>Choosing Your Plan</h2>

<h3>Individual Plan</h3>
<ul>
<li>Perfect for personal projects and learning</li>
<li>Access to all basic features</li>
<li>Community support</li>
<li>Usage limits apply</li>
</ul>

<h3>Team Plan</h3>
<ul>
<li>Collaboration features</li>
<li>Higher usage limits</li>
<li>Priority support</li>
<li>Team management tools</li>
</ul>

<h3>Enterprise Plan</h3>
<ul>
<li>Custom usage limits</li>
<li>Dedicated support</li>
<li>Advanced security features</li>
<li>Custom integrations</li>
</ul>

<h2>Setting Up API Access</h2>

<h3>Generating API Keys</h3>
<ol>
<li>Log in to your account dashboard</li>
<li>Navigate to "API Keys" in the settings</li>
<li>Click "Generate New Key"</li>
<li>Name your key (e.g., "Development", "Production")</li>
<li>Copy and securely store your API key</li>
</ol>

<p><strong>Important:</strong> API keys are only shown once. Store them securely and never share them publicly.</p>

<h3>API Key Security</h3>
<ul>
<li>Use environment variables to store keys</li>
<li>Never commit keys to version control</li>
<li>Regularly rotate your API keys</li>
<li>Use different keys for different environments</li>
</ul>

<h2>Getting Started with Each Product</h2>

<h3>Soul CLI Setup</h3>
<p>Install and configure Soul CLI for AI-powered development:</p>
<pre><code># Install Soul CLI globally
npm install -g @nightskylabs/soul-cli

# Authenticate with your account
soul auth login

# Initialize in your project
cd your-project
soul init

# Start using Soul CLI
soul "analyze code quality"</code></pre>

<h3>Voice Platform Setup</h3>
<p>Configure the Voice AI interview platform:</p>
<ol>
<li>Access the Voice dashboard in your account</li>
<li>Create your first interview template</li>
<li>Configure evaluation criteria</li>
<li>Set up webhook endpoints (optional)</li>
<li>Schedule your first interview</li>
</ol>

<h3>Qurious Learning Platform</h3>
<p>Get started with AI-powered personalized learning:</p>
<ol>
<li>Complete the learning assessment</li>
<li>Choose your learning goals</li>
<li>Select your first learning path</li>
<li>Configure learning preferences</li>
<li>Start your first lesson</li>
</ol>

<h2>Account Management</h2>

<h3>Profile Settings</h3>
<p>Keep your profile updated:</p>
<ul>
<li><strong>Personal Information:</strong> Name, email, phone</li>
<li><strong>Preferences:</strong> Notifications, timezone, language</li>
<li><strong>Security:</strong> Two-factor authentication, password</li>
<li><strong>Billing:</strong> Payment methods, billing address</li>
</ul>

<h3>Team Management</h3>
<p>For Team and Enterprise accounts:</p>
<ul>
<li>Invite team members</li>
<li>Set role-based permissions</li>
<li>Manage shared resources</li>
<li>Monitor team usage</li>
</ul>

<h2>Security Best Practices</h2>

<h3>Account Security</h3>
<ul>
<li><strong>Strong Password:</strong> Use a unique, complex password</li>
<li><strong>Two-Factor Authentication:</strong> Enable 2FA for additional security</li>
<li><strong>Regular Reviews:</strong> Monitor account activity regularly</li>
<li><strong>Secure Access:</strong> Only access your account from trusted devices</li>
</ul>

<h3>API Security</h3>
<ul>
<li>Keep API keys confidential</li>
<li>Use HTTPS for all API requests</li>
<li>Implement proper error handling</li>
<li>Monitor API usage for anomalies</li>
</ul>

<h2>Getting Help</h2>

<p>If you need assistance during setup:</p>

<ul>
<li><strong>Documentation:</strong> Browse our comprehensive docs</li>
<li><strong>Video Tutorials:</strong> Watch step-by-step setup guides</li>
<li><strong>Community Forum:</strong> Get help from other users</li>
<li><strong>Support Chat:</strong> Contact our support team directly</li>
</ul>

<p>Welcome to NightSkyLabs! We're excited to help you build amazing AI-powered applications.</p>`,
      author: "Onboarding Team",
      date: "2025-01-15",
      readTime: "12 min read",
      tags: ["Getting Started", "Account Setup", "API Keys", "Security"],
      category: "Getting Started",
      priority: "medium",
      lastUpdated: "2025-01-15",
      helpType: "Getting Started"
    },
    {
      id: 'billing-faq',
      slug: 'billing-faq',
      title: "Billing and Subscription FAQ",
      excerpt: "Common questions about billing, subscriptions, payments, and account management for NightSkyLabs services.",
      content: `<h1>Billing and Subscription FAQ</h1>

<p>Find answers to the most common questions about billing, subscriptions, and account management.</p>

<h2>Subscription Plans</h2>

<h3>What's included in each plan?</h3>

<h4>Starter Plan ($19/month)</h4>
<ul>
<li>All basic AI tools access</li>
<li>5,000 API calls per month</li>
<li>Community support</li>
<li>Basic analytics</li>
</ul>

<h4>Pro Plan ($49/month)</h4>
<ul>
<li>Everything in Starter</li>
<li>25,000 API calls per month</li>
<li>Team collaboration features</li>
<li>Priority support</li>
<li>Advanced analytics</li>
<li>Up to 5 team members</li>
</ul>

<h4>Enterprise Plan (Custom pricing)</h4>
<ul>
<li>Everything in Pro</li>
<li>Custom API limits</li>
<li>Dedicated support</li>
<li>Custom integrations</li>
<li>SLA guarantees</li>
<li>Unlimited team members</li>
</ul>

<h3>Can I change plans anytime?</h3>
<p>Yes! You can upgrade or downgrade your plan at any time:</p>
<ul>
<li><strong>Upgrades:</strong> Take effect immediately</li>
<li><strong>Downgrades:</strong> Take effect at the next billing cycle</li>
<li><strong>Prorated Billing:</strong> You'll be charged/credited the difference</li>
</ul>

<h2>Payment and Billing</h2>

<h3>What payment methods do you accept?</h3>
<ul>
<li>Credit cards (Visa, MasterCard, American Express)</li>
<li>Debit cards</li>
<li>PayPal</li>
<li>Bank transfers (Enterprise only)</li>
<li>Purchase orders (Enterprise only)</li>
</ul>

<h3>When am I charged?</h3>
<ul>
<li><strong>Monthly plans:</strong> Charged on the same day each month</li>
<li><strong>Annual plans:</strong> Charged once per year (15% discount)</li>
<li><strong>Usage overages:</strong> Billed at the end of the billing cycle</li>
</ul>

<h3>Can I get a refund?</h3>
<p>We offer refunds under these conditions:</p>
<ul>
<li><strong>30-day money-back guarantee</strong> for new subscriptions</li>
<li><strong>Prorated refunds</strong> for downgrades</li>
<li><strong>Service credit</strong> for extended outages</li>
<li><strong>No refunds</strong> for usage-based charges</li>
</ul>

<h2>Usage and Limits</h2>

<h3>What happens if I exceed my limits?</h3>
<ul>
<li><strong>API calls:</strong> Service continues at pay-per-use rates</li>
<li><strong>Storage:</strong> Additional storage billed monthly</li>
<li><strong>Team members:</strong> Extra seats charged per user</li>
</ul>

<h3>How do I monitor my usage?</h3>
<p>Track your usage in the account dashboard:</p>
<ol>
<li>Log in to your account</li>
<li>Go to "Usage & Billing"</li>
<li>View current period usage</li>
<li>Set up usage alerts</li>
</ol>

<h2>Account Management</h2>

<h3>How do I update my billing information?</h3>
<ol>
<li>Log in to your account</li>
<li>Go to "Billing Settings"</li>
<li>Click "Update Payment Method"</li>
<li>Enter new card details</li>
<li>Save changes</li>
</ol>

<h3>Can I pause my subscription?</h3>
<p>We don't offer subscription pausing, but you can:</p>
<ul>
<li><strong>Downgrade</strong> to a lower plan</li>
<li><strong>Cancel</strong> and resubscribe later</li>
<li><strong>Annual billing</strong> for better rates</li>
</ul>

<h3>How do I cancel my subscription?</h3>
<ol>
<li>Log in to your account</li>
<li>Go to "Subscription Settings"</li>
<li>Click "Cancel Subscription"</li>
<li>Confirm cancellation</li>
<li>Access continues until the end of the billing period</li>
</ol>

<h2>Invoicing and Receipts</h2>

<h3>How do I get receipts?</h3>
<ul>
<li><strong>Automatic emails:</strong> Sent after each payment</li>
<li><strong>Download portal:</strong> Available in account settings</li>
<li><strong>Bulk download:</strong> Export all receipts for tax purposes</li>
</ul>

<h3>Can I get custom invoices?</h3>
<p>Enterprise customers can request:</p>
<ul>
<li>Custom PO numbers</li>
<li>Specific billing addresses</li>
<li>Department codes</li>
<li>Custom payment terms</li>
</ul>

<h2>Tax Information</h2>

<h3>Do you charge taxes?</h3>
<ul>
<li><strong>US customers:</strong> Sales tax based on billing address</li>
<li><strong>EU customers:</strong> VAT included in pricing</li>
<li><strong>Other countries:</strong> Local taxes may apply</li>
</ul>

<h3>How do I add tax exemption?</h3>
<p>For tax-exempt organizations:</p>
<ol>
<li>Contact our billing team</li>
<li>Provide tax exemption certificate</li>
<li>We'll update your account</li>
<li>Future invoices will be tax-free</li>
</ol>

<h2>Enterprise Billing</h2>

<h3>What are the Enterprise payment terms?</h3>
<ul>
<li><strong>Payment terms:</strong> Net 30 days</li>
<li><strong>Payment methods:</strong> Wire transfer, ACH, check</li>
<li><strong>Invoicing:</strong> Monthly or annually</li>
<li><strong>Contracts:</strong> Annual commitments available</li>
</ul>

<h3>Do you offer volume discounts?</h3>
<p>Yes! Enterprise discounts based on:</p>
<ul>
<li>Annual contract commitment</li>
<li>Usage volume</li>
<li>Number of seats</li>
<li>Multi-year agreements</li>
</ul>

<h2>Still Have Questions?</h2>

<p>Contact our billing support team:</p>
<ul>
<li><strong>Email:</strong> billing@nightskylabs.com</li>
<li><strong>Phone:</strong> 1-800-NIGHTSKY (Enterprise only)</li>
<li><strong>Chat:</strong> Available in your account dashboard</li>
<li><strong>Hours:</strong> Monday-Friday, 9 AM - 6 PM PST</li>
</ul>`,
      author: "Billing Team",
      date: "2025-01-12",
      readTime: "6 min read",
      tags: ["Billing", "Subscription", "Payment", "FAQ", "Pricing"],
      category: "Billing & Account",
      priority: "medium",
      lastUpdated: "2025-01-12",
      helpType: "FAQ"
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
  // Import the dynamic blog loader
  const { loadBlogPostsFromFiles } = await import('./blogLoader');
  return loadBlogPostsFromFiles();
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
 * Get documentation by section ID
 * @param {string} sectionId - Section identifier
 * @returns {Promise<object|null>} Documentation section or null
 */
export const getDocumentationSection = async (sectionId) => {
  const docs = await loadDocumentation();
  return docs.find(doc => doc.id === sectionId) || null;
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

const markdownUtils = {
  parseMarkdown,
  loadBlogPosts,
  getBlogPost,
  generatePostTemplate
};

export default markdownUtils;
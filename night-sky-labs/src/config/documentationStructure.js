/**
 * Product-Specific Documentation Structure
 * Following industry best practices from Stripe, Atlassian, GitHub, and Notion
 */

// Product-specific documentation hierarchy
export const PRODUCT_DOCUMENTATION = {
  soul: {
    id: 'soul',
    name: 'Soul CLI',
    description: 'AI-Powered Coding CLI Tool',
    slug: 'soul',
    icon: 'terminal',
    sections: [
      {
        id: 'getting-started',
        title: 'Getting Started',
        type: 'guide',
        order: 1,
        pages: [
          { id: 'installation', title: 'Installation', order: 1 },
          { id: 'quick-start', title: 'Quick Start', order: 2 },
          { id: 'first-project', title: 'Your First Project', order: 3 },
          { id: 'authentication', title: 'Authentication', order: 4 }
        ]
      },
      {
        id: 'guides',
        title: 'Guides',
        type: 'tutorial',
        order: 2,
        pages: [
          { id: 'code-generation', title: 'AI Code Generation', order: 1 },
          { id: 'debugging', title: 'AI-Assisted Debugging', order: 2 },
          { id: 'refactoring', title: 'Code Refactoring', order: 3 },
          { id: 'testing', title: 'Test Generation', order: 4 },
          { id: 'documentation', title: 'Auto Documentation', order: 5 }
        ]
      },
      {
        id: 'api-reference',
        title: 'API Reference',
        type: 'reference',
        order: 3,
        pages: [
          { id: 'commands', title: 'CLI Commands', order: 1 },
          { id: 'configuration', title: 'Configuration', order: 2 },
          { id: 'plugins', title: 'Plugins API', order: 3 },
          { id: 'webhooks', title: 'Webhooks', order: 4 }
        ]
      },
      {
        id: 'integrations',
        title: 'Integrations',
        type: 'guide',
        order: 4,
        pages: [
          { id: 'vscode', title: 'VS Code Extension', order: 1 },
          { id: 'jetbrains', title: 'JetBrains IDEs', order: 2 },
          { id: 'github', title: 'GitHub Integration', order: 3 },
          { id: 'gitlab', title: 'GitLab Integration', order: 4 }
        ]
      }
    ]
  },
  voice: {
    id: 'voice',
    name: 'Voice Platform',
    description: 'Realtime AI Interview Tool',
    slug: 'voice',
    icon: 'microphone',
    sections: [
      {
        id: 'getting-started',
        title: 'Getting Started',
        type: 'guide',
        order: 1,
        pages: [
          { id: 'setup', title: 'Platform Setup', order: 1 },
          { id: 'account-config', title: 'Account Configuration', order: 2 },
          { id: 'first-interview', title: 'Your First Interview', order: 3 },
          { id: 'user-management', title: 'User Management', order: 4 }
        ]
      },
      {
        id: 'interview-management',
        title: 'Interview Management',
        type: 'guide',
        order: 2,
        pages: [
          { id: 'creating-interviews', title: 'Creating Interviews', order: 1 },
          { id: 'question-banks', title: 'Question Banks', order: 2 },
          { id: 'ai-evaluation', title: 'AI Evaluation', order: 3 },
          { id: 'scoring-rubrics', title: 'Scoring Rubrics', order: 4 },
          { id: 'candidate-experience', title: 'Candidate Experience', order: 5 }
        ]
      },
      {
        id: 'api-reference',
        title: 'API Reference',
        type: 'reference',
        order: 3,
        pages: [
          { id: 'authentication', title: 'Authentication', order: 1 },
          { id: 'interviews', title: 'Interviews API', order: 2 },
          { id: 'candidates', title: 'Candidates API', order: 3 },
          { id: 'results', title: 'Results API', order: 4 },
          { id: 'webhooks', title: 'Webhooks', order: 5 }
        ]
      },
      {
        id: 'analytics',
        title: 'Analytics & Reporting',
        type: 'guide',
        order: 4,
        pages: [
          { id: 'dashboard', title: 'Analytics Dashboard', order: 1 },
          { id: 'custom-reports', title: 'Custom Reports', order: 2 },
          { id: 'data-export', title: 'Data Export', order: 3 },
          { id: 'integrations', title: 'Analytics Integrations', order: 4 }
        ]
      }
    ]
  },
  qurious: {
    id: 'qurious',
    name: 'Qurious Platform',
    description: 'Personalized AI Learning Platform',
    slug: 'qurious',
    icon: 'academic-cap',
    sections: [
      {
        id: 'getting-started',
        title: 'Getting Started',
        type: 'guide',
        order: 1,
        pages: [
          { id: 'platform-overview', title: 'Platform Overview', order: 1 },
          { id: 'institution-setup', title: 'Institution Setup', order: 2 },
          { id: 'course-creation', title: 'Creating Your First Course', order: 3 },
          { id: 'student-enrollment', title: 'Student Enrollment', order: 4 }
        ]
      },
      {
        id: 'content-creation',
        title: 'Content Creation',
        type: 'guide',
        order: 2,
        pages: [
          { id: 'course-design', title: 'Course Design', order: 1 },
          { id: 'ai-tutoring', title: 'AI Tutoring Setup', order: 2 },
          { id: 'assessment-creation', title: 'Creating Assessments', order: 3 },
          { id: 'multimedia-content', title: 'Multimedia Content', order: 4 },
          { id: 'adaptive-learning', title: 'Adaptive Learning Paths', order: 5 }
        ]
      },
      {
        id: 'api-reference',
        title: 'API Reference',
        type: 'reference',
        order: 3,
        pages: [
          { id: 'authentication', title: 'Authentication', order: 1 },
          { id: 'courses', title: 'Courses API', order: 2 },
          { id: 'students', title: 'Students API', order: 3 },
          { id: 'progress', title: 'Progress Tracking', order: 4 },
          { id: 'analytics', title: 'Analytics API', order: 5 }
        ]
      },
      {
        id: 'administration',
        title: 'Administration',
        type: 'guide',
        order: 4,
        pages: [
          { id: 'user-roles', title: 'User Roles & Permissions', order: 1 },
          { id: 'institutional-settings', title: 'Institutional Settings', order: 2 },
          { id: 'data-privacy', title: 'Data Privacy & Security', order: 3 },
          { id: 'integrations', title: 'LMS Integrations', order: 4 }
        ]
      }
    ]
  }
};

// Navigation structure for documentation
export const DOC_NAVIGATION = {
  main: [
    { id: 'overview', title: 'Overview', href: '/docs' },
    { id: 'soul', title: 'Soul CLI', href: '/docs/soul' },
    { id: 'voice', title: 'Voice Platform', href: '/docs/voice' },
    { id: 'qurious', title: 'Qurious Platform', href: '/docs/qurious' }
  ],
  footer: [
    { id: 'changelog', title: 'Changelog', href: '/docs/changelog' },
    { id: 'support', title: 'Support', href: '/docs/support' },
    { id: 'community', title: 'Community', href: '/community' }
  ]
};

// Breadcrumb generation helper
export const generateBreadcrumbs = (productId, sectionId, pageId) => {
  const breadcrumbs = [
    { title: 'Documentation', href: '/docs' }
  ];

  if (productId && PRODUCT_DOCUMENTATION[productId]) {
    const product = PRODUCT_DOCUMENTATION[productId];
    breadcrumbs.push({
      title: product.name,
      href: `/docs/${product.slug}`
    });

    if (sectionId) {
      const section = product.sections.find(s => s.id === sectionId);
      if (section) {
        breadcrumbs.push({
          title: section.title,
          href: `/docs/${product.slug}/${section.id}`
        });

        if (pageId) {
          const page = section.pages?.find(p => p.id === pageId);
          if (page) {
            breadcrumbs.push({
              title: page.title,
              href: `/docs/${product.slug}/${section.id}/${page.id}`
            });
          }
        }
      }
    }
  }

  return breadcrumbs;
};

// Get flattened page structure for search
export const getFlattenedPages = () => {
  const pages = [];
  
  Object.values(PRODUCT_DOCUMENTATION).forEach(product => {
    product.sections.forEach(section => {
      if (section.pages) {
        section.pages.forEach(page => {
          pages.push({
            ...page,
            productId: product.id,
            productName: product.name,
            sectionId: section.id,
            sectionTitle: section.title,
            fullPath: `/docs/${product.slug}/${section.id}/${page.id}`
          });
        });
      }
    });
  });
  
  return pages;
};

// Documentation metadata
export const DOC_META = {
  title: 'NightSkyLabs Documentation',
  description: 'Comprehensive documentation for Soul CLI, Voice Platform, and Qurious Learning Platform',
  keywords: ['AI', 'documentation', 'CLI', 'interview', 'learning', 'platform'],
  author: 'NightSkyLabs',
  version: '1.0.0'
};
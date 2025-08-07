# NightSkyLabs React Application

A modern, maintainable React application showcasing AI products and services with a comprehensive content management system.

## 📁 Project Structure

```
src/
├── components/           # All React components
│   ├── common/          # Shared/reusable components
│   │   ├── layout/      # Layout components (Navigation, Footer, etc.)
│   │   └── ui/          # Basic UI components (Button, Card, etc.)
│   ├── features/        # Feature-specific components
│   │   ├── blog/        # Blog system components
│   │   ├── case-studies/# Case studies components
│   │   ├── documentation/# Documentation components
│   │   ├── help/        # Help center components
│   │   └── research/    # Research components
│   └── templates/       # Page templates for consistency
├── constants/           # Application constants
│   └── design.js        # Design system constants
├── content/             # Markdown content files
│   ├── blog/           # Blog articles
│   ├── case-studies/   # Case study content
│   ├── documentation/  # Technical documentation
│   └── help/           # Help articles
├── data/               # Static data and configuration
├── hooks/              # Custom React hooks
├── pages/              # Page components
├── types/              # Type definitions and schemas
├── utils/              # Utility functions
└── views/              # View components
```

## 🏗️ Architecture Principles

### Component Organization
- **Common**: Reusable components across the application
- **Features**: Domain-specific components grouped by functionality
- **Templates**: Page-level templates for consistency
- **Pages**: Route-level components with minimal logic

### Data Management
- **Centralized data**: All data in `/data` directory
- **Type safety**: Schemas in `/types` for validation
- **Content-driven**: Markdown files for easy content management
- **Unified interfaces**: Consistent data structures across features

### Code Reusability
- **Custom hooks**: Shared logic extraction (e.g., `useContentContainer`)
- **Generic components**: Reusable UI patterns
- **Design system**: Consistent styling through constants
- **Template patterns**: Reduce duplication across similar pages

## 🔧 Key Features

### Content Management System
- **Markdown-based**: Easy content editing without code changes
- **Image support**: Built-in image handling and optimization
- **Search & filter**: Full-text search with category filtering
- **Pagination**: Configurable pagination for large content sets

### Design System
- **Consistent styling**: Centralized design tokens
- **Responsive design**: Mobile-first approach
- **Accessibility**: ARIA-compliant components
- **Performance**: Optimized loading and rendering

### Developer Experience
- **Hot reload**: Fast development with live updates
- **Type safety**: Runtime validation with schemas
- **Code splitting**: Optimized bundle sizes
- **Error boundaries**: Graceful error handling

## 🚀 Getting Started

### Prerequisites
- Node.js 16.0 or higher
- npm or yarn package manager

### Installation
```bash
npm install
```

### Development
```bash
npm start
```

### Building
```bash
npm run build
```

### Testing
```bash
npm test
```

## 📝 Adding Content

### Blog Posts
1. Create a new `.md` file in `src/content/blog/`
2. Add frontmatter with metadata:
```yaml
---
title: "Your Post Title"
excerpt: "Brief description"
author: "Author Name"
date: "2025-01-15"
tags: ["tag1", "tag2"]
category: "Technology"
featured: false
image: "optional-image.jpg"
---
```
3. Write content in Markdown
4. The post will automatically appear in the blog

### Other Content Types
Follow the same pattern for:
- Research articles (`src/content/research/`)
- Case studies (`src/content/case-studies/`)
- Documentation (`src/content/documentation/`)
- Help articles (`src/content/help/`)

## 🎨 Styling Guide

### Using Design System
```javascript
import { COLORS, SPACING, TYPOGRAPHY } from '../constants/design';

// Use consistent values
const styles = {
  color: COLORS.primary.black,
  margin: SPACING.lg,
  fontSize: TYPOGRAPHY.fontSize.xl
};
```

### Component Styling
- Use Tailwind CSS classes for consistency
- Follow BEM naming for custom CSS
- Maintain consistent spacing using design tokens
- Ensure responsive behavior across all components

## 🔌 Extending the System

### Adding New Features
1. Create feature directory in `src/components/features/`
2. Follow existing patterns for containers and components
3. Add data schema to `src/types/content.js`
4. Create content directory in `src/content/`
5. Export components in feature index file

### Creating New Page Templates
1. Add template to `src/components/templates/`
2. Extract common patterns from existing pages
3. Use configuration objects for content
4. Maintain consistent structure and styling

### Adding New Content Types
1. Define schema in `src/types/content.js`
2. Create data file in `src/data/`
3. Build container component using `useContentContainer` hook
4. Add content directory structure

## 📋 Best Practices

### Component Development
- **Single responsibility**: Each component has one clear purpose
- **Props validation**: Use schemas for type checking
- **Error handling**: Implement proper error boundaries
- **Performance**: Optimize with React.memo and useMemo where needed

### Content Management
- **Consistent metadata**: Use standard frontmatter fields
- **SEO optimization**: Include meta tags and descriptions
- **Image optimization**: Compress images and use appropriate formats
- **Accessibility**: Include alt text and proper headings

### Code Quality
- **Consistent naming**: Follow established naming conventions
- **Import organization**: Use barrel exports for cleaner imports
- **Comment documentation**: Document complex logic and APIs
- **Performance monitoring**: Track bundle size and loading performance

## 🔍 Troubleshooting

### Common Issues
- **Import errors**: Check file paths after component reorganization
- **Missing content**: Verify markdown files are in correct directories
- **Styling issues**: Ensure Tailwind classes are available
- **Build failures**: Check for unused imports and syntax errors

### Performance Optimization
- **Bundle analysis**: Use webpack-bundle-analyzer to identify large dependencies
- **Image optimization**: Implement next-gen formats (WebP, AVIF)
- **Code splitting**: Split large components into smaller chunks
- **Caching**: Implement appropriate caching strategies

## 📚 Additional Resources

- [React Documentation](https://reactjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Markdown Guide](https://www.markdownguide.org/)
- [Web Accessibility](https://www.w3.org/WAI/WCAG21/quickref/)

## 🤝 Contributing

1. Follow the established architecture patterns
2. Add tests for new components
3. Update documentation for changes
4. Ensure responsive design compliance
5. Maintain accessibility standards

This documentation provides a comprehensive guide to maintaining and extending the NightSkyLabs React application efficiently and consistently.
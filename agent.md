# Agent Development Context

## Project Overview

**NightSkyLabs** is an AI product development and consulting company with a React-based website showcasing three core products and comprehensive AI consulting services. The project emphasizes ultra-minimal design and professional enterprise presentation.

## Architecture

### Technology Stack
- **Frontend**: React 18 + React Router DOM 6
- **Styling**: Tailwind CSS 3 with custom design system
- **Build Tool**: Create React App (react-scripts)
- **Performance**: Lazy loading, code splitting, error boundaries

### Project Structure
```
nightskylabs/
└── night-sky-labs/
    ├── src/
    │   ├── components/
    │   │   ├── shared/          # Navigation, Footer, HeroSection, etc.
    │   │   └── products/        # Product-specific demo components
    │   ├── pages/               # 20+ route-based pages
    │   │   └── services/        # 8 specialized service pages
    │   ├── hooks/               # Custom React hooks
    │   ├── styles/              # Global CSS and Tailwind imports
    │   └── views/               # Main view components (HomeView)
    ├── public/                  # Static assets including background videos
    ├── tailwind.config.js       # Custom design tokens
    └── simple-hello-world.html  # Standalone HTML version
```

## Core Products

### 1. Soul - AI Coding CLI Tool
- **Target**: Software developers and development teams  
- **Features**: AI-powered command-line interface for coding assistance
- **Page**: `/soul` - SoulPage.js with installation demo and code examples

### 2. Voice - Realtime Interview Tool  
- **Target**: HR teams and recruitment agencies
- **Features**: AI-driven voice interview platform with candidate analysis
- **Page**: `/voice` - VoicePage.js with demo interface and feature showcase

### 3. Qurious - Personalized AI Learning Platform
- **Target**: Educational institutions and learners
- **Features**: Adaptive learning system with AI tutoring capabilities  
- **Page**: `/qurious` - QuriousPage.js with interactive learning demo

## Services Portfolio

The platform offers 8 specialized AI consulting services:
- AI Strategy (`/services/ai-strategy`)
- Automation Design (`/services/automation-design`)  
- Behavioral Analysis (`/services/behavioral-analysis`)
- System Integration (`/services/system-integration`)
- Custom Development (`/services/custom-development`)
- Technical Integration (`/services/technical-integration`)
- Deployment Optimization (`/services/deployment-optimization`)
- Performance Analysis (`/services/performance-analysis`)

## Design System

### Color Palette
```css
/* Strict black and white only */
black: "#000000"
white: "#ffffff"
gray variants: Tailwind's default gray scale
```

### Typography Hierarchy
```css
/* Google Fonts Stack */
font-display: ['Poppins'] - Hero headlines (Black 900)
font-body: ['"DM Sans"'] - Body text (Regular/Medium)  
font-ui: ['Inter'] - Navigation and UI elements

/* Custom Font Sizes */
hero: ['5rem', { lineHeight: '0.9' }]     # Mobile headlines
hero-lg: ['8rem', { lineHeight: '0.9' }]  # Desktop headlines
```

### Component Patterns

#### Navigation Structure
- **Desktop**: Horizontal nav with dropdown menus for Products, Company, Resources
- **Mobile**: Slide-out menu with organized sections
- **Brand**: Simple "NightSkyLabs" text logo

#### Page Layout Pattern
```jsx
const PageTemplate = () => (
  <div className="relative w-full bg-white overflow-hidden">
    <Navigation currentPage="pageName" />
    <HeroSection />
    <ContentSections />
    <Footer />
  </div>
);
```

#### Hero Section Variants
- **HeroSection**: Full-screen desktop hero with video background
- **MobileHeroSection**: Mobile-optimized hero without video
- **Standard Page Heroes**: Centered text with divider line

## Key Development Guidelines

### Code Standards
- **Components**: Functional components with hooks only
- **Styling**: Tailwind utility classes, no custom CSS
- **Performance**: Lazy loading for all route components
- **Error Handling**: ErrorBoundary wraps entire application
- **Loading States**: Custom LoadingSpinner component

### Content Guidelines  
- **Tone**: Professional, enterprise-focused, innovative
- **Copy**: Concise, technical credibility, action-oriented
- **No Emojis**: Strictly prohibited in all code and UI
- **Contact**: hello@nightskylabs.com for general inquiries

### File Organization
- **Pages**: Route-based components in `/pages/` directory
- **Components**: Reusable components in `/components/shared/`
- **Product Components**: Product-specific components in `/components/products/`
- **Hooks**: Custom hooks in `/hooks/` directory

## Development Workflow

### Available Scripts
```bash
npm start      # Development server (port 3000)
npm run build  # Production build
npm test       # Test runner  
npm run eject  # Eject from Create React App (not recommended)
```

### Testing Strategy
- **Framework**: @testing-library/react + jest-dom
- **Approach**: Component testing with user event simulation
- **Coverage**: Focus on user interactions and edge cases

### Deployment Considerations
- **Build Output**: Static files in `/build/` directory
- **Assets**: Video files served from `/public/` directory
- **Fonts**: Google Fonts CDN integration
- **Performance**: Code splitting via React.lazy()

## Current State

### Implemented Features
- ✅ Complete routing system (20+ pages)
- ✅ Responsive navigation with mobile menu
- ✅ Product showcase pages with demos  
- ✅ Service portfolio with detailed descriptions
- ✅ Company information pages (About, Leadership, etc.)
- ✅ Content hub (Blog, Case Studies, Research)
- ✅ Support infrastructure (Help Center, Documentation)
- ✅ Contact and business pages (Careers, Investors, Press)

### Technical Implementation
- ✅ Error boundaries for robust error handling
- ✅ Lazy loading for performance optimization
- ✅ Custom design system with Tailwind
- ✅ Responsive design across all breakpoints
- ✅ SEO-friendly semantic HTML structure

## Integration Points

### External Dependencies
- **React Router**: Client-side routing
- **Tailwind CSS**: Utility-first styling
- **Google Fonts**: Typography via CDN
- **Background Videos**: Local MP4 files for hero sections

### API Considerations
Currently a static React application. Future API integrations might include:
- Contact form submissions
- Newsletter signups  
- Product demo requests
- Consulting inquiry forms

## Maintenance Notes

### Content Updates
- Product information: Update respective page components
- Service offerings: Modify service-specific page components
- Company information: Update About, Leadership, Press pages
- Contact details: Centralized in multiple components (update globally)

### Design System Evolution
- Maintain strict black/white palette
- Typography changes require Tailwind config updates
- Component patterns established - follow existing structure
- Performance optimization via lazy loading already implemented

This context should enable efficient development and maintenance of the NightSkyLabs platform while preserving its professional, minimal aesthetic and comprehensive feature set.
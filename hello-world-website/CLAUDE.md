# Agent Profile: NightSkyLabs Frontend Developer

**CRITICAL: Do NOT use emojis anywhere in codebase, documentation, commits, or UI.**

## Role
Frontend developer working on NightSkyLabs holding company website - showcasing AI product development and consulting services.
- **Frontend**: React + Tailwind CSS + minimal design aesthetic
- **Design**: vcdesign.team inspired ultra-minimal black/white palette
- **Focus**: Clean, professional presentation of AI products and services

## Company Overview
**NightSkyLabs** - AI Product Development & Consulting Company
- **Mission**: Building innovative AI-powered tools and providing expert AI consulting
- **Aesthetic**: Ultra-minimal, high-contrast design inspired by top design agencies
- **Target**: Tech professionals, enterprises, and developers

## Products Portfolio

### 1. Soul
- **Type**: Coding CLI Tool
- **Description**: AI-powered command-line interface for developers
- **Target**: Software developers and development teams

### 2. Voice
- **Type**: Realtime Interview Tool  
- **Description**: AI-driven voice interview platform for recruitment
- **Target**: HR teams and recruitment agencies

### 3. Qurious
- **Type**: Personalized AI Learning Platform
- **Description**: Adaptive learning system with AI tutoring (existing moonshot_qurious project)
- **Target**: Educational institutions and learners

## Development Workflow

### 1. Design Principles
- Ultra-minimal black (#000000) and white (#ffffff) palette only
- Massive typography using free Google Fonts (Poppins Black, DM Sans, Inter)
- Clean grid layouts with subtle hover animations
- Professional, enterprise-focused messaging

### 2. Content Strategy
- Hero: Emphasize AI expertise and innovation
- Products: Clear sections for Soul, Voice, Qurious with distinct descriptions
- Services: AI consulting capabilities and expertise
- Portfolio: Showcase of successful AI implementations

### 3. Technical Implementation
- React components with functional hooks
- Tailwind CSS with custom design tokens
- Responsive design (mobile-first)
- Fast loading with optimized fonts and assets

## Architecture

```
hello-world-website/
├── src/
│   ├── components/
│   │   ├── Hero.js               # Main landing hero section
│   │   ├── ProductGrid.js        # Soul, Voice, Qurious showcase
│   │   ├── ServicesSection.js    # AI consulting services
│   │   └── Navigation.js         # Minimal top navigation
│   ├── views/
│   │   └── HomeView.js          # Main landing page
│   └── styles/
│       └── index.css            # Tailwind imports + custom styles
├── public/
│   └── index.html               # Google Fonts integration
└── simple-hello-world.html     # Standalone version
```

## Coding Standards

### Design Tokens
- **Display Font**: Poppins Black (900) for hero headlines
- **Body Font**: DM Sans Medium/Regular for descriptions
- **UI Font**: Inter for navigation and buttons
- **Colors**: Pure black (#000000) and white (#ffffff) only
- **Spacing**: Generous whitespace, clean grid layouts

### Content Tone
- **Professional**: Enterprise-focused, technical credibility
- **Innovative**: Cutting-edge AI capabilities
- **Minimal**: Clean copy, no unnecessary words
- **Action-oriented**: Clear CTAs for consulting inquiries

### Component Structure
```jsx
// Hero Component Example
const Hero = () => (
  <section className="min-h-screen flex justify-center items-center">
    <h1 className="font-display font-black text-hero md:text-hero-lg leading-none text-black uppercase tracking-tightest">
      AI Product<br/>Development<br/>& Consulting
    </h1>
  </section>
);
```

## Environment Setup

### Fonts Integration
```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;900&family=DM+Sans:wght@400;500&family=Inter:opsz,wght@14..32,400..900&display=swap" rel="stylesheet" />
```

### Tailwind Configuration
```js
// Custom design tokens for NightSkyLabs
theme: {
  extend: {
    fontFamily: {
      display: ['Poppins'],
      body: ['"DM Sans"'],
      ui: ['Inter'],
    },
    colors: {
      black: "#000000",
      white: "#ffffff",
    },
    fontSize: {
      'hero': ['5rem', { lineHeight: '0.9' }],
      'hero-lg': ['8rem', { lineHeight: '0.9' }],
    }
  }
}
```

## Content Guidelines

### Hero Section
- Focus on AI expertise and innovation
- Use massive, impactful typography
- Professional yet approachable messaging

### Product Sections
- **Soul**: Emphasize developer productivity and AI-powered coding
- **Voice**: Highlight recruitment efficiency and AI interview intelligence  
- **Qurious**: Showcase personalized learning and educational AI

### Services Section
- AI strategy consulting
- Custom AI product development
- Technical implementation and integration
- AI model training and optimization

## Important Rules
- **No emojis** anywhere in the website
- Maintain ultra-minimal aesthetic throughout
- Use only black and white colors
- Keep copy concise and impactful
- Focus on professional credibility
- Ensure fast loading and responsive design
- Test across all major browsers and devices

## Testing & Deployment
- Test simple HTML version first (`simple-hello-world.html`)
- Ensure fonts load correctly from Google Fonts CDN
- Verify responsive behavior on mobile and desktop
- Check hover animations and transitions work smoothly
- Validate professional appearance and messaging clarity
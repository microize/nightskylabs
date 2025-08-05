# NightSkyLabs Website

A minimal React-based website for NightSkyLabs holding company, showcasing AI product development and consulting services. Inspired by vcdesign.team's ultra-clean aesthetic with moonshot_qurious project architecture.

## Company Overview

**NightSkyLabs** is an AI product development and consulting company specializing in innovative AI-powered tools and expert consulting services.

### Products Portfolio

- **Soul**: AI-powered coding CLI tool for developers
- **Voice**: Realtime interview tool for recruitment
- **Qurious**: Personalized AI learning platform

### Services

- AI Strategy Consulting
- Custom AI Development
- Technical Implementation & Integration

## Design Features

- **Ultra-minimal palette**: Pure black (#000000) and white (#ffffff)
- **Typography**: Free Google Fonts stack (Poppins Black, DM Sans, Inter)
- **Large hero typography**: Inspired by vcdesign.team's massive headlines
- **Product showcase**: Clean grid highlighting Soul, Voice, and Qurious
- **Services section**: Professional consulting offerings
- **Hover animations**: Subtle scale and overlay effects
- **Responsive design**: Mobile-first approach

## Typography Stack

- **Display/Hero**: Poppins Black (900) - for massive uppercase headlines
- **Body text**: DM Sans Medium/Regular - for product descriptions and services
- **UI elements**: Inter - for navigation and interface text

All fonts are free and licensed under SIL Open Font License.

## Quick Start

### Option 1: Simple HTML Version (Recommended for testing)
Open `simple-hello-world.html` directly in your browser. This version includes:
- CDN-loaded React and Tailwind CSS
- Google Fonts integration
- All functionality in a single file
- No build process required

### Option 2: Full React Development Setup
1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm start
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Project Structure

```
night-sky-labs/
├── src/
│   ├── components/
│   │   └── HelloWorldComponent.js
│   ├── views/
│   │   └── HomeView.js
│   ├── styles/
│   │   └── index.css
│   ├── App.js
│   └── index.js
├── public/
│   └── index.html
├── tailwind.config.js
├── package.json
├── simple-hello-world.html
└── README.md
```

## Website Sections

### Hero Section
- Massive "AI PRODUCT DEVELOPMENT & CONSULTING" headline
- Company tagline and mission statement
- Clean, impactful typography

### Products Grid
- **Soul**: AI-powered coding CLI tool for developers
- **Voice**: Realtime interview tool with AI-driven analysis
- **Qurious**: Personalized AI learning platform with adaptive content

### Services Section
- **AI Strategy Consulting**: Expert guidance on AI implementation and technology selection
- **Custom AI Development**: End-to-end AI application development from concept to deployment

## Design Inspiration

### vcdesign.team Elements
- Massive, tight-spaced uppercase headlines (5rem - 8rem)
- Pure black text on white background
- Minimal navigation (top-left "NIGHTSKYLABS")
- Product/service grid with hover overlays
- Geometric sans-serif typography
- Ultra-clean, high-contrast aesthetic

### moonshot_qurious Architecture
- Component-based React structure
- View-based routing organization
- Tailwind CSS configuration
- Clean separation of concerns

## Customization

The Tailwind config includes custom design tokens:
- Custom font families for display, body, and UI text
- Hero font sizes (5rem and 8rem)
- Tightest letter spacing for headlines
- Pure black/white color definitions
- Border utilities for service cards

## Technical Features

- Responsive design (mobile-first approach)
- Smooth hover animations and transitions
- Semantic HTML structure
- Optimized font loading with Google Fonts
- Clean, maintainable React component structure
- Professional typography hierarchy

## Browser Support

Works in all modern browsers with ES6+ support. The simple HTML version loads fonts and libraries from CDN for maximum compatibility and immediate testing.
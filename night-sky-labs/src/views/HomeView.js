import React from 'react';
import Navigation from '../components/common/layout/Navigation';
import HeroSection from '../components/common/layout/HeroSection';
import MobileHeroSection from '../components/common/layout/MobileHeroSection';
import HeroLayout from '../components/HeroLayout';
import { useReadingAnimation } from '../hooks/useReadingAnimation';

const HomeView = () => {
  useReadingAnimation();
  
  return (
    <div className="relative w-full bg-white overflow-hidden">
      <Navigation currentPage="home" />
      
      {/* Hero Section - Desktop */}
      <HeroSection 
        title="Unleash GenAI"
        subtitle="Dominate Your Market"
        description="We build agentic AI systems and custom GenAI tools that empower organizations to win faster, smarter, and at scale. Whether you're deploying your first model or building autonomous workflows, we help you move with confidence in the AI-first economy."
        videoSrc="/frog_breathing.mp4"
        videoFilter="grayscale(100%)"
        showOverlay={true}
      />

      {/* Mobile Hero Section */}
      <MobileHeroSection 
        title="Unleash GenAI"
        subtitle="Dominate Your Market"
        description="We build agentic AI systems and custom GenAI tools that empower organizations to win faster, smarter, and at scale. Whether you're deploying your first model or building autonomous workflows, we help you move with confidence in the AI-first economy."
        videoSrc="/frog_breathing.mp4"
      />
      
      <HeroLayout />
    </div>
  );
};

export default HomeView;
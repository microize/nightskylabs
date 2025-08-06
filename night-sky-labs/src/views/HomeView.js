import React from 'react';
import Navigation from '../components/shared/Navigation';
import HeroSection from '../components/shared/HeroSection';
import MobileHeroSection from '../components/shared/MobileHeroSection';
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
        description="We build intelligent systems that don't just automate—they revolutionize. From predictive analytics to autonomous workflows, we transform how businesses compete and win in the AI-first economy."
        videoSrc="/frog_breathing.mp4"
        videoFilter="grayscale(100%)"
        showOverlay={true}
      />

      {/* Mobile Hero Section */}
      <MobileHeroSection 
        title="Unleash GenAI"
        subtitle="Dominate Your Market"
        description="We build intelligent systems that don't just automate—they revolutionize. From predictive analytics to autonomous workflows, we transform how businesses compete and win in the AI-first economy."
        videoSrc="/frog_breathing.mp4"
      />
      
      <HeroLayout />
    </div>
  );
};

export default HomeView;
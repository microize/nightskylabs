import React from 'react';
import Navigation from '../components/shared/Navigation';
import HeroSection from '../components/shared/HeroSection';
import MobileHeroSection from '../components/shared/MobileHeroSection';
import HeroLayout from '../components/HeroLayout';

const HomeView = () => {
  return (
    <div className="relative w-full bg-white overflow-hidden">
      <Navigation currentPage="home" />
      
      {/* Hero Section - Desktop */}
      <HeroSection 
        title="Unleash GenAI"
        subtitle="Dominate Your Market"
        description="We build intelligent systems that don't just automate—they revolutionize. From predictive analytics to autonomous workflows, we transform how businesses compete and win in the AI-first economy."
        videoSrc="/frog_breathing.mp4"
        showOverlay={true}
      />

      {/* Mobile Hero Section */}
      <MobileHeroSection 
        title="Unleash GenAI"
        subtitle="Dominate Your Market"
        description="We build intelligent systems that don't just automate—they revolutionize. From predictive analytics to autonomous workflows, we transform how businesses compete and win in the AI-first economy."
      />
      
      <HeroLayout />
    </div>
  );
};

export default HomeView;
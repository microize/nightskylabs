import React, { useEffect } from 'react';

const HeroLayout = () => {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const textElement = document.getElementById('reading-text');
          if (textElement && !textElement.dataset.animated) {
            textElement.dataset.animated = 'true';
            
            const text = textElement.textContent;
            const words = text.split(' ');
            
            textElement.innerHTML = words.map(word => 
              `<span class="reading-word">${word}</span>`
            ).join(' ');
            
            const wordElements = textElement.querySelectorAll('.reading-word');
            wordElements.forEach((word, index) => {
              setTimeout(() => {
                word.classList.add('word-read');
              }, index * 150);
            });
          }
        }
      });
    }, observerOptions);

    const levelUpSection = document.querySelector('.level-up-section');
    if (levelUpSection) {
      observer.observe(levelUpSection);
    }

    return () => {
      if (levelUpSection) {
        observer.unobserve(levelUpSection);
      }
    };
  }, []);

  return (
    <div className="relative w-full bg-white overflow-hidden">
      {/* Navigation Bar */}
      <nav className="absolute top-0 left-0 right-0 z-50 bg-white/95 md:bg-transparent backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <span className="text-lg md:text-body font-thin text-black">NightSkyLabs</span>
            </div>
            
            {/* Navigation Links - Desktop */}
            <div className="hidden md:flex items-center space-x-8">
              <div className="relative group">
                <a href="#products" className="text-small font-thin text-black/80 hover:text-black transition-colors relative">
                  Products
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                </a>
                
                {/* Products Dropdown */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-screen max-w-7xl bg-white shadow-xl border border-gray-100 rounded-3xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="px-12 py-16">
                    <div className="grid grid-cols-3 gap-12 divide-x divide-gray-200">
                      
                      {/* Soul */}
                      <div className="text-center">
                        <div className="mb-6">
                          <h3 className="text-xl font-thin text-black mb-4">Soul</h3>
                          <p className="text-sm font-thin text-gray-600 mb-6">AI-powered command-line interface for developers</p>
                        </div>
                        <a href="#soul" className="inline-block bg-gray-50 text-black px-4 py-2 rounded-full text-sm font-thin hover:bg-black hover:text-white transition-colors">
                          Learn More
                        </a>
                      </div>
                      
                      {/* Voice */}
                      <div className="text-center pl-12">
                        <div className="mb-6">
                          <h3 className="text-xl font-thin text-black mb-4">Voice</h3>
                          <p className="text-sm font-thin text-gray-600 mb-6">AI-driven voice interview platform for recruitment</p>
                        </div>
                        <a href="#voice" className="inline-block bg-gray-50 text-black px-4 py-2 rounded-full text-sm font-thin hover:bg-black hover:text-white transition-colors">
                          Learn More
                        </a>
                      </div>
                      
                      {/* Qurious */}
                      <div className="text-center pl-12">
                        <div className="mb-6">
                          <h3 className="text-xl font-thin text-black mb-4">Qurious</h3>
                          <p className="text-sm font-thin text-gray-600 mb-6">Personalized AI learning platform with adaptive tutoring</p>
                        </div>
                        <a href="#qurious" className="inline-block bg-gray-50 text-black px-4 py-2 rounded-full text-sm font-thin hover:bg-black hover:text-white transition-colors">
                          Learn More
                        </a>
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative group">
                <a href="#services" className="text-small font-thin text-black/80 hover:text-black transition-colors relative">
                  Services
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                </a>
                
                {/* Services Dropdown */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-screen max-w-7xl bg-white shadow-xl border border-gray-100 rounded-3xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="px-12 py-16">
                    <div className="grid grid-cols-2 gap-16 divide-x divide-gray-200">
                      
                      {/* Strategic Design Solutions */}
                      <div>
                        <h3 className="text-2xl font-thin text-black mb-6">Strategic Design Solutions</h3>
                        <div className="space-y-4">
                          <div>
                            <h4 className="text-base font-thin text-black mb-1">AI Strategy</h4>
                            <p className="text-sm font-thin text-gray-600">Comprehensive AI adoption roadmaps</p>
                          </div>
                          <div>
                            <h4 className="text-base font-thin text-black mb-1">Automation Design</h4>
                            <p className="text-sm font-thin text-gray-600">Intelligent workflow optimization</p>
                          </div>
                          <div>
                            <h4 className="text-base font-thin text-black mb-1">Behavioral Analysis</h4>
                            <p className="text-sm font-thin text-gray-600">Human-centered AI system design</p>
                          </div>
                          <div>
                            <h4 className="text-base font-thin text-black mb-1">System Integration</h4>
                            <p className="text-sm font-thin text-gray-600">Seamless AI implementation</p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Implementation Services */}
                      <div className="pl-16">
                        <h3 className="text-2xl font-thin text-black mb-6">Implementation Services</h3>
                        <div className="space-y-4">
                          <div>
                            <h4 className="text-base font-thin text-black mb-1">Custom Development</h4>
                            <p className="text-sm font-thin text-gray-600">Tailored AI solutions for your needs</p>
                          </div>
                          <div>
                            <h4 className="text-base font-thin text-black mb-1">Technical Integration</h4>
                            <p className="text-sm font-thin text-gray-600">Enterprise system connectivity</p>
                          </div>
                          <div>
                            <h4 className="text-base font-thin text-black mb-1">Deployment & Optimization</h4>
                            <p className="text-sm font-thin text-gray-600">Production-ready AI systems</p>
                          </div>
                          <div>
                            <h4 className="text-base font-thin text-black mb-1">Performance Analysis</h4>
                            <p className="text-sm font-thin text-gray-600">ROI measurement and optimization</p>
                          </div>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* CTA Button - Desktop */}
            <div className="hidden md:block">
              <button className="bg-black text-white px-4 py-2 rounded-full text-small font-thin hover:bg-gray-800 transition-colors">
                Get In Touch
              </button>
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 relative z-50"
              onClick={() => {
                const mobileMenu = document.getElementById('mobile-menu');
                const isOpen = mobileMenu.classList.contains('translate-x-0');
                if (isOpen) {
                  mobileMenu.classList.remove('translate-x-0');
                  mobileMenu.classList.add('translate-x-full');
                } else {
                  mobileMenu.classList.remove('translate-x-full');
                  mobileMenu.classList.add('translate-x-0');
                }
              }}
            >
              <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div 
          id="mobile-menu"
          className="fixed top-0 right-0 h-full w-full bg-white transform translate-x-full transition-transform duration-300 ease-in-out md:hidden z-40"
        >
          <div className="flex flex-col h-full pt-20 px-6">
            {/* Mobile Navigation Links */}
            <div className="flex flex-col space-y-8 text-center">
              <a 
                href="#products" 
                className="text-2xl font-thin text-black hover:text-gray-600 transition-colors py-4"
                onClick={() => {
                  document.getElementById('mobile-menu').classList.add('translate-x-full');
                  document.getElementById('mobile-menu').classList.remove('translate-x-0');
                }}
              >
                Products
              </a>
              <a 
                href="#services" 
                className="text-2xl font-thin text-black hover:text-gray-600 transition-colors py-4"
                onClick={() => {
                  document.getElementById('mobile-menu').classList.add('translate-x-full');
                  document.getElementById('mobile-menu').classList.remove('translate-x-0');
                }}
              >
                Services
              </a>
            </div>
            
            {/* Mobile CTA Button */}
            <div className="mt-12 text-center">
              <button 
                className="bg-black text-white px-8 py-4 rounded-full text-lg font-thin hover:bg-gray-800 transition-colors"
                onClick={() => {
                  document.getElementById('mobile-menu').classList.add('translate-x-full');
                  document.getElementById('mobile-menu').classList.remove('translate-x-0');
                }}
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Responsive Layout */}
      <div className="hero-artboard relative w-full bg-white overflow-hidden pt-16 md:pt-24" 
           style={{ 
             height: '100vh', 
             minHeight: '600px',
             maxHeight: '1000px'
           }}>
        
        {/* Background Video - Responsive */}
        <div className="absolute inset-0 w-full md:w-[30%] h-full md:h-full">
          <div className="relative w-full h-full">
            <video 
              autoPlay 
              muted 
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
              style={{ 
                maskImage: 'var(--video-mask)',
                WebkitMaskImage: 'var(--video-mask)'
              }}
            >
              <source src="/frog_breathing.mp4" type="video/mp4" />
            </video>
            
            {/* Video Overlay for Better Text Readability - Desktop Only */}
            <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-black/20 via-black/10 to-transparent"></div>
          </div>
        </div>
        
        {/* Content Container - Desktop Layout */}
        <div className="hidden md:flex relative z-10 h-full flex-col justify-center items-start px-12">
          
          {/* Hero Text Section - Desktop */}
          <div className="flex flex-col items-start text-left w-full max-w-4xl ml-[35%]">
            <div className="hero-text-creating animate-hero-text-1 mb-4">
              <h1 className="text-6xl lg:text-7xl xl:text-hero font-thin text-black leading-none">
                Level the Playing Field
              </h1>
            </div>

            <div className="hero-text-users animate-hero-text-2 mb-12">
              <h2 className="text-6xl lg:text-7xl xl:text-hero font-thin text-black leading-none">
                with Generative AI
              </h2>
            </div>
          </div>

          {/* Description Text - Desktop Position */}
          <div className="hero-description animate-hero-fade-in absolute bottom-24 right-12 max-w-md">
            <p className="text-justify text-lg lg:text-xl font-light text-gray-600 leading-relaxed">
             We blend behavioral science, human-centered design, and deep engineering to fast-track GenAI adoption, so small and midsize enterprises can match (and beat) big-industry efficiency and impact.
            </p>
          </div>

          {/* Scroll Indicator - Desktop */}
          <div className="hero-scroll animate-hero-scroll absolute bottom-16 left-1/2 transform -translate-x-1/2">
            <div className="flex flex-col items-center space-y-2">
              <span className="text-sm text-black font-thin micro-pulse">SCROLL</span>
              <div>
                <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 16l-6-6h12l-6 6z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Content Section - Below Video */}
      <section className="md:hidden bg-white py-16 px-6">
        <div className="max-w-2xl mx-auto text-center">
          {/* Mobile Hero Text */}
          <div className="mb-4">
            <h1 className="text-3xl sm:text-4xl font-thin text-black leading-tight">
              Level the Playing Field
            </h1>
          </div>

          <div className="mb-8">
            <h2 className="text-3xl sm:text-4xl font-thin text-black leading-tight">
              with Generative AI
            </h2>
          </div>

          {/* Mobile Description */}
          <div className="mb-12">
            <p className="text-justify text-center text-base sm:text-lg font-light text-gray-600 leading-relaxed">
             We blend behavioral science, human-centered design, and deep engineering to fast-track GenAI adoption, so small and midsize enterprises can match (and beat) big-industry efficiency and impact.
            </p>
          </div>

          {/* Mobile Scroll Indicator */}
          <div className="flex flex-col items-center space-y-2">
            <span className="text-sm text-black font-thin micro-pulse">SCROLL</span>
            <div>
              <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 16l-6-6h12l-6 6z"/>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Level Up Section */}
      <section className="level-up-section relative w-full bg-white py-16 md:py-32">
        <div className="w-4/5 mx-auto px-6 md:px-12">
          <div className="w-full text-center md:text-left">
            <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-thin text-black mb-8" id="reading-text" style={{ lineHeight: '2' }}>
              We don't help you compete. We help you level up. We help you punch above your weight by turning GenAI into a strategic edge. With agentic systems grounded in behavioral science and built on safety-first engineering, we replace guesswork with precision, manual work with intelligent automation, and operational drag with momentum. This isn't just adoption - it's transformation, built to outperform.
            </h2>
          </div>
        </div>
      </section>

      {/* Rolling Technology Terms Section */}
      <section className="rolling-tech-section relative w-full bg-white border-t border-b border-gray-100 py-8 md:py-12 overflow-hidden">
        <div className="flex items-center justify-center">
          <div className="animate-marquee flex items-center space-x-6 md:space-x-12 whitespace-nowrap">
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-gray-400">generative ai</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-gray-400">•</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-gray-400">natural language processing</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-gray-400">•</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-gray-400">machine learning</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-gray-400">•</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-gray-400">deep learning</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-gray-400">•</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-gray-400">neural networks</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-gray-400">•</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-gray-400">automation</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-gray-400">•</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-gray-400">ai agents</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-gray-400">•</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-gray-400">generative ai</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-gray-400">•</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-gray-400">natural language processing</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-gray-400">•</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-gray-400">machine learning</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-gray-400">•</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-gray-400">deep learning</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-gray-400">•</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-gray-400">neural networks</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-gray-400">•</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-gray-400">automation</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-gray-400">•</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-gray-400">ai agents</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-gray-400">•</span>
          </div>
        </div>
      </section>

      {/* Strategic Sectors Section */}
      <section id="strategic-sectors" className="strategic-sectors-section relative w-full bg-white py-16 md:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          
          {/* Section Header */}
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-4xl md:text-6xl font-thin text-black mb-4 leading-tight">Our Expertise</h2>
            <div className="w-24 h-0.5 bg-black mx-auto mt-8"></div>
          </div>
          
          {/* Responsive Grid Layout with Golden Ratio */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 auto-rows-min">
            
            {/* Large Strategic Card - Golden Rectangle (φ:1 ratio ≈ 1.618:1) */}
            <div className="lg:col-span-8 lg:row-span-2 bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 group">
              <div className="p-8 md:p-10 h-full flex flex-col" style={{ minHeight: '400px' }}>
                <div className="mb-8">
                  <h3 className="text-xl md:text-2xl font-thin text-black mb-4 group-hover:text-gray-800 transition-colors">Strategic Design Solutions</h3>
                  <div className="w-16 h-0.5 bg-black transition-all duration-300 group-hover:w-24"></div>
                </div>
                
                {/* Service Tags with Golden Ratio spacing */}
                <div className="flex-1 space-y-4">
                  <div className="flex flex-wrap gap-3">
                    <span className="px-5 py-2.5 bg-gray-50 text-black rounded-full text-sm font-thin hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">ai strategy</span>
                    <span className="px-5 py-2.5 bg-gray-50 text-black rounded-full text-sm font-thin hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">automation design</span>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-5 py-2.5 bg-gray-50 text-black rounded-full text-sm font-thin hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">behavioral analysis</span>
                    <span className="px-5 py-2.5 bg-gray-50 text-black rounded-full text-sm font-thin hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">system integration</span>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-5 py-2.5 bg-gray-50 text-black rounded-full text-sm font-thin hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">intelligent workflows</span>
                    <span className="px-5 py-2.5 bg-gray-50 text-black rounded-full text-sm font-thin hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">competitive intelligence</span>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-5 py-2.5 bg-gray-50 text-black rounded-full text-sm font-thin hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">genai transformation</span>
                    <span className="px-5 py-2.5 bg-gray-50 text-black rounded-full text-sm font-thin hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">enterprise optimization</span>
                  </div>
                </div>
              </div>
            </div>

            {/* AI Consulting Card - Golden ratio derived height */}
            <div className="lg:col-span-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 group">
              <div className="p-6 md:p-8 h-full flex flex-col" style={{ minHeight: '240px' }}>
                <div className="mb-6">
                  <h3 className="text-lg md:text-xl font-thin text-black mb-3 group-hover:text-gray-800 transition-colors">AI Consulting</h3>
                  <div className="w-12 h-0.5 bg-black transition-all duration-300 group-hover:w-16"></div>
                </div>
                
                <div className="flex-1 space-y-3">
                  <div className="flex flex-wrap gap-2">
                    <span className="px-4 py-2 bg-gray-50 text-black rounded-full text-sm font-thin hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">strategic planning</span>
                    <span className="px-4 py-2 bg-gray-50 text-black rounded-full text-sm font-thin hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">implementation</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-4 py-2 bg-gray-50 text-black rounded-full text-sm font-thin hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">performance optimization</span>
                    <span className="px-4 py-2 bg-gray-50 text-black rounded-full text-sm font-thin hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">roi analysis</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Implementation Services Card */}
            <div className="lg:col-span-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 group">
              <div className="p-6 md:p-8 h-full flex flex-col" style={{ minHeight: '240px' }}>
                <div className="mb-6">
                  <h3 className="text-lg md:text-xl font-thin text-black mb-3 group-hover:text-gray-800 transition-colors">Implementation Services</h3>
                  <div className="w-12 h-0.5 bg-black transition-all duration-300 group-hover:w-16"></div>
                </div>
                
                <div className="flex-1 space-y-3">
                  <div className="flex flex-wrap gap-2">
                    <span className="px-4 py-2 bg-gray-50 text-black rounded-full text-sm font-thin hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">custom development</span>
                    <span className="px-4 py-2 bg-gray-50 text-black rounded-full text-sm font-thin hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">integration</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-4 py-2 bg-gray-50 text-black rounded-full text-sm font-thin hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">deployment</span>
                    <span className="px-4 py-2 bg-gray-50 text-black rounded-full text-sm font-thin hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">optimization</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Industries Full-Width Card - Golden section proportioned */}
            <div className="lg:col-span-12 bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 group">
              <div className="p-8 md:p-10 h-full flex flex-col md:flex-row items-center gap-8" style={{ minHeight: '140px' }}>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl md:text-2xl font-thin text-black mb-4 group-hover:text-gray-800 transition-colors">Industries We Serve</h3>
                  <p className="text-base font-thin text-gray-600 leading-relaxed max-w-4xl">
                    From enterprise software and financial services to healthcare systems and legal intelligence, we provide AI solutions that improve efficiency, decision-making, and competitive positioning across strategic sectors.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300">
                    <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 md:py-32 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Newsletter Section */}
          <div className="text-center mb-16 md:mb-20">
            <h3 className="text-xl md:text-large font-thin text-white mb-4 md:mb-6">Stay Updated</h3>
            <p className="text-base md:text-body font-thin text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto">
              Get updates on our venture development, partnership opportunities, and insights from the AI technology sector.
            </p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-3 sm:gap-0">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 md:px-6 py-3 bg-gray-800 border border-gray-700 rounded-lg sm:rounded-l-lg sm:rounded-r-none text-white placeholder-gray-400 font-thin focus:outline-none focus:border-gray-500 focus:ring-2 focus:ring-gray-500/20"
              />
              <button className="px-6 md:px-8 py-3 bg-white text-black font-thin rounded-lg sm:rounded-r-lg sm:rounded-l-none hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-16 mb-12 md:mb-16">
            <div className="md:col-span-2 text-center md:text-left">
              <h3 className="text-xl md:text-large font-thin mb-6 md:mb-8 text-white">Build with us</h3>
              <p className="text-base md:text-body font-thin text-gray-300 mb-6 md:mb-8 max-w-lg mx-auto md:mx-0">
                Ready to build transformative AI-powered technology? We're launching our first ventures 
                and looking for exceptional founders to partner with.
              </p>
              <div className="space-y-2">
                <p className="text-base md:text-body font-thin text-gray-400">hello@nightskylabs.com</p>
                <p className="text-sm md:text-small font-thin text-gray-500">San Francisco • Remote First</p>
              </div>
            </div>
            
            <div className="text-center md:text-left">
              <h4 className="text-lg md:text-body font-thin mb-4 md:mb-6 text-white">We Provide Service In</h4>
              <div className="space-y-2 md:space-y-3 text-gray-400">
                <a href="#" className="block text-sm md:text-small font-thin hover:text-white transition-colors">Artificial Intelligence</a>
                <a href="#" className="block text-sm md:text-small font-thin hover:text-white transition-colors">Developer Infrastructure</a>
                <a href="#" className="block text-sm md:text-small font-thin hover:text-white transition-colors">Enterprise Software</a>
                <a href="#" className="block text-sm md:text-small font-thin hover:text-white transition-colors">Education Technology</a>
              </div>
            </div>
            
            <div className="text-center md:text-left">
              <h4 className="text-lg md:text-body font-thin mb-4 md:mb-6 text-white">Our Products</h4>
              <div className="space-y-2 md:space-y-3 text-gray-400">
                <a href="#" className="block text-sm md:text-small font-thin hover:text-white transition-colors">Soul - Developer Tools</a>
                <a href="#" className="block text-sm md:text-small font-thin hover:text-white transition-colors">Voice - AI Recruitment</a>
                <a href="#" className="block text-sm md:text-small font-thin hover:text-white transition-colors">Qurious - Learning Platform</a>
                <a href="#" className="block text-sm md:text-small font-thin hover:text-white transition-colors">Partnership Opportunities</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 md:pt-12 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <p className="text-sm md:text-small font-thin text-gray-400 mb-4 md:mb-0">© 2025 NightSkyLabs Holdings. All rights reserved.</p>
            <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-8">
              <a href="#" className="text-sm md:text-small font-thin text-gray-400 hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="text-sm md:text-small font-thin text-gray-400 hover:text-white transition-colors">Twitter</a>
              <a href="#" className="text-sm md:text-small font-thin text-gray-400 hover:text-white transition-colors">Portfolio</a>
              <a href="#" className="text-sm md:text-small font-thin text-gray-400 hover:text-white transition-colors">Investors</a>
              <a href="#" className="text-sm md:text-small font-thin text-gray-400 hover:text-white transition-colors">Privacy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HeroLayout;
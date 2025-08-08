import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useReadingAnimation } from '../hooks/useReadingAnimation';

const HeroLayout = () => {
  useReadingAnimation();
  
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const readingElement = entry.target.querySelector('#reading-text');
          if (readingElement && !readingElement.dataset.animated) {
            readingElement.dataset.animated = 'true';
            
            const wordElements = readingElement.querySelectorAll('.reading-word');
            let cumulativeDelay = 0;
            
            wordElements.forEach((word, index) => {
              const text = word.textContent.trim();
              
              // Calculate dynamic delay based on word characteristics
              let baseDelay = 200; // Base reading speed (ms per word)
              
              // Adjust for word length
              if (text.length > 6) baseDelay += 80;
              else if (text.length > 4) baseDelay += 40;
              else if (text.length <= 2) baseDelay -= 50;
              
              // Pause longer for punctuation
              if (text.includes('.') || text.includes('!') || text.includes('?')) {
                baseDelay += 300; // Sentence pause
              } else if (text.includes(',') || text.includes(';') || text.includes(':')) {
                baseDelay += 150; // Clause pause
              } else if (text.includes('-')) {
                baseDelay += 100; // Dash pause
              }
              
              // Add slight randomness for natural feel (-20 to +40ms)
              const randomVariation = Math.random() * 60 - 20;
              const finalDelay = Math.max(120, baseDelay + randomVariation);
              
              setTimeout(() => {
                word.classList.remove('text-black');
                word.classList.add('text-black');
              }, cumulativeDelay);
              
              cumulativeDelay += finalDelay;
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

      {/* Level Up Section */}
      <section className="level-up-section animated-section relative w-full bg-white py-16 md:py-32">
        <div className="w-full mx-auto px-6 md:px-12">
          <div className="w-full text-center md:text-left">
            <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-thin mb-8" id="reading-text" style={{ lineHeight: '2' }}>
              <span className="reading-word text-black">Generative</span> <span className="reading-word text-black">AI</span> <span className="reading-word text-black">has</span> <span className="reading-word text-black">huge</span> <span className="reading-word text-black">potential</span> <span className="reading-word text-black">and</span> <span className="reading-word text-black">is</span> <span className="reading-word text-black">rapidly</span> <span className="reading-word text-black">changing.</span> <span className="reading-word text-black">Organizations</span> <span className="reading-word text-black">struggle</span> <span className="reading-word text-black">to</span> <span className="reading-word text-black">keep</span> <span className="reading-word text-black">up</span> <span className="reading-word text-black">with</span> <span className="reading-word text-black">this</span> <span className="reading-word text-black">pace</span> <span className="reading-word text-black">of</span> <span className="reading-word text-black">innovation.</span> <span className="reading-word text-black">We</span> <span className="reading-word text-black">are</span> <span className="reading-word text-black">here</span> <span className="reading-word text-black">to</span> <span className="reading-word text-black">help</span> <span className="reading-word text-black">them</span> <span className="reading-word text-black">navigate</span> <span className="reading-word text-black">this</span> <span className="reading-word text-black">transformation.</span> <span className="reading-word text-black">From</span> <span className="reading-word text-black">strategic</span> <span className="reading-word text-black">planning</span> <span className="reading-word text-black">to</span> <span className="reading-word text-black">custom</span> <span className="reading-word text-black">development,</span> <span className="reading-word text-black">we</span> <span className="reading-word text-black">guide</span> <span className="reading-word text-black">organizations</span> <span className="reading-word text-black">through</span> <span className="reading-word text-black">successful</span> <span className="reading-word text-black">AI</span> <span className="reading-word text-black">adoption</span> <span className="reading-word text-black">and</span> <span className="reading-word text-black">integration.</span> <span className="reading-word text-black">This</span> <span className="reading-word text-black">is</span> <span className="reading-word text-black">transformation</span> <span className="reading-word text-black">made</span> <span className="reading-word text-black">accessible.</span>
            </h2>
          </div>
        </div>
      </section>

      {/* Rolling Technology Terms Section */}
      <section className="rolling-tech-section relative w-full bg-gradient-to-r from-[#998664] to-[#aa9678] py-8 md:py-12 overflow-hidden">
        <div className="marquee-container">
          <div className="animate-marquee-infinite flex items-center space-x-6 md:space-x-12 whitespace-nowrap">
            {/* First Set */}
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-white">generative ai</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-white">•</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-white">large language models</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-white">•</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-white">agentic ai</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-white">•</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-white">retrieval augmented generation</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-white">•</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-white">computer vision</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-white">•</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-white">natural language processing</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-white">•</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-white">model fine-tuning</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-white">•</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-white">vector databases</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-white">•</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-white">semantic search</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-white">•</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-white">workflow automation</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-white">•</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-white">ai agents</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-white">•</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-white">prompt engineering</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-white">•</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-white">multi-agent systems</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-white">•</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-white">reinforcement learning</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-white">•</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-white">neural networks</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-white">•</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-white">transformer models</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-white">•</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-white">foundation models</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-white">•</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-white">intelligent automation</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-white">•</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-white">machine learning ops</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-white">•</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-white">edge computing</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-white">•</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-white">federated learning</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-white">•</span>
            
            {/* Duplicate Set for Infinite Loop */}
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-white">generative ai</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-white">•</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-white">large language models</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-white">•</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-white">agentic ai</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-white">•</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-white">retrieval augmented generation</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-white">•</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-white">computer vision</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-white">•</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-white">natural language processing</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-white">•</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-white">model fine-tuning</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-white">•</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-white">vector databases</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-white">•</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-white">semantic search</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-white">•</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-white">workflow automation</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-white">•</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-white">ai agents</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-white">•</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-white">prompt engineering</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-white">•</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-white">multi-agent systems</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-white">•</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-white">reinforcement learning</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-white">•</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-white">neural networks</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-white">•</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-white">transformer models</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-white">•</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-white">foundation models</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-white">•</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-white">intelligent automation</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-white">•</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-white">machine learning ops</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-white">•</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-white">edge computing</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-white">•</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-white">federated learning</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-white">•</span>
          </div>
        </div>
      </section>

      {/* Strategic Sectors Section */}
      <section id="strategic-sectors" className="strategic-sectors-section relative w-full bg-white py-16 md:py-24 overflow-hidden">
        <div className="w-full px-6 md:px-12">
          
          {/* Section Header */}
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-4xl md:text-6xl font-thin text-[#998664] mb-4 leading-tight">How We Accelerate Your Success</h2>
          </div>
          
          {/* Mixed Square Grid Layout */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-3 lg:gap-4">
            
            {/* Row 1 */}
            {/* Square Card 1 - Agentic AI Systems TEXT (1x1) */}
            <div className="col-span-1 aspect-square bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-gray-100 group">
              <div className="p-2 md:p-3 h-full flex flex-col justify-start items-start text-left">
                <div className="mb-3">
                  <h3 className="text-base md:text-lg lg:text-xl font-thin text-[#998664] mb-2 group-hover:text-gray-800 transition-colors">Agentic AI Systems</h3>
                </div>
                
                <div className="space-y-2">
                  <div className="flex flex-wrap gap-1">
                    <span className="px-2 py-1 bg-gray-50 text-black rounded-full text-xs font-thin border border-gray-300 hover:bg-black hover:text-white hover:border-black transition-all duration-300 cursor-pointer">multi-agent</span>
                    <span className="px-2 py-1 bg-gray-50 text-black rounded-full text-xs font-thin border border-gray-300 hover:bg-black hover:text-white hover:border-black transition-all duration-300 cursor-pointer">autonomous</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    <span className="px-2 py-1 bg-gray-50 text-black rounded-full text-xs font-thin border border-gray-300 hover:bg-black hover:text-white hover:border-black transition-all duration-300 cursor-pointer">workflows</span>
                    <span className="px-2 py-1 bg-gray-50 text-black rounded-full text-xs font-thin border border-gray-300 hover:bg-black hover:text-white hover:border-black transition-all duration-300 cursor-pointer">decisions</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    <span className="px-2 py-1 bg-gray-50 text-black rounded-full text-xs font-thin border border-gray-300 hover:bg-black hover:text-white hover:border-black transition-all duration-300 cursor-pointer">coordination</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Square Card 2 - Computer Use Automation TEXT (1x1) */}
            <div className="col-span-1 aspect-square bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-gray-100 group">
              <div className="p-2 md:p-3 h-full flex flex-col justify-start items-start text-left">
                <div className="mb-3">
                  <h3 className="text-base md:text-lg lg:text-xl font-thin text-[#998664] mb-2 group-hover:text-gray-800 transition-colors">Computer Use Automation</h3>
                </div>
                
                <div className="space-y-2">
                  <div className="flex flex-wrap gap-1">
                    <span className="px-2 py-1 bg-gray-50 text-black rounded-full text-xs font-thin border border-gray-300 hover:bg-black hover:text-white hover:border-black transition-all duration-300 cursor-pointer">ui automation</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    <span className="px-2 py-1 bg-gray-50 text-black rounded-full text-xs font-thin border border-gray-300 hover:bg-black hover:text-white hover:border-black transition-all duration-300 cursor-pointer">software control</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    <span className="px-2 py-1 bg-gray-50 text-black rounded-full text-xs font-thin border border-gray-300 hover:bg-black hover:text-white hover:border-black transition-all duration-300 cursor-pointer">cross-platform</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Square Card 3 - Strategic Design Solutions TEXT (2x2) */}
            <div className="col-span-2 md:col-span-2 lg:col-span-2 row-span-2 aspect-square bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-gray-100 group relative overflow-hidden">
              <video 
                autoPlay 
                muted 
                loop
                playsInline
                className="absolute inset-0 h-full w-full object-cover opacity-20 filter grayscale group-hover:opacity-30 transition-all duration-500"
              >
                <source src="/butterfly.mp4" type="video/mp4" />
              </video>
              <div className="relative p-3 md:p-4 lg:p-6 h-full flex flex-col justify-end items-start text-left">
                <div className="mb-4">
                  <h3 className="text-base md:text-lg lg:text-xl font-thin text-[#998664] mb-2 md:mb-3 group-hover:text-gray-800 transition-colors">Strategic Design Solutions</h3>
                </div>
                
                <div className="space-y-1 md:space-y-2">
                  <div className="flex flex-wrap gap-1 md:gap-2">
                    <span className="px-2 md:px-3 py-1 md:py-1.5 bg-gray-50 text-black rounded-full text-xs font-thin border border-gray-300 hover:bg-black hover:text-white hover:border-black transition-all duration-300 cursor-pointer">genai strategy</span>
                    <span className="px-2 md:px-3 py-1 md:py-1.5 bg-gray-50 text-black rounded-full text-xs font-thin border border-gray-300 hover:bg-black hover:text-white hover:border-black transition-all duration-300 cursor-pointer">agentic systems</span>
                  </div>
                  <div className="flex flex-wrap gap-1 md:gap-2">
                    <span className="px-2 md:px-3 py-1 md:py-1.5 bg-gray-50 text-black rounded-full text-xs font-thin border border-gray-300 hover:bg-black hover:text-white hover:border-black transition-all duration-300 cursor-pointer">automation architecture</span>
                  </div>
                  <div className="flex flex-wrap gap-1 md:gap-2">
                    <span className="px-2 md:px-3 py-1 md:py-1.5 bg-gray-50 text-black rounded-full text-xs font-thin border border-gray-300 hover:bg-black hover:text-white hover:border-black transition-all duration-300 cursor-pointer">ai transformation</span>
                    <span className="px-2 md:px-3 py-1 md:py-1.5 bg-gray-50 text-black rounded-full text-xs font-thin border border-gray-300 hover:bg-black hover:text-white hover:border-black transition-all duration-300 cursor-pointer">model selection</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Square Card 9 - LLM Fine-Tuning TEXT (1x1) - Desktop Row 1 */}
            <div className="hidden lg:block col-span-1 aspect-square bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-gray-100 group">
              <div className="p-2 md:p-3 h-full flex flex-col justify-start items-start text-left">
                <div className="mb-3">
                  <h3 className="text-base md:text-lg lg:text-xl font-thin text-[#998664] mb-2 group-hover:text-gray-800 transition-colors">LLM Fine-Tuning</h3>
                </div>
                
                <div className="space-y-2">
                  <div className="flex flex-wrap gap-1">
                    <span className="px-2 py-1 bg-gray-50 text-black rounded-full text-xs font-thin border border-gray-300 hover:bg-black hover:text-white hover:border-black transition-all duration-300 cursor-pointer">custom llms</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    <span className="px-2 py-1 bg-gray-50 text-black rounded-full text-xs font-thin border border-gray-300 hover:bg-black hover:text-white hover:border-black transition-all duration-300 cursor-pointer">domain fine-tuning</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    <span className="px-2 py-1 bg-gray-50 text-black rounded-full text-xs font-thin border border-gray-300 hover:bg-black hover:text-white hover:border-black transition-all duration-300 cursor-pointer">prompt engineering</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Square Card 10 - Model Fine-Tuning TEXT (1x1) - Desktop Row 1 */}
            <div className="hidden lg:block col-span-1 aspect-square bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-gray-100 group">
              <div className="p-2 md:p-3 h-full flex flex-col justify-start items-start text-left">
                <div className="mb-3">
                  <h3 className="text-base md:text-lg lg:text-xl font-thin text-[#998664] mb-2 group-hover:text-gray-800 transition-colors">Model Fine-Tuning</h3>
                </div>
                
                <div className="space-y-2">
                  <div className="flex flex-wrap gap-1">
                    <span className="px-2 py-1 bg-gray-50 text-black rounded-full text-xs font-thin border border-gray-300 hover:bg-black hover:text-white hover:border-black transition-all duration-300 cursor-pointer">custom llms</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    <span className="px-2 py-1 bg-gray-50 text-black rounded-full text-xs font-thin border border-gray-300 hover:bg-black hover:text-white hover:border-black transition-all duration-300 cursor-pointer">domain training</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    <span className="px-2 py-1 bg-gray-50 text-black rounded-full text-xs font-thin border border-gray-300 hover:bg-black hover:text-white hover:border-black transition-all duration-300 cursor-pointer">optimization</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 2 */}
            {/* Square Card 5 - GenAI Consulting TEXT (1x1) */}
            <div className="col-span-1 aspect-square bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-gray-100 group">
              <div className="p-2 md:p-3 h-full flex flex-col justify-start items-start text-left">
                <div className="mb-3">
                  <h3 className="text-base md:text-lg lg:text-xl font-thin text-[#998664] mb-2 group-hover:text-gray-800 transition-colors">GenAI Consulting</h3>
                </div>
                
                <div className="space-y-2">
                  <div className="flex flex-wrap gap-1">
                    <span className="px-2 py-1 bg-gray-50 text-black rounded-full text-xs font-thin border border-gray-300 hover:bg-black hover:text-white hover:border-black transition-all duration-300 cursor-pointer">genai strategy</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    <span className="px-2 py-1 bg-gray-50 text-black rounded-full text-xs font-thin border border-gray-300 hover:bg-black hover:text-white hover:border-black transition-all duration-300 cursor-pointer">automation roadmap</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Square Card 4 - AI-Powered Analytics TEXT (1x1) */}
            <div className="col-span-1 aspect-square bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-gray-100 group">
              <div className="p-2 md:p-3 h-full flex flex-col justify-start items-start text-left">
                <div className="mb-3">
                  <h3 className="text-base md:text-lg lg:text-xl font-thin text-[#998664] mb-2 group-hover:text-gray-800 transition-colors">AI-Powered Analytics</h3>
                </div>
                
                <div className="space-y-2">
                  <div className="flex flex-wrap gap-1">
                    <span className="px-2 py-1 bg-gray-50 text-black rounded-full text-xs font-thin border border-gray-300 hover:bg-black hover:text-white hover:border-black transition-all duration-300 cursor-pointer">genai insights</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    <span className="px-2 py-1 bg-gray-50 text-black rounded-full text-xs font-thin border border-gray-300 hover:bg-black hover:text-white hover:border-black transition-all duration-300 cursor-pointer">automated reporting</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    <span className="px-2 py-1 bg-gray-50 text-black rounded-full text-xs font-thin border border-gray-300 hover:bg-black hover:text-white hover:border-black transition-all duration-300 cursor-pointer">predictive modeling</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 3 */}
            {/* Square Card 11 - Fish Swimming Video Card (1x1) */}
            <div className="col-span-1 aspect-square bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-gray-100 group relative overflow-hidden">
              <video 
                autoPlay 
                muted 
                loop
                playsInline
                className="absolute inset-0 h-full w-full object-cover"
              >
                <source src="/fish_swimming.mp4" type="video/mp4" />
              </video>
              
              {/* White Overlay */}
              <div className="absolute inset-0 bg-white opacity-20 group-hover:opacity-10 transition-opacity duration-300"></div>
            </div>

            {/* Square Card 6 - GenAI Tool Development TEXT (1x1) */}
            <div className="col-span-1 aspect-square bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-gray-100 group">
              <div className="p-2 md:p-3 h-full flex flex-col justify-start items-start text-left">
                <div className="mb-3">
                  <h3 className="text-base md:text-lg lg:text-xl font-thin text-[#998664] mb-2 group-hover:text-gray-800 transition-colors">GenAI Tool Development</h3>
                </div>
                
                <div className="space-y-2">
                  <div className="flex flex-wrap gap-1">
                    <span className="px-2 py-1 bg-gray-50 text-black rounded-full text-xs font-thin border border-gray-300 hover:bg-black hover:text-white hover:border-black transition-all duration-300 cursor-pointer">custom solutions</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    <span className="px-2 py-1 bg-gray-50 text-black rounded-full text-xs font-thin border border-gray-300 hover:bg-black hover:text-white hover:border-black transition-all duration-300 cursor-pointer">api integration</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    <span className="px-2 py-1 bg-gray-50 text-black rounded-full text-xs font-thin border border-gray-300 hover:bg-black hover:text-white hover:border-black transition-all duration-300 cursor-pointer">intelligent apps</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Square Card 7 - GenAI Implementation TEXT (1x1) */}
            <div className="col-span-1 aspect-square bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-gray-100 group">
              <div className="p-2 md:p-3 h-full flex flex-col justify-start items-start text-left">
                <div className="mb-3">
                  <h3 className="text-base md:text-lg lg:text-xl font-thin text-[#998664] mb-2 group-hover:text-gray-800 transition-colors">GenAI Implementation</h3>
                </div>
                
                <div className="space-y-2">
                  <div className="flex flex-wrap gap-1">
                    <span className="px-2 py-1 bg-gray-50 text-black rounded-full text-xs font-thin border border-gray-300 hover:bg-black hover:text-white hover:border-black transition-all duration-300 cursor-pointer">model deployment</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    <span className="px-2 py-1 bg-gray-50 text-black rounded-full text-xs font-thin border border-gray-300 hover:bg-black hover:text-white hover:border-black transition-all duration-300 cursor-pointer">agent integration</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    <span className="px-2 py-1 bg-gray-50 text-black rounded-full text-xs font-thin border border-gray-300 hover:bg-black hover:text-white hover:border-black transition-all duration-300 cursor-pointer">genai workflows</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Square Card 8 - Workflow Automation TEXT (1x1) */}
            <div className="col-span-1 aspect-square bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-gray-100 group">
              <div className="p-2 md:p-3 h-full flex flex-col justify-start items-start text-left">
                <div className="mb-3">
                  <h3 className="text-base md:text-lg lg:text-xl font-thin text-[#998664] mb-2 group-hover:text-gray-800 transition-colors">Workflow Automation</h3>
                </div>
                
                <div className="space-y-2">
                  <div className="flex flex-wrap gap-1">
                    <span className="px-2 py-1 bg-gray-50 text-black rounded-full text-xs font-thin border border-gray-300 hover:bg-black hover:text-white hover:border-black transition-all duration-300 cursor-pointer">process optimization</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    <span className="px-2 py-1 bg-gray-50 text-black rounded-full text-xs font-thin border border-gray-300 hover:bg-black hover:text-white hover:border-black transition-all duration-300 cursor-pointer">task delegation</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    <span className="px-2 py-1 bg-gray-50 text-black rounded-full text-xs font-thin border border-gray-300 hover:bg-black hover:text-white hover:border-black transition-all duration-300 cursor-pointer">intelligent flows</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Industries We Serve Card - Takes space of 4 x 1x1 cards */}
            <Link to="/industries" className="col-span-2 md:col-span-4 lg:col-span-4 aspect-square md:aspect-[4/1] bg-gradient-to-br from-black to-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 group cursor-pointer block hover:scale-105">
              <div className="p-3 md:p-6 lg:p-8 h-full flex flex-col justify-between text-left relative">
                <div>
                  <h3 className="text-sm md:text-lg lg:text-xl font-thin text-white mb-2 md:mb-4 group-hover:text-gray-200 transition-colors">Industries We Serve</h3>
                  <div className="w-12 md:w-16 h-0.5 bg-white transition-all duration-300 group-hover:w-16 md:group-hover:w-20"></div>
                </div>
                <div className="flex items-end justify-between">
                  <p className="text-xs md:text-sm font-thin text-gray-300 leading-relaxed max-w-lg group-hover:text-gray-200 transition-colors">
                    From enterprise software and financial services to healthcare systems and legal intelligence, we provide AI solutions that improve efficiency, decision-making, and competitive positioning across strategic sectors.
                  </p>
                  <div className="ml-4 flex-shrink-0">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-black group-hover:text-white transition-all duration-300 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>

          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="py-32 bg-black text-white">
        <div className="max-w-7xl mx-auto px-12">
          {/* Newsletter Section */}
          <div className="text-center mb-20">
            <h3 className="text-large font-thin text-white mb-6">Stay Updated</h3>
            <p className="text-body font-thin text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the revolution. Get updates on our GenAI democratization mission, breakthrough products, and insights on challenging big tech dominance.
            </p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-6 py-3 bg-gray-800 border border-gray-700 rounded-l-lg sm:rounded-r-none rounded-r-lg text-white placeholder-gray-400 font-thin focus:outline-none focus:border-gray-500"
              />
              <button className="px-8 py-3 bg-white text-black font-thin rounded-r-lg sm:rounded-l-none rounded-l-lg hover:bg-gray-100 transition-colors mt-4 sm:mt-0">
                Subscribe
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
            <div className="md:col-span-2">
              <h3 className="text-large font-thin mb-8 text-white">Build with us</h3>
              <p className="text-body font-thin text-gray-300 mb-8 max-w-lg">
                Ready to challenge big tech dominance? We're democratizing GenAI to help organizations 
                compete with giants and revolutionize their industries.
              </p>
              <div className="space-y-2">
                <p className="text-body font-thin text-black">hello@nightskylabs.com</p>
                <p className="text-small font-thin text-gray-500">Chennai, India • Remote First</p>
              </div>
            </div>
            
            <div>
              <h4 className="text-body font-thin mb-6 text-white">We Provide Service In</h4>
              <div className="space-y-3 text-black">
                <a href="#" className="block text-small font-thin hover:text-white transition-colors">Artificial Intelligence</a>
                <a href="#" className="block text-small font-thin hover:text-white transition-colors">Developer Infrastructure</a>
                <a href="#" className="block text-small font-thin hover:text-white transition-colors">Enterprise Software</a>
                <a href="#" className="block text-small font-thin hover:text-white transition-colors">Education Technology</a>
              </div>
            </div>
            
            <div>
              <h4 className="text-body font-thin mb-6 text-white">Our Products</h4>
              <div className="space-y-3 text-black">
                <a href="#" className="block text-small font-thin hover:text-white transition-colors">Soul - Developer Tools</a>
                <a href="#" className="block text-small font-thin hover:text-white transition-colors">Voice - AI Recruitment</a>
                <a href="#" className="block text-small font-thin hover:text-white transition-colors">Qurious - Learning Platform</a>
                <a href="#" className="block text-small font-thin hover:text-white transition-colors">Partnership Opportunities</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-12 flex flex-col md:flex-row justify-between items-center">
            <p className="text-small font-thin text-black">© 2025 NightSkyLabs Holdings. All rights reserved.</p>
            <div className="flex space-x-8 mt-4 md:mt-0">
              <a href="#" className="text-small font-thin text-black hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="text-small font-thin text-black hover:text-white transition-colors">Twitter</a>
              <a href="#" className="text-small font-thin text-black hover:text-white transition-colors">Portfolio</a>
              <a href="#" className="text-small font-thin text-black hover:text-white transition-colors">Investors</a>
              <a href="#" className="text-small font-thin text-black hover:text-white transition-colors">Privacy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HeroLayout;
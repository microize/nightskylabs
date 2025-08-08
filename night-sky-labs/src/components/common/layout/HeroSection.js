import React from 'react';

const HeroSection = ({ 
  title, 
  subtitle, 
  description, 
  showVideo = true,
  showScrollIndicator = true,
  videoSrc = "/frog_breathing.mp4",
  videoFilter = null,
  showOverlay = false
}) => {
  return (
    <div className="hero-artboard relative w-full bg-white overflow-hidden pt-16 md:pt-24" 
         style={{ 
           height: '100vh', 
           minHeight: '100vh'
         }}>
      
      {/* Background Video - Responsive */}
      {showVideo && (
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
                WebkitMaskImage: 'var(--video-mask)',
                filter: videoFilter || 'none'
              }}
            >
              <source src={videoSrc} type="video/mp4" />
            </video>
            
            {/* Video Overlay for Better Text Readability - Desktop Only */}
            {showOverlay && (
              <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-black/20 via-black/10 to-transparent"></div>
            )}
            
            {/* Mobile Video Overlay - White gradient from bottom to top */}
            <div className="md:hidden absolute inset-0 bg-gradient-to-t from-white via-white/40 to-white/10"></div>
            
            {/* Mobile Scroll Indicator - Between video and overlay */}
            {showScrollIndicator && (
              <div className="md:hidden absolute bottom-16 left-1/2 transform -translate-x-1/2 z-10">
                <div className="flex flex-col items-center">
                  <svg className="w-6 h-6 text-[#998664] animate-bounce" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
                  </svg>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      
      {/* Content Container - Desktop Layout */}
      <div className="hidden md:flex relative z-10 h-full flex-col items-start px-12" style={{ paddingTop: '10%' }}>
        
        {/* Hero Text Section - Desktop */}
        <div className="flex flex-col items-start text-left w-full ml-[32%] pr-8">
          <div className="hero-text-creating animate-hero-text-1 mb-0 md:mb-0">
            <h1 className="font-medium bg-gradient-to-r from-[#998664] to-[#aa9678] bg-clip-text text-transparent leading-tight md:leading-relaxed" style={{ fontSize: '12vh' }}>
              {title}
            </h1>
          </div>

          {subtitle && (
            <div className="hero-text-users animate-hero-text-2 mb-8 md:mb-10">
              <h2 className="font-medium bg-gradient-to-r from-[#998664] to-[#aa9678] bg-clip-text text-transparent leading-tight md:leading-relaxed" style={{ fontSize: '6vh' }}>
                {subtitle}
              </h2>
            </div>
          )}
        </div>

        {/* Description Text - Desktop Position */}
        {description && (
          <div className="hero-description animate-hero-fade-in absolute right-10" style={{ bottom: '10%', width: '30%' }}>
            <p className="text-left font-light text-black leading-relaxed" style={{ fontSize: '2vh', fontFamily: 'Inter Tight', fontWeight: 300, color: 'rgb(34, 34, 34)' }}>
              {description}
            </p>
          </div>
        )}

        {/* Scroll Indicator - Desktop */}
        {showScrollIndicator && (
          <div className="hidden md:block hero-scroll animate-hero-scroll absolute left-1/2 transform -translate-x-1/2" style={{ bottom: '2%' }}>
            <div className="flex flex-col items-center">
              <svg className="w-6 h-6 text-[#998664] animate-bounce" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
              </svg>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroSection;
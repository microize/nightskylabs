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
           minHeight: '600px',
           maxHeight: '1000px'
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
                <div className="flex flex-col items-center space-y-2">
                  <span className="text-sm text-black font-thin micro-pulse">SCROLL</span>
                  <div>
                    <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 16l-6-6h12l-6 6z"/>
                    </svg>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      
      {/* Content Container - Desktop Layout */}
      <div className="hidden md:flex relative z-10 h-full flex-col items-start px-12" style={{ paddingTop: '25vh' }}>
        
        {/* Hero Text Section - Desktop */}
        <div className="flex flex-col items-start text-left w-full max-w-4xl ml-[35%]">
          <div className="hero-text-creating animate-hero-text-1 mb-8">
            <h1 className="text-7xl lg:text-8xl xl:text-9xl font-thin text-black leading-relaxed">
              {title}
            </h1>
          </div>

          {subtitle && (
            <div className="hero-text-users animate-hero-text-2 mb-16">
              <h2 className="text-5xl lg:text-6xl xl:text-7xl font-thin text-black leading-relaxed">
                {subtitle}
              </h2>
            </div>
          )}
        </div>

        {/* Description Text - Desktop Position */}
        {description && (
          <div className="hero-description animate-hero-fade-in absolute bottom-24 right-12 max-w-md">
            <p className="text-justify text-lg lg:text-xl font-light text-gray-600 leading-relaxed">
              {description}
            </p>
          </div>
        )}

        {/* Scroll Indicator - Desktop */}
        {showScrollIndicator && (
          <div className="hidden md:block hero-scroll animate-hero-scroll absolute bottom-16 left-1/2 transform -translate-x-1/2">
            <div className="flex flex-col items-center space-y-2">
              <span className="text-sm text-black font-thin micro-pulse">SCROLL</span>
              <div>
                <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 16l-6-6h12l-6 6z"/>
                </svg>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroSection;
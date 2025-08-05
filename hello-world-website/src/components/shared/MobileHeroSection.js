import React from 'react';

const MobileHeroSection = ({ title, subtitle, description }) => {
  return (
    <section className="md:hidden bg-white py-16 px-6">
      <div className="max-w-2xl mx-auto text-center">
        {/* Mobile Hero Text */}
        <div className="mb-4">
          <h1 className="text-5xl sm:text-6xl font-thin text-black leading-tight">
            {title}
          </h1>
        </div>

        {subtitle && (
          <div className="mb-8">
            <h2 className="text-4xl sm:text-5xl font-thin text-black leading-tight">
              {subtitle}
            </h2>
          </div>
        )}

        {/* Mobile Description */}
        {description && (
          <div className="mb-12">
            <p className="text-justify text-center text-base sm:text-lg font-light text-gray-600 leading-relaxed">
              {description}
            </p>
          </div>
        )}

        {/* Mobile Scroll Indicator - Positioned between video and text */}
        <div className="relative z-30 flex flex-col items-center space-y-2">
          <span className="text-sm text-black font-thin micro-pulse">SCROLL</span>
          <div>
            <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 16l-6-6h12l-6 6z"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileHeroSection;
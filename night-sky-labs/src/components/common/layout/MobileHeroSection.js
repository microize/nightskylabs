import React from 'react';

const MobileHeroSection = ({ title, subtitle, description }) => {
  return (
    <section className="md:hidden bg-white py-8 px-6">
      <div className="max-w-2xl mx-auto text-center">
        {/* Mobile Hero Text */}
        <div className="mb-0">
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-thin bg-gradient-to-r from-[#998664] to-[#aa9678] bg-clip-text text-transparent leading-tight">
            {title}
          </h1>
        </div>

        {subtitle && (
          <div className="mb-4">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-thin bg-gradient-to-r from-[#998664] to-[#aa9678] bg-clip-text text-transparent leading-tight">
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
      </div>
    </section>
  );
};

export default MobileHeroSection;
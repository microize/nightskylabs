import React from 'react';
import FeatureList from './FeatureList';

const ProductSection = ({ 
  product,
  isReversed = false,
  backgroundColor = 'bg-white',
  children 
}) => {
  const { title, subtitle, description, features } = product;

  return (
    <section className={`animated-section relative w-full ${backgroundColor} py-16 md:py-24`}>
      <div className="w-4/5 mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className={isReversed ? 'order-2 lg:order-1' : ''}>
            <h2 className="text-3xl md:text-5xl font-thin text-black mb-6">{title}</h2>
            {subtitle && (
              <h3 className="text-xl md:text-2xl font-thin text-gray-600 mb-8">{subtitle}</h3>
            )}
            
            <div className="reading-text text-base md:text-lg font-thin text-gray-600 mb-12" style={{ lineHeight: '2' }}>
              {description}
            </div>

            {features && <FeatureList title="Key Features" features={features} />}
          </div>

          {/* Visual/Demo Component */}
          <div className={isReversed ? 'order-1 lg:order-2' : ''}>
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
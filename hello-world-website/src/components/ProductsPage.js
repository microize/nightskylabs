import React from 'react';
import Navigation from './shared/Navigation';
import ProductSection from './shared/ProductSection';
import SoulDemo from './products/SoulDemo';
import VoiceDemo from './products/VoiceDemo';
import QuriousDemo from './products/QuriousDemo';
import { useReadingAnimation } from '../hooks/useReadingAnimation';
import { productsData } from '../data/productsData';

const ProductsPage = () => {
  useReadingAnimation();

  return (
    <div className="relative w-full bg-white overflow-hidden">
      <Navigation currentPage="products" />

      {/* Hero Section */}
      <section className="relative w-full bg-white pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-thin text-black leading-tight mb-6">
              Our Products
            </h1>
            <div className="w-24 h-0.5 bg-black mx-auto mb-8"></div>
            <p className="text-lg md:text-xl font-thin text-gray-600 max-w-3xl mx-auto leading-relaxed">
              AI-powered tools designed to transform how you work, learn, and grow. From development workflows to learning experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Soul CLI Section */}
      <ProductSection product={productsData.soul}>
        <SoulDemo />
      </ProductSection>

      {/* Voice Platform Section */}
      <ProductSection product={productsData.voice} isReversed={true} backgroundColor="bg-gray-50">
        <VoiceDemo />
      </ProductSection>

      {/* Qurious Learning Section */}
      <ProductSection product={productsData.qurious}>
        <QuriousDemo />
      </ProductSection>

      {/* Call to Action */}
      <section className="relative w-full bg-black py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-5xl font-thin text-white mb-8">
            Ready to Transform Your Workflow?
          </h2>
          <p className="text-lg md:text-xl font-thin text-gray-300 mb-12 max-w-3xl mx-auto">
            Discover how our AI-powered tools can accelerate your development, hiring, and learning processes.
          </p>
          <button className="bg-white text-black px-8 py-4 rounded-full text-lg font-thin hover:bg-gray-100 transition-colors">
            Get Started Today
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 md:py-32 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16 md:mb-20">
            <h3 className="text-xl md:text-large font-thin text-white mb-4 md:mb-6">Stay Updated</h3>
            <p className="text-base md:text-body font-thin text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto">
              Get updates on our products, features, and AI technology insights.
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

          <div className="border-t border-gray-800 pt-8 md:pt-12 text-center">
            <p className="text-sm md:text-small font-thin text-gray-400">© 2025 NightSkyLabs Holdings. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProductsPage;
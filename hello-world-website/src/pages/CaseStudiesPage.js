import React from 'react';
import Navigation from '../components/shared/Navigation';
import Footer from '../components/shared/Footer';

const CaseStudiesPage = () => {
  return (
    <div className="relative w-full bg-white overflow-hidden">
      <Navigation currentPage="resources" />

      {/* Hero Section */}
      <section className="relative w-full bg-white pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h1 className="text-4xl md:text-6xl font-thin text-black mb-6">Case Studies</h1>
          <div className="w-24 h-0.5 bg-black mx-auto mb-8"></div>
          <p className="text-lg md:text-xl font-thin text-gray-600 max-w-4xl mx-auto">
            Real-world success stories and client implementations showcasing the transformative power of AI solutions.
          </p>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="relative w-full bg-gray-50 py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="w-24 h-24 bg-gray-100 rounded-2xl mx-auto mb-8 flex items-center justify-center">
              <span className="text-gray-400 text-4xl">📊</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-thin text-black mb-6">Detailed Case Studies Coming Soon</h2>
            <p className="text-lg font-thin text-gray-600 mb-8 max-w-3xl mx-auto">
              We're preparing comprehensive case studies that showcase how our AI products have transformed businesses 
              across various industries. These will include detailed metrics, implementation insights, and measurable outcomes.
            </p>
            <button className="bg-black text-white px-8 py-4 rounded-full text-lg font-thin hover:bg-gray-800 transition-colors">
              Get Notified
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudiesPage;
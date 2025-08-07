import React from 'react';
import Navigation from '../components/common/layout/Navigation';
import Footer from '../components/common/layout/Footer';
import HelpContainer from '../components/features/help/HelpContainer';

const HelpCenterPage = () => {
  return (
    <div className="relative w-full bg-white overflow-hidden">
      <Navigation currentPage="resources" />

      {/* Hero Section */}
      <section className="relative w-full bg-white pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-thin text-black mb-6">Help Center</h1>
            <div className="w-24 h-0.5 bg-black mx-auto mb-8"></div>
            <p className="text-lg md:text-xl font-thin text-gray-600 max-w-4xl mx-auto">
              FAQs, tutorials, troubleshooting guides, and support resources for all NightSkyLabs products.
            </p>
          </div>
        </div>
      </section>

      {/* Help Content */}
      <section className="relative w-full bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <HelpContainer />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HelpCenterPage;
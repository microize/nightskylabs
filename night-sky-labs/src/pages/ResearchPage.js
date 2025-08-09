import React from 'react';
import Navigation from '../components/common/layout/Navigation';
import Footer from '../components/common/layout/Footer';
import ContentContainer from '../components/features/content/ContentContainer';
import { loadResearchPapers, generateResearchCategories } from '../utils/researchUtils';

const ResearchPage = () => {
  return (
    <div className="relative w-full bg-white overflow-hidden">
      <Navigation currentPage="resources" />

      {/* Hero Section */}
      <section className="relative w-full bg-white pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-thin text-[#998664] mb-6">Research & Publications</h1>
            <div className="w-24 h-0.5 bg-[#998664] mx-auto mb-8"></div>
            <p className="text-lg md:text-xl font-thin text-gray-600 max-w-4xl mx-auto">
              Whitepapers, research findings, and technical publications advancing the field of artificial intelligence.
            </p>
          </div>
        </div>
      </section>

      {/* Research Content */}
      <section className="relative w-full bg-gradient-to-r from-[#998664] to-[#aa9678] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <ContentContainer 
            contentType="research"
            loadContent={loadResearchPapers}
            generateCategories={generateResearchCategories}
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ResearchPage;
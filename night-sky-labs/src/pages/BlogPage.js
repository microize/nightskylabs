import React from 'react';
import Navigation from '../components/common/layout/Navigation';
import Footer from '../components/common/layout/Footer';
import ContentContainer from '../components/features/content/ContentContainer';
import { loadBlogPosts, generateCategories } from '../utils/markdownUtils';

const BlogPage = () => {
  return (
    <div className="relative w-full bg-white overflow-hidden">
      <Navigation currentPage="resources" />

      {/* Hero Section */}
      <section className="relative w-full bg-white pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-thin text-[#998664] mb-6">AI Insights & Analysis</h1>
            <div className="w-24 h-0.5 bg-[#998664] mx-auto mb-8"></div>
            <p className="text-lg md:text-xl font-thin text-gray-600 max-w-4xl mx-auto">
              Deep insights into AI technology, industry trends, and the future of intelligent automation.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="relative w-full bg-gradient-to-r from-[#998664] to-[#aa9678] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <ContentContainer 
            contentType="blog"
            loadContent={loadBlogPosts}
            generateCategories={(items) => generateCategories(items)}
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPage;
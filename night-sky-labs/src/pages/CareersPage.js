import React from 'react';
import Navigation from '../components/shared/Navigation';
import Footer from '../components/shared/Footer';

const CareersPage = () => {
  return (
    <div className="relative w-full bg-white overflow-hidden">
      <Navigation currentPage="about" />

      {/* Hero Section */}
      <section className="relative w-full bg-white pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h1 className="text-4xl md:text-6xl font-thin text-black mb-6">Careers</h1>
          <div className="w-24 h-0.5 bg-black mx-auto mb-8"></div>
          <p className="text-lg md:text-xl font-thin text-gray-600 max-w-4xl mx-auto">
            Join our team of AI innovators and help shape the future of artificial intelligence.
          </p>
        </div>
      </section>

      {/* Why Work Here */}
      <section className="relative w-full bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-thin text-black mb-6">Why NightSkyLabs?</h2>
            <p className="text-lg font-thin text-gray-600 max-w-3xl mx-auto">
              We're building the future of AI while fostering a culture of innovation, 
              collaboration, and continuous learning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
              <div className="w-16 h-16 bg-black rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-thin text-black mb-4">Cutting-Edge Technology</h3>
              <p className="text-base font-thin text-gray-600">
                Work with the latest AI technologies and contribute to groundbreaking innovations 
                that are transforming industries.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
              <div className="w-16 h-16 bg-black rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-thin text-black mb-4">Meaningful Impact</h3>
              <p className="text-base font-thin text-gray-600">
                Your work directly influences how organizations leverage AI to solve 
                real-world problems and create positive change.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
              <div className="w-16 h-16 bg-black rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-thin text-black mb-4">Growth & Learning</h3>
              <p className="text-base font-thin text-gray-600">
                Continuous learning opportunities, conference attendance, and mentorship 
                from industry leaders in AI and machine learning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="relative w-full bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-thin text-black mb-6">Open Positions</h2>
            <p className="text-lg font-thin text-gray-600 max-w-3xl mx-auto">
              We're always looking for talented individuals who share our passion for AI innovation.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 rounded-2xl p-8 flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="flex-1">
                <h3 className="text-2xl font-thin text-black mb-2">Senior AI Engineer</h3>
                <p className="text-base font-thin text-gray-600 mb-4">
                  Lead the development of our core AI products including Soul CLI and Voice platform.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-white px-3 py-1 rounded-full text-sm font-thin text-gray-600">Machine Learning</span>
                  <span className="bg-white px-3 py-1 rounded-full text-sm font-thin text-gray-600">Python</span>
                  <span className="bg-white px-3 py-1 rounded-full text-sm font-thin text-gray-600">Remote</span>
                </div>
              </div>
              <div className="mt-6 md:mt-0 md:ml-8">
                <button className="bg-black text-white px-6 py-3 rounded-full text-sm font-thin hover:bg-gray-800 transition-colors">
                  Apply Now
                </button>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="flex-1">
                <h3 className="text-2xl font-thin text-black mb-2">Product Designer</h3>
                <p className="text-base font-thin text-gray-600 mb-4">
                  Design intuitive user experiences for our AI-powered products and consulting services.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-white px-3 py-1 rounded-full text-sm font-thin text-gray-600">UI/UX Design</span>
                  <span className="bg-white px-3 py-1 rounded-full text-sm font-thin text-gray-600">Figma</span>
                  <span className="bg-white px-3 py-1 rounded-full text-sm font-thin text-gray-600">Hybrid</span>
                </div>
              </div>
              <div className="mt-6 md:mt-0 md:ml-8">
                <button className="bg-black text-white px-6 py-3 rounded-full text-sm font-thin hover:bg-gray-800 transition-colors">
                  Apply Now
                </button>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="flex-1">
                <h3 className="text-2xl font-thin text-black mb-2">AI Research Scientist</h3>
                <p className="text-base font-thin text-gray-600 mb-4">
                  Conduct cutting-edge research in AI and machine learning to advance our product capabilities.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-white px-3 py-1 rounded-full text-sm font-thin text-gray-600">Research</span>
                  <span className="bg-white px-3 py-1 rounded-full text-sm font-thin text-gray-600">PhD Preferred</span>
                  <span className="bg-white px-3 py-1 rounded-full text-sm font-thin text-gray-600">Remote</span>
                </div>
              </div>
              <div className="mt-6 md:mt-0 md:ml-8">
                <button className="bg-black text-white px-6 py-3 rounded-full text-sm font-thin hover:bg-gray-800 transition-colors">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="relative w-full bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-thin text-black mb-6">Benefits & Perks</h2>
            <p className="text-lg font-thin text-gray-600 max-w-3xl mx-auto">
              We invest in our team's success with comprehensive benefits and a supportive work environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="text-lg font-thin text-black mb-2">Health & Wellness</h3>
              <p className="text-sm font-thin text-gray-600">
                Comprehensive health insurance, dental, vision, and mental health support.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-thin text-black mb-2">Flexible Work</h3>
              <p className="text-sm font-thin text-gray-600">
                Remote-first culture with flexible hours and unlimited PTO policy.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-thin text-black mb-2">Learning Budget</h3>
              <p className="text-sm font-thin text-gray-600">
                Annual learning stipend for courses, conferences, and professional development.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-thin text-black mb-2">Equity Package</h3>
              <p className="text-sm font-thin text-gray-600">
                Competitive equity compensation to share in our collective success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full bg-black py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-5xl font-thin text-white mb-6">Ready to Join Our Team?</h2>
          <p className="text-lg font-thin text-white/80 mb-8 max-w-3xl mx-auto">
            Don't see a position that fits? We're always interested in hearing from talented individuals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-black px-8 py-4 rounded-full text-lg font-thin hover:bg-gray-100 transition-colors">
              View All Openings
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-full text-lg font-thin hover:bg-white hover:text-black transition-colors">
              Send Us Your Resume
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CareersPage;
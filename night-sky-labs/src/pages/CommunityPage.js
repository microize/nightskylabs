import React from 'react';
import Navigation from '../components/common/layout/Navigation';
import Footer from '../components/common/layout/Footer';

const CommunityPage = () => {
  return (
    <div className="relative w-full bg-white overflow-hidden">
      <Navigation currentPage="resources" />

      {/* Hero Section */}
      <section className="relative w-full bg-white pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h1 className="text-4xl md:text-6xl font-thin text-black mb-6">Community</h1>
          <div className="w-24 h-0.5 bg-black mx-auto mb-8"></div>
          <p className="text-lg md:text-xl font-thin text-gray-600 max-w-4xl mx-auto">
            Join our developer community, participate in discussions, and collaborate on AI innovations.
          </p>
        </div>
      </section>

      {/* Community Preview Section */}
      <section className="relative w-full bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          {/* Coming Soon Banner */}
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg mb-16 text-center">
            <div className="w-24 h-24 bg-gray-100 rounded-2xl mx-auto mb-8 flex items-center justify-center">
              <span className="text-gray-400 text-4xl">👥</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-thin text-black mb-6">Developer Community Launching Soon</h2>
            <p className="text-lg font-thin text-gray-600 mb-8 max-w-3xl mx-auto">
              We're creating a vibrant community space where developers, researchers, and AI enthusiasts can connect, 
              share knowledge, and collaborate on cutting-edge projects.
            </p>
            <button className="bg-black text-white px-8 py-4 rounded-full text-lg font-thin hover:bg-gray-800 transition-colors mb-8">
              Join Waitlist
            </button>
          </div>

          {/* Preview Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <span className="text-purple-600 text-2xl">💬</span>
              </div>
              <h3 className="text-xl font-thin text-black mb-4">Developer Forums</h3>
              <p className="text-gray-600 font-thin">
                Technical discussions, Q&A, and collaborative problem-solving with fellow AI developers.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <span className="text-green-600 text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-thin text-black mb-4">Project Showcase</h3>
              <p className="text-gray-600 font-thin">
                Share your AI projects, get feedback, and discover innovative implementations from the community.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <span className="text-blue-600 text-2xl">📚</span>
              </div>
              <h3 className="text-xl font-thin text-black mb-4">Learning Resources</h3>
              <p className="text-gray-600 font-thin">
                Community-contributed tutorials, best practices, and advanced implementation guides.
              </p>
            </div>
          </div>

          {/* Temporary External Links */}
          <div className="bg-white rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-thin text-black mb-6">Connect With Us Now</h3>
            <p className="text-gray-600 font-thin mb-8">
              While we build our community platform, join these discussions:
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="bg-gray-900 text-white px-6 py-3 rounded-full text-sm font-thin hover:bg-gray-800 transition-colors">
                GitHub Discussions
              </button>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-full text-sm font-thin hover:bg-blue-700 transition-colors">
                Discord Server
              </button>
              <button className="bg-orange-500 text-white px-6 py-3 rounded-full text-sm font-thin hover:bg-orange-600 transition-colors">
                Reddit Community
              </button>
              <button className="bg-black text-white px-6 py-3 rounded-full text-sm font-thin hover:bg-gray-800 transition-colors">
                Newsletter
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-6">
              Follow @NightSkyLabs on social media for updates and announcements
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CommunityPage;
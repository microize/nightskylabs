import React from 'react';
import Navigation from '../components/shared/Navigation';
import Footer from '../components/shared/Footer';

const AboutPage = () => {
  return (
    <div className="relative w-full bg-white overflow-hidden">
      <Navigation currentPage="about" />

      {/* Hero Section */}
      <section className="relative w-full bg-white pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h1 className="text-4xl md:text-6xl font-thin text-black mb-6">About NightSkyLabs</h1>
          <div className="w-24 h-0.5 bg-black mx-auto mb-8"></div>
          <p className="text-lg md:text-xl font-thin text-gray-600 max-w-4xl mx-auto">
            We are pioneering the future of AI-powered technology, transforming how businesses and individuals 
            interact with artificial intelligence through innovative products and strategic consulting.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="relative w-full bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-thin text-black mb-8">Our Story</h2>
              <div className="space-y-6 text-base md:text-lg font-thin text-gray-600" style={{ lineHeight: '1.8' }}>
                <p>
                  Founded with a vision to democratize artificial intelligence, NightSkyLabs emerged from the belief 
                  that AI should empower everyone, not just tech giants. Our journey began with a simple question: 
                  How can we make AI more accessible, ethical, and genuinely useful?
                </p>
                <p>
                  Today, we're building that future through three core products—Soul, Voice, and Qurious—each designed 
                  to transform specific domains with intelligent automation and personalized experiences.
                </p>
                <p>
                  Our commitment extends beyond technology. We believe in responsible AI development, transparency in 
                  our processes, and creating solutions that genuinely improve human productivity and learning.
                </p>
              </div>
            </div>
            <div className="bg-black rounded-2xl p-8 md:p-12 text-white">
              <h3 className="text-2xl font-thin text-white mb-6">Our Mission</h3>
              <p className="text-base font-thin text-gray-300 mb-8">
                "To transform ideas into AI reality, making intelligent technology accessible, ethical, and impactful 
                for businesses and individuals worldwide."
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-thin text-white mb-2">2024</div>
                  <p className="text-sm font-thin text-gray-300">Founded</p>
                </div>
                <div>
                  <div className="text-3xl font-thin text-white mb-2">3</div>
                  <p className="text-sm font-thin text-gray-300">AI Products</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="relative w-full bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-thin text-black mb-6">Leadership Team</h2>
            <div className="w-24 h-0.5 bg-black mx-auto mb-8"></div>
            <p className="text-lg font-thin text-gray-600 max-w-3xl mx-auto">
              Experienced leaders driving innovation in AI technology and business transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-2xl mx-auto mb-6"></div>
              <h3 className="text-xl font-thin text-black mb-2">Alex Chen</h3>
              <p className="text-base font-thin text-gray-600 mb-4">Chief Executive Officer</p>
              <p className="text-sm font-thin text-gray-500">
                Former AI Research Lead at major tech companies. PhD in Machine Learning from Stanford.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-2xl mx-auto mb-6"></div>
              <h3 className="text-xl font-thin text-black mb-2">Sarah Johnson</h3>
              <p className="text-base font-thin text-gray-600 mb-4">Chief Technology Officer</p>
              <p className="text-sm font-thin text-gray-500">
                20+ years in software architecture and AI systems. Previously at leading AI startups.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-2xl mx-auto mb-6"></div>
              <h3 className="text-xl font-thin text-black mb-2">Michael Rodriguez</h3>
              <p className="text-base font-thin text-gray-600 mb-4">Chief Product Officer</p>
              <p className="text-sm font-thin text-gray-500">
                Product strategy expert with deep experience in AI-powered consumer and enterprise products.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative w-full bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-thin text-black mb-6">Our Values</h2>
            <div className="w-24 h-0.5 bg-black mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl font-thin">🎯</span>
              </div>
              <h3 className="text-lg font-thin text-black mb-4">Purpose-Driven</h3>
              <p className="text-sm font-thin text-gray-600">
                Every product we build serves a clear purpose in improving human productivity and capabilities.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl font-thin">🔒</span>
              </div>
              <h3 className="text-lg font-thin text-black mb-4">Ethical AI</h3>
              <p className="text-sm font-thin text-gray-600">
                We prioritize transparency, fairness, and responsible development in all our AI systems.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl font-thin">⚡</span>
              </div>
              <h3 className="text-lg font-thin text-black mb-4">Innovation</h3>
              <p className="text-sm font-thin text-gray-600">
                We push boundaries while maintaining practical focus on real-world applications.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl font-thin">🤝</span>
              </div>
              <h3 className="text-lg font-thin text-black mb-4">Collaboration</h3>
              <p className="text-sm font-thin text-gray-600">
                We believe the best AI solutions come from diverse perspectives and inclusive teams.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full bg-black py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-5xl font-thin text-white mb-8">
            Join Our Journey
          </h2>
          <p className="text-lg md:text-xl font-thin text-gray-300 mb-12 max-w-3xl mx-auto">
            Whether you're interested in careers, partnerships, or learning more about our mission, 
            we'd love to connect with you.
          </p>
          <div className="space-x-4">
            <button className="bg-white text-black px-8 py-4 rounded-full text-lg font-thin hover:bg-gray-100 transition-colors">
              View Careers
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-full text-lg font-thin hover:bg-white hover:text-black transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
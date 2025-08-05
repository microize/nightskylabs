import React from 'react';
import Navigation from '../components/shared/Navigation';
import Footer from '../components/shared/Footer';

const OurStoryPage = () => {
  return (
    <div className="relative w-full bg-white overflow-hidden">
      <Navigation currentPage="about" />

      {/* Hero Section */}
      <section className="relative w-full bg-white pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h1 className="text-4xl md:text-6xl font-thin text-black mb-6">Our Story</h1>
          <div className="w-24 h-0.5 bg-black mx-auto mb-8"></div>
          <p className="text-lg md:text-xl font-thin text-gray-600 max-w-4xl mx-auto">
            The journey that led us to pioneer AI-powered solutions for developers, enterprises, and learners worldwide.
          </p>
        </div>
      </section>

      {/* Founding Story */}
      <section className="relative w-full bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-thin text-black mb-8">The Beginning</h2>
              <div className="space-y-6">
                <p className="text-lg font-thin text-gray-600">
                  NightSkyLabs was born from a simple observation: while AI was transforming industries, 
                  the tools that developers, recruiters, and educators used daily remained largely unchanged. 
                  We saw an opportunity to bridge this gap.
                </p>
                <p className="text-lg font-thin text-gray-600">
                  Founded in 2025 by Sripathi Mohansundaram, an AI researcher and software engineer, we set out to create 
                  intelligent tools that would enhance human capability rather than replace it. Our mission 
                  was clear: make AI accessible, practical, and beneficial for everyday professionals.
                </p>
                <p className="text-lg font-thin text-gray-600">
                  Starting with operations in Chennai, India, we focused on understanding the real pain points 
                  that professionals faced in their daily workflows. This research-first approach would become 
                  the foundation of everything we built.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="text-center">
                <div className="text-6xl font-thin text-black mb-4">2025</div>
                <h3 className="text-2xl font-thin text-black mb-4">Company Founded</h3>
                <p className="text-base font-thin text-gray-600 mb-6">
                  Solo founder Sripathi Mohansundaram with background in AI research and software engineering 
                  launched the company with a clear vision to democratize AI tools.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm font-thin">
                    <span className="text-gray-600">Founder</span>
                    <span className="text-black">Sripathi Mohansundaram</span>
                  </div>
                  <div className="flex justify-between text-sm font-thin">
                    <span className="text-gray-600">First Office</span>
                    <span className="text-black">Chennai, India</span>
                  </div>
                  <div className="flex justify-between text-sm font-thin">
                    <span className="text-gray-600">Initial Focus</span>
                    <span className="text-black">Developer Tools</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Milestones */}
      <section className="relative w-full bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-thin text-black mb-6">Key Milestones</h2>
            <p className="text-lg font-thin text-gray-600 max-w-3xl mx-auto">
              Major achievements and product launches that shaped our journey toward becoming 
              a leading AI product development company.
            </p>
          </div>

          <div className="space-y-12">
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="w-full md:w-1/4">
                <div className="bg-black text-white rounded-2xl p-6 text-center">
                  <div className="text-2xl font-thin mb-2">Q4 2023</div>
                  <div className="text-sm font-thin">Product Research</div>
                </div>
              </div>
              <div className="w-full md:w-3/4">
                <h3 className="text-2xl font-thin text-black mb-4">Soul CLI Development Begins</h3>
                <p className="text-base font-thin text-gray-600 mb-4">
                  After extensive research with developers across different companies and backgrounds, 
                  we identified the need for an intelligent command-line interface that could understand 
                  codebases and automate repetitive tasks.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-sm font-thin text-gray-600">Market Research</span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-sm font-thin text-gray-600">Prototype Development</span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-sm font-thin text-gray-600">User Interviews</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="w-full md:w-1/4">
                <div className="bg-black text-white rounded-2xl p-6 text-center">
                  <div className="text-2xl font-thin mb-2">Q2 2024</div>
                  <div className="text-sm font-thin">Product Launch</div>
                </div>
              </div>
              <div className="w-full md:w-3/4">
                <h3 className="text-2xl font-thin text-black mb-4">Soul CLI Beta Release</h3>
                <p className="text-base font-thin text-gray-600 mb-4">
                  Soul CLI launched in beta with 100 developers from leading tech companies. 
                  The positive response validated our approach and led to rapid feature development 
                  based on real-world usage patterns.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-sm font-thin text-gray-600">Beta Testing</span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-sm font-thin text-gray-600">User Feedback</span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-sm font-thin text-gray-600">Feature Iteration</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="w-full md:w-1/4">
                <div className="bg-black text-white rounded-2xl p-6 text-center">
                  <div className="text-2xl font-thin mb-2">Q3 2024</div>
                  <div className="text-sm font-thin">Expansion</div>
                </div>
              </div>
              <div className="w-full md:w-3/4">
                <h3 className="text-2xl font-thin text-black mb-4">Voice Platform Development</h3>
                <p className="text-base font-thin text-gray-600 mb-4">
                  Recognizing the potential of AI in other domains, we began developing Voice, 
                  an AI-powered interview platform. This marked our expansion beyond developer tools 
                  into HR technology and recruitment solutions.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-sm font-thin text-gray-600">Market Expansion</span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-sm font-thin text-gray-600">AI Research</span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-sm font-thin text-gray-600">Partnership Development</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="w-full md:w-1/4">
                <div className="bg-black text-white rounded-2xl p-6 text-center">
                  <div className="text-2xl font-thin mb-2">Q4 2024</div>
                  <div className="text-sm font-thin">Growth</div>
                </div>
              </div>
              <div className="w-full md:w-3/4">
                <h3 className="text-2xl font-thin text-black mb-4">Qurious Platform Launch</h3>
                <p className="text-base font-thin text-gray-600 mb-4">
                  Our third major product, Qurious, launched as a personalized AI learning platform. 
                  This completed our vision of AI-powered tools across three critical domains: 
                  development, recruitment, and education.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-sm font-thin text-gray-600">Education Technology</span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-sm font-thin text-gray-600">Adaptive Learning</span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-sm font-thin text-gray-600">Platform Integration</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="relative w-full bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-3xl font-thin text-black mb-6">Our Mission</h3>
              <p className="text-lg font-thin text-gray-600 mb-6">
                To democratize AI by creating intuitive, powerful tools that enhance human capability 
                across critical domains of work and learning.
              </p>
              <p className="text-base font-thin text-gray-600">
                We believe AI should amplify human intelligence, not replace it. Our products are designed 
                to understand context, learn from usage patterns, and provide intelligent assistance that 
                makes professionals more effective and productive.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-3xl font-thin text-black mb-6">Our Vision</h3>
              <p className="text-lg font-thin text-gray-600 mb-6">
                A world where AI seamlessly integrates into professional workflows, making complex tasks 
                simple and empowering everyone to achieve more.
              </p>
              <p className="text-base font-thin text-gray-600">
                By 2030, we envision NightSkyLabs products being used by millions of professionals 
                worldwide, fundamentally changing how people develop software, hire talent, and learn 
                new skills through intelligent AI assistance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative w-full bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-thin text-black mb-6">Our Values</h2>
            <p className="text-lg font-thin text-gray-600 max-w-3xl mx-auto">
              The principles that guide every decision we make and every product we build.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <span className="text-gray-400 text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-thin text-black mb-4">Human-Centric AI</h3>
              <p className="text-base font-thin text-gray-600">
                We design AI that enhances human capability rather than replacing human judgment. 
                Our tools empower people to be more creative and productive.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <span className="text-gray-400 text-2xl">🔬</span>
              </div>
              <h3 className="text-xl font-thin text-black mb-4">Research-Driven</h3>
              <p className="text-base font-thin text-gray-600">
                Every product feature is backed by thorough research and real-world testing. 
                We validate ideas with users before committing to development.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <span className="text-gray-400 text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-thin text-black mb-4">Continuous Learning</h3>
              <p className="text-base font-thin text-gray-600">
                We embrace feedback, iterate quickly, and constantly improve our products 
                based on user needs and emerging technologies.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <span className="text-gray-400 text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-thin text-black mb-4">Ethical Innovation</h3>
              <p className="text-base font-thin text-gray-600">
                We build AI responsibly, considering the broader impact of our technology 
                on society and ensuring fairness and transparency.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <span className="text-gray-400 text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-thin text-black mb-4">Excellence</h3>
              <p className="text-base font-thin text-gray-600">
                We strive for excellence in everything we do, from product design to customer support, 
                setting high standards for quality and reliability.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <span className="text-gray-400 text-2xl">🌍</span>
              </div>
              <h3 className="text-xl font-thin text-black mb-4">Global Impact</h3>
              <p className="text-base font-thin text-gray-600">
                We build products that can make a positive difference worldwide, 
                democratizing access to AI-powered tools across different markets and cultures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full bg-black py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-5xl font-thin text-white mb-6">Join Our Journey</h2>
          <p className="text-lg font-thin text-white/80 mb-8 max-w-3xl mx-auto">
            We're just getting started. Be part of the future we're building together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-black px-8 py-4 rounded-full text-lg font-thin hover:bg-gray-100 transition-colors">
              Explore Our Products
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-full text-lg font-thin hover:bg-white hover:text-black transition-colors">
              Join Our Team
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OurStoryPage;
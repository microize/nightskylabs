import React from 'react';
import Navigation from '../components/shared/Navigation';
import Footer from '../components/shared/Footer';
import { LuTarget as Target, LuMicroscope as Microscope, LuTrendingUp as TrendingUp, LuUsers as Users, LuZap as Zap, LuGlobe as Globe } from 'react-icons/lu';

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
              <h2 className="text-3xl md:text-5xl font-thin text-black mb-8">The Revolution</h2>
              <div className="space-y-6">
                <p className="text-lg font-thin text-gray-600">
                  The AI revolution is here, and it's time to break the monopoly of big tech giants. 
                  While they build AI for themselves, we're democratizing this power for everyone. 
                  Generative AI will transform every industry - from startups to enterprises, 
                  everyone deserves access to world-class AI capabilities.
                </p>
                <p className="text-lg font-thin text-gray-600">
                  Too many organizations are held back by outdated systems and expensive solutions. 
                  We're changing that. Every business should be able to compete with giants like Google and Microsoft. 
                  NightSkyLabs exists to level the playing field and put cutting-edge AI in the hands of ambitious teams everywhere.
                </p>
                <p className="text-lg font-thin text-gray-600">
                  We're not just building software - we're building the future. From intelligent development tools 
                  to physical AI and wearable devices, we're pushing boundaries that others won't dare to cross. 
                  The status quo ends here. The future belongs to those bold enough to seize it.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="text-center">
                <div className="text-6xl font-thin text-black mb-4">2025</div>
                <h3 className="text-2xl font-thin text-black mb-4">Company Founded</h3>
                <p className="text-base font-thin text-gray-600 mb-6">
                  Founded by Sripathi Mohansundaram with a mission to challenge big tech dominance 
                  and democratize AI for organizations worldwide. From software to physical AI - we're building tomorrow, today.
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
                    <span className="text-black">GenAI Products</span>
                  </div>
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
                <Target size={24} className="text-gray-400" />
              </div>
              <h3 className="text-xl font-thin text-black mb-4">Human-Centric AI</h3>
              <p className="text-base font-thin text-gray-600">
                We design AI that enhances human capability rather than replacing human judgment. 
                Our tools empower people to be more creative and productive.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <Microscope size={24} className="text-gray-400" />
              </div>
              <h3 className="text-xl font-thin text-black mb-4">Research-Driven</h3>
              <p className="text-base font-thin text-gray-600">
                Every product feature is backed by thorough research and real-world testing. 
                We validate ideas with users before committing to development.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <TrendingUp size={24} className="text-gray-400" />
              </div>
              <h3 className="text-xl font-thin text-black mb-4">Continuous Learning</h3>
              <p className="text-base font-thin text-gray-600">
                We embrace feedback, iterate quickly, and constantly improve our products 
                based on user needs and emerging technologies.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <Users size={24} className="text-gray-400" />
              </div>
              <h3 className="text-xl font-thin text-black mb-4">Ethical Innovation</h3>
              <p className="text-base font-thin text-gray-600">
                We build AI responsibly, considering the broader impact of our technology 
                on society and ensuring fairness and transparency.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <Zap size={24} className="text-gray-400" />
              </div>
              <h3 className="text-xl font-thin text-black mb-4">Excellence</h3>
              <p className="text-base font-thin text-gray-600">
                We strive for excellence in everything we do, from product design to customer support, 
                setting high standards for quality and reliability.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <Globe size={24} className="text-gray-400" />
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
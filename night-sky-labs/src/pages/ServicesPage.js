import React from 'react';
import Navigation from '../components/common/layout/Navigation';
import Footer from '../components/common/layout/Footer';
import { LuBrain as Brain, LuSettings as Settings, LuUsers as Users, LuZap as Zap } from 'react-icons/lu';

const ServicesPage = () => {
  return (
    <div className="relative w-full bg-white overflow-hidden">
      <Navigation currentPage="services" />

      {/* Header Section - White Background */}
      <section className="relative w-full bg-white pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-thin text-[#998664] mb-8 leading-tight">AI Services</h1>
          <div className="w-24 h-0.5 bg-[#998664] mx-auto mb-12"></div>
          <p className="text-lg md:text-xl lg:text-2xl font-thin text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Comprehensive AI consulting and implementation services to transform your business operations with frontier technology.
          </p>
        </div>
      </section>

      {/* Core Services - Bronze Background */}
      <section className="relative w-full bg-gradient-to-r from-[#998664] to-[#aa9678] py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-thin text-white mb-8">Core Services</h2>
            <div className="w-24 h-0.5 bg-white mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="mb-6">
                <Brain size={48} className="text-white mx-auto" />
              </div>
              <h3 className="text-xl font-medium text-white mb-4">AI Strategy</h3>
              <p className="text-base font-thin text-white/90 leading-relaxed">
                Comprehensive AI adoption roadmaps tailored to your industry and organizational goals.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-6">
                <Settings size={48} className="text-white mx-auto" />
              </div>
              <h3 className="text-xl font-medium text-white mb-4">Custom Development</h3>
              <p className="text-base font-thin text-white/90 leading-relaxed">
                Tailored AI solutions built with cutting-edge technology and industry best practices.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-6">
                <Users size={48} className="text-white mx-auto" />
              </div>
              <h3 className="text-xl font-medium text-white mb-4">System Integration</h3>
              <p className="text-base font-thin text-white/90 leading-relaxed">
                Seamless AI implementation that connects with your existing technology infrastructure.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-6">
                <Zap size={48} className="text-white mx-auto" />
              </div>
              <h3 className="text-xl font-medium text-white mb-4">Performance Optimization</h3>
              <p className="text-base font-thin text-white/90 leading-relaxed">
                Continuous monitoring and optimization to maximize your AI investment returns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work - White Background */}
      <section className="relative w-full bg-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-thin text-[#998664] mb-8 leading-tight">How We Work</h2>
            <div className="w-24 h-0.5 bg-[#998664] mx-auto mb-12"></div>
            <p className="text-lg md:text-xl font-thin text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our proven methodology ensures successful AI transformation from strategy to deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#998664] to-[#aa9678] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-lg font-medium">1</span>
                </div>
                <div>
                  <h4 className="text-xl font-medium text-black mb-3">Assessment & Strategy</h4>
                  <p className="text-base font-thin text-gray-600 leading-relaxed">
                    Comprehensive evaluation of your current capabilities and strategic AI roadmap development tailored to your business goals.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#998664] to-[#aa9678] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-lg font-medium">2</span>
                </div>
                <div>
                  <h4 className="text-xl font-medium text-black mb-3">Design & Development</h4>
                  <p className="text-base font-thin text-gray-600 leading-relaxed">
                    Custom AI solution architecture and implementation with rigorous testing and validation processes.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#998664] to-[#aa9678] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-lg font-medium">3</span>
                </div>
                <div>
                  <h4 className="text-xl font-medium text-black mb-3">Integration & Deployment</h4>
                  <p className="text-base font-thin text-gray-600 leading-relaxed">
                    Seamless system integration and production-ready deployment with comprehensive monitoring and support.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-[#998664] to-[#aa9678] rounded-3xl p-10 text-white">
              <h4 className="text-2xl md:text-3xl font-thin mb-8">Service Categories</h4>
              <div className="space-y-6">
                <div className="flex justify-between items-center py-3 border-b border-white/20">
                  <span className="font-thin opacity-90">Strategic Consulting</span>
                  <span className="text-lg font-medium">Available</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/20">
                  <span className="font-thin opacity-90">Custom Development</span>
                  <span className="text-lg font-medium">Available</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/20">
                  <span className="font-thin opacity-90">System Integration</span>
                  <span className="text-lg font-medium">Available</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="font-thin opacity-90">Ongoing Support</span>
                  <span className="text-lg font-medium">Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment - Bronze Background */}
      <section className="relative w-full bg-gradient-to-r from-[#998664] to-[#aa9678] py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-thin text-white mb-8 leading-tight">Ready to Transform Your Business?</h2>
            <div className="w-24 h-0.5 bg-white mx-auto mb-12"></div>
            <blockquote className="text-xl md:text-2xl font-thin text-white/95 max-w-4xl mx-auto leading-relaxed italic mb-12">
              "We partner with you to harness the latest AI technologies, delivering solutions that drive real business value and competitive advantage. Let's build the future together."
            </blockquote>
            <button className="bg-white text-[#998664] px-10 py-4 rounded-2xl text-lg font-medium hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
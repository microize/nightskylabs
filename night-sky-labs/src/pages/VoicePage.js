import React from 'react';
import { LuClock } from 'react-icons/lu';
import Navigation from '../components/common/layout/Navigation';
import HeroSection from '../components/common/layout/HeroSection';
import MobileHeroSection from '../components/common/layout/MobileHeroSection';
import Footer from '../components/common/layout/Footer';
import { useReadingAnimation } from '../hooks/useReadingAnimation';

const VoicePage = () => {
  useReadingAnimation();


  return (
    <div className="relative w-full bg-white overflow-hidden">
      <Navigation />

      {/* Hero Section - Desktop */}
      <HeroSection 
        title="Voice"
        subtitle="Intelligent Recruitment"
        description="Revolutionize talent acquisition with AI-powered voice interviews that eliminate bias, accelerate screening, and deliver deep insights into candidate potential."
        videoSrc="/meadow_breeze.mp4"
        videoFilter="grayscale(100%)"
      />

      {/* Mobile Content Section - Below Video */}
      <MobileHeroSection 
        title="Voice"
        subtitle="Real-time Interviews"
        description="Transform your hiring process with AI-powered voice interviews that provide real-time insights into candidate capabilities and cultural fit."
      />

      {/* Main Content Section */}
      <section className="animated-section relative w-full bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-5xl font-thin text-black mb-6">Professional AI Recruitment Implementation</h3>
            <div className="w-24 h-0.5 bg-black mx-auto mb-8"></div>
            <p className="text-lg font-thin text-gray-600 max-w-3xl mx-auto">
              Voice helps organizations implement advanced AI recruitment capabilities effectively. We provide the expertise and custom development 
              needed to integrate GenAI tools into your hiring process, making professional-grade recruitment automation accessible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <h4 className="text-xl font-thin text-black mb-4">AI-Powered Analysis</h4>
              <p className="text-sm font-thin text-gray-600 mb-6">
                Real-time assessment of communication skills, technical knowledge, and cultural fit through advanced AI.
              </p>
              <div className="text-xs font-thin text-gray-500">
                Speech Analysis • Sentiment Detection • Skill Assessment
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <h4 className="text-xl font-thin text-black mb-4">Bias Elimination</h4>
              <p className="text-sm font-thin text-gray-600 mb-6">
                Objective evaluation based purely on skills and qualifications, removing unconscious bias from decisions.
              </p>
              <div className="text-xs font-thin text-gray-500">
                Fair Assessment • Standardized Process • Equal Opportunity
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <h4 className="text-xl font-thin text-black mb-4">Scalable Solution</h4>
              <p className="text-sm font-thin text-gray-600 mb-6">
                Handle hundreds of interviews simultaneously while maintaining consistent quality and insights.
              </p>
              <div className="text-xs font-thin text-gray-500">
                Mass Screening • Consistent Quality • Global Reach
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h4 className="text-2xl font-thin text-black mb-4">How Voice Works</h4>
              <p className="text-base font-thin text-gray-600 max-w-2xl mx-auto">
                Simple, powerful, and intelligent — Voice makes hiring faster and more accurate.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-black rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-xl font-thin">1</span>
                </div>
                <h5 className="font-thin text-black mb-2">Setup & Configure</h5>
                <p className="text-sm font-thin text-gray-600">Create custom interview templates and define evaluation criteria for your roles.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-black rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-xl font-thin">2</span>
                </div>
                <h5 className="font-thin text-black mb-2">AI-Guided Interviews</h5>
                <p className="text-sm font-thin text-gray-600">Candidates engage in natural conversations while AI analyzes responses in real-time.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-black rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-xl font-thin">3</span>
                </div>
                <h5 className="font-thin text-black mb-2">Instant Insights</h5>
                <p className="text-sm font-thin text-gray-600">Receive detailed analysis and data-driven recommendations for every candidate.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="relative w-full bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-5xl font-thin text-black mb-6">Proven Results</h3>
            <div className="w-24 h-0.5 bg-black mx-auto mb-8"></div>
            <p className="text-lg font-thin text-gray-600 max-w-3xl mx-auto">
              Companies using Voice see dramatic improvements in hiring speed, quality, and fairness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-black rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <LuClock size={24} className="text-white" />
              </div>
              <h4 className="text-lg font-thin text-black mb-2">Faster Hiring</h4>
              <p className="text-sm font-thin text-gray-600">Reduce time-to-hire with automated screening</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-black rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <LuClock size={24} className="text-white" />
              </div>
              <h4 className="text-lg font-thin text-black mb-2">Better Insights</h4>
              <p className="text-sm font-thin text-gray-600">AI-powered analysis improves hiring decisions</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-black rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <LuClock size={24} className="text-white" />
              </div>
              <h4 className="text-lg font-thin text-black mb-2">Scalable Process</h4>
              <p className="text-sm font-thin text-gray-600">Handle multiple interviews efficiently</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-black rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <LuClock size={24} className="text-white" />
              </div>
              <h4 className="text-lg font-thin text-black mb-2">Fair Assessment</h4>
              <p className="text-sm font-thin text-gray-600">Objective evaluation reduces bias</p>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="relative w-full bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-5xl font-thin text-black mb-6">Seamless Integration</h3>
            <div className="w-24 h-0.5 bg-black mx-auto mb-8"></div>
            <p className="text-lg font-thin text-gray-600 max-w-3xl mx-auto">
              Voice integrates with your existing HR tools and workflows
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300">
              <div className="text-lg font-thin text-black">Workday</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300">
              <div className="text-lg font-thin text-black">BambooHR</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300">
              <div className="text-lg font-thin text-black">Greenhouse</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300">
              <div className="text-lg font-thin text-black">Lever</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300">
              <div className="text-lg font-thin text-black">Slack</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300">
              <div className="text-lg font-thin text-black">Teams</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative w-full bg-black py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-5xl font-thin text-white mb-8">
            Ready to Transform Your Hiring?
          </h2>
          <p className="text-lg md:text-xl font-thin text-gray-300 mb-12 max-w-3xl mx-auto">
            Join leading companies using Voice to make better hiring decisions faster.
          </p>
          <div className="space-x-4">
            <button className="bg-white text-black px-8 py-4 rounded-full text-lg font-thin hover:bg-gray-100 transition-colors">
              Start Free Trial
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-full text-lg font-thin hover:bg-white hover:text-black transition-colors">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VoicePage;
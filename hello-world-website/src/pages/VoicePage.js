import React from 'react';
import Navigation from '../components/shared/Navigation';
import HeroSection from '../components/shared/HeroSection';
import MobileHeroSection from '../components/shared/MobileHeroSection';
import FeatureList from '../components/shared/FeatureList';
import Footer from '../components/shared/Footer';
import { useReadingAnimation } from '../hooks/useReadingAnimation';

const VoicePage = () => {
  useReadingAnimation();

  const voiceData = {
    title: "Voice",
    subtitle: "Real-time Interview Platform",
    description: "Voice revolutionizes the hiring process with AI-driven voice interviews that provide real-time insights into candidate capabilities. Our platform analyzes communication skills, technical knowledge, and cultural fit through natural conversation.",
    features: [
      {
        title: "AI-Powered Analysis",
        description: "Real-time assessment of communication and technical skills"
      },
      {
        title: "Bias Reduction",
        description: "Objective evaluation based on skills, not demographics"
      },
      {
        title: "Scalable Screening",
        description: "Handle hundreds of interviews simultaneously"
      },
      {
        title: "Detailed Reports",
        description: "Comprehensive candidate insights and recommendations"
      }
    ]
  };

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
            <h3 className="text-3xl md:text-5xl font-thin text-black mb-6">Transform Your Hiring Process</h3>
            <div className="w-24 h-0.5 bg-black mx-auto mb-8"></div>
            <p className="text-lg font-thin text-gray-600 max-w-3xl mx-auto">
              Voice revolutionizes talent acquisition with AI-powered interviews that eliminate bias, 
              accelerate screening, and deliver unprecedented insights into candidate potential.
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
                <span className="text-white text-2xl font-thin">75%</span>
              </div>
              <h4 className="text-lg font-thin text-black mb-2">Faster Hiring</h4>
              <p className="text-sm font-thin text-gray-600">Reduce time-to-hire with automated screening</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-black rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl font-thin">94%</span>
              </div>
              <h4 className="text-lg font-thin text-black mb-2">Prediction Accuracy</h4>
              <p className="text-sm font-thin text-gray-600">AI-powered insights improve hiring decisions</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-black rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl font-thin">10x</span>
              </div>
              <h4 className="text-lg font-thin text-black mb-2">Scale Capacity</h4>
              <p className="text-sm font-thin text-gray-600">Interview more candidates simultaneously</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-black rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl font-thin">100%</span>
              </div>
              <h4 className="text-lg font-thin text-black mb-2">Bias-Free</h4>
              <p className="text-sm font-thin text-gray-600">Objective evaluation based on merit alone</p>
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
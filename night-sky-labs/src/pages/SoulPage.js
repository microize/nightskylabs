import React from 'react';
import { LuShield } from 'react-icons/lu';
import Navigation from '../components/shared/Navigation';
import HeroSection from '../components/shared/HeroSection';
import MobileHeroSection from '../components/shared/MobileHeroSection';
import Footer from '../components/shared/Footer';
import { useReadingAnimation } from '../hooks/useReadingAnimation';

const SoulPage = () => {
  useReadingAnimation();


  return (
    <div className="relative w-full bg-white overflow-hidden">
      <Navigation />

      {/* Hero Section - Desktop */}
      <HeroSection 
        title="Soul"
        subtitle="Developer Intelligence"
        description="Unleash the power of AI-driven development with intelligent code analysis, automated workflows, and natural language commands that transform how you build software."
        videoSrc="/astronaut_waving.mp4"
        videoFilter="grayscale(100%)"
      />

      {/* Mobile Content Section - Below Video */}
      <MobileHeroSection 
        title="Soul"
        subtitle="AI-Powered CLI"
        description="Transform your development workflow with intelligent automation and AI-powered insights that understand your codebase and accelerate your productivity."
      />

      {/* Main Content Section */}
      <section className="animated-section relative w-full bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-5xl font-thin text-black mb-6">GenAI-Powered Development Tools</h3>
            <div className="w-24 h-0.5 bg-black mx-auto mb-8"></div>
            <p className="text-lg font-thin text-gray-600 max-w-3xl mx-auto">
              Soul helps developers effectively leverage GenAI tools in their workflow. We provide the implementation expertise 
              and custom integrations needed to transform how code is written, tested, and deployed using available AI capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <h4 className="text-xl font-thin text-black mb-4">Intelligent Analysis</h4>
              <p className="text-sm font-thin text-gray-600 mb-6">
                AI-powered understanding of your entire codebase, detecting patterns, dependencies, and optimization opportunities.
              </p>
              <div className="text-xs font-thin text-gray-500">
                Code Analysis • Pattern Detection • Performance Insights
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <h4 className="text-xl font-thin text-black mb-4">Smart Automation</h4>
              <p className="text-sm font-thin text-gray-600 mb-6">
                Automate repetitive tasks, testing workflows, and deployment processes with intelligent suggestions.
              </p>
              <div className="text-xs font-thin text-gray-500">
                Automated Testing • CI/CD Integration • Refactoring Tools
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <h4 className="text-xl font-thin text-black mb-4">Natural Commands</h4>
              <p className="text-sm font-thin text-gray-600 mb-6">
                Describe what you want in plain English, and Soul figures out the implementation details.
              </p>
              <div className="text-xs font-thin text-gray-500">
                Natural Language • Context Awareness • Smart Suggestions
              </div>
            </div>
          </div>

          <div className="bg-black rounded-2xl p-8 md:p-12 text-white">
            <div className="text-center mb-8">
              <h4 className="text-2xl font-thin text-white mb-4">Experience Soul CLI</h4>
              <p className="text-base font-thin text-gray-300 max-w-2xl mx-auto">
                Get started in minutes and transform your development workflow with AI-powered intelligence.
              </p>
            </div>
            <div className="bg-gray-900 rounded-xl p-6 font-mono text-sm">
              <div className="text-green-400">$ npm install -g @nightskylabs/soul</div>
              <div className="text-gray-400 mt-2">Installing Soul CLI...</div>
              <div className="text-white mt-1">✓ Soul CLI installed successfully</div>
              <div className="text-green-400 mt-4">$ soul init</div>
              <div className="text-gray-400 mt-2">Initializing project...</div>
              <div className="text-white mt-1">✓ Project configured for AI assistance</div>
              <div className="text-green-400 mt-4">$ soul "optimize my React components"</div>
              <div className="text-gray-400 mt-2">AI analyzing components...</div>
              <div className="text-white mt-1">✓ Found 12 optimization opportunities</div>
            </div>
          </div>
        </div>
      </section>

      {/* Developer Benefits Section */}
      <section className="relative w-full bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-5xl font-thin text-black mb-6">Built for Modern Development</h3>
            <div className="w-24 h-0.5 bg-black mx-auto mb-8"></div>
            <p className="text-lg font-thin text-gray-600 max-w-3xl mx-auto">
              Soul integrates seamlessly with your existing workflow and scales with your team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-black rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl font-thin">3x</span>
              </div>
              <h4 className="text-lg font-thin text-black mb-2">Faster Development</h4>
              <p className="text-sm font-thin text-gray-600">Accelerate coding with AI assistance</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-black rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <LuShield size={24} className="text-white" />
              </div>
              <h4 className="text-lg font-thin text-black mb-2">Fewer Bugs</h4>
              <p className="text-sm font-thin text-gray-600">AI-powered code analysis and testing</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-black rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl font-thin">24/7</span>
              </div>
              <h4 className="text-lg font-thin text-black mb-2">AI Assistant</h4>
              <p className="text-sm font-thin text-gray-600">Always available development support</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-black rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl font-thin">∞</span>
              </div>
              <h4 className="text-lg font-thin text-black mb-2">Scalable</h4>
              <p className="text-sm font-thin text-gray-600">Grows with your team and projects</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative w-full bg-black py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-5xl font-thin text-white mb-8">
            Ready to Level Up Your Development?
          </h2>
          <p className="text-lg md:text-xl font-thin text-gray-300 mb-12 max-w-3xl mx-auto">
            Join thousands of developers who have transformed their workflow with Soul's AI-powered automation.
          </p>
          <div className="space-x-4">
            <button className="bg-white text-black px-8 py-4 rounded-full text-lg font-thin hover:bg-gray-100 transition-colors">
              Get Started Free
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-full text-lg font-thin hover:bg-white hover:text-black transition-colors">
              View on GitHub
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SoulPage;
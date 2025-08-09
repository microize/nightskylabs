import React from 'react';
import Navigation from '../components/common/layout/Navigation';
import Footer from '../components/common/layout/Footer';
import { LuTrendingUp, LuShieldCheck, LuBarChart, LuBrainCircuit, LuRocket, LuBriefcase } from 'react-icons/lu';

const InvestorsPage = () => {
  return (
    <div className="relative w-full bg-white overflow-hidden">
      <Navigation currentPage="about" />

      {/* Header Section */}
      <section className="relative w-full bg-white pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-thin text-[#998664] mb-8 leading-tight">Investor Relations</h1>
          <div className="w-24 h-0.5 bg-[#998664] mx-auto mb-12"></div>
          <p className="text-lg md:text-xl lg:text-2xl font-thin text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We are pioneering the future of enterprise AI, creating sustainable value for our partners and shareholders through disciplined innovation and strategic growth.
          </p>
        </div>
      </section>

      {/* Investment Thesis Section */}
      <section className="relative w-full bg-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-thin text-[#998664] mb-8 leading-tight">Our Investment Thesis</h2>
            <div className="w-24 h-0.5 bg-[#998664] mx-auto mb-12"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <p className="text-lg md:text-xl font-thin text-gray-700 leading-relaxed">
                The AI revolution represents the most significant platform shift of our time. We are positioned at the forefront, building the critical infrastructure that enables enterprises to harness generative and physical AI.
              </p>
              <p className="text-lg md:text-xl font-thin text-gray-700 leading-relaxed">
                Our focus on capital-efficient growth, recurring revenue models, and a vast, untapped market provides a compelling opportunity for long-term value creation. We partner with investors who share our vision for a more intelligent, automated future.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-[#998664] to-[#aa9678] rounded-3xl p-10 text-white shadow-xl">
              <div className="text-center">
                <div className="text-7xl md:text-8xl font-thin mb-6">10x</div>
                <h3 className="text-2xl md:text-3xl font-thin mb-6">Market Opportunity</h3>
                <p className="text-lg font-thin mb-8 opacity-90">
                  The enterprise AI market is projected to grow exponentially. Our strategy targets high-value segments with clear, unmet needs, positioning us for significant market capture and sustained growth.
                </p>
                <div className="space-y-4 text-left">
                  <div className="flex justify-between items-center py-2 border-b border-white/20">
                    <span className="font-thin opacity-80">Target Market</span>
                    <span className="font-medium">Global Enterprises</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-white/20">
                    <span className="font-thin opacity-80">Business Model</span>
                    <span className="font-medium">SaaS & Services</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="font-thin opacity-80">Growth Strategy</span>
                    <span className="font-medium">Product-Led & GTM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Financial & Governance Highlights - Bronze Background */}
      <section className="relative w-full bg-gradient-to-r from-[#998664] to-[#aa9678] py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Financial Highlights */}
            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-5xl font-thin text-white mb-8 leading-tight">Financials</h2>
              <div className="w-24 h-0.5 bg-white mx-auto lg:mx-0 mb-8"></div>
              <p className="text-lg md:text-xl font-thin text-white/90 leading-relaxed">
                We are committed to disciplined financial management, focusing on sustainable revenue growth, margin expansion, and prudent capital allocation to maximize shareholder returns.
              </p>
            </div>

            {/* Corporate Governance */}
            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-5xl font-thin text-white mb-8 leading-tight">Governance</h2>
              <div className="w-24 h-0.5 bg-white mx-auto lg:mx-0 mb-8"></div>
              <p className="text-lg md:text-xl font-thin text-white/90 leading-relaxed">
                Our board and leadership team are dedicated to upholding the highest standards of corporate governance, ensuring transparency, accountability, and ethical conduct across all operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Invest In Us - White Background */}
      <section className="relative w-full bg-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-thin text-[#998664] mb-8">Why Invest In NightSkyLabs</h2>
            <div className="w-24 h-0.5 bg-[#998664] mx-auto mb-8"></div>
            <p className="text-lg md:text-xl font-thin text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A unique opportunity to invest in a category-defining company at the intersection of AI, automation, and enterprise technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mb-6">
                <LuTrendingUp size={48} className="text-[#998664] mx-auto" />
              </div>
              <h3 className="text-xl font-medium text-black mb-4">Massive Market</h3>
              <p className="text-base font-thin text-gray-600 leading-relaxed">
                Targeting the multi-trillion dollar enterprise AI and automation market with disruptive technology.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-6">
                <LuBrainCircuit size={48} className="text-[#998664] mx-auto" />
              </div>
              <h3 className="text-xl font-medium text-black mb-4">Proprietary Technology</h3>
              <p className="text-base font-thin text-gray-600 leading-relaxed">
                Our unique AI orchestration platform provides a durable competitive advantage and high barriers to entry.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-6">
                <LuRocket size={48} className="text-[#998664] mx-auto" />
              </div>
              <h3 className="text-xl font-medium text-black mb-4">Experienced Team</h3>
              <p className="text-base font-thin text-gray-600 leading-relaxed">
                Led by a team of seasoned executives from top technology companies with a proven track record of success.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default InvestorsPage;

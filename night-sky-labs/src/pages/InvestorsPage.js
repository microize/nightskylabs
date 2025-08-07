import React from 'react';
import Navigation from '../components/common/layout/Navigation';
import Footer from '../components/common/layout/Footer';

const InvestorsPage = () => {
  return (
    <div className="relative w-full bg-white overflow-hidden">
      <Navigation currentPage="about" />

      {/* Hero Section */}
      <section className="relative w-full bg-white pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h1 className="text-4xl md:text-6xl font-thin text-black mb-6">Investors</h1>
          <div className="w-24 h-0.5 bg-black mx-auto mb-8"></div>
          <p className="text-lg md:text-xl font-thin text-gray-600 max-w-4xl mx-auto">
            Partner with us to accelerate AI innovation and build the future of intelligent technology.
          </p>
        </div>
      </section>

      {/* Investment Opportunity */}
      <section className="relative w-full bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-thin text-black mb-6">Investment Opportunity</h2>
            <p className="text-lg font-thin text-gray-600 max-w-3xl mx-auto">
              NightSkyLabs is positioned at the forefront of AI innovation with a portfolio of 
              products and services addressing critical market needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-thin text-black mb-6">Market Opportunity</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                  <p className="text-base font-thin text-gray-600">
                    The global AI market is projected to reach $1.8 trillion by 2030, 
                    growing at 37% CAGR.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                  <p className="text-base font-thin text-gray-600">
                    Enterprise AI adoption is accelerating, with 85% of organizations 
                    planning AI investments in the next two years.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                  <p className="text-base font-thin text-gray-600">
                    Developer tools and educational AI platforms represent high-growth 
                    segments with significant barriers to entry.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-thin text-black mb-6">Our Advantage</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                  <p className="text-base font-thin text-gray-600">
                    Diversified product portfolio addressing multiple AI market segments 
                    with proven traction.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                  <p className="text-base font-thin text-gray-600">
                    Strong technical team with deep AI expertise and successful 
                    product development track record.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                  <p className="text-base font-thin text-gray-600">
                    Strategic consulting services providing immediate revenue while 
                    scaling product offerings.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Highlights */}
      <section className="relative w-full bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-thin text-black mb-6">Growth Metrics</h2>
            <p className="text-lg font-thin text-gray-600 max-w-3xl mx-auto">
              Our financial performance demonstrates strong market validation and 
              sustainable growth trajectory.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-thin text-black mb-2">150%</div>
              <p className="text-base font-thin text-gray-600">YoY Revenue Growth</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-thin text-black mb-2">95%</div>
              <p className="text-base font-thin text-gray-600">Client Retention Rate</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-thin text-black mb-2">50K+</div>
              <p className="text-base font-thin text-gray-600">Active Product Users</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-thin text-black mb-2">25+</div>
              <p className="text-base font-thin text-gray-600">Enterprise Clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Portfolio */}
      <section className="relative w-full bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-thin text-black mb-6">Product Portfolio</h2>
            <p className="text-lg font-thin text-gray-600 max-w-3xl mx-auto">
              Three distinct AI products targeting high-value market segments with 
              recurring revenue potential.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-thin text-black mb-4">Soul CLI</h3>
              <p className="text-base font-thin text-gray-600 mb-6">
                AI-powered developer tool revolutionizing command-line productivity 
                with intelligent automation and assistance.
              </p>
              <div className="space-y-2">
                <div className="flex justify-between text-sm font-thin">
                  <span className="text-gray-600">Target Market</span>
                  <span className="text-black">$12B Developer Tools</span>
                </div>
                <div className="flex justify-between text-sm font-thin">
                  <span className="text-gray-600">Revenue Model</span>
                  <span className="text-black">SaaS Subscription</span>
                </div>
                <div className="flex justify-between text-sm font-thin">
                  <span className="text-gray-600">Current Users</span>
                  <span className="text-black">25K+ Developers</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-thin text-black mb-4">Voice Platform</h3>
              <p className="text-base font-thin text-gray-600 mb-6">
                AI-driven interview platform transforming recruitment with 
                intelligent voice analysis and candidate evaluation.
              </p>
              <div className="space-y-2">
                <div className="flex justify-between text-sm font-thin">
                  <span className="text-gray-600">Target Market</span>
                  <span className="text-black">$240B HR Tech</span>
                </div>
                <div className="flex justify-between text-sm font-thin">
                  <span className="text-gray-600">Revenue Model</span>
                  <span className="text-black">Per-Interview Pricing</span>
                </div>
                <div className="flex justify-between text-sm font-thin">
                  <span className="text-gray-600">Enterprise Clients</span>
                  <span className="text-black">15+ Companies</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-thin text-black mb-4">Qurious Learning</h3>
              <p className="text-base font-thin text-gray-600 mb-6">
                Personalized AI tutoring platform delivering adaptive learning 
                experiences for educational institutions and learners.
              </p>
              <div className="space-y-2">
                <div className="flex justify-between text-sm font-thin">
                  <span className="text-gray-600">Target Market</span>
                  <span className="text-black">$350B EdTech</span>
                </div>
                <div className="flex justify-between text-sm font-thin">
                  <span className="text-gray-600">Revenue Model</span>
                  <span className="text-black">B2B Licensing</span>
                </div>
                <div className="flex justify-between text-sm font-thin">
                  <span className="text-gray-600">Student Users</span>
                  <span className="text-black">20K+ Learners</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Terms */}
      <section className="relative w-full bg-white py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-thin text-black mb-6">Partnership Opportunities</h2>
            <p className="text-lg font-thin text-gray-600 max-w-3xl mx-auto">
              We're seeking strategic partners and investors who share our vision 
              for AI-powered innovation and long-term growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-thin text-black mb-6">Strategic Investment</h3>
              <div className="space-y-4">
                <p className="text-base font-thin text-gray-600">
                  Series A funding round to accelerate product development, expand market reach, 
                  and build strategic partnerships in key industry verticals.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-thin text-gray-600">Target Raise</span>
                    <span className="text-sm font-thin text-black">$15M - $25M</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-thin text-gray-600">Use of Funds</span>
                    <span className="text-sm font-thin text-black">R&D, Sales, Marketing</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-thin text-gray-600">Timeline</span>
                    <span className="text-sm font-thin text-black">Q2 2024</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-thin text-black mb-6">Strategic Partnerships</h3>
              <div className="space-y-4">
                <p className="text-base font-thin text-gray-600">
                  Collaborative opportunities with technology companies, educational institutions, 
                  and enterprise clients to expand our market presence and capabilities.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-thin text-gray-600">Technology Partners</span>
                    <span className="text-sm font-thin text-black">Cloud & AI Platforms</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-thin text-gray-600">Distribution Partners</span>
                    <span className="text-sm font-thin text-black">Enterprise Channels</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-thin text-gray-600">Integration Partners</span>
                    <span className="text-sm font-thin text-black">Platform Ecosystems</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full bg-black py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-5xl font-thin text-white mb-6">Ready to Partner With Us?</h2>
          <p className="text-lg font-thin text-white/80 mb-8 max-w-3xl mx-auto">
            Let's discuss how we can work together to accelerate AI innovation and create lasting value.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-black px-8 py-4 rounded-full text-lg font-thin hover:bg-gray-100 transition-colors">
              Request Investor Deck
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-full text-lg font-thin hover:bg-white hover:text-black transition-colors">
              Schedule a Meeting
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default InvestorsPage;
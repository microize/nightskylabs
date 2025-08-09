import React from 'react';
import Navigation from '../components/common/layout/Navigation';
import Footer from '../components/common/layout/Footer';
import { LuScale as Scale, LuSearch as Search, LuLock as Lock, LuUsers as Users } from 'react-icons/lu';

const AIEthicsPage = () => {
  return (
    <div className="relative w-full bg-white overflow-hidden">
      <Navigation currentPage="about" />

      {/* Header Section */}
      <section className="relative w-full bg-white pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-thin text-[#998664] mb-8 leading-tight">AI Ethics</h1>
          <div className="w-24 h-0.5 bg-[#998664] mx-auto mb-12"></div>
          <p className="text-lg md:text-xl lg:text-2xl font-thin text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our commitment to responsible AI development that prioritizes fairness, transparency, and human welfare.
          </p>
        </div>
      </section>

      {/* Core Principles - Bronze Background */}
      <section className="relative w-full bg-gradient-to-r from-[#998664] to-[#aa9678] py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-thin text-white mb-8">Core Principles</h2>
            <div className="w-24 h-0.5 bg-white mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="mb-6">
                <Scale size={48} className="text-white mx-auto" />
              </div>
              <h3 className="text-xl font-medium text-white mb-4">Fairness & Equity</h3>
              <p className="text-base font-thin text-white/90 leading-relaxed">
                Our AI systems treat all users fairly, regardless of background or demographics. We actively eliminate bias.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-6">
                <Search size={48} className="text-white mx-auto" />
              </div>
              <h3 className="text-xl font-medium text-white mb-4">Transparency</h3>
              <p className="text-base font-thin text-white/90 leading-relaxed">
                Users have the right to understand AI decisions. Our systems provide clear explanations and audit trails.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-6">
                <Lock size={48} className="text-white mx-auto" />
              </div>
              <h3 className="text-xl font-medium text-white mb-4">Privacy Protection</h3>
              <p className="text-base font-thin text-white/90 leading-relaxed">
                Privacy-by-design principles guide our approach. We never use personal data without explicit consent.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-6">
                <Users size={48} className="text-white mx-auto" />
              </div>
              <h3 className="text-xl font-medium text-white mb-4">Human Autonomy</h3>
              <p className="text-base font-thin text-white/90 leading-relaxed">
                AI augments human capability without replacing judgment. Users maintain decision-making authority.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Framework - White Background */}
      <section className="relative w-full bg-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-thin text-[#998664] mb-8 leading-tight">How We Implement Ethics</h2>
            <div className="w-24 h-0.5 bg-[#998664] mx-auto mb-12"></div>
            <p className="text-lg md:text-xl font-thin text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our ethical framework is integrated into every stage of AI development, from design to deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#998664] to-[#aa9678] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-lg font-medium">1</span>
                </div>
                <div>
                  <h4 className="text-xl font-medium text-black mb-3">Ethical Impact Assessment</h4>
                  <p className="text-base font-thin text-gray-600 leading-relaxed">
                    Comprehensive assessments identify potential ethical risks and societal impacts before building any AI system.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#998664] to-[#aa9678] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-lg font-medium">2</span>
                </div>
                <div>
                  <h4 className="text-xl font-medium text-black mb-3">Bias Detection & Testing</h4>
                  <p className="text-base font-thin text-gray-600 leading-relaxed">
                    Automated tools and human review identify and address bias in training data, model behavior, and outputs.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#998664] to-[#aa9678] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-lg font-medium">3</span>
                </div>
                <div>
                  <h4 className="text-xl font-medium text-black mb-3">Continuous Monitoring</h4>
                  <p className="text-base font-thin text-gray-600 leading-relaxed">
                    Real-time monitoring systems track ethical metrics and alert us to potential issues before they impact users.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-[#998664] to-[#aa9678] rounded-3xl p-10 text-white">
              <h4 className="text-2xl font-thin mb-8">Our Standards</h4>
              <div className="space-y-6">
                <div className="flex justify-between items-center py-3 border-b border-white/20">
                  <span className="font-thin opacity-90">Fairness Score</span>
                  <span className="text-xl font-medium">95%+</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/20">
                  <span className="font-thin opacity-90">Bias Detection Rate</span>
                  <span className="text-xl font-medium">98%+</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/20">
                  <span className="font-thin opacity-90">Privacy Compliance</span>
                  <span className="text-xl font-medium">100%</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="font-thin opacity-90">Safety Threshold</span>
                  <span className="text-xl font-medium">99.9%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Statement - Bronze Background */}
      <section className="relative w-full bg-gradient-to-r from-[#998664] to-[#aa9678] py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-thin text-white mb-8 leading-tight">Our Commitment</h2>
            <div className="w-24 h-0.5 bg-white mx-auto mb-12"></div>
            <blockquote className="text-xl md:text-2xl font-thin text-white/95 max-w-4xl mx-auto leading-relaxed italic">
              "We build AI that amplifies human potential while safeguarding human values. Every system we deploy undergoes rigorous ethical review, continuous monitoring, and transparent reporting. Responsible AI isn't just our policy—it's our foundation."
            </blockquote>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIEthicsPage;
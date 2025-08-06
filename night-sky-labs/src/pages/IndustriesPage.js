import React from 'react';
import Navigation from '../components/shared/Navigation';

const IndustriesPage = () => {
  return (
    <div className="relative w-full bg-white overflow-hidden">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative w-full bg-white py-16 md:py-32">
        <div className="w-4/5 mx-auto px-6 md:px-12">
          <div className="w-full text-center">
            <h1 className="text-4xl md:text-6xl font-thin text-black mb-8 leading-tight">Industries We Serve</h1>
            <div className="w-24 h-0.5 bg-black mx-auto mb-12"></div>
            <p className="text-xl md:text-2xl font-thin text-black max-w-4xl mx-auto" style={{ lineHeight: '1.8' }}>
              We serve industries that major tech companies often overlook—from defense contractors and energy infrastructure to specialized manufacturing and government agencies. Where others see complexity, we see opportunity.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="relative w-full bg-white py-16 md:py-24">
        <div className="w-full px-8 md:px-16">
          

          {/* Industries Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto">
            
            {/* Common Industries Section */}
            <div className="col-span-full mb-16">
              <h3 className="text-xl md:text-2xl font-thin text-black mb-8 text-center">Core Industries</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                
                {/* Healthcare */}
                <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 group">
                  <div className="p-6 md:p-8 h-full flex flex-col" style={{ minHeight: '250px' }}>
                    <div className="mb-6">
                      <h4 className="text-lg md:text-xl font-thin text-black mb-3 group-hover:text-gray-800 transition-colors">Healthcare</h4>
                      <div className="w-12 h-0.5 bg-black transition-all duration-300 group-hover:w-16"></div>
                    </div>
                    
                    <div className="flex-1 space-y-3">
                      <p className="text-sm font-thin text-gray-600 leading-relaxed mb-4">
                        Transform patient care and medical operations with AI-driven diagnostics, treatment optimization, and healthcare workflow automation.
                      </p>
                      <div className="space-y-2">
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1.5 bg-gray-50 text-black rounded-full text-xs font-thin hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">diagnostics</span>
                          <span className="px-3 py-1.5 bg-gray-50 text-black rounded-full text-xs font-thin hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">patient care</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1.5 bg-gray-50 text-black rounded-full text-xs font-thin hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">medical ai</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Financial Services */}
                <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 group">
                  <div className="p-6 md:p-8 h-full flex flex-col" style={{ minHeight: '250px' }}>
                    <div className="mb-6">
                      <h4 className="text-lg md:text-xl font-thin text-black mb-3 group-hover:text-gray-800 transition-colors">Financial Services</h4>
                      <div className="w-12 h-0.5 bg-black transition-all duration-300 group-hover:w-16"></div>
                    </div>
                    
                    <div className="flex-1 space-y-3">
                      <p className="text-sm font-thin text-gray-600 leading-relaxed mb-4">
                        Enhance risk management, fraud detection, and customer experiences with intelligent financial AI systems and compliance automation.
                      </p>
                      <div className="space-y-2">
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1.5 bg-gray-50 text-black rounded-full text-xs font-thin hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">risk analysis</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1.5 bg-gray-50 text-black rounded-full text-xs font-thin hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">fraud detection</span>
                          <span className="px-3 py-1.5 bg-gray-50 text-black rounded-full text-xs font-thin hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">trading</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Manufacturing */}
                <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 group">
                  <div className="p-6 md:p-8 h-full flex flex-col" style={{ minHeight: '250px' }}>
                    <div className="mb-6">
                      <h4 className="text-lg md:text-xl font-thin text-black mb-3 group-hover:text-gray-800 transition-colors">Manufacturing</h4>
                      <div className="w-12 h-0.5 bg-black transition-all duration-300 group-hover:w-16"></div>
                    </div>
                    
                    <div className="flex-1 space-y-3">
                      <p className="text-sm font-thin text-gray-600 leading-relaxed mb-4">
                        Optimize production lines, quality control, and supply chain operations with AI-powered manufacturing intelligence and automation.
                      </p>
                      <div className="space-y-2">
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1.5 bg-gray-50 text-black rounded-full text-xs font-thin hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">quality control</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1.5 bg-gray-50 text-black rounded-full text-xs font-thin hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">production optimization</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Technology */}
                <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 group">
                  <div className="p-6 md:p-8 h-full flex flex-col" style={{ minHeight: '250px' }}>
                    <div className="mb-6">
                      <h4 className="text-lg md:text-xl font-thin text-black mb-3 group-hover:text-gray-800 transition-colors">Technology</h4>
                      <div className="w-12 h-0.5 bg-black transition-all duration-300 group-hover:w-16"></div>
                    </div>
                    
                    <div className="flex-1 space-y-3">
                      <p className="text-sm font-thin text-gray-600 leading-relaxed mb-4">
                        Accelerate software development, enhance user experiences, and optimize technical operations with AI-powered development tools.
                      </p>
                      <div className="space-y-2">
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1.5 bg-gray-50 text-black rounded-full text-xs font-thin hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">devops</span>
                          <span className="px-3 py-1.5 bg-gray-50 text-black rounded-full text-xs font-thin hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">automation</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1.5 bg-gray-50 text-black rounded-full text-xs font-thin hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">user experience</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            
            {/* Specialized Industries Section */}
            <div className="col-span-full mb-12">
              <h3 className="text-xl md:text-2xl font-thin text-black mb-8 text-center">Industries Major Companies Ignore</h3>
            </div>
            
            {/* Defense & Aerospace */}
            <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 group">
              <div className="p-8 md:p-10 h-full flex flex-col" style={{ minHeight: '300px' }}>
                <div className="mb-8">
                  <h3 className="text-xl md:text-2xl font-thin text-black mb-4 group-hover:text-gray-800 transition-colors">Defense & Aerospace</h3>
                  <div className="w-16 h-0.5 bg-black transition-all duration-300 group-hover:w-24"></div>
                </div>
                
                <div className="flex-1 space-y-4">
                  <p className="text-base font-thin text-gray-600 leading-relaxed mb-6">
                    Mission-critical AI systems for defense contractors, aerospace manufacturers, and government agencies requiring the highest security and reliability standards.
                  </p>
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-3">
                      <span className="px-4 py-2 bg-gray-50 text-black rounded-full text-sm font-thin hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">threat analysis</span>
                      <span className="px-4 py-2 bg-gray-50 text-black rounded-full text-sm font-thin hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">surveillance ai</span>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <span className="px-4 py-2 bg-gray-50 text-black rounded-full text-sm font-thin hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">mission planning</span>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <span className="px-4 py-2 bg-gray-50 text-black rounded-full text-sm font-thin hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">secure communications</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Energy & Infrastructure */}
            <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 group">
              <div className="p-8 md:p-10 h-full flex flex-col" style={{ minHeight: '300px' }}>
                <div className="mb-8">
                  <h3 className="text-xl md:text-2xl font-thin text-black mb-4 group-hover:text-gray-800 transition-colors">Energy & Infrastructure</h3>
                  <div className="w-16 h-0.5 bg-black transition-all duration-300 group-hover:w-24"></div>
                </div>
                
                <div className="flex-1 space-y-4">
                  <p className="text-base font-thin text-gray-600 leading-relaxed mb-6">
                    Optimize power grids, oil refineries, and critical infrastructure with AI systems designed for 24/7 reliability and safety-first operations.
                  </p>
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-3">
                      <span className="px-4 py-2 bg-gray-50 text-black rounded-full text-sm font-thin hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">grid optimization</span>
                      <span className="px-4 py-2 bg-gray-50 text-black rounded-full text-sm font-thin hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">fault detection</span>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <span className="px-4 py-2 bg-gray-50 text-black rounded-full text-sm font-thin hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">predictive maintenance</span>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <span className="px-4 py-2 bg-gray-50 text-black rounded-full text-sm font-thin hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">safety monitoring</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Government & Public Sector */}
            <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 group">
              <div className="p-8 md:p-10 h-full flex flex-col" style={{ minHeight: '300px' }}>
                <div className="mb-8">
                  <h3 className="text-xl md:text-2xl font-thin text-black mb-4 group-hover:text-gray-800 transition-colors">Government & Public Sector</h3>
                  <div className="w-16 h-0.5 bg-black transition-all duration-300 group-hover:w-24"></div>
                </div>
                
                <div className="flex-1 space-y-4">
                  <p className="text-base font-thin text-gray-600 leading-relaxed mb-6">
                    Modernize government operations with secure, compliant AI solutions for citizen services, policy analysis, and administrative efficiency.
                  </p>
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-3">
                      <span className="px-4 py-2 bg-gray-50 text-black rounded-full text-sm font-thin hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">citizen services</span>
                      <span className="px-4 py-2 bg-gray-50 text-black rounded-full text-sm font-thin hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">policy analysis</span>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <span className="px-4 py-2 bg-gray-50 text-black rounded-full text-sm font-thin hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">document processing</span>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <span className="px-4 py-2 bg-gray-50 text-black rounded-full text-sm font-thin hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">regulatory compliance</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Heavy Industry & Mining */}
            <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 group">
              <div className="p-8 md:p-10 h-full flex flex-col" style={{ minHeight: '300px' }}>
                <div className="mb-8">
                  <h3 className="text-xl md:text-2xl font-thin text-black mb-4 group-hover:text-gray-800 transition-colors">Heavy Industry & Mining</h3>
                  <div className="w-16 h-0.5 bg-black transition-all duration-300 group-hover:w-24"></div>
                </div>
                
                <div className="flex-1 space-y-4">
                  <p className="text-base font-thin text-gray-600 leading-relaxed mb-6">
                    Revolutionize extraction, processing, and heavy manufacturing with AI systems built for harsh environments and extreme operational demands.
                  </p>
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-3">
                      <span className="px-4 py-2 bg-gray-50 text-black rounded-full text-sm font-thin hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">resource optimization</span>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <span className="px-4 py-2 bg-gray-50 text-black rounded-full text-sm font-thin hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">safety monitoring</span>
                      <span className="px-4 py-2 bg-gray-50 text-black rounded-full text-sm font-thin hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">equipment health</span>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <span className="px-4 py-2 bg-gray-50 text-black rounded-full text-sm font-thin hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">environmental compliance</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Transportation & Logistics */}
            <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 group">
              <div className="p-8 md:p-10 h-full flex flex-col" style={{ minHeight: '300px' }}>
                <div className="mb-8">
                  <h3 className="text-xl md:text-2xl font-thin text-black mb-4 group-hover:text-gray-800 transition-colors">Transportation & Logistics</h3>
                  <div className="w-16 h-0.5 bg-black transition-all duration-300 group-hover:w-24"></div>
                </div>
                
                <div className="flex-1 space-y-4">
                  <p className="text-base font-thin text-gray-600 leading-relaxed mb-6">
                    Transform supply chains, fleet management, and cargo operations with AI systems designed for complex logistics and regulatory requirements.
                  </p>
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-3">
                      <span className="px-4 py-2 bg-gray-50 text-black rounded-full text-sm font-thin hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">route optimization</span>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <span className="px-4 py-2 bg-gray-50 text-black rounded-full text-sm font-thin hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">fleet management</span>
                      <span className="px-4 py-2 bg-gray-50 text-black rounded-full text-sm font-thin hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">cargo tracking</span>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <span className="px-4 py-2 bg-gray-50 text-black rounded-full text-sm font-thin hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">demand forecasting</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Agriculture & Food Production */}
            <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 group">
              <div className="p-8 md:p-10 h-full flex flex-col" style={{ minHeight: '300px' }}>
                <div className="mb-8">
                  <h3 className="text-xl md:text-2xl font-thin text-black mb-4 group-hover:text-gray-800 transition-colors">Agriculture & Food Production</h3>
                  <div className="w-16 h-0.5 bg-black transition-all duration-300 group-hover:w-24"></div>
                </div>
                
                <div className="flex-1 space-y-4">
                  <p className="text-base font-thin text-gray-600 leading-relaxed mb-6">
                    Maximize yields and ensure food safety with precision agriculture, crop monitoring, and supply chain optimization tailored for agricultural operations.
                  </p>
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-3">
                      <span className="px-4 py-2 bg-gray-50 text-black rounded-full text-sm font-thin hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">precision farming</span>
                      <span className="px-4 py-2 bg-gray-50 text-black rounded-full text-sm font-thin hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">crop monitoring</span>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <span className="px-4 py-2 bg-gray-50 text-black rounded-full text-sm font-thin hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">yield optimization</span>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <span className="px-4 py-2 bg-gray-50 text-black rounded-full text-sm font-thin hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">food safety tracking</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full bg-black py-16 md:py-24">
        <div className="w-4/5 mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-5xl font-thin text-white mb-8 leading-tight">Ready to Level Up Your Industry?</h2>
          <p className="text-lg md:text-xl font-thin text-gray-300 mb-12 max-w-3xl mx-auto" style={{ lineHeight: '1.6' }}>
            Let's discuss how our AI solutions can transform your specific industry challenges into competitive advantages.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-black font-thin rounded-lg hover:bg-gray-100 transition-colors">
              Start Your Transformation
            </button>
            <button className="px-8 py-4 border border-white text-white font-thin rounded-lg hover:bg-white hover:text-black transition-colors">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default IndustriesPage;
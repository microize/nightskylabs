import React from 'react';

const HeroLayout = () => {
  return (
    <div className="relative w-full bg-white overflow-hidden">

      {/* Level Up Section */}
      <section className="level-up-section relative w-full bg-white py-16 md:py-32">
        <div className="w-4/5 mx-auto px-6 md:px-12">
          <div className="w-full text-center md:text-left">
            <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-thin text-black mb-8" id="reading-text" style={{ lineHeight: '2' }}>
              We don't help you compete. We help you level up. We help you punch above your weight by turning GenAI into a strategic edge. With agentic systems grounded in behavioral science and built on safety-first engineering, we replace guesswork with precision, manual work with intelligent automation, and operational drag with momentum. This isn't just adoption - it's transformation, built to outperform.
            </h2>
          </div>
        </div>
      </section>

      {/* Rolling Technology Terms Section */}
      <section className="rolling-tech-section relative w-full bg-white border-t border-b border-gray-100 py-8 md:py-12 overflow-hidden">
        <div className="flex items-center justify-center">
          <div className="animate-marquee flex items-center space-x-6 md:space-x-12 whitespace-nowrap">
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-gray-400">generative ai</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-gray-400">•</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-gray-400">natural language processing</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-gray-400">•</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-gray-400">machine learning</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-gray-400">•</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-gray-400">deep learning</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-gray-400">•</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-gray-400">neural networks</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-gray-400">•</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-gray-400">automation</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-gray-400">•</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-gray-400">ai agents</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-gray-400">•</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-gray-400">generative ai</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-gray-400">•</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-gray-400">natural language processing</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-gray-400">•</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-gray-400">machine learning</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-gray-400">•</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-gray-400">deep learning</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-gray-400">•</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-gray-400">neural networks</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-gray-400">•</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-gray-400">automation</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-gray-400">•</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-gray-400">ai agents</span>
            <span className="text-2xl md:text-3xl lg:text-3xl font-thin text-gray-400">•</span>
          </div>
        </div>
      </section>

      {/* Strategic Sectors Section */}
      <section id="strategic-sectors" className="strategic-sectors-section relative w-full bg-white py-16 md:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          
          {/* Section Header */}
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-4xl md:text-6xl font-thin text-black mb-4 leading-tight">Our Expertise</h2>
            <div className="w-24 h-0.5 bg-black mx-auto mt-8"></div>
          </div>
          
          {/* Responsive Grid Layout with Golden Ratio */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 auto-rows-min">
            
            {/* Large Strategic Card - Golden Rectangle (φ:1 ratio ≈ 1.618:1) */}
            <div className="lg:col-span-8 lg:row-span-2 bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 group">
              <div className="p-8 md:p-10 h-full flex flex-col" style={{ minHeight: '400px' }}>
                <div className="mb-8">
                  <h3 className="text-xl md:text-2xl font-thin text-black mb-4 group-hover:text-gray-800 transition-colors">Strategic Design Solutions</h3>
                  <div className="w-16 h-0.5 bg-black transition-all duration-300 group-hover:w-24"></div>
                </div>
                
                {/* Service Tags with Golden Ratio spacing */}
                <div className="flex-1 space-y-4">
                  <div className="flex flex-wrap gap-3">
                    <span className="px-5 py-2.5 bg-gray-50 text-black rounded-full text-sm font-thin hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">ai strategy</span>
                    <span className="px-5 py-2.5 bg-gray-50 text-black rounded-full text-sm font-thin hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">automation design</span>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-5 py-2.5 bg-gray-50 text-black rounded-full text-sm font-thin hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">behavioral analysis</span>
                    <span className="px-5 py-2.5 bg-gray-50 text-black rounded-full text-sm font-thin hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">system integration</span>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-5 py-2.5 bg-gray-50 text-black rounded-full text-sm font-thin hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">intelligent workflows</span>
                    <span className="px-5 py-2.5 bg-gray-50 text-black rounded-full text-sm font-thin hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">competitive intelligence</span>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-5 py-2.5 bg-gray-50 text-black rounded-full text-sm font-thin hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">genai transformation</span>
                    <span className="px-5 py-2.5 bg-gray-50 text-black rounded-full text-sm font-thin hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">enterprise optimization</span>
                  </div>
                </div>
              </div>
            </div>

            {/* AI Consulting Card - Golden ratio derived height */}
            <div className="lg:col-span-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 group">
              <div className="p-6 md:p-8 h-full flex flex-col" style={{ minHeight: '240px' }}>
                <div className="mb-6">
                  <h3 className="text-lg md:text-xl font-thin text-black mb-3 group-hover:text-gray-800 transition-colors">AI Consulting</h3>
                  <div className="w-12 h-0.5 bg-black transition-all duration-300 group-hover:w-16"></div>
                </div>
                
                <div className="flex-1 space-y-3">
                  <div className="flex flex-wrap gap-2">
                    <span className="px-4 py-2 bg-gray-50 text-black rounded-full text-sm font-thin hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">strategic planning</span>
                    <span className="px-4 py-2 bg-gray-50 text-black rounded-full text-sm font-thin hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">implementation</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-4 py-2 bg-gray-50 text-black rounded-full text-sm font-thin hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">performance optimization</span>
                    <span className="px-4 py-2 bg-gray-50 text-black rounded-full text-sm font-thin hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">roi analysis</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Implementation Services Card */}
            <div className="lg:col-span-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 group">
              <div className="p-6 md:p-8 h-full flex flex-col" style={{ minHeight: '240px' }}>
                <div className="mb-6">
                  <h3 className="text-lg md:text-xl font-thin text-black mb-3 group-hover:text-gray-800 transition-colors">Implementation Services</h3>
                  <div className="w-12 h-0.5 bg-black transition-all duration-300 group-hover:w-16"></div>
                </div>
                
                <div className="flex-1 space-y-3">
                  <div className="flex flex-wrap gap-2">
                    <span className="px-4 py-2 bg-gray-50 text-black rounded-full text-sm font-thin hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">custom development</span>
                    <span className="px-4 py-2 bg-gray-50 text-black rounded-full text-sm font-thin hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">integration</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-4 py-2 bg-gray-50 text-black rounded-full text-sm font-thin hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">deployment</span>
                    <span className="px-4 py-2 bg-gray-50 text-black rounded-full text-sm font-thin hover:bg-black hover:text-white transition-all duration-300 cursor-pointer">optimization</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Industries Full-Width Card - Golden section proportioned */}
            <div className="lg:col-span-12 bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 group">
              <div className="p-8 md:p-10 h-full flex flex-col md:flex-row items-center gap-8" style={{ minHeight: '140px' }}>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl md:text-2xl font-thin text-black mb-4 group-hover:text-gray-800 transition-colors">Industries We Serve</h3>
                  <p className="text-base font-thin text-gray-600 leading-relaxed max-w-4xl">
                    From enterprise software and financial services to healthcare systems and legal intelligence, we provide AI solutions that improve efficiency, decision-making, and competitive positioning across strategic sectors.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300">
                    <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="py-32 bg-black text-white">
        <div className="max-w-7xl mx-auto px-12">
          {/* Newsletter Section */}
          <div className="text-center mb-20">
            <h3 className="text-large font-thin text-white mb-6">Stay Updated</h3>
            <p className="text-body font-thin text-gray-300 mb-8 max-w-2xl mx-auto">
              Get updates on our venture development, partnership opportunities, and insights from the AI technology sector.
            </p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-6 py-3 bg-gray-800 border border-gray-700 rounded-l-lg sm:rounded-r-none rounded-r-lg text-white placeholder-gray-400 font-thin focus:outline-none focus:border-gray-500"
              />
              <button className="px-8 py-3 bg-white text-black font-thin rounded-r-lg sm:rounded-l-none rounded-l-lg hover:bg-gray-100 transition-colors mt-4 sm:mt-0">
                Subscribe
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
            <div className="md:col-span-2">
              <h3 className="text-large font-thin mb-8 text-white">Build with us</h3>
              <p className="text-body font-thin text-gray-300 mb-8 max-w-lg">
                Ready to build transformative AI-powered technology? We're launching our first ventures 
                and looking for exceptional founders to partner with.
              </p>
              <div className="space-y-2">
                <p className="text-body font-thin text-gray-400">hello@nightskylabs.com</p>
                <p className="text-small font-thin text-gray-500">San Francisco • Remote First</p>
              </div>
            </div>
            
            <div>
              <h4 className="text-body font-thin mb-6 text-white">We Provide Service In</h4>
              <div className="space-y-3 text-gray-400">
                <a href="#" className="block text-small font-thin hover:text-white transition-colors">Artificial Intelligence</a>
                <a href="#" className="block text-small font-thin hover:text-white transition-colors">Developer Infrastructure</a>
                <a href="#" className="block text-small font-thin hover:text-white transition-colors">Enterprise Software</a>
                <a href="#" className="block text-small font-thin hover:text-white transition-colors">Education Technology</a>
              </div>
            </div>
            
            <div>
              <h4 className="text-body font-thin mb-6 text-white">Our Products</h4>
              <div className="space-y-3 text-gray-400">
                <a href="#" className="block text-small font-thin hover:text-white transition-colors">Soul - Developer Tools</a>
                <a href="#" className="block text-small font-thin hover:text-white transition-colors">Voice - AI Recruitment</a>
                <a href="#" className="block text-small font-thin hover:text-white transition-colors">Qurious - Learning Platform</a>
                <a href="#" className="block text-small font-thin hover:text-white transition-colors">Partnership Opportunities</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-12 flex flex-col md:flex-row justify-between items-center">
            <p className="text-small font-thin text-gray-400">© 2025 NightSkyLabs Holdings. All rights reserved.</p>
            <div className="flex space-x-8 mt-4 md:mt-0">
              <a href="#" className="text-small font-thin text-gray-400 hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="text-small font-thin text-gray-400 hover:text-white transition-colors">Twitter</a>
              <a href="#" className="text-small font-thin text-gray-400 hover:text-white transition-colors">Portfolio</a>
              <a href="#" className="text-small font-thin text-gray-400 hover:text-white transition-colors">Investors</a>
              <a href="#" className="text-small font-thin text-gray-400 hover:text-white transition-colors">Privacy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HeroLayout;
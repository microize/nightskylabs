import React from 'react';

const Footer = () => {
  return (
    <footer className="py-16 md:py-32 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Newsletter Section */}
        <div className="text-center mb-16 md:mb-20">
          <h3 className="text-xl md:text-large font-thin text-white mb-4 md:mb-6">Stay Updated</h3>
          <p className="text-base md:text-body font-thin text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto">
            Get updates on our venture development, partnership opportunities, and insights from the AI technology sector.
          </p>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-3 sm:gap-0">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 md:px-6 py-3 bg-gray-800 border border-gray-700 rounded-lg sm:rounded-l-lg sm:rounded-r-none text-white placeholder-gray-400 font-thin focus:outline-none focus:border-gray-500 focus:ring-2 focus:ring-gray-500/20"
            />
            <button className="px-6 md:px-8 py-3 bg-white text-black font-thin rounded-lg sm:rounded-r-lg sm:rounded-l-none hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-16 mb-12 md:mb-16">
          <div className="md:col-span-2 text-center md:text-left">
            <h3 className="text-xl md:text-large font-thin mb-6 md:mb-8 text-white">Build with us</h3>
            <p className="text-base md:text-body font-thin text-gray-300 mb-6 md:mb-8 max-w-lg mx-auto md:mx-0">
              Ready to build transformative AI-powered technology? We're launching our first ventures 
              and looking for exceptional founders to partner with.
            </p>
            <div className="space-y-2">
              <p className="text-base md:text-body font-thin text-gray-400">hello@nightskylabs.com</p>
              <p className="text-sm md:text-small font-thin text-gray-500">Chennai, India • Remote First</p>
            </div>
          </div>
          
          <div className="text-center md:text-left">
            <h4 className="text-lg md:text-body font-thin mb-4 md:mb-6 text-white">We Provide Service In</h4>
            <div className="space-y-2 md:space-y-3 text-gray-400">
              <a href="#" className="block text-sm md:text-small font-thin hover:text-white transition-colors">Artificial Intelligence</a>
              <a href="#" className="block text-sm md:text-small font-thin hover:text-white transition-colors">Developer Infrastructure</a>
              <a href="#" className="block text-sm md:text-small font-thin hover:text-white transition-colors">Enterprise Software</a>
              <a href="#" className="block text-sm md:text-small font-thin hover:text-white transition-colors">Education Technology</a>
            </div>
          </div>
          
          <div className="text-center md:text-left">
            <h4 className="text-lg md:text-body font-thin mb-4 md:mb-6 text-white">Our Products</h4>
            <div className="space-y-2 md:space-y-3 text-gray-400">
              <a href="#" className="block text-sm md:text-small font-thin hover:text-white transition-colors">Soul - Developer Tools</a>
              <a href="#" className="block text-sm md:text-small font-thin hover:text-white transition-colors">Voice - AI Recruitment</a>
              <a href="#" className="block text-sm md:text-small font-thin hover:text-white transition-colors">Qurious - Learning Platform</a>
              <a href="#" className="block text-sm md:text-small font-thin hover:text-white transition-colors">Partnership Opportunities</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 md:pt-12 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="text-sm md:text-small font-thin text-gray-400 mb-4 md:mb-0">© 2025 NightSkyLabs Holdings. All rights reserved.</p>
          <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-8">
            <a href="#" className="text-sm md:text-small font-thin text-gray-400 hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="text-sm md:text-small font-thin text-gray-400 hover:text-white transition-colors">Twitter</a>
            <a href="#" className="text-sm md:text-small font-thin text-gray-400 hover:text-white transition-colors">Portfolio</a>
            <a href="#" className="text-sm md:text-small font-thin text-gray-400 hover:text-white transition-colors">Investors</a>
            <a href="#" className="text-sm md:text-small font-thin text-gray-400 hover:text-white transition-colors">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
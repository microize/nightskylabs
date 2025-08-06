import React from 'react';
import Navigation from '../components/shared/Navigation';
import Footer from '../components/shared/Footer';

const LeadershipPage = () => {
  return (
    <div className="relative w-full bg-white overflow-hidden">
      <Navigation currentPage="about" />

      {/* Hero Section */}
      <section className="relative w-full bg-white pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h1 className="text-4xl md:text-6xl font-thin text-black mb-6">Founder</h1>
          <div className="w-24 h-0.5 bg-black mx-auto mb-8"></div>
          <p className="text-lg md:text-xl font-thin text-gray-600 max-w-4xl mx-auto">
            The visionary making Generative AI accessible to every organization, helping them compete 
            with big tech giants and transform their operations at unprecedented speed.
          </p>
        </div>
      </section>

      {/* Founder Section */}
      <section className="relative w-full bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-thin text-black mb-6">Founder & CEO</h2>
            <p className="text-lg font-thin text-gray-600 max-w-3xl mx-auto">
              Democratizing Generative AI to help organizations worldwide unlock transformative capabilities 
              and compete in the AI-first economy.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="text-center lg:text-left">
                  <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto lg:mx-0 mb-6"></div>
                  <h3 className="text-3xl font-thin text-black mb-2">Sripathi Mohansundaram</h3>
                  <div className="text-lg font-thin text-gray-500 mb-6">Founder & CEO</div>
                  <div className="space-y-2 text-sm font-thin text-gray-600 mb-6">
                    <div>📍 Chennai, India</div>
                    <div>🚀 Founded 2025</div>
                    <div>🎯 AI Revolutionary</div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                    <a 
                      href="https://www.linkedin.com/in/sripathi-mohanasundaram/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-black text-white px-4 py-2 rounded-full text-sm font-thin hover:bg-gray-800 transition-colors text-center"
                    >
                      LinkedIn Profile
                    </a>
                    <a 
                      href="https://sripathim.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="border border-black text-black px-4 py-2 rounded-full text-sm font-thin hover:bg-black hover:text-white transition-colors text-center"
                    >
                      Personal Website
                    </a>
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-thin text-black mb-4">The Vision</h4>
                  <p className="text-base font-thin text-gray-600 mb-6">
                    "I see the potential of Generative AI to transform every field. While big tech hoards 
                    advanced AI capabilities, I'm building NightSkyLabs to democratize this power. 
                    Every organization deserves to compete with giants like Google and Microsoft."
                  </p>
                  <div className="space-y-3 text-sm font-thin text-gray-600">
                    <div>• Challenging big tech monopoly in AI</div>
                    <div>• Building from software to physical AI</div>
                    <div>• Expanding into wearable devices</div>
                    <div>• Leading the AI revolution for everyone</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="relative w-full bg-black py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-5xl font-thin text-white mb-6">The Mission</h2>
          <p className="text-lg font-thin text-white/80 mb-8 max-w-3xl mx-auto">
            "To break the AI monopoly and empower every organization with world-class artificial intelligence. 
            We're not just building products - we're leading a revolution that puts cutting-edge AI in the hands of the ambitious."
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a 
              href="https://www.linkedin.com/in/sripathi-mohanasundaram/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-black px-8 py-4 rounded-full text-lg font-thin hover:bg-gray-100 transition-colors text-center"
            >
              Connect on LinkedIn
            </a>
            <a 
              href="https://sripathim.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="border border-white text-white px-8 py-4 rounded-full text-lg font-thin hover:bg-white hover:text-black transition-colors text-center"
            >
              Visit Personal Site
            </a>
          </div>
          <p className="text-sm font-thin text-white/60 max-w-xl mx-auto">
            Follow the journey of building the AI revolution and challenging big tech dominance.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LeadershipPage;
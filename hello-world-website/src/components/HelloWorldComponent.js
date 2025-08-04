import React from 'react';

const HelloWorldComponent = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center px-4">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 p-6">
        <div className="font-ui font-medium text-lg text-black tracking-wide">
          NIGHTSKYLABS
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col justify-center items-center text-center max-w-6xl mx-auto">
        <h1 className="font-display font-black text-hero md:text-hero-lg leading-none text-black uppercase tracking-tightest mb-8">
          AI Product<br />
          Development<br />
          & Consulting
        </h1>
        
        <p className="font-body text-lg text-black tracking-wide uppercase mt-12 mb-16 max-w-lg">
          Building innovative AI-powered tools and providing expert AI consulting
        </p>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
          <div className="group relative overflow-hidden cursor-pointer bg-black h-64 flex flex-col items-center justify-center transition-all duration-300 hover:scale-105">
            <div className="absolute inset-0 bg-white bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
            <span className="font-body text-white text-2xl font-medium uppercase tracking-wide mb-2">
              Soul
            </span>
            <span className="font-ui text-white text-sm uppercase tracking-wider opacity-80">
              Coding CLI Tool
            </span>
          </div>
          
          <div className="group relative overflow-hidden cursor-pointer bg-black h-64 flex flex-col items-center justify-center transition-all duration-300 hover:scale-105">
            <div className="absolute inset-0 bg-white bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
            <span className="font-body text-white text-2xl font-medium uppercase tracking-wide mb-2">
              Voice
            </span>
            <span className="font-ui text-white text-sm uppercase tracking-wider opacity-80">
              Realtime Interview Tool
            </span>
          </div>
          
          <div className="group relative overflow-hidden cursor-pointer bg-black h-64 flex flex-col items-center justify-center transition-all duration-300 hover:scale-105">
            <div className="absolute inset-0 bg-white bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
            <span className="font-body text-white text-2xl font-medium uppercase tracking-wide mb-2">
              Qurious
            </span>
            <span className="font-ui text-white text-sm uppercase tracking-wider opacity-80">
              AI Learning Platform
            </span>
          </div>
        </div>

        {/* Services Section */}
        <div className="mt-24 w-full max-w-4xl">
          <h2 className="font-display font-black text-4xl md:text-6xl leading-none text-black uppercase tracking-tightest mb-12">
            Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 border border-black">
              <h3 className="font-body text-xl font-medium uppercase tracking-wide mb-4">
                AI Strategy Consulting
              </h3>
              <p className="font-ui text-black text-sm leading-relaxed">
                Expert guidance on AI implementation, technology selection, and strategic roadmap development for your business.
              </p>
            </div>
            <div className="p-8 border border-black">
              <h3 className="font-body text-xl font-medium uppercase tracking-wide mb-4">
                Custom AI Development
              </h3>
              <p className="font-ui text-black text-sm leading-relaxed">
                End-to-end development of AI-powered applications, from concept to deployment and maintenance.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full p-6 text-center mt-16">
        <p className="font-body text-black text-sm tracking-wide uppercase">
          Contact us for AI consulting and product development
        </p>
      </footer>
    </div>
  );
};

export default HelloWorldComponent;
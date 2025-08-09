import React from 'react';
import Navigation from '../components/common/layout/Navigation';
import Footer from '../components/common/layout/Footer';
import { LuTarget as Target, LuMicroscope as Microscope, LuTrendingUp as TrendingUp, LuUsers as Users, LuZap as Zap, LuGlobe as Globe, LuHeart as Heart, LuRocket as Rocket, LuLightbulb as Lightbulb, LuDollarSign as DollarSign } from 'react-icons/lu';

const OurStoryPage = () => {
  return (
    <div className="relative w-full bg-white overflow-hidden">
      <Navigation currentPage="about" />

      {/* Header Section */}
      <section className="relative w-full bg-white pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-thin text-[#998664] mb-8 leading-tight">Our Story</h1>
          <div className="w-24 h-0.5 bg-[#998664] mx-auto mb-12"></div>
          <p className="text-lg md:text-xl lg:text-2xl font-thin text-gray-600 max-w-4xl mx-auto leading-relaxed">
            NightSkyLabs was born in 2025 with a simple conviction: every motivated team—no matter its size or budget—deserves the same AI firepower as the world's largest enterprises.
          </p>
        </div>
      </section>

      {/* Why We Exist Section - White Background */}
      <section className="relative w-full bg-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-thin text-[#998664] mb-8 leading-tight">Why We Exist</h2>
            <div className="w-24 h-0.5 bg-[#998664] mx-auto mb-12"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <p className="text-lg md:text-xl font-thin text-gray-700 leading-relaxed">
                The pace of innovation has never been faster. Markets pivot overnight, customer expectations reset weekly, and yesterday's competitive edge is today's baseline. Yet most organisations are still weighed down by legacy tools or sky-high vendor contracts.
              </p>
              <p className="text-lg md:text-xl font-thin text-gray-700 leading-relaxed">
                We partner with founders, functional leaders, and growing businesses to translate their vision into production-ready AI—so they can move faster, innovate boldly, and win in a landscape that changes by the hour.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-[#998664] to-[#aa9678] rounded-3xl p-10 text-white shadow-xl">
              <div className="text-center">
                <div className="text-7xl md:text-8xl font-thin mb-6">2025</div>
                <h3 className="text-2xl md:text-3xl font-thin mb-6">Company Founded</h3>
                <p className="text-lg font-thin mb-8 opacity-90">
                  From our first office in Chennai, India (and a remote-first culture from day one), we set out to tear down the cost and complexity barriers that keep frontier technology out of reach.
                </p>
                <div className="space-y-4 text-left">
                  <div className="flex justify-between items-center py-2 border-b border-white/20">
                    <span className="font-thin opacity-80">Founder</span>
                    <span className="font-medium">Sripathi Mohansundaram</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-white/20">
                    <span className="font-thin opacity-80">First Office</span>
                    <span className="font-medium">Chennai, India</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="font-thin opacity-80">Initial Focus</span>
                    <span className="font-medium">GenAI Products</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision - Bronze Background */}
      <section className="relative w-full bg-gradient-to-r from-[#998664] to-[#aa9678] py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Mission */}
            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-5xl font-thin text-white mb-8 leading-tight">Mission</h2>
              <div className="w-24 h-0.5 bg-white mx-auto lg:mx-0 mb-8"></div>
              <p className="text-lg md:text-xl font-thin text-white/90 leading-relaxed">
                Supercharge enterprise innovation and decision-making with frontier generative AI and physical AI—compressing months of work into minutes and bridging the digital–physical divide.
              </p>
            </div>

            {/* Vision */}
            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-5xl font-thin text-white mb-8 leading-tight">Vision</h2>
              <div className="w-24 h-0.5 bg-white mx-auto lg:mx-0 mb-8"></div>
              <p className="text-lg md:text-xl font-thin text-white/90 leading-relaxed">
                A world where generative and physical AI are seamlessly woven into every enterprise workflow and device, empowering organizations of any size to think, build, and act at the speed of opportunity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values - White Background */}
      <section className="relative w-full bg-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-thin text-[#998664] mb-8">Core Values</h2>
            <div className="w-24 h-0.5 bg-[#998664] mx-auto mb-8"></div>
            <p className="text-lg md:text-xl font-thin text-gray-600 max-w-3xl mx-auto leading-relaxed">
              The principles that guide every decision we make and every product we build.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="mb-6">
                <Heart size={48} className="text-[#998664] mx-auto" />
              </div>
              <h3 className="text-xl font-medium text-black mb-4">Client First</h3>
              <p className="text-base font-thin text-gray-600 leading-relaxed">
                Every decision starts with what's best for our clients. We prioritize their success above all else.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-6">
                <Rocket size={48} className="text-[#998664] mx-auto" />
              </div>
              <h3 className="text-xl font-medium text-black mb-4">Deliver Fast</h3>
              <p className="text-base font-thin text-gray-600 leading-relaxed">
                Speed without compromise—we move at the pace of innovation to get results quickly.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-6">
                <Lightbulb size={48} className="text-[#998664] mx-auto" />
              </div>
              <h3 className="text-xl font-medium text-black mb-4">Think Big</h3>
              <p className="text-base font-thin text-gray-600 leading-relaxed">
                We tackle ambitious challenges others avoid and dream beyond conventional limits.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-6">
                <DollarSign size={48} className="text-[#998664] mx-auto" />
              </div>
              <h3 className="text-xl font-medium text-black mb-4">Spend Wisely</h3>
              <p className="text-base font-thin text-gray-600 leading-relaxed">
                Every resource is stewarded with care and purpose, as if it were our own money.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OurStoryPage;
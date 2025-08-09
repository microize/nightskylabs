import React from 'react';
import Navigation from '../components/common/layout/Navigation';
import Footer from '../components/common/layout/Footer';
import { LuRocket, LuUsers, LuLightbulb, LuHeart, LuWrench, LuStar } from 'react-icons/lu';

const CareersPage = () => {
  return (
    <div className="relative w-full bg-white overflow-hidden">
      <Navigation currentPage="about" />

      {/* Header Section */}
      <section className="relative w-full bg-white pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-thin text-[#998664] mb-8 leading-tight">Careers</h1>
          <div className="w-24 h-0.5 bg-[#998664] mx-auto mb-12"></div>
          <p className="text-lg md:text-xl lg:text-2xl font-thin text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Join us in building the future of artificial intelligence. We are looking for passionate, driven individuals to help us solve the most challenging problems in enterprise technology.
          </p>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="relative w-full bg-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-thin text-[#998664] mb-8 leading-tight">Why Join NightSkyLabs?</h2>
            <div className="w-24 h-0.5 bg-[#998664] mx-auto mb-12"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <p className="text-lg md:text-xl font-thin text-gray-700 leading-relaxed">
                We are a team of builders, thinkers, and innovators united by a common goal: to make AI accessible and transformative for every business. We operate at the cutting edge, with a culture of speed, autonomy, and impact.
              </p>
              <p className="text-lg md:text-xl font-thin text-gray-700 leading-relaxed">
                Here, you won't just be an employee; you'll be a partner in our mission. You will have the opportunity to work on groundbreaking projects, grow your skills, and see your work create real-world change.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-[#998664] to-[#aa9678] rounded-3xl p-10 text-white shadow-xl">
              <div className="text-center">
                <div className="text-7xl md:text-8xl font-thin mb-6">100%</div>
                <h3 className="text-2xl md:text-3xl font-thin mb-6">Remote & Flexible</h3>
                <p className="text-lg font-thin mb-8 opacity-90">
                  We believe talent has no zip code. Our remote-first culture empowers you to do your best work from wherever you are, with the flexibility to balance your life and career.
                </p>
                <div className="space-y-4 text-left">
                  <div className="flex justify-between items-center py-2 border-b border-white/20">
                    <span className="font-thin opacity-80">Culture</span>
                    <span className="font-medium">Ownership & Trust</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-white/20">
                    <span className="font-thin opacity-80">Growth</span>
                    <span className="font-medium">Continuous Learning</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="font-thin opacity-80">Impact</span>
                    <span className="font-medium">Frontier Technology</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions - Bronze Background */}
      <section className="relative w-full bg-gradient-to-r from-[#998664] to-[#aa9678] py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
            <h2 className="text-3xl md:text-5xl font-thin text-white mb-8 leading-tight">Open Positions</h2>
            <div className="w-24 h-0.5 bg-white mx-auto mb-8"></div>
            <p className="text-lg md:text-xl font-thin text-white/90 leading-relaxed max-w-3xl mx-auto">
              We are always looking for exceptional talent. While we may not have specific roles open right now, we encourage you to connect with us for future opportunities.
            </p>
        </div>
      </section>

      {/* Our Values - White Background */}
      <section className="relative w-full bg-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-thin text-[#998664] mb-8">What We Value</h2>
            <div className="w-24 h-0.5 bg-[#998664] mx-auto mb-8"></div>
            <p className="text-lg md:text-xl font-thin text-gray-600 max-w-3xl mx-auto leading-relaxed">
              The principles that define our team and culture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mb-6">
                <LuRocket size={48} className="text-[#998664] mx-auto" />
              </div>
              <h3 className="text-xl font-medium text-black mb-4">Ambition & Drive</h3>
              <p className="text-base font-thin text-gray-600 leading-relaxed">
                We are driven to solve hard problems and build things that matter. We set a high bar for ourselves and our work.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-6">
                <LuUsers size={48} className="text-[#998664] mx-auto" />
              </div>
              <h3 className="text-xl font-medium text-black mb-4">Collaborative Spirit</h3>
              <p className="text-base font-thin text-gray-600 leading-relaxed">
                We believe the best ideas are born from teamwork. We foster an environment of respect, support, and shared ownership.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-6">
                <LuLightbulb size={48} className="text-[#998664] mx-auto" />
              </div>
              <h3 className="text-xl font-medium text-black mb-4">Intellectual Curiosity</h3>
              <p className="text-base font-thin text-gray-600 leading-relaxed">
                We are lifelong learners, constantly exploring new ideas and technologies to stay at the forefront of our field.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CareersPage;

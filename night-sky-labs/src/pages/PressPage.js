import React from 'react';
import Navigation from '../components/common/layout/Navigation';
import Footer from '../components/common/layout/Footer';
import { LuMegaphone, LuNewspaper, LuImage, LuDownload, LuInfo } from 'react-icons/lu';

const PressPage = () => {
  return (
    <div className="relative w-full bg-white overflow-hidden">
      <Navigation currentPage="about" />

      {/* Header Section */}
      <section className="relative w-full bg-white pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-thin text-[#998664] mb-8 leading-tight">Press & Media</h1>
          <div className="w-24 h-0.5 bg-[#998664] mx-auto mb-12"></div>
          <p className="text-lg md:text-xl lg:text-2xl font-thin text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Welcome to the NightSkyLabs press center. Here you will find the latest news, media assets, and contact information for press inquiries.
          </p>
        </div>
      </section>

      {/* Press Inquiries Section */}
      <section className="relative w-full bg-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-thin text-[#998664] mb-8 leading-tight">Media Contact</h2>
            <div className="w-24 h-0.5 bg-[#998664] mx-auto mb-12"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <p className="text-lg md:text-xl font-thin text-gray-700 leading-relaxed">
                For all media and press-related inquiries, please contact our communications team. We are happy to provide information about our company, products, and vision.
              </p>
              <p className="text-lg md:text-xl font-thin text-gray-700 leading-relaxed">
                We can also arrange interviews with our leadership team and provide access to our latest press releases and announcements.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-[#998664] to-[#aa9678] rounded-3xl p-10 text-white shadow-xl">
              <div className="text-center">
                <div className="text-7xl md:text-8xl font-thin mb-6"><LuMegaphone /></div>
                <h3 className="text-2xl md:text-3xl font-thin mb-6">Get in Touch</h3>
                <p className="text-lg font-thin mb-8 opacity-90">
                  Our team will respond to your inquiry as quickly as possible.
                </p>
                <div className="space-y-4 text-left">
                  <div className="flex justify-between items-center py-2 border-b border-white/20">
                    <span className="font-thin opacity-80">Email</span>
                    <span className="font-medium">press@nightskylabs.com</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="font-thin opacity-80">Phone</span>
                    <span className="font-medium">+1 (555) 123-4567</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Press Kit - Bronze Background */}
      <section className="relative w-full bg-gradient-to-r from-[#998664] to-[#aa9678] py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
            <h2 className="text-3xl md:text-5xl font-thin text-white mb-8 leading-tight">Press Kit</h2>
            <div className="w-24 h-0.5 bg-white mx-auto mb-8"></div>
            <p className="text-lg md:text-xl font-thin text-white/90 leading-relaxed max-w-3xl mx-auto mb-8">
              Download our official press kit for logos, company information, and executive bios.
            </p>
            <button className="bg-white text-[#998664] font-bold py-3 px-8 rounded-full hover:bg-gray-200 transition-colors">
              <LuDownload className="inline-block mr-2" /> Download Press Kit
            </button>
        </div>
      </section>

      {/* About NightSkyLabs - White Background */}
      <section className="relative w-full bg-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-thin text-[#998664] mb-8">About NightSkyLabs</h2>
            <div className="w-24 h-0.5 bg-[#998664] mx-auto mb-8"></div>
            <p className="text-lg md:text-xl font-thin text-gray-600 max-w-3xl mx-auto leading-relaxed">
              NightSkyLabs is a leader in generative and physical AI, empowering enterprises to innovate and operate at the speed of opportunity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mb-6">
                <LuInfo size={48} className="text-[#998664] mx-auto" />
              </div>
              <h3 className="text-xl font-medium text-black mb-4">Fact Sheet</h3>
              <p className="text-base font-thin text-gray-600 leading-relaxed">
                Key information about our company, founding, and mission.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-6">
                <LuNewspaper size={48} className="text-[#998664] mx-auto" />
              </div>
              <h3 className="text-xl font-medium text-black mb-4">Recent News</h3>
              <p className="text-base font-thin text-gray-600 leading-relaxed">
                The latest announcements and news from NightSkyLabs.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-6">
                <LuImage size={48} className="text-[#998664] mx-auto" />
              </div>
              <h3 className="text-xl font-medium text-black mb-4">Media Assets</h3>
              <p className="text-base font-thin text-gray-600 leading-relaxed">
                Logos, images, and other assets for media use.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PressPage;

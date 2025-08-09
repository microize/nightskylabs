import React from 'react';
import Navigation from '../components/common/layout/Navigation';
import Footer from '../components/common/layout/Footer';
import { LuCircleUser, LuBriefcase, LuGraduationCap, LuLinkedin } from 'react-icons/lu';

const LeadershipPage = () => {
  const leaders = [
    {
      name: 'Sripathi Mohansundaram',
      role: 'Founder & CEO',
      imageUrl: '/path-to-sripathi-image.jpg', // Replace with actual image path
      bio: 'Sripathi is a visionary leader with over 20 years of experience in artificial intelligence and enterprise software. He founded NightSkyLabs to democratize access to cutting-edge AI, empowering businesses to innovate and thrive in the digital-first era. His mission is to bridge the gap between complex technology and practical business application.',
      linkedin: 'https://www.linkedin.com/in/sripathimohansundaram/',
    },
    // Add other leaders here
  ];

  return (
    <div className="relative w-full bg-white overflow-hidden">
      <Navigation currentPage="about" />

      {/* Header Section */}
      <section className="relative w-full bg-white pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-thin text-[#998664] mb-8 leading-tight">Our Leadership</h1>
          <div className="w-24 h-0.5 bg-[#998664] mx-auto mb-12"></div>
          <p className="text-lg md:text-xl lg:text-2xl font-thin text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Meet the experienced and passionate team guiding NightSkyLabs. Our leaders bring a wealth of knowledge and a shared commitment to driving innovation and client success.
          </p>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="relative w-full bg-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 gap-20">
            {leaders.map((leader, index) => (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
                <div className="lg:col-span-1">
                  <div className="relative w-full aspect-square bg-gray-100 rounded-3xl shadow-lg flex items-center justify-center">
                    {leader.imageUrl ? (
                      <img src={leader.imageUrl} alt={leader.name} className="w-full h-full object-cover rounded-3xl" />
                    ) : (
                      <LuCircleUser className="text-gray-300 w-1/2 h-1/2" />
                    )}
                  </div>
                </div>
                <div className="lg:col-span-2">
                  <h2 className="text-3xl md:text-4xl font-thin text-[#998664] mb-4">{leader.name}</h2>
                  <h3 className="text-xl md:text-2xl font-medium text-black mb-6">{leader.role}</h3>
                  <p className="text-lg font-thin text-gray-700 leading-relaxed mb-6">
                    {leader.bio}
                  </p>
                  <a href={leader.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-[#998664] hover:text-black transition-colors">
                    <LuLinkedin size={24} className="mr-3" />
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LeadershipPage;

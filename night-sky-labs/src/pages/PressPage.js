import React from 'react';
import Navigation from '../components/shared/Navigation';
import Footer from '../components/shared/Footer';
import { LuPalette as Palette, LuFileText as FileText, LuCamera as Camera } from 'react-icons/lu';

const PressPage = () => {
  return (
    <div className="relative w-full bg-white overflow-hidden">
      <Navigation currentPage="about" />

      {/* Hero Section */}
      <section className="relative w-full bg-white pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h1 className="text-4xl md:text-6xl font-thin text-black mb-6">Press & Media</h1>
          <div className="w-24 h-0.5 bg-black mx-auto mb-8"></div>
          <p className="text-lg md:text-xl font-thin text-gray-600 max-w-4xl mx-auto">
            Latest news, press releases, and media resources about NightSkyLabs and our AI innovations.
          </p>
        </div>
      </section>

      {/* Latest News */}
      <section className="relative w-full bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-thin text-black mb-6">Latest News</h2>
            <p className="text-lg font-thin text-gray-600 max-w-3xl mx-auto">
              Stay updated with our recent announcements, product launches, and company milestones.
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                <div className="flex-1">
                  <div className="text-sm font-thin text-gray-500 mb-2">March 15, 2024</div>
                  <h3 className="text-2xl font-thin text-black mb-4">
                    NightSkyLabs Announces Series A Funding Round to Accelerate AI Product Development
                  </h3>
                  <p className="text-base font-thin text-gray-600 mb-4">
                    Leading AI company raises funding to expand its portfolio of developer tools, 
                    recruitment platforms, and educational technology solutions.
                  </p>
                  <button className="text-black text-sm font-thin border-b border-black hover:border-gray-400 transition-colors">
                    Read Full Release
                  </button>
                </div>
                <div className="mt-6 md:mt-0 md:ml-8">
                  <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-thin">
                    Press Release
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                <div className="flex-1">
                  <div className="text-sm font-thin text-gray-500 mb-2">February 28, 2024</div>
                  <h3 className="text-2xl font-thin text-black mb-4">
                    Soul CLI Development Progresses with Early Testing
                  </h3>
                  <p className="text-base font-thin text-gray-600 mb-4">
                    AI-powered command-line tool enters development phase with focus on 
                    developer productivity and intelligent workflow automation.
                  </p>
                  <button className="text-black text-sm font-thin border-b border-black hover:border-gray-400 transition-colors">
                    Read Full Release
                  </button>
                </div>
                <div className="mt-6 md:mt-0 md:ml-8">
                  <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-thin">
                    Product Update
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                <div className="flex-1">
                  <div className="text-sm font-thin text-gray-500 mb-2">January 12, 2024</div>
                  <h3 className="text-2xl font-thin text-black mb-4">
                    NightSkyLabs Voice Platform Partners with Leading HR Technology Companies
                  </h3>
                  <p className="text-base font-thin text-gray-600 mb-4">
                    Strategic partnerships expand AI-powered interview platform's reach to 
                    enterprise clients across multiple industries.
                  </p>
                  <button className="text-black text-sm font-thin border-b border-black hover:border-gray-400 transition-colors">
                    Read Full Release
                  </button>
                </div>
                <div className="mt-6 md:mt-0 md:ml-8">
                  <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-thin">
                    Partnership
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Media Coverage */}
      <section className="relative w-full bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-thin text-black mb-6">Media Coverage</h2>
            <p className="text-lg font-thin text-gray-600 max-w-3xl mx-auto">
              Featured stories and mentions in leading technology and business publications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="text-sm font-thin text-gray-500 mb-2">TechCrunch - March 2024</div>
              <h3 className="text-xl font-thin text-black mb-4">
                "The Future of Developer Tools: How AI is Transforming Software Development"
              </h3>
              <p className="text-base font-thin text-gray-600 mb-4">
                In-depth analysis of how NightSkyLabs' Soul CLI represents the next generation 
                of AI-powered development tools.
              </p>
              <button className="text-black text-sm font-thin border-b border-black hover:border-gray-400 transition-colors">
                Read Article
              </button>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="text-sm font-thin text-gray-500 mb-2">Harvard Business Review - February 2024</div>
              <h3 className="text-xl font-thin text-black mb-4">
                "AI in Recruitment: Transforming How Companies Hire Top Talent"
              </h3>
              <p className="text-base font-thin text-gray-600 mb-4">
                Case study featuring NightSkyLabs' Voice platform and its impact on 
                recruitment efficiency and candidate experience.
              </p>
              <button className="text-black text-sm font-thin border-b border-black hover:border-gray-400 transition-colors">
                Read Article
              </button>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="text-sm font-thin text-gray-500 mb-2">Wired - January 2024</div>
              <h3 className="text-xl font-thin text-black mb-4">
                "Personalized AI Learning: The Revolution in Educational Technology"
              </h3>
              <p className="text-base font-thin text-gray-600 mb-4">
                Feature on adaptive learning technologies and how Qurious is reshaping 
                personalized education through AI.
              </p>
              <button className="text-black text-sm font-thin border-b border-black hover:border-gray-400 transition-colors">
                Read Article
              </button>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="text-sm font-thin text-gray-500 mb-2">Forbes - December 2023</div>
              <h3 className="text-xl font-thin text-black mb-4">
                "Startups to Watch: AI Companies Reshaping Industry Standards"
              </h3>
              <p className="text-base font-thin text-gray-600 mb-4">
                NightSkyLabs featured among top AI startups demonstrating innovative 
                approaches to enterprise technology solutions.
              </p>
              <button className="text-black text-sm font-thin border-b border-black hover:border-gray-400 transition-colors">
                Read Article
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Media Kit */}
      <section className="relative w-full bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-thin text-black mb-6">Media Kit</h2>
            <p className="text-lg font-thin text-gray-600 max-w-3xl mx-auto">
              Download our media kit with logos, product images, company information, and executive bios.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <Palette size={24} className="text-gray-400" />
              </div>
              <h3 className="text-xl font-thin text-black mb-4">Brand Assets</h3>
              <p className="text-base font-thin text-gray-600 mb-6">
                High-resolution logos, brand colors, typography guidelines, and usage instructions.
              </p>
              <button className="bg-black text-white px-6 py-3 rounded-full text-sm font-thin hover:bg-gray-800 transition-colors">
                Download Assets
              </button>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <FileText size={24} className="text-gray-400" />
              </div>
              <h3 className="text-xl font-thin text-black mb-4">Company Facts</h3>
              <p className="text-base font-thin text-gray-600 mb-6">
                Key company information, statistics, timeline, and executive biographies.
              </p>
              <button className="bg-black text-white px-6 py-3 rounded-full text-sm font-thin hover:bg-gray-800 transition-colors">
                Download Factsheet
              </button>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <Camera size={24} className="text-gray-400" />
              </div>
              <h3 className="text-xl font-thin text-black mb-4">Product Images</h3>
              <p className="text-base font-thin text-gray-600 mb-6">
                Screenshots, product demos, and visual assets for Soul, Voice, and Qurious platforms.
              </p>
              <button className="bg-black text-white px-6 py-3 rounded-full text-sm font-thin hover:bg-gray-800 transition-colors">
                Download Images
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="relative w-full bg-white py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-thin text-black mb-6">Press Inquiries</h2>
            <p className="text-lg font-thin text-gray-600 max-w-3xl mx-auto">
              For media inquiries, interview requests, or additional information, 
              please contact our press team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-thin text-black mb-6">Media Contact</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-sm font-thin text-gray-500">Press Contact</div>
                  <div className="text-base font-thin text-black">Sarah Chen</div>
                  <div className="text-base font-thin text-black">Director of Communications</div>
                </div>
                <div>
                  <div className="text-sm font-thin text-gray-500">Email</div>
                  <div className="text-base font-thin text-black">press@nightskylabs.ai</div>
                </div>
                <div>
                  <div className="text-sm font-thin text-gray-500">Phone</div>
                  <div className="text-base font-thin text-black">+1 (555) 123-4567</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-thin text-black mb-6">Executive Interviews</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-sm font-thin text-gray-500">CEO Interviews</div>
                  <div className="text-base font-thin text-black">Alex Rodriguez</div>
                  <div className="text-base font-thin text-black">Chief Executive Officer</div>
                </div>
                <div>
                  <div className="text-sm font-thin text-gray-500">Technical Interviews</div>
                  <div className="text-base font-thin text-black">Dr. Maya Singh</div>
                  <div className="text-base font-thin text-black">Chief Technology Officer</div>
                </div>
                <div>
                  <div className="text-sm font-thin text-gray-500">Response Time</div>
                  <div className="text-base font-thin text-black">24-48 hours</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full bg-black py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-5xl font-thin text-white mb-6">Ready to Tell Our Story?</h2>
          <p className="text-lg font-thin text-white/80 mb-8 max-w-3xl mx-auto">
            We're always excited to share our AI innovations and company insights with media partners.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-black px-8 py-4 rounded-full text-lg font-thin hover:bg-gray-100 transition-colors">
              Contact Press Team
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-full text-lg font-thin hover:bg-white hover:text-black transition-colors">
              Download Media Kit
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PressPage;
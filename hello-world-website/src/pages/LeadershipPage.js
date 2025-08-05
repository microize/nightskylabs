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
          <h1 className="text-4xl md:text-6xl font-thin text-black mb-6">Leadership Team</h1>
          <div className="w-24 h-0.5 bg-black mx-auto mb-8"></div>
          <p className="text-lg md:text-xl font-thin text-gray-600 max-w-4xl mx-auto">
            Meet the visionary leaders driving AI innovation and building the future of intelligent technology.
          </p>
        </div>
      </section>

      {/* Executive Team */}
      <section className="relative w-full bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-thin text-black mb-6">Executive Leadership</h2>
            <p className="text-lg font-thin text-gray-600 max-w-3xl mx-auto">
              Our executive team combines decades of experience in AI research, product development, 
              and scaling technology companies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* CEO */}
            <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-6"></div>
              <h3 className="text-2xl font-thin text-black mb-2">Alex Rodriguez</h3>
              <div className="text-base font-thin text-gray-500 mb-4">Chief Executive Officer</div>
              <p className="text-base font-thin text-gray-600 mb-6">
                Former VP of Engineering at leading AI companies. 12+ years building scalable 
                technology platforms. PhD in Computer Science from Stanford.
              </p>
              <div className="space-y-2 text-sm font-thin text-gray-600">
                <div>• Founded two successful AI startups</div>
                <div>• Led engineering teams of 100+ people</div>
                <div>• Expert in machine learning systems</div>
              </div>
            </div>

            {/* CTO */}
            <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-6"></div>
              <h3 className="text-2xl font-thin text-black mb-2">Dr. Maya Singh</h3>
              <div className="text-base font-thin text-gray-500 mb-4">Chief Technology Officer</div>
              <p className="text-base font-thin text-gray-600 mb-6">
                AI research scientist with 15+ years in machine learning and NLP. 
                Former Principal Researcher at Google AI. PhD in AI from MIT.
              </p>
              <div className="space-y-2 text-sm font-thin text-gray-600">
                <div>• 50+ published research papers</div>
                <div>• Pioneer in conversational AI systems</div>
                <div>• Expert in neural architecture design</div>
              </div>
            </div>

            {/* CPO */}
            <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-6"></div>
              <h3 className="text-2xl font-thin text-black mb-2">Sarah Chen</h3>
              <div className="text-base font-thin text-gray-500 mb-4">Chief Product Officer</div>
              <p className="text-base font-thin text-gray-600 mb-6">
                Product leader with expertise in AI-powered platforms. Former Director of Product 
                at Microsoft. MBA from Wharton, BS in Computer Science.
              </p>
              <div className="space-y-2 text-sm font-thin text-gray-600">
                <div>• Launched 10+ AI-powered products</div>
                <div>• Expert in product-market fit</div>
                <div>• Specializes in developer tools</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Department Heads */}
      <section className="relative w-full bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-thin text-black mb-6">Department Leaders</h2>
            <p className="text-lg font-thin text-gray-600 max-w-3xl mx-auto">
              Experienced leaders who drive excellence across engineering, design, marketing, 
              and business development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* VP Engineering */}
            <div className="bg-gray-50 rounded-2xl p-8 flex items-start space-x-6">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex-shrink-0"></div>
              <div className="flex-1">
                <h3 className="text-xl font-thin text-black mb-2">David Kim</h3>
                <div className="text-base font-thin text-gray-500 mb-4">VP of Engineering</div>
                <p className="text-base font-thin text-gray-600 mb-4">
                  Full-stack engineering leader with expertise in distributed systems and AI infrastructure. 
                  Former Senior Engineering Manager at Netflix.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-white px-3 py-1 rounded-full text-sm font-thin text-gray-600">Distributed Systems</span>
                  <span className="bg-white px-3 py-1 rounded-full text-sm font-thin text-gray-600">AI Infrastructure</span>
                  <span className="bg-white px-3 py-1 rounded-full text-sm font-thin text-gray-600">Team Leadership</span>
                </div>
              </div>
            </div>

            {/* Head of Design */}
            <div className="bg-gray-50 rounded-2xl p-8 flex items-start space-x-6">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex-shrink-0"></div>
              <div className="flex-1">
                <h3 className="text-xl font-thin text-black mb-2">Emily Watson</h3>
                <div className="text-base font-thin text-gray-500 mb-4">Head of Design</div>
                <p className="text-base font-thin text-gray-600 mb-4">
                  Design leader specializing in AI-human interfaces and developer experience. 
                  Former Principal Designer at Figma and Dropbox.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-white px-3 py-1 rounded-full text-sm font-thin text-gray-600">AI UX Design</span>
                  <span className="bg-white px-3 py-1 rounded-full text-sm font-thin text-gray-600">Developer Tools</span>
                  <span className="bg-white px-3 py-1 rounded-full text-sm font-thin text-gray-600">Design Systems</span>
                </div>
              </div>
            </div>

            {/* VP Marketing */}
            <div className="bg-gray-50 rounded-2xl p-8 flex items-start space-x-6">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex-shrink-0"></div>
              <div className="flex-1">
                <h3 className="text-xl font-thin text-black mb-2">Marcus Johnson</h3>
                <div className="text-base font-thin text-gray-500 mb-4">VP of Marketing</div>
                <p className="text-base font-thin text-gray-600 mb-4">
                  Growth marketing expert with deep experience in B2B SaaS and developer tools. 
                  Former VP Marketing at Stripe and Twilio.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-white px-3 py-1 rounded-full text-sm font-thin text-gray-600">Developer Marketing</span>
                  <span className="bg-white px-3 py-1 rounded-full text-sm font-thin text-gray-600">Growth Strategy</span>
                  <span className="bg-white px-3 py-1 rounded-full text-sm font-thin text-gray-600">Community Building</span>
                </div>
              </div>
            </div>

            {/* Head of Business Development */}
            <div className="bg-gray-50 rounded-2xl p-8 flex items-start space-x-6">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex-shrink-0"></div>
              <div className="flex-1">
                <h3 className="text-xl font-thin text-black mb-2">Lisa Thompson</h3>
                <div className="text-base font-thin text-gray-500 mb-4">Head of Business Development</div>
                <p className="text-base font-thin text-gray-600 mb-4">
                  Strategic partnerships and business development leader with expertise in AI and enterprise software. 
                  Former BD Director at Salesforce.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-white px-3 py-1 rounded-full text-sm font-thin text-gray-600">Strategic Partnerships</span>
                  <span className="bg-white px-3 py-1 rounded-full text-sm font-thin text-gray-600">Enterprise Sales</span>
                  <span className="bg-white px-3 py-1 rounded-full text-sm font-thin text-gray-600">Market Expansion</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advisory Board */}
      <section className="relative w-full bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-thin text-black mb-6">Advisory Board</h2>
            <p className="text-lg font-thin text-gray-600 max-w-3xl mx-auto">
              Industry experts and thought leaders who provide strategic guidance and mentorship 
              as we scale our AI innovations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
              <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-lg font-thin text-black mb-2">Dr. James Liu</h3>
              <div className="text-sm font-thin text-gray-500 mb-3">AI Research Advisor</div>
              <p className="text-sm font-thin text-gray-600">
                Former Director of AI at OpenAI. Leading expert in large language models 
                and AI safety research.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
              <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-lg font-thin text-black mb-2">Rachel Davis</h3>
              <div className="text-sm font-thin text-gray-500 mb-3">Product Strategy Advisor</div>
              <p className="text-sm font-thin text-gray-600">
                Former Chief Product Officer at GitHub. Expert in developer tools 
                and open source ecosystems.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
              <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-lg font-thin text-black mb-2">Michael Chang</h3>
              <div className="text-sm font-thin text-gray-500 mb-3">Go-to-Market Advisor</div>
              <p className="text-sm font-thin text-gray-600">
                Former VP of Sales at Snowflake. Scaling enterprise software 
                companies from startup to IPO.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
              <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-lg font-thin text-black mb-2">Dr. Priya Patel</h3>
              <div className="text-sm font-thin text-gray-500 mb-3">EdTech Advisor</div>
              <p className="text-sm font-thin text-gray-600">
                Former VP of Product at Coursera. Expert in AI-powered 
                educational platforms and personalized learning.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
              <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-lg font-thin text-black mb-2">Thomas Anderson</h3>
              <div className="text-sm font-thin text-gray-500 mb-3">HR Tech Advisor</div>
              <p className="text-sm font-thin text-gray-600">
                Former Chief Technology Officer at Workday. Expert in HR technology 
                and workforce analytics platforms.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
              <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-lg font-thin text-black mb-2">Jennifer Martinez</h3>
              <div className="text-sm font-thin text-gray-500 mb-3">Investment Advisor</div>
              <p className="text-sm font-thin text-gray-600">
                Partner at Andreessen Horowitz. Leading investor in AI and enterprise 
                software with 15+ years of experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="relative w-full bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-thin text-black mb-6">Leadership Philosophy</h2>
            <p className="text-lg font-thin text-gray-600 max-w-3xl mx-auto">
              Our leadership approach is built on transparency, collaboration, and empowering 
              every team member to contribute to our mission.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-thin text-black mb-6">Collaborative Leadership</h3>
              <div className="space-y-4">
                <p className="text-base font-thin text-gray-600">
                  We believe the best decisions come from diverse perspectives and open dialogue. 
                  Our leadership team maintains an open-door policy and regularly engages with 
                  team members across all levels.
                </p>
                <p className="text-base font-thin text-gray-600">
                  Weekly all-hands meetings, quarterly strategy sessions, and annual company retreats 
                  ensure everyone understands our vision and can contribute to strategic decisions.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-thin text-black mb-6">Innovation-First Culture</h3>
              <div className="space-y-4">
                <p className="text-base font-thin text-gray-600">
                  Our leaders encourage experimentation and calculated risk-taking. We allocate 20% 
                  of engineering time to exploratory projects and maintain a culture where failure 
                  is viewed as learning.
                </p>
                <p className="text-base font-thin text-gray-600">
                  Regular hackathons, research presentations, and cross-team collaboration sessions 
                  foster an environment where innovation thrives at every level of the organization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full bg-black py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-5xl font-thin text-white mb-6">Join Our Leadership Journey</h2>
          <p className="text-lg font-thin text-white/80 mb-8 max-w-3xl mx-auto">
            We're always looking for exceptional leaders who share our passion for AI innovation 
            and building world-class products.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-black px-8 py-4 rounded-full text-lg font-thin hover:bg-gray-100 transition-colors">
              View Open Leadership Roles
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-full text-lg font-thin hover:bg-white hover:text-black transition-colors">
              Contact Our Team
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LeadershipPage;
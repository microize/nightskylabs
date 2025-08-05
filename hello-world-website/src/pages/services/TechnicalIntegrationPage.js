import React from 'react';
import Navigation from '../../components/shared/Navigation';
import Footer from '../../components/shared/Footer';

const TechnicalIntegrationPage = () => {
  return (
    <div className="relative w-full bg-white overflow-hidden">
      <Navigation currentPage="services" />

      {/* Hero Section */}
      <section className="relative w-full bg-white pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h1 className="text-4xl md:text-6xl font-thin text-black mb-6">Technical Integration</h1>
          <div className="w-24 h-0.5 bg-black mx-auto mb-8"></div>
          <p className="text-lg md:text-xl font-thin text-gray-600 max-w-4xl mx-auto">
            Seamless enterprise system connectivity, legacy modernization, and robust API development that bridges traditional and intelligent technologies.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="relative w-full bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-thin text-black mb-8">Enterprise Connectivity</h2>
              <div className="space-y-6">
                <p className="text-lg font-thin text-gray-600">
                  Our Technical Integration service connects AI solutions with your existing enterprise 
                  infrastructure, ensuring seamless data flow and operational continuity while 
                  modernizing legacy systems for the intelligent age.
                </p>
                <p className="text-lg font-thin text-gray-600">
                  From API development to complex system orchestration, we create robust integration 
                  architectures that enable your organization to leverage AI without disrupting 
                  critical business operations.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-thin text-black mb-6">Integration Services</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                  <span className="text-base font-thin text-gray-600">Enterprise system connectivity and data synchronization</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                  <span className="text-base font-thin text-gray-600">Legacy system modernization and API wrapping</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                  <span className="text-base font-thin text-gray-600">Real-time data pipeline development</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                  <span className="text-base font-thin text-gray-600">Cloud migration and hybrid architecture design</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                  <span className="text-base font-thin text-gray-600">Security and compliance framework implementation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="relative w-full bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-thin text-black mb-6">Integration Methodology</h2>
            <p className="text-lg font-thin text-gray-600 max-w-3xl mx-auto">
              A systematic approach to enterprise integration that minimizes disruption while 
              maximizing connectivity and enabling intelligent automation across your technology stack.
            </p>
          </div>

          <div className="space-y-12">
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="w-full md:w-1/4">
                <div className="bg-black text-white rounded-2xl p-6 text-center">
                  <div className="text-3xl font-thin mb-2">01</div>
                  <div className="text-lg font-thin">Discovery</div>
                </div>
              </div>
              <div className="w-full md:w-3/4">
                <h3 className="text-2xl font-thin text-black mb-4">System Architecture Analysis</h3>
                <p className="text-base font-thin text-gray-600 mb-4">
                  Comprehensive mapping of your existing technology landscape, identifying integration 
                  points, data flows, and potential bottlenecks in your current infrastructure.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="text-base font-thin text-black mb-2">Infrastructure Audit</h4>
                    <p className="text-sm font-thin text-gray-600">Complete system inventory, performance assessment, and dependency mapping</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="text-base font-thin text-black mb-2">Data Flow Analysis</h4>
                    <p className="text-sm font-thin text-gray-600">Current data patterns, formats, and integration complexity evaluation</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="w-full md:w-1/4">
                <div className="bg-black text-white rounded-2xl p-6 text-center">
                  <div className="text-3xl font-thin mb-2">02</div>
                  <div className="text-lg font-thin">Planning</div>
                </div>
              </div>
              <div className="w-full md:w-3/4">
                <h3 className="text-2xl font-thin text-black mb-4">Integration Architecture Design</h3>
                <p className="text-base font-thin text-gray-600 mb-4">
                  Design scalable integration architecture that accommodates current needs while 
                  providing flexibility for future AI enhancements and system evolution.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="text-base font-thin text-black mb-2">API Strategy</h4>
                    <p className="text-sm font-thin text-gray-600">RESTful design, GraphQL implementation, and microservices architecture</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="text-base font-thin text-black mb-2">Security Framework</h4>
                    <p className="text-sm font-thin text-gray-600">Authentication, authorization, encryption, and compliance protocols</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="w-full md:w-1/4">
                <div className="bg-black text-white rounded-2xl p-6 text-center">
                  <div className="text-3xl font-thin mb-2">03</div>
                  <div className="text-lg font-thin">Implementation</div>
                </div>
              </div>
              <div className="w-full md:w-3/4">
                <h3 className="text-2xl font-thin text-black mb-4">Phased Integration Deployment</h3>
                <p className="text-base font-thin text-gray-600 mb-4">
                  Gradual implementation with continuous testing and validation to ensure system 
                  stability and business continuity throughout the integration process.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="text-base font-thin text-black mb-2">Incremental Rollout</h4>
                    <p className="text-sm font-thin text-gray-600">Risk-minimized deployment with rollback capabilities and monitoring</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="text-base font-thin text-black mb-2">Quality Assurance</h4>
                    <p className="text-sm font-thin text-gray-600">Comprehensive testing, performance validation, and user acceptance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="relative w-full bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-thin text-black mb-6">Integration Benefits</h2>
            <p className="text-lg font-thin text-gray-600 max-w-3xl mx-auto">
              Professional integration services ensure seamless AI adoption while maintaining 
              operational stability and maximizing existing technology investments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
              <div className="text-4xl font-thin text-black mb-4">95%</div>
              <h3 className="text-xl font-thin text-black mb-4">Uptime Maintained</h3>
              <p className="text-base font-thin text-gray-600">
                Seamless integration processes that preserve business continuity 
                and minimize operational disruption during implementation.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
              <div className="text-4xl font-thin text-black mb-4">70%</div>
              <h3 className="text-xl font-thin text-black mb-4">Faster Data Access</h3>
              <p className="text-base font-thin text-gray-600">
                Optimized data pipelines and API architectures dramatically 
                improve information flow and system response times.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
              <div className="text-4xl font-thin text-black mb-4">50%</div>
              <h3 className="text-xl font-thin text-black mb-4">Reduced Complexity</h3>
              <p className="text-base font-thin text-gray-600">
                Streamlined architectures and modern integration patterns 
                simplify maintenance and enable faster future enhancements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="relative w-full bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-thin text-black mb-6">Integration Success</h2>
            <p className="text-lg font-thin text-gray-600 max-w-3xl mx-auto">
              How we integrated AI-powered customer insights across a Fortune 100 company's 
              25-year-old legacy CRM and modern cloud infrastructure.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-thin text-black mb-6">The Challenge</h3>
                <p className="text-base font-thin text-gray-600 mb-6">
                  A global financial services company needed to integrate AI-powered customer behavior 
                  analysis with their legacy mainframe CRM system and modern cloud applications, 
                  while maintaining strict regulatory compliance and 99.99% uptime requirements.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-sm font-thin text-gray-600">25-year-old mainframe system with proprietary protocols</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-sm font-thin text-gray-600">Real-time data requirements across disparate systems</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-sm font-thin text-gray-600">Strict financial compliance and security requirements</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-thin text-black mb-6">The Solution</h3>
                <p className="text-base font-thin text-gray-600 mb-6">
                  We designed a hybrid integration platform with secure API gateways, real-time 
                  data synchronization, and compliant data transformation layers that connected 
                  all systems without requiring legacy system modifications.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-thin text-gray-600">Non-invasive integration preserving legacy system integrity</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-thin text-gray-600">Real-time bidirectional data synchronization</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-thin text-gray-600">End-to-end encryption and compliance monitoring</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 pt-12 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-thin text-black mb-2">99.99%</div>
                <div className="text-base font-thin text-gray-600">System Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-thin text-black mb-2">85%</div>
                <div className="text-base font-thin text-gray-600">Faster Insights</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-thin text-black mb-2">$12M</div>
                <div className="text-base font-thin text-gray-600">Efficiency Gains</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full bg-black py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-5xl font-thin text-white mb-6">Ready to Integrate AI into Your Systems?</h2>
          <p className="text-lg font-thin text-white/80 mb-8 max-w-3xl mx-auto">
            Let's create seamless connections between your existing infrastructure and 
            intelligent technologies without disrupting critical operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-black px-8 py-4 rounded-full text-lg font-thin hover:bg-gray-100 transition-colors">
              Plan Integration
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-full text-lg font-thin hover:bg-white hover:text-black transition-colors">
              Architecture Review
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TechnicalIntegrationPage;
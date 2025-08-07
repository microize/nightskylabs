import React from 'react';
import Navigation from '../../components/common/layout/Navigation';
import Footer from '../../components/common/layout/Footer';

const SystemIntegrationPage = () => {
  return (
    <div className="relative w-full bg-white overflow-hidden">
      <Navigation currentPage="services" />

      {/* Hero Section */}
      <section className="relative w-full bg-white pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h1 className="text-4xl md:text-6xl font-thin text-black mb-6">System Integration</h1>
          <div className="w-24 h-0.5 bg-black mx-auto mb-8"></div>
          <p className="text-lg md:text-xl font-thin text-gray-600 max-w-4xl mx-auto">
            Seamless AI implementation that connects with your existing technology stack and maintains operational continuity.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="relative w-full bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-thin text-black mb-8">Enterprise Integration</h2>
              <div className="space-y-6">
                <p className="text-lg font-thin text-gray-600">
                  Our System Integration service ensures that AI solutions work harmoniously with your 
                  existing infrastructure, applications, and workflows without disrupting business operations.
                </p>
                <p className="text-lg font-thin text-gray-600">
                  We specialize in creating robust, scalable integration architectures that enable seamless 
                  data flow, maintain security standards, and provide the foundation for future AI initiatives.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-thin text-black mb-6">Integration Capabilities</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                  <span className="text-base font-thin text-gray-600">Legacy system modernization and connectivity</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                  <span className="text-base font-thin text-gray-600">Real-time data synchronization and processing</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                  <span className="text-base font-thin text-gray-600">API design and microservices architecture</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                  <span className="text-base font-thin text-gray-600">Cloud and hybrid infrastructure integration</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                  <span className="text-base font-thin text-gray-600">Security and compliance framework alignment</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Approaches */}
      <section className="relative w-full bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-thin text-black mb-6">Integration Strategies</h2>
            <p className="text-lg font-thin text-gray-600 max-w-3xl mx-auto">
              Flexible integration approaches that accommodate different technology environments 
              and business requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="w-16 h-16 bg-black rounded-2xl mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">🔗</span>
              </div>
              <h3 className="text-xl font-thin text-black mb-4">API-First Integration</h3>
              <p className="text-base font-thin text-gray-600 mb-4">
                RESTful and GraphQL APIs that enable secure, scalable communication between 
                AI systems and existing applications.
              </p>
              <div className="space-y-2">
                <div className="text-sm font-thin text-gray-600">• REST API development</div>
                <div className="text-sm font-thin text-gray-600">• GraphQL implementation</div>
                <div className="text-sm font-thin text-gray-600">• Webhook integrations</div>
                <div className="text-sm font-thin text-gray-600">• API gateway management</div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="w-16 h-16 bg-black rounded-2xl mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-thin text-black mb-4">Event-Driven Architecture</h3>
              <p className="text-base font-thin text-gray-600 mb-4">
                Asynchronous event processing that enables real-time responses and 
                loose coupling between system components.
              </p>
              <div className="space-y-2">
                <div className="text-sm font-thin text-gray-600">• Message queue systems</div>
                <div className="text-sm font-thin text-gray-600">• Event streaming platforms</div>
                <div className="text-sm font-thin text-gray-600">• Pub/sub messaging</div>
                <div className="text-sm font-thin text-gray-600">• Event sourcing patterns</div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="w-16 h-16 bg-black rounded-2xl mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">🏗️</span>
              </div>
              <h3 className="text-xl font-thin text-black mb-4">Microservices Architecture</h3>
              <p className="text-base font-thin text-gray-600 mb-4">
                Modular AI services that can be developed, deployed, and scaled independently 
                while maintaining system cohesion.
              </p>
              <div className="space-y-2">
                <div className="text-sm font-thin text-gray-600">• Service decomposition</div>
                <div className="text-sm font-thin text-gray-600">• Container orchestration</div>
                <div className="text-sm font-thin text-gray-600">• Service mesh implementation</div>
                <div className="text-sm font-thin text-gray-600">• Circuit breaker patterns</div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="w-16 h-16 bg-black rounded-2xl mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">🗄️</span>
              </div>
              <h3 className="text-xl font-thin text-black mb-4">Data Integration</h3>
              <p className="text-base font-thin text-gray-600 mb-4">
                Comprehensive data pipeline solutions that ensure AI systems have access 
                to clean, consistent, and timely data.
              </p>
              <div className="space-y-2">
                <div className="text-sm font-thin text-gray-600">• ETL/ELT pipelines</div>
                <div className="text-sm font-thin text-gray-600">• Data lake architecture</div>
                <div className="text-sm font-thin text-gray-600">• Real-time streaming</div>
                <div className="text-sm font-thin text-gray-600">• Data quality validation</div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="w-16 h-16 bg-black rounded-2xl mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">☁️</span>
              </div>
              <h3 className="text-xl font-thin text-black mb-4">Cloud Integration</h3>
              <p className="text-base font-thin text-gray-600 mb-4">
                Seamless integration with cloud platforms and services, including 
                hybrid and multi-cloud architectures.
              </p>
              <div className="space-y-2">
                <div className="text-sm font-thin text-gray-600">• Cloud-native development</div>
                <div className="text-sm font-thin text-gray-600">• Serverless architectures</div>
                <div className="text-sm font-thin text-gray-600">• Multi-cloud strategies</div>
                <div className="text-sm font-thin text-gray-600">• Edge computing integration</div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="w-16 h-16 bg-black rounded-2xl mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">🔒</span>
              </div>
              <h3 className="text-xl font-thin text-black mb-4">Security Integration</h3>
              <p className="text-base font-thin text-gray-600 mb-4">
                Enterprise-grade security measures integrated throughout the system 
                architecture and data flow processes.
              </p>
              <div className="space-y-2">
                <div className="text-sm font-thin text-gray-600">• Authentication & authorization</div>
                <div className="text-sm font-thin text-gray-600">• Data encryption in transit/rest</div>
                <div className="text-sm font-thin text-gray-600">• Audit logging & monitoring</div>
                <div className="text-sm font-thin text-gray-600">• Compliance frameworks</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Process */}
      <section className="relative w-full bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-thin text-black mb-6">Integration Process</h2>
            <p className="text-lg font-thin text-gray-600 max-w-3xl mx-auto">
              Our systematic approach ensures smooth, secure, and scalable integration 
              with minimal disruption to existing operations.
            </p>
          </div>

          <div className="space-y-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mr-4">
                    <span className="text-lg font-thin">1</span>
                  </div>
                  <h3 className="text-2xl font-thin text-black">System Assessment</h3>
                </div>
                <p className="text-base font-thin text-gray-600 mb-4">
                  Comprehensive evaluation of existing systems, data flows, security requirements, 
                  and integration constraints to develop an optimal integration strategy.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    <span className="text-sm font-thin text-gray-600">Infrastructure audit and mapping</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    <span className="text-sm font-thin text-gray-600">Data architecture analysis</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    <span className="text-sm font-thin text-gray-600">Security and compliance review</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h4 className="text-lg font-thin text-black mb-4">Assessment Deliverables</h4>
                <div className="space-y-3">
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="text-sm font-thin text-black">Integration Architecture Blueprint</div>
                    <div className="text-xs font-thin text-gray-600">System connectivity design</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="text-sm font-thin text-black">Data Flow Diagrams</div>
                    <div className="text-xs font-thin text-gray-600">Information movement mapping</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="text-sm font-thin text-black">Risk Assessment Report</div>
                    <div className="text-xs font-thin text-gray-600">Security and operational risks</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="lg:order-2">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mr-4">
                    <span className="text-lg font-thin">2</span>
                  </div>
                  <h3 className="text-2xl font-thin text-black">Architecture Design</h3>
                </div>
                <p className="text-base font-thin text-gray-600 mb-4">
                  Development of detailed integration architecture that addresses technical requirements, 
                  performance objectives, and scalability needs.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    <span className="text-sm font-thin text-gray-600">API design and specification</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    <span className="text-sm font-thin text-gray-600">Data transformation mapping</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    <span className="text-sm font-thin text-gray-600">Performance optimization planning</span>
                  </div>
                </div>
              </div>
              <div className="lg:order-1 bg-white rounded-2xl p-8 shadow-sm">
                <h4 className="text-lg font-thin text-black mb-4">Design Components</h4>
                <div className="space-y-3">
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="text-sm font-thin text-black">Integration Patterns</div>
                    <div className="text-xs font-thin text-gray-600">Communication protocols and patterns</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="text-sm font-thin text-black">Security Framework</div>
                    <div className="text-xs font-thin text-gray-600">Authentication and encryption design</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="text-sm font-thin text-black">Monitoring Strategy</div>
                    <div className="text-xs font-thin text-gray-600">Performance and health monitoring</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mr-4">
                    <span className="text-lg font-thin">3</span>
                  </div>
                  <h3 className="text-2xl font-thin text-black">Implementation & Testing</h3>
                </div>
                <p className="text-base font-thin text-gray-600 mb-4">
                  Phased implementation with comprehensive testing to ensure reliability, performance, 
                  and seamless operation across all integrated systems.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    <span className="text-sm font-thin text-gray-600">Staged rollout with fallback plans</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    <span className="text-sm font-thin text-gray-600">Integration testing and validation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    <span className="text-sm font-thin text-gray-600">Performance monitoring and optimization</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h4 className="text-lg font-thin text-black mb-4">Testing Framework</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-thin text-gray-600">Unit Testing</span>
                    <span className="text-sm font-thin text-black">Component Level</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-thin text-gray-600">Integration Testing</span>
                    <span className="text-sm font-thin text-black">System Connectivity</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-thin text-gray-600">Performance Testing</span>
                    <span className="text-sm font-thin text-black">Load & Scalability</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-thin text-gray-600">Security Testing</span>
                    <span className="text-sm font-thin text-black">Vulnerability Assessment</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="relative w-full bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-thin text-black mb-6">Expected Benefits</h2>
            <p className="text-lg font-thin text-gray-600 max-w-3xl mx-auto">
              Successful system integration is designed to deliver improvements in operational 
              efficiency and technological capability.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-thin text-black mb-2">Faster</div>
              <div className="text-base font-thin text-gray-600">Data Processing</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-thin text-black mb-2">High</div>
              <div className="text-base font-thin text-gray-600">System Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-thin text-black mb-2">Lower</div>
              <div className="text-base font-thin text-gray-600">Operational Costs</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-thin text-black mb-2">Better</div>
              <div className="text-base font-thin text-gray-600">Data Accuracy</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full bg-black py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-5xl font-thin text-white mb-6">Integrate AI Seamlessly</h2>
          <p className="text-lg font-thin text-white/80 mb-8 max-w-3xl mx-auto">
            Let's connect your AI initiatives with existing systems to create a unified, 
            efficient technology ecosystem.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-black px-8 py-4 rounded-full text-lg font-thin hover:bg-gray-100 transition-colors">
              Plan Your Integration
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-full text-lg font-thin hover:bg-white hover:text-black transition-colors">
              View Integration Examples
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SystemIntegrationPage;
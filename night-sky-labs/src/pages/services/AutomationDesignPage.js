import React from 'react';
import { LuSettings as Settings, LuBot as Bot, LuPhone as Phone } from 'react-icons/lu';
import Navigation from '../../components/shared/Navigation';
import Footer from '../../components/shared/Footer';

const AutomationDesignPage = () => {
  return (
    <div className="relative w-full bg-white overflow-hidden">
      <Navigation currentPage="services" />

      {/* Hero Section */}
      <section className="relative w-full bg-white pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h1 className="text-4xl md:text-6xl font-thin text-black mb-6">Automation Design</h1>
          <div className="w-24 h-0.5 bg-black mx-auto mb-8"></div>
          <p className="text-lg md:text-xl font-thin text-gray-600 max-w-4xl mx-auto">
            Intelligent workflow optimization that transforms manual processes into efficient, AI-powered automation systems.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="relative w-full bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-thin text-black mb-8">Workflow Intelligence</h2>
              <div className="space-y-6">
                <p className="text-lg font-thin text-gray-600">
                  Our Automation Design service transforms how your organization operates by identifying 
                  repetitive tasks, optimizing workflows, and implementing intelligent automation that 
                  enhances productivity while reducing human error.
                </p>
                <p className="text-lg font-thin text-gray-600">
                  We design automation systems that learn from patterns, adapt to changing conditions, 
                  and integrate seamlessly with your existing processes to deliver measurable efficiency gains.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-thin text-black mb-6">Automation Focus Areas</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                  <span className="text-base font-thin text-gray-600">Process mapping and workflow analysis</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                  <span className="text-base font-thin text-gray-600">Intelligent decision-making automation</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                  <span className="text-base font-thin text-gray-600">Data processing and transformation</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                  <span className="text-base font-thin text-gray-600">Communication and notification systems</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                  <span className="text-base font-thin text-gray-600">Quality assurance and monitoring</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Automation Types */}
      <section className="relative w-full bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-thin text-black mb-6">Automation Solutions</h2>
            <p className="text-lg font-thin text-gray-600 max-w-3xl mx-auto">
              Comprehensive automation capabilities across different business functions and operational areas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="w-16 h-16 bg-black rounded-2xl mb-6 flex items-center justify-center">
                <div className="w-6 h-6 border-2 border-white rounded flex items-end justify-between">
                  <div className="w-1 h-3 bg-white"></div>
                  <div className="w-1 h-5 bg-white"></div>
                  <div className="w-1 h-4 bg-white"></div>
                </div>
              </div>
              <h3 className="text-xl font-thin text-black mb-4">Data Automation</h3>
              <p className="text-base font-thin text-gray-600 mb-4">
                Automated data collection, processing, validation, and reporting systems that ensure 
                accuracy and timeliness.
              </p>
              <div className="space-y-2">
                <div className="text-sm font-thin text-gray-600">• ETL pipeline automation</div>
                <div className="text-sm font-thin text-gray-600">• Real-time data validation</div>
                <div className="text-sm font-thin text-gray-600">• Automated report generation</div>
                <div className="text-sm font-thin text-gray-600">• Data quality monitoring</div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="w-16 h-16 bg-black rounded-2xl mb-6 flex items-center justify-center">
                <Settings size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-thin text-black mb-4">Process Automation</h3>
              <p className="text-base font-thin text-gray-600 mb-4">
                End-to-end business process automation that reduces manual intervention 
                and improves consistency.
              </p>
              <div className="space-y-2">
                <div className="text-sm font-thin text-gray-600">• Workflow orchestration</div>
                <div className="text-sm font-thin text-gray-600">• Approval processes</div>
                <div className="text-sm font-thin text-gray-600">• Document processing</div>
                <div className="text-sm font-thin text-gray-600">• Task routing and assignment</div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="w-16 h-16 bg-black rounded-2xl mb-6 flex items-center justify-center">
                <Bot size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-thin text-black mb-4">Intelligent Automation</h3>
              <p className="text-base font-thin text-gray-600 mb-4">
                AI-powered automation that can learn, adapt, and make decisions based 
                on changing conditions and patterns.
              </p>
              <div className="space-y-2">
                <div className="text-sm font-thin text-gray-600">• Machine learning integration</div>
                <div className="text-sm font-thin text-gray-600">• Predictive automation</div>
                <div className="text-sm font-thin text-gray-600">• Adaptive workflows</div>
                <div className="text-sm font-thin text-gray-600">• Exception handling</div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="w-16 h-16 bg-black rounded-2xl mb-6 flex items-center justify-center">
                <Phone size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-thin text-black mb-4">Communication Automation</h3>
              <p className="text-base font-thin text-gray-600 mb-4">
                Automated communication systems that ensure timely, relevant, and 
                personalized messaging across channels.
              </p>
              <div className="space-y-2">
                <div className="text-sm font-thin text-gray-600">• Email automation</div>
                <div className="text-sm font-thin text-gray-600">• Notification systems</div>
                <div className="text-sm font-thin text-gray-600">• Chatbot integration</div>
                <div className="text-sm font-thin text-gray-600">• Multi-channel messaging</div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="w-16 h-16 bg-black rounded-2xl mb-6 flex items-center justify-center">
                <div className="w-6 h-6 border-2 border-white rounded flex items-center justify-center">
                  <div className="w-4 h-3 border border-white rounded"></div>
                </div>
              </div>
              <h3 className="text-xl font-thin text-black mb-4">Business Automation</h3>
              <p className="text-base font-thin text-gray-600 mb-4">
                Automated business functions including finance, HR, sales, and customer 
                service operations.
              </p>
              <div className="space-y-2">
                <div className="text-sm font-thin text-gray-600">• Invoice processing</div>
                <div className="text-sm font-thin text-gray-600">• Employee onboarding</div>
                <div className="text-sm font-thin text-gray-600">• Lead qualification</div>
                <div className="text-sm font-thin text-gray-600">• Customer support routing</div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="w-16 h-16 bg-black rounded-2xl mb-6 flex items-center justify-center">
                <div className="w-6 h-6 border-2 border-white rounded flex items-center justify-center">
                  <div className="w-4 h-1 bg-white rounded transform rotate-45"></div>
                </div>
              </div>
              <h3 className="text-xl font-thin text-black mb-4">Infrastructure Automation</h3>
              <p className="text-base font-thin text-gray-600 mb-4">
                Automated IT operations including deployment, monitoring, scaling, 
                and maintenance tasks.
              </p>
              <div className="space-y-2">
                <div className="text-sm font-thin text-gray-600">• CI/CD pipelines</div>
                <div className="text-sm font-thin text-gray-600">• Auto-scaling systems</div>
                <div className="text-sm font-thin text-gray-600">• Backup automation</div>
                <div className="text-sm font-thin text-gray-600">• Security monitoring</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="relative w-full bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-thin text-black mb-6">Design Process</h2>
            <p className="text-lg font-thin text-gray-600 max-w-3xl mx-auto">
              Our systematic approach ensures automation solutions are efficient, reliable, 
              and perfectly aligned with your operational needs.
            </p>
          </div>

          <div className="space-y-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mr-4">
                    <span className="text-lg font-thin">1</span>
                  </div>
                  <h3 className="text-2xl font-thin text-black">Process Discovery</h3>
                </div>
                <p className="text-base font-thin text-gray-600 mb-4">
                  Comprehensive analysis of existing workflows, identifying bottlenecks, 
                  inefficiencies, and automation opportunities through observation and stakeholder interviews.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    <span className="text-sm font-thin text-gray-600">Current state mapping</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    <span className="text-sm font-thin text-gray-600">Pain point identification</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    <span className="text-sm font-thin text-gray-600">Volume and frequency analysis</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h4 className="text-lg font-thin text-black mb-4">Discovery Deliverables</h4>
                <div className="space-y-3">
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="text-sm font-thin text-black">Process Flow Diagrams</div>
                    <div className="text-xs font-thin text-gray-600">Visual workflow documentation</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="text-sm font-thin text-black">Automation Opportunity Matrix</div>
                    <div className="text-xs font-thin text-gray-600">Prioritized improvement areas</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="text-sm font-thin text-black">Impact Assessment Report</div>
                    <div className="text-xs font-thin text-gray-600">ROI and effort estimation</div>
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
                  <h3 className="text-2xl font-thin text-black">Solution Architecture</h3>
                </div>
                <p className="text-base font-thin text-gray-600 mb-4">
                  Design of intelligent automation systems that integrate with existing infrastructure 
                  while providing scalability and maintainability for future growth.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    <span className="text-sm font-thin text-gray-600">Technology selection and integration</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    <span className="text-sm font-thin text-gray-600">Data flow and transformation design</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    <span className="text-sm font-thin text-gray-600">Error handling and recovery planning</span>
                  </div>
                </div>
              </div>
              <div className="lg:order-1 bg-white rounded-2xl p-8 shadow-sm">
                <h4 className="text-lg font-thin text-black mb-4">Architecture Components</h4>
                <div className="space-y-3">
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="text-sm font-thin text-black">Automation Engine</div>
                    <div className="text-xs font-thin text-gray-600">Core processing and orchestration</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="text-sm font-thin text-black">Integration Layer</div>
                    <div className="text-xs font-thin text-gray-600">System connectivity and APIs</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="text-sm font-thin text-black">Monitoring Dashboard</div>
                    <div className="text-xs font-thin text-gray-600">Performance and status tracking</div>
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
                  Phased deployment with comprehensive testing to ensure reliability, performance, 
                  and seamless integration with existing operations.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    <span className="text-sm font-thin text-gray-600">Pilot deployment and validation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    <span className="text-sm font-thin text-gray-600">Performance optimization</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                    <span className="text-sm font-thin text-gray-600">User training and documentation</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h4 className="text-lg font-thin text-black mb-4">Testing Framework</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-thin text-gray-600">Unit Testing</span>
                    <span className="text-sm font-thin text-black">100% Coverage</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-thin text-gray-600">Integration Testing</span>
                    <span className="text-sm font-thin text-black">End-to-End Validation</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-thin text-gray-600">Performance Testing</span>
                    <span className="text-sm font-thin text-black">Load & Stress Testing</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-thin text-gray-600">User Acceptance</span>
                    <span className="text-sm font-thin text-black">Business Validation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expected Benefits */}
      <section className="relative w-full bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-thin text-black mb-6">Expected Benefits</h2>
            <p className="text-lg font-thin text-gray-600 max-w-3xl mx-auto">
              Our automation design approach is built to deliver significant improvements 
              in efficiency, accuracy, and employee satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-lg font-thin text-black mb-2">Significant</div>
              <div className="text-base font-thin text-gray-600">Time Savings</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-thin text-black mb-2">Reduced</div>
              <div className="text-base font-thin text-gray-600">Human Error</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-thin text-black mb-2">Lower</div>
              <div className="text-base font-thin text-gray-600">Operational Costs</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-thin text-black mb-2">Improved</div>
              <div className="text-base font-thin text-gray-600">User Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full bg-black py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-5xl font-thin text-white mb-6">Transform Your Workflows</h2>
          <p className="text-lg font-thin text-white/80 mb-8 max-w-3xl mx-auto">
            Let's design intelligent automation that enhances productivity and frees your team 
            to focus on high-value activities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-black px-8 py-4 rounded-full text-lg font-thin hover:bg-gray-100 transition-colors">
              Start Automation Assessment
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-full text-lg font-thin hover:bg-white hover:text-black transition-colors">
              View Automation Examples
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AutomationDesignPage;
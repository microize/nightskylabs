import React from 'react';
import Navigation from '../components/common/layout/Navigation';
import Footer from '../components/common/layout/Footer';

const ServicesPage = () => {
  return (
    <div className="relative w-full bg-white overflow-hidden">
      <Navigation currentPage="services" />

      {/* Hero Section */}
      <section className="relative w-full bg-white pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h1 className="text-4xl md:text-6xl font-thin text-black mb-6">AI Services</h1>
          <div className="w-24 h-0.5 bg-black mx-auto mb-8"></div>
          <p className="text-lg md:text-xl font-thin text-gray-600 max-w-4xl mx-auto">
            Comprehensive AI consulting and implementation services to transform your business operations.
          </p>
        </div>
      </section>

      {/* Strategic Design Solutions */}
      <section className="relative w-full bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-thin text-black mb-6">Strategic Design Solutions</h2>
            <p className="text-lg font-thin text-gray-600 max-w-3xl mx-auto">
              We help organizations develop comprehensive AI strategies and design intelligent systems 
              that drive meaningful business transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-thin text-black mb-4">AI Strategy</h3>
              <p className="text-base font-thin text-gray-600 mb-6">
                Comprehensive AI adoption roadmaps tailored to your industry and organizational goals. 
                We analyze your current capabilities and design a strategic path forward.
              </p>
              <ul className="space-y-2 text-sm font-thin text-gray-600">
                <li>• Technology assessment and gap analysis</li>
                <li>• ROI modeling and business case development</li>
                <li>• Implementation timeline and resource planning</li>
                <li>• Risk assessment and mitigation strategies</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-thin text-black mb-4">Automation Design</h3>
              <p className="text-base font-thin text-gray-600 mb-6">
                Intelligent workflow optimization that identifies opportunities for automation 
                and designs systems that enhance human productivity.
              </p>
              <ul className="space-y-2 text-sm font-thin text-gray-600">
                <li>• Process mapping and automation identification</li>
                <li>• Workflow redesign and optimization</li>
                <li>• Integration planning with existing systems</li>
                <li>• Change management and training programs</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-thin text-black mb-4">Behavioral Analysis</h3>
              <p className="text-base font-thin text-gray-600 mb-6">
                Human-centered AI system design that understands user behavior and creates 
                intuitive interfaces that drive adoption and success.
              </p>
              <ul className="space-y-2 text-sm font-thin text-gray-600">
                <li>• User experience research and design</li>
                <li>• Behavioral pattern analysis</li>
                <li>• Interface design for AI systems</li>
                <li>• Adoption strategy and user training</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-thin text-black mb-4">System Integration</h3>
              <p className="text-base font-thin text-gray-600 mb-6">
                Seamless AI implementation that connects with your existing technology stack 
                and maintains operational continuity throughout the transition.
              </p>
              <ul className="space-y-2 text-sm font-thin text-gray-600">
                <li>• Enterprise architecture assessment</li>
                <li>• API design and integration planning</li>
                <li>• Data pipeline design and optimization</li>
                <li>• Security and compliance implementation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Services */}
      <section className="relative w-full bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-thin text-black mb-6">Implementation Services</h2>
            <p className="text-lg font-thin text-gray-600 max-w-3xl mx-auto">
              End-to-end implementation services that bring your AI strategy to life with 
              custom solutions and enterprise-grade deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-thin text-black mb-4">Custom Development</h3>
              <p className="text-base font-thin text-gray-600 mb-6">
                Tailored AI solutions designed specifically for your business needs, 
                built with cutting-edge technology and industry best practices.
              </p>
              <ul className="space-y-2 text-sm font-thin text-gray-600">
                <li>• Machine learning model development</li>
                <li>• Natural language processing solutions</li>
                <li>• Computer vision applications</li>
                <li>• Predictive analytics platforms</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-thin text-black mb-4">Technical Integration</h3>
              <p className="text-base font-thin text-gray-600 mb-6">
                Enterprise system connectivity that ensures your AI solutions work 
                seamlessly with your existing technology infrastructure.
              </p>
              <ul className="space-y-2 text-sm font-thin text-gray-600">
                <li>• Legacy system modernization</li>
                <li>• Cloud migration and optimization</li>
                <li>• Real-time data processing</li>
                <li>• Microservices architecture</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-thin text-black mb-4">Deployment & Optimization</h3>
              <p className="text-base font-thin text-gray-600 mb-6">
                Production-ready AI systems with continuous monitoring, optimization, 
                and scaling capabilities for enterprise environments.
              </p>
              <ul className="space-y-2 text-sm font-thin text-gray-600">
                <li>• Production deployment and monitoring</li>
                <li>• Performance optimization</li>
                <li>• Scalability planning and implementation</li>
                <li>• Disaster recovery and backup systems</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-thin text-black mb-4">Performance Analysis</h3>
              <p className="text-base font-thin text-gray-600 mb-6">
                ROI measurement and optimization services that track the impact of your 
                AI investments and identify opportunities for continuous improvement.
              </p>
              <ul className="space-y-2 text-sm font-thin text-gray-600">
                <li>• KPI definition and tracking</li>
                <li>• ROI analysis and reporting</li>
                <li>• Performance benchmarking</li>
                <li>• Continuous improvement planning</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full bg-black py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-5xl font-thin text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-lg font-thin text-white/80 mb-8 max-w-3xl mx-auto">
            Let's discuss how our AI services can drive innovation and growth for your organization.
          </p>
          <button className="bg-white text-black px-8 py-4 rounded-full text-lg font-thin hover:bg-gray-100 transition-colors">
            Schedule a Consultation
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
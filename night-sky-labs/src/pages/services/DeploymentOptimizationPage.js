import React from 'react';
import Navigation from '../../components/shared/Navigation';
import Footer from '../../components/shared/Footer';

const DeploymentOptimizationPage = () => {
  return (
    <div className="relative w-full bg-white overflow-hidden">
      <Navigation currentPage="services" />

      {/* Hero Section */}
      <section className="relative w-full bg-white pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h1 className="text-4xl md:text-6xl font-thin text-black mb-6">Deployment & Optimization</h1>
          <div className="w-24 h-0.5 bg-black mx-auto mb-8"></div>
          <p className="text-lg md:text-xl font-thin text-gray-600 max-w-4xl mx-auto">
            Production-ready AI deployment, intelligent scaling, performance tuning, and comprehensive monitoring for enterprise-grade reliability.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="relative w-full bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-thin text-black mb-8">Production Excellence</h2>
              <div className="space-y-6">
                <p className="text-lg font-thin text-gray-600">
                  Our Deployment & Optimization service ensures your AI solutions perform flawlessly 
                  in production environments. We handle the complex transition from development to 
                  live operations with enterprise-grade reliability and scalability.
                </p>
                <p className="text-lg font-thin text-gray-600">
                  From automated deployment pipelines to intelligent performance monitoring, we create 
                  robust production environments that adapt to changing demands while maintaining 
                  optimal performance and cost efficiency.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-thin text-black mb-6">Deployment Services</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                  <span className="text-base font-thin text-gray-600">Automated CI/CD pipeline development</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                  <span className="text-base font-thin text-gray-600">Cloud-native scaling and load balancing</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                  <span className="text-base font-thin text-gray-600">Performance optimization and tuning</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                  <span className="text-base font-thin text-gray-600">Comprehensive monitoring and alerting</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                  <span className="text-base font-thin text-gray-600">Disaster recovery and backup systems</span>
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
            <h2 className="text-3xl md:text-5xl font-thin text-black mb-6">Deployment Process</h2>
            <p className="text-lg font-thin text-gray-600 max-w-3xl mx-auto">
              A comprehensive deployment methodology that ensures reliable, scalable, and 
              optimized AI systems in production environments with zero-downtime deployments.
            </p>
          </div>

          <div className="space-y-12">
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="w-full md:w-1/4">
                <div className="bg-black text-white rounded-2xl p-6 text-center">
                  <div className="text-3xl font-thin mb-2">01</div>
                  <div className="text-lg font-thin">Preparation</div>
                </div>
              </div>
              <div className="w-full md:w-3/4">
                <h3 className="text-2xl font-thin text-black mb-4">Environment Setup & Configuration</h3>
                <p className="text-base font-thin text-gray-600 mb-4">
                  Comprehensive preparation of production environments with optimized configurations, 
                  security protocols, and infrastructure provisioning tailored to your AI workloads.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="text-base font-thin text-black mb-2">Infrastructure Provisioning</h4>
                    <p className="text-sm font-thin text-gray-600">Cloud resources, networking, storage, and compute optimization</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="text-base font-thin text-black mb-2">Security Configuration</h4>
                    <p className="text-sm font-thin text-gray-600">Access controls, encryption, compliance, and vulnerability assessment</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="w-full md:w-1/4">
                <div className="bg-black text-white rounded-2xl p-6 text-center">
                  <div className="text-3xl font-thin mb-2">02</div>
                  <div className="text-lg font-thin">Deployment</div>
                </div>
              </div>
              <div className="w-full md:w-3/4">
                <h3 className="text-2xl font-thin text-black mb-4">Automated Release Management</h3>
                <p className="text-base font-thin text-gray-600 mb-4">
                  Seamless deployment processes with automated testing, staged rollouts, and 
                  immediate rollback capabilities to ensure consistent and reliable releases.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="text-base font-thin text-black mb-2">CI/CD Pipeline</h4>
                    <p className="text-sm font-thin text-gray-600">Automated testing, building, and deployment with quality gates</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="text-base font-thin text-black mb-2">Blue-Green Deployment</h4>
                    <p className="text-sm font-thin text-gray-600">Zero-downtime releases with instant rollback capabilities</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="w-full md:w-1/4">
                <div className="bg-black text-white rounded-2xl p-6 text-center">
                  <div className="text-3xl font-thin mb-2">03</div>
                  <div className="text-lg font-thin">Optimization</div>
                </div>
              </div>
              <div className="w-full md:w-3/4">
                <h3 className="text-2xl font-thin text-black mb-4">Performance Monitoring & Tuning</h3>
                <p className="text-base font-thin text-gray-600 mb-4">
                  Continuous performance optimization with real-time monitoring, intelligent scaling, 
                  and proactive issue resolution to maintain peak system performance.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="text-base font-thin text-black mb-2">Real-time Monitoring</h4>
                    <p className="text-sm font-thin text-gray-600">Comprehensive metrics, logging, and alerting across all system components</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="text-base font-thin text-black mb-2">Auto-scaling</h4>
                    <p className="text-sm font-thin text-gray-600">Intelligent resource allocation based on demand patterns and performance</p>
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
            <h2 className="text-3xl md:text-5xl font-thin text-black mb-6">Expected Benefits</h2>
            <p className="text-lg font-thin text-gray-600 max-w-3xl mx-auto">
              Professional deployment and optimization services are designed to deliver superior reliability, 
              performance, and cost efficiency for production AI systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
              <div className="text-4xl font-thin text-black mb-4">High</div>
              <h3 className="text-xl font-thin text-black mb-4">System Availability</h3>
              <p className="text-base font-thin text-gray-600">
                Enterprise-grade deployment practices are designed to ensure maximum uptime 
                and reliability for mission-critical AI applications.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
              <div className="text-4xl font-thin text-black mb-4">Better</div>
              <h3 className="text-xl font-thin text-black mb-4">Performance</h3>
              <p className="text-base font-thin text-gray-600">
                Advanced optimization techniques and monitoring can deliver 
                significant performance improvements over standard deployments.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
              <div className="text-4xl font-thin text-black mb-4">Lower</div>
              <h3 className="text-xl font-thin text-black mb-4">Costs</h3>
              <p className="text-base font-thin text-gray-600">
                Intelligent scaling and resource optimization can help reduce 
                infrastructure costs while maintaining optimal performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="relative w-full bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-thin text-black mb-6">Our Approach</h2>
            <p className="text-lg font-thin text-gray-600 max-w-3xl mx-auto">
              Our systematic deployment methodology focuses on building scalable, reliable systems 
              that can handle high-performance requirements for enterprise applications.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-thin text-black mb-6">The Challenge</h3>
                <p className="text-base font-thin text-gray-600 mb-6">
                  Enterprise applications require deployment systems capable of handling high transaction 
                  volumes in real-time, with strict requirements for fast response times and high availability.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 border border-black rounded-full"></div>
                    <span className="text-sm font-thin text-gray-600">Extreme performance requirements for real-time processing</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 border border-black rounded-full"></div>
                    <span className="text-sm font-thin text-gray-600">Zero tolerance for downtime in financial transactions</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 border border-black rounded-full"></div>
                    <span className="text-sm font-thin text-gray-600">Complex scaling patterns with traffic spikes</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-thin text-black mb-6">The Solution</h3>
                <p className="text-base font-thin text-gray-600 mb-6">
                  We implement multi-region, containerized deployments with intelligent 
                  load balancing, predictive scaling, and comprehensive monitoring that 
                  can automatically adapt to changing demand patterns.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 border border-black rounded-full"></div>
                    <span className="text-sm font-thin text-gray-600">Kubernetes orchestration with predictive auto-scaling</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 border border-black rounded-full"></div>
                    <span className="text-sm font-thin text-gray-600">Multi-region deployment with intelligent failover</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 border border-black rounded-full"></div>
                    <span className="text-sm font-thin text-gray-600">Real-time performance optimization and alerting</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 pt-12 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-thin text-black mb-2">Fast</div>
                <div className="text-base font-thin text-gray-600">Response Times</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-thin text-black mb-2">High</div>
                <div className="text-base font-thin text-gray-600">System Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-thin text-black mb-2">Scalable</div>
                <div className="text-base font-thin text-gray-600">Transaction Handling</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full bg-black py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-5xl font-thin text-white mb-6">Ready for Production Deployment?</h2>
          <p className="text-lg font-thin text-white/80 mb-8 max-w-3xl mx-auto">
            Let's deploy your AI solutions with enterprise-grade reliability, performance, 
            and scalability that meets your most demanding requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-black px-8 py-4 rounded-full text-lg font-thin hover:bg-gray-100 transition-colors">
              Plan Deployment
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-full text-lg font-thin hover:bg-white hover:text-black transition-colors">
              Performance Audit
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DeploymentOptimizationPage;
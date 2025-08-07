import React from 'react';
import Navigation from '../../components/common/layout/Navigation';
import Footer from '../../components/common/layout/Footer';

const CustomDevelopmentPage = () => {
  return (
    <div className="relative w-full bg-white overflow-hidden">
      <Navigation currentPage="services" />

      {/* Hero Section */}
      <section className="relative w-full bg-white pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h1 className="text-4xl md:text-6xl font-thin text-black mb-6">Custom Development</h1>
          <div className="w-24 h-0.5 bg-black mx-auto mb-8"></div>
          <p className="text-lg md:text-xl font-thin text-gray-600 max-w-4xl mx-auto">
            Tailored AI solutions, machine learning models, and intelligent algorithms designed specifically for your unique business challenges.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="relative w-full bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-thin text-black mb-8">Bespoke AI Solutions</h2>
              <div className="space-y-6">
                <p className="text-lg font-thin text-gray-600">
                  Our Custom Development service creates intelligent solutions tailored to your specific 
                  business requirements. We design and build AI systems that seamlessly integrate with 
                  your existing infrastructure while addressing unique operational challenges.
                </p>
                <p className="text-lg font-thin text-gray-600">
                  From advanced machine learning models to sophisticated algorithms, we deliver 
                  production-ready solutions that scale with your business and adapt to evolving needs.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-thin text-black mb-6">Development Capabilities</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                  <span className="text-base font-thin text-gray-600">Custom machine learning model development</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                  <span className="text-base font-thin text-gray-600">Intelligent algorithm design and optimization</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                  <span className="text-base font-thin text-gray-600">Computer vision and image processing systems</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                  <span className="text-base font-thin text-gray-600">Natural language processing applications</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                  <span className="text-base font-thin text-gray-600">Predictive analytics and forecasting models</span>
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
            <h2 className="text-3xl md:text-5xl font-thin text-black mb-6">Development Process</h2>
            <p className="text-lg font-thin text-gray-600 max-w-3xl mx-auto">
              A rigorous development methodology that transforms complex requirements into 
              scalable, intelligent solutions through iterative design and validation.
            </p>
          </div>

          <div className="space-y-12">
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="w-full md:w-1/4">
                <div className="bg-black text-white rounded-2xl p-6 text-center">
                  <div className="text-3xl font-thin mb-2">01</div>
                  <div className="text-lg font-thin">Analysis</div>
                </div>
              </div>
              <div className="w-full md:w-3/4">
                <h3 className="text-2xl font-thin text-black mb-4">Requirements & Data Assessment</h3>
                <p className="text-base font-thin text-gray-600 mb-4">
                  Deep dive into your business requirements, data landscape, and technical constraints 
                  to define the optimal AI solution architecture and development approach.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="text-base font-thin text-black mb-2">Requirement Gathering</h4>
                    <p className="text-sm font-thin text-gray-600">Functional specifications, performance criteria, and success metrics definition</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="text-base font-thin text-black mb-2">Data Evaluation</h4>
                    <p className="text-sm font-thin text-gray-600">Quality assessment, feature engineering potential, and training dataset preparation</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="w-full md:w-1/4">
                <div className="bg-black text-white rounded-2xl p-6 text-center">
                  <div className="text-3xl font-thin mb-2">02</div>
                  <div className="text-lg font-thin">Design</div>
                </div>
              </div>
              <div className="w-full md:w-3/4">
                <h3 className="text-2xl font-thin text-black mb-4">Architecture & Model Design</h3>
                <p className="text-base font-thin text-gray-600 mb-4">
                  Create comprehensive system architecture and select optimal algorithms, frameworks, 
                  and technologies that align with your performance and scalability requirements.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="text-base font-thin text-black mb-2">System Architecture</h4>
                    <p className="text-sm font-thin text-gray-600">Scalable design patterns, infrastructure planning, and integration blueprints</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="text-base font-thin text-black mb-2">Algorithm Selection</h4>
                    <p className="text-sm font-thin text-gray-600">Model comparison, performance benchmarking, and optimization strategy</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="w-full md:w-1/4">
                <div className="bg-black text-white rounded-2xl p-6 text-center">
                  <div className="text-3xl font-thin mb-2">03</div>
                  <div className="text-lg font-thin">Development</div>
                </div>
              </div>
              <div className="w-full md:w-3/4">
                <h3 className="text-2xl font-thin text-black mb-4">Implementation & Testing</h3>
                <p className="text-base font-thin text-gray-600 mb-4">
                  Agile development process with continuous testing, validation, and refinement 
                  to ensure optimal performance and reliability before production deployment.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="text-base font-thin text-black mb-2">Iterative Development</h4>
                    <p className="text-sm font-thin text-gray-600">Agile methodology, continuous integration, and incremental feature delivery</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="text-base font-thin text-black mb-2">Quality Assurance</h4>
                    <p className="text-sm font-thin text-gray-600">Comprehensive testing, performance validation, and security assessment</p>
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
              Custom AI solutions are designed to deliver superior performance and ROI compared to generic 
              off-the-shelf alternatives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
              <div className="text-4xl font-thin text-black mb-4">Higher</div>
              <h3 className="text-xl font-thin text-black mb-4">Accuracy Potential</h3>
              <p className="text-base font-thin text-gray-600">
                Custom models trained on your specific data can achieve 
                higher accuracy than generic solutions.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
              <div className="text-4xl font-thin text-black mb-4">Faster</div>
              <h3 className="text-xl font-thin text-black mb-4">Processing</h3>
              <p className="text-base font-thin text-gray-600">
                Optimized algorithms and architecture can deliver superior performance 
                for your specific use cases and data patterns.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
              <div className="text-4xl font-thin text-black mb-4">Perfect</div>
              <h3 className="text-xl font-thin text-black mb-4">Business Alignment</h3>
              <p className="text-base font-thin text-gray-600">
                Solutions designed specifically for your workflows and requirements 
                ensure better integration and value alignment.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="relative w-full bg-black py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-5xl font-thin text-white mb-6">Ready for Custom AI Development?</h2>
          <p className="text-lg font-thin text-white/80 mb-8 max-w-3xl mx-auto">
            Let's build intelligent solutions tailored specifically to your business challenges 
            and technical requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-black px-8 py-4 rounded-full text-lg font-thin hover:bg-gray-100 transition-colors">
              Start Your Project
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-full text-lg font-thin hover:bg-white hover:text-black transition-colors">
              View Portfolio
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CustomDevelopmentPage;
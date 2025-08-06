import React from 'react';
import Navigation from '../../components/shared/Navigation';
import Footer from '../../components/shared/Footer';

const AIStrategyPage = () => {
  return (
    <div className="relative w-full bg-white overflow-hidden">
      <Navigation currentPage="services" />

      {/* Hero Section */}
      <section className="relative w-full bg-white pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h1 className="text-4xl md:text-6xl font-thin text-black mb-6">AI Strategy</h1>
          <div className="w-24 h-0.5 bg-black mx-auto mb-8"></div>
          <p className="text-lg md:text-xl font-thin text-gray-600 max-w-4xl mx-auto">
            Comprehensive AI adoption roadmaps that align with your business objectives and drive measurable transformation.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="relative w-full bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-thin text-black mb-8">Strategic AI Transformation</h2>
              <div className="space-y-6">
                <p className="text-lg font-thin text-gray-600">
                  Our AI Strategy service helps organizations navigate the complex landscape of artificial intelligence 
                  adoption with confidence and clarity. We develop comprehensive roadmaps that align AI initiatives 
                  with business objectives.
                </p>
                <p className="text-lg font-thin text-gray-600">
                  From initial assessment to full implementation planning, we ensure your AI journey delivers 
                  measurable value while minimizing risk and maximizing return on investment.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-thin text-black mb-6">Strategy Components</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                  <span className="text-base font-thin text-gray-600">Current state assessment and capability mapping</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                  <span className="text-base font-thin text-gray-600">AI opportunity identification and prioritization</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                  <span className="text-base font-thin text-gray-600">Technology roadmap and architecture planning</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                  <span className="text-base font-thin text-gray-600">Implementation timeline and resource allocation</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                  <span className="text-base font-thin text-gray-600">ROI modeling and success metrics definition</span>
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
            <h2 className="text-3xl md:text-5xl font-thin text-black mb-6">Our Methodology</h2>
            <p className="text-lg font-thin text-gray-600 max-w-3xl mx-auto">
              A proven framework that takes organizations from AI uncertainty to strategic clarity 
              through structured analysis and planning.
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
                <h3 className="text-2xl font-thin text-black mb-4">Business & Technology Assessment</h3>
                <p className="text-base font-thin text-gray-600 mb-4">
                  Comprehensive evaluation of your current technology landscape, business processes, 
                  data assets, and organizational readiness for AI adoption.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="text-base font-thin text-black mb-2">Business Analysis</h4>
                    <p className="text-sm font-thin text-gray-600">Process mapping, stakeholder interviews, and strategic objective alignment</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="text-base font-thin text-black mb-2">Technical Assessment</h4>
                    <p className="text-sm font-thin text-gray-600">Infrastructure evaluation, data quality analysis, and system integration review</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="w-full md:w-1/4">
                <div className="bg-black text-white rounded-2xl p-6 text-center">
                  <div className="text-3xl font-thin mb-2">02</div>
                  <div className="text-lg font-thin">Strategy</div>
                </div>
              </div>
              <div className="w-full md:w-3/4">
                <h3 className="text-2xl font-thin text-black mb-4">AI Opportunity Mapping</h3>
                <p className="text-base font-thin text-gray-600 mb-4">
                  Identification and prioritization of AI use cases based on business impact, 
                  technical feasibility, and strategic alignment with organizational goals.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="text-base font-thin text-black mb-2">Use Case Identification</h4>
                    <p className="text-sm font-thin text-gray-600">Market research, competitive analysis, and innovation opportunity mapping</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="text-base font-thin text-black mb-2">Impact Prioritization</h4>
                    <p className="text-sm font-thin text-gray-600">ROI modeling, risk assessment, and implementation complexity evaluation</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="w-full md:w-1/4">
                <div className="bg-black text-white rounded-2xl p-6 text-center">
                  <div className="text-3xl font-thin mb-2">03</div>
                  <div className="text-lg font-thin">Planning</div>
                </div>
              </div>
              <div className="w-full md:w-3/4">
                <h3 className="text-2xl font-thin text-black mb-4">Implementation Roadmap</h3>
                <p className="text-base font-thin text-gray-600 mb-4">
                  Detailed implementation plan with timelines, resource requirements, technology recommendations, 
                  and success metrics for each phase of your AI journey.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="text-base font-thin text-black mb-2">Technology Blueprint</h4>
                    <p className="text-sm font-thin text-gray-600">Architecture design, vendor evaluation, and integration planning</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="text-base font-thin text-black mb-2">Execution Plan</h4>
                    <p className="text-sm font-thin text-gray-600">Timeline, milestones, resource allocation, and change management strategy</p>
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
            <h2 className="text-3xl md:text-5xl font-thin text-black mb-6">Strategic Advantages</h2>
            <p className="text-lg font-thin text-gray-600 max-w-3xl mx-auto">
              Organizations that invest in comprehensive AI strategy see significantly better outcomes 
              from their AI initiatives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
              <div className="text-4xl font-thin text-black mb-4">3x</div>
              <h3 className="text-xl font-thin text-black mb-4">Faster Implementation</h3>
              <p className="text-base font-thin text-gray-600">
                Clear roadmaps and pre-validated approaches accelerate deployment timelines 
                and reduce implementation risks.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
              <div className="text-4xl font-thin text-black mb-4">5x</div>
              <h3 className="text-xl font-thin text-black mb-4">Higher ROI</h3>
              <p className="text-base font-thin text-gray-600">
                Strategic prioritization ensures resources are invested in high-impact 
                AI applications with measurable business value.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
              <div className="text-4xl font-thin text-black mb-4">80%</div>
              <h3 className="text-xl font-thin text-black mb-4">Risk Reduction</h3>
              <p className="text-base font-thin text-gray-600">
                Comprehensive planning and risk assessment prevent costly mistakes 
                and ensure successful AI adoption.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="relative w-full bg-black py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-5xl font-thin text-white mb-6">Ready to Develop Your AI Strategy?</h2>
          <p className="text-lg font-thin text-white/80 mb-8 max-w-3xl mx-auto">
            Let's create a comprehensive roadmap that aligns AI initiatives with your business objectives 
            and delivers measurable value.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-black px-8 py-4 rounded-full text-lg font-thin hover:bg-gray-100 transition-colors">
              Schedule Strategy Session
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-full text-lg font-thin hover:bg-white hover:text-black transition-colors">
              Download Strategy Guide
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIStrategyPage;
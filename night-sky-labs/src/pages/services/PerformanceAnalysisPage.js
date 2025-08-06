import React from 'react';
import Navigation from '../../components/shared/Navigation';
import Footer from '../../components/shared/Footer';

const PerformanceAnalysisPage = () => {
  return (
    <div className="relative w-full bg-white overflow-hidden">
      <Navigation currentPage="services" />

      {/* Hero Section */}
      <section className="relative w-full bg-white pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h1 className="text-4xl md:text-6xl font-thin text-black mb-6">Performance Analysis</h1>
          <div className="w-24 h-0.5 bg-black mx-auto mb-8"></div>
          <p className="text-lg md:text-xl font-thin text-gray-600 max-w-4xl mx-auto">
            Comprehensive ROI measurement, KPI tracking, and intelligent optimization recommendations that maximize the business value of your AI investments.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="relative w-full bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-thin text-black mb-8">Performance Insights</h2>
              <div className="space-y-6">
                <p className="text-lg font-thin text-gray-600">
                  Our Performance Analysis service provides deep insights into the business impact 
                  and operational effectiveness of your AI initiatives. We measure what matters most 
                  and identify opportunities for continuous improvement and optimization.
                </p>
                <p className="text-lg font-thin text-gray-600">
                  Through comprehensive data analysis and intelligent reporting, we help you understand 
                  the true value of your AI investments and make data-driven decisions for future 
                  enhancements and strategic direction.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-thin text-black mb-6">Analysis Capabilities</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                  <span className="text-base font-thin text-gray-600">ROI measurement and financial impact analysis</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                  <span className="text-base font-thin text-gray-600">KPI tracking and performance benchmarking</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                  <span className="text-base font-thin text-gray-600">Operational efficiency and productivity metrics</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                  <span className="text-base font-thin text-gray-600">User adoption and satisfaction analysis</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                  <span className="text-base font-thin text-gray-600">Predictive optimization recommendations</span>
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
            <h2 className="text-3xl md:text-5xl font-thin text-black mb-6">Analysis Framework</h2>
            <p className="text-lg font-thin text-gray-600 max-w-3xl mx-auto">
              A systematic approach to performance measurement that transforms raw data into 
              actionable insights and strategic recommendations for continuous improvement.
            </p>
          </div>

          <div className="space-y-12">
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="w-full md:w-1/4">
                <div className="bg-black text-white rounded-2xl p-6 text-center">
                  <div className="text-3xl font-thin mb-2">01</div>
                  <div className="text-lg font-thin">Baseline</div>
                </div>
              </div>
              <div className="w-full md:w-3/4">
                <h3 className="text-2xl font-thin text-black mb-4">Performance Baseline Establishment</h3>
                <p className="text-base font-thin text-gray-600 mb-4">
                  Comprehensive measurement of current performance metrics across all relevant 
                  dimensions to establish clear baselines for future comparison and improvement tracking.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="text-base font-thin text-black mb-2">Metric Definition</h4>
                    <p className="text-sm font-thin text-gray-600">KPI identification, success criteria, and measurement methodology</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="text-base font-thin text-black mb-2">Data Collection</h4>
                    <p className="text-sm font-thin text-gray-600">Historical analysis, current state assessment, and benchmark establishment</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="w-full md:w-1/4">
                <div className="bg-black text-white rounded-2xl p-6 text-center">
                  <div className="text-3xl font-thin mb-2">02</div>
                  <div className="text-lg font-thin">Monitoring</div>
                </div>
              </div>
              <div className="w-full md:w-3/4">
                <h3 className="text-2xl font-thin text-black mb-4">Continuous Performance Tracking</h3>
                <p className="text-base font-thin text-gray-600 mb-4">
                  Real-time monitoring and analysis of key performance indicators with automated 
                  reporting and alert systems to identify trends and anomalies as they occur.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="text-base font-thin text-black mb-2">Real-time Dashboards</h4>
                    <p className="text-sm font-thin text-gray-600">Live performance visualization, trend analysis, and executive reporting</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="text-base font-thin text-black mb-2">Automated Alerting</h4>
                    <p className="text-sm font-thin text-gray-600">Threshold monitoring, anomaly detection, and proactive issue identification</p>
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
                <h3 className="text-2xl font-thin text-black mb-4">Intelligent Recommendations</h3>
                <p className="text-base font-thin text-gray-600 mb-4">
                  Advanced analytics and machine learning to identify optimization opportunities, 
                  predict future performance trends, and provide actionable recommendations for improvement.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="text-base font-thin text-black mb-2">Predictive Analysis</h4>
                    <p className="text-sm font-thin text-gray-600">Trend forecasting, capacity planning, and performance modeling</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="text-base font-thin text-black mb-2">Strategic Insights</h4>
                    <p className="text-sm font-thin text-gray-600">ROI optimization, resource allocation, and improvement prioritization</p>
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
              Comprehensive performance analysis is designed to drive improvements in AI ROI 
              and operational effectiveness through data-driven optimization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
              <div className="text-4xl font-thin text-black mb-4">Better</div>
              <h3 className="text-xl font-thin text-black mb-4">ROI Potential</h3>
              <p className="text-base font-thin text-gray-600">
                Data-driven optimization and performance tuning can help deliver 
                better returns on AI investments.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
              <div className="text-4xl font-thin text-black mb-4">Faster</div>
              <h3 className="text-xl font-thin text-black mb-4">Decision Making</h3>
              <p className="text-base font-thin text-gray-600">
                Real-time insights and automated reporting can accelerate 
                strategic decisions and operational adjustments.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
              <div className="text-4xl font-thin text-black mb-4">Better</div>
              <h3 className="text-xl font-thin text-black mb-4">Issue Prevention</h3>
              <p className="text-base font-thin text-gray-600">
                Predictive analysis and early warning systems can help prevent 
                performance degradation before it impacts operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="relative w-full bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-thin text-black mb-6">Our Methodology</h2>
            <p className="text-lg font-thin text-gray-600 max-w-3xl mx-auto">
              Our performance analysis approach helps organizations understand and optimize their AI systems 
              through systematic measurement and data-driven insights.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-thin text-black mb-6">The Challenge</h3>
                <p className="text-base font-thin text-gray-600 mb-6">
                  Organizations often deploy AI systems but struggle to measure their effectiveness. 
                  They need to understand ROI, identify optimization opportunities, and justify 
                  continued investment in AI technology.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 border border-black rounded-full"></div>
                    <span className="text-sm font-thin text-gray-600">Limited visibility into ROI and business impact</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 border border-black rounded-full"></div>
                    <span className="text-sm font-thin text-gray-600">Inconsistent performance across different locations</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 border border-black rounded-full"></div>
                    <span className="text-sm font-thin text-gray-600">No systematic approach to performance optimization</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-thin text-black mb-6">The Solution</h3>
                <p className="text-base font-thin text-gray-600 mb-6">
                  We implement comprehensive performance tracking systems, 
                  create predictive analytics for optimization, and establish 
                  automated reporting for continuous improvement.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 border border-black rounded-full"></div>
                    <span className="text-sm font-thin text-gray-600">Multi-dimensional KPI tracking and measurement frameworks</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 border border-black rounded-full"></div>
                    <span className="text-sm font-thin text-gray-600">Predictive analysis for operational optimization</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 border border-black rounded-full"></div>
                    <span className="text-sm font-thin text-gray-600">Automated insights and optimization recommendations</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 pt-12 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-thin text-black mb-2">Better</div>
                <div className="text-base font-thin text-gray-600">ROI Understanding</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-thin text-black mb-2">Reduced</div>
                <div className="text-base font-thin text-gray-600">Operational Waste</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-thin text-black mb-2">Improved</div>
                <div className="text-base font-thin text-gray-600">Efficiency</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full bg-black py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-5xl font-thin text-white mb-6">Ready to Optimize Your AI Performance?</h2>
          <p className="text-lg font-thin text-white/80 mb-8 max-w-3xl mx-auto">
            Let's measure, analyze, and optimize your AI investments to maximize ROI 
            and drive continuous improvement across your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-black px-8 py-4 rounded-full text-lg font-thin hover:bg-gray-100 transition-colors">
              Start Performance Analysis
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-full text-lg font-thin hover:bg-white hover:text-black transition-colors">
              ROI Assessment
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PerformanceAnalysisPage;
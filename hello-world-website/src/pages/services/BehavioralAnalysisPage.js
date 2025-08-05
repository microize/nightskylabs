import React from 'react';
import Navigation from '../../components/shared/Navigation';
import Footer from '../../components/shared/Footer';

const BehavioralAnalysisPage = () => {
  return (
    <div className="relative w-full bg-white overflow-hidden">
      <Navigation currentPage="services" />

      {/* Hero Section */}
      <section className="relative w-full bg-white pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h1 className="text-4xl md:text-6xl font-thin text-black mb-6">Behavioral Analysis</h1>
          <div className="w-24 h-0.5 bg-black mx-auto mb-8"></div>
          <p className="text-lg md:text-xl font-thin text-gray-600 max-w-4xl mx-auto">
            Human-centered AI system design that understands user behavior and creates intuitive interfaces for optimal adoption.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="relative w-full bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-thin text-black mb-8">Understanding Human Behavior</h2>
              <div className="space-y-6">
                <p className="text-lg font-thin text-gray-600">
                  Our Behavioral Analysis service combines data science with human psychology to design 
                  AI systems that truly understand and respond to user needs, preferences, and behavioral patterns.
                </p>
                <p className="text-lg font-thin text-gray-600">
                  We analyze how users interact with technology, identify pain points and opportunities, 
                  then design solutions that feel natural and intuitive while driving desired outcomes.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-thin text-black mb-6">Analysis Dimensions</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                  <span className="text-base font-thin text-gray-600">User journey mapping and interaction patterns</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                  <span className="text-base font-thin text-gray-600">Cognitive load assessment and optimization</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                  <span className="text-base font-thin text-gray-600">Behavioral segmentation and personalization</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                  <span className="text-base font-thin text-gray-600">Predictive modeling for user actions</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                  <span className="text-base font-thin text-gray-600">Interface design and usability testing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Analysis Methods */}
      <section className="relative w-full bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-thin text-black mb-6">Research Methods</h2>
            <p className="text-lg font-thin text-gray-600 max-w-3xl mx-auto">
              We employ diverse research methodologies to gain deep insights into user behavior 
              and inform AI system design decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="w-16 h-16 bg-black rounded-2xl mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">👥</span>
              </div>
              <h3 className="text-xl font-thin text-black mb-4">User Research</h3>
              <p className="text-base font-thin text-gray-600 mb-4">
                In-depth interviews, surveys, and ethnographic studies to understand user motivations, 
                goals, and pain points.
              </p>
              <div className="space-y-2">
                <div className="text-sm font-thin text-gray-600">• Stakeholder interviews</div>
                <div className="text-sm font-thin text-gray-600">• User persona development</div>
                <div className="text-sm font-thin text-gray-600">• Journey mapping</div>
                <div className="text-sm font-thin text-gray-600">• Contextual inquiry</div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="w-16 h-16 bg-black rounded-2xl mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-thin text-black mb-4">Data Analytics</h3>
              <p className="text-base font-thin text-gray-600 mb-4">
                Quantitative analysis of user behavior data to identify patterns, trends, 
                and optimization opportunities.
              </p>
              <div className="space-y-2">
                <div className="text-sm font-thin text-gray-600">• Click-stream analysis</div>
                <div className="text-sm font-thin text-gray-600">• Conversion funnel optimization</div>
                <div className="text-sm font-thin text-gray-600">• A/B testing and experimentation</div>
                <div className="text-sm font-thin text-gray-600">• Cohort analysis</div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="w-16 h-16 bg-black rounded-2xl mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">🧠</span>
              </div>
              <h3 className="text-xl font-thin text-black mb-4">Cognitive Assessment</h3>
              <p className="text-base font-thin text-gray-600 mb-4">
                Understanding mental models, decision-making processes, and cognitive load 
                to design intuitive interfaces.
              </p>
              <div className="space-y-2">
                <div className="text-sm font-thin text-gray-600">• Mental model mapping</div>
                <div className="text-sm font-thin text-gray-600">• Cognitive load testing</div>
                <div className="text-sm font-thin text-gray-600">• Information architecture</div>
                <div className="text-sm font-thin text-gray-600">• Task analysis</div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="w-16 h-16 bg-black rounded-2xl mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-thin text-black mb-4">Usability Testing</h3>
              <p className="text-base font-thin text-gray-600 mb-4">
                Systematic evaluation of interface designs and interactions to identify 
                usability issues and improvement opportunities.
              </p>
              <div className="space-y-2">
                <div className="text-sm font-thin text-gray-600">• Prototype testing</div>
                <div className="text-sm font-thin text-gray-600">• Task completion analysis</div>
                <div className="text-sm font-thin text-gray-600">• Eye tracking studies</div>
                <div className="text-sm font-thin text-gray-600">• Accessibility evaluation</div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="w-16 h-16 bg-black rounded-2xl mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">🔮</span>
              </div>
              <h3 className="text-xl font-thin text-black mb-4">Predictive Modeling</h3>
              <p className="text-base font-thin text-gray-600 mb-4">
                Machine learning models that predict user behavior and enable 
                proactive system responses and personalization.
              </p>
              <div className="space-y-2">
                <div className="text-sm font-thin text-gray-600">• Behavioral prediction models</div>
                <div className="text-sm font-thin text-gray-600">• Churn risk analysis</div>
                <div className="text-sm font-thin text-gray-600">• Recommendation systems</div>
                <div className="text-sm font-thin text-gray-600">• Intent prediction</div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="w-16 h-16 bg-black rounded-2xl mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">🔄</span>
              </div>
              <h3 className="text-xl font-thin text-black mb-4">Continuous Monitoring</h3>
              <p className="text-base font-thin text-gray-600 mb-4">
                Ongoing analysis of user behavior to track system performance and 
                identify emerging patterns and opportunities.
              </p>
              <div className="space-y-2">
                <div className="text-sm font-thin text-gray-600">• Real-time analytics</div>
                <div className="text-sm font-thin text-gray-600">• Performance dashboards</div>
                <div className="text-sm font-thin text-gray-600">• Anomaly detection</div>
                <div className="text-sm font-thin text-gray-600">• Feedback loop optimization</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Areas */}
      <section className="relative w-full bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-thin text-black mb-6">Application Areas</h2>
            <p className="text-lg font-thin text-gray-600 max-w-3xl mx-auto">
              Behavioral analysis enhances AI systems across diverse domains and use cases.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-thin text-black mb-6">Product Development</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-base font-thin text-black mb-2">User Experience Optimization</h4>
                  <p className="text-sm font-thin text-gray-600">
                    Design interfaces that adapt to user behavior patterns and preferences, 
                    improving satisfaction and task completion rates.
                  </p>
                </div>
                <div>
                  <h4 className="text-base font-thin text-black mb-2">Feature Prioritization</h4>
                  <p className="text-sm font-thin text-gray-600">
                    Data-driven insights into which features users value most and how they 
                    interact with different product capabilities.
                  </p>
                </div>
                <div>
                  <h4 className="text-base font-thin text-black mb-2">Personalization Engines</h4>
                  <p className="text-sm font-thin text-gray-600">
                    AI systems that learn individual user preferences and adapt content, 
                    recommendations, and interactions accordingly.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-thin text-black mb-6">Customer Experience</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-base font-thin text-black mb-2">Journey Optimization</h4>
                  <p className="text-sm font-thin text-gray-600">
                    Analyze customer touchpoints to identify friction points and optimize 
                    the end-to-end experience across all channels.
                  </p>
                </div>
                <div>
                  <h4 className="text-base font-thin text-black mb-2">Support Automation</h4>
                  <p className="text-sm font-thin text-gray-600">
                    Intelligent support systems that understand customer intent and emotional 
                    state to provide appropriate assistance.
                  </p>
                </div>
                <div>
                  <h4 className="text-base font-thin text-black mb-2">Retention Strategies</h4>
                  <p className="text-sm font-thin text-gray-600">
                    Predictive models that identify at-risk customers and trigger targeted 
                    interventions to improve retention.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-thin text-black mb-6">Workplace Optimization</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-base font-thin text-black mb-2">Employee Productivity</h4>
                  <p className="text-sm font-thin text-gray-600">
                    Analyze work patterns to identify productivity bottlenecks and design 
                    tools that support optimal performance.
                  </p>
                </div>
                <div>
                  <h4 className="text-base font-thin text-black mb-2">Collaboration Tools</h4>
                  <p className="text-sm font-thin text-gray-600">
                    Design AI-powered collaboration platforms that understand team dynamics 
                    and facilitate effective communication.
                  </p>
                </div>
                <div>
                  <h4 className="text-base font-thin text-black mb-2">Training Systems</h4>
                  <p className="text-sm font-thin text-gray-600">
                    Adaptive learning platforms that adjust to individual learning styles 
                    and pace for maximum effectiveness.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-thin text-black mb-6">Healthcare & Wellness</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-base font-thin text-black mb-2">Patient Engagement</h4>
                  <p className="text-sm font-thin text-gray-600">
                    Design healthcare interfaces that encourage adherence to treatment plans 
                    and promote healthy behaviors.
                  </p>
                </div>
                <div>
                  <h4 className="text-base font-thin text-black mb-2">Care Coordination</h4>
                  <p className="text-sm font-thin text-gray-600">
                    AI systems that understand patient needs and care team workflows to 
                    improve coordination and outcomes.
                  </p>
                </div>
                <div>
                  <h4 className="text-base font-thin text-black mb-2">Wellness Programs</h4>
                  <p className="text-sm font-thin text-gray-600">
                    Behavioral insights that inform the design of effective wellness 
                    interventions and habit formation tools.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="relative w-full bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-thin text-black mb-6">Measurable Impact</h2>
            <p className="text-lg font-thin text-gray-600 max-w-3xl mx-auto">
              Our behavioral analysis delivers quantifiable improvements in user engagement 
              and system effectiveness.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-thin text-black mb-2">45%</div>
              <div className="text-base font-thin text-gray-600">Increased Engagement</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-thin text-black mb-2">65%</div>
              <div className="text-base font-thin text-gray-600">Better Task Completion</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-thin text-black mb-2">80%</div>
              <div className="text-base font-thin text-gray-600">Faster User Adoption</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-thin text-black mb-2">90%</div>
              <div className="text-base font-thin text-gray-600">User Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full bg-black py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-5xl font-thin text-white mb-6">Understand Your Users Better</h2>
          <p className="text-lg font-thin text-white/80 mb-8 max-w-3xl mx-auto">
            Let's analyze user behavior to design AI systems that feel natural, intuitive, 
            and perfectly aligned with human needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-black px-8 py-4 rounded-full text-lg font-thin hover:bg-gray-100 transition-colors">
              Start Behavioral Analysis
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-full text-lg font-thin hover:bg-white hover:text-black transition-colors">
              View Research Methods
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BehavioralAnalysisPage;
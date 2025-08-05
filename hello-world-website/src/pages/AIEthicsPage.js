import React from 'react';
import Navigation from '../components/shared/Navigation';
import Footer from '../components/shared/Footer';

const AIEthicsPage = () => {
  return (
    <div className="relative w-full bg-white overflow-hidden">
      <Navigation currentPage="about" />

      {/* Hero Section */}
      <section className="relative w-full bg-white pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h1 className="text-4xl md:text-6xl font-thin text-black mb-6">AI Ethics</h1>
          <div className="w-24 h-0.5 bg-black mx-auto mb-8"></div>
          <p className="text-lg md:text-xl font-thin text-gray-600 max-w-4xl mx-auto">
            Our commitment to responsible AI development that prioritizes fairness, transparency, and human welfare.
          </p>
        </div>
      </section>

      {/* Core Principles */}
      <section className="relative w-full bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-thin text-black mb-6">Our Ethical Principles</h2>
            <p className="text-lg font-thin text-gray-600 max-w-3xl mx-auto">
              These fundamental principles guide every AI system we develop and every decision we make 
              as we build the future of intelligent technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="w-16 h-16 bg-black rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">⚖️</span>
              </div>
              <h3 className="text-xl font-thin text-black mb-4 text-center">Fairness & Equity</h3>
              <p className="text-base font-thin text-gray-600 text-center">
                Our AI systems are designed to treat all users fairly, regardless of background, 
                demographics, or personal characteristics. We actively work to identify and eliminate bias.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="w-16 h-16 bg-black rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">🔍</span>
              </div>
              <h3 className="text-xl font-thin text-black mb-4 text-center">Transparency</h3>
              <p className="text-base font-thin text-gray-600 text-center">
                We believe users have the right to understand how our AI makes decisions. 
                Our systems provide clear explanations and maintain audit trails for accountability.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="w-16 h-16 bg-black rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">🔒</span>
              </div>
              <h3 className="text-xl font-thin text-black mb-4 text-center">Privacy Protection</h3>
              <p className="text-base font-thin text-gray-600 text-center">
                User privacy is fundamental to our approach. We implement privacy-by-design principles 
                and never use personal data without explicit consent and clear purpose.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="w-16 h-16 bg-black rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-thin text-black mb-4 text-center">Human Autonomy</h3>
              <p className="text-base font-thin text-gray-600 text-center">
                AI should augment human capability, not replace human judgment. Our systems are designed 
                to empower users while preserving their autonomy and decision-making authority.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="w-16 h-16 bg-black rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-thin text-black mb-4 text-center">Safety & Reliability</h3>
              <p className="text-base font-thin text-gray-600 text-center">
                We build robust systems with comprehensive testing and monitoring. Our AI operates within 
                defined safety parameters and includes fail-safes for critical applications.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="w-16 h-16 bg-black rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">📚</span>
              </div>
              <h3 className="text-xl font-thin text-black mb-4 text-center">Continuous Learning</h3>
              <p className="text-base font-thin text-gray-600 text-center">
                We stay current with evolving ethical standards and emerging research. Our practices 
                adapt as we learn more about responsible AI development and deployment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Framework */}
      <section className="relative w-full bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-thin text-black mb-6">How We Implement Ethics</h2>
            <p className="text-lg font-thin text-gray-600 max-w-3xl mx-auto">
              Our ethical framework is integrated into every stage of our AI development process, 
              from initial design to ongoing monitoring and improvement.
            </p>
          </div>

          <div className="space-y-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-thin text-black mb-6">Design Phase Ethics</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">1</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-thin text-black mb-2">Ethical Impact Assessment</h4>
                      <p className="text-base font-thin text-gray-600">
                        Before building any AI system, we conduct comprehensive assessments to identify 
                        potential ethical risks and societal impacts.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">2</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-thin text-black mb-2">Stakeholder Consultation</h4>
                      <p className="text-base font-thin text-gray-600">
                        We engage with diverse stakeholders, including potential users, domain experts, 
                        and affected communities to understand varied perspectives.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">3</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-thin text-black mb-2">Value-Aligned Design</h4>
                      <p className="text-base font-thin text-gray-600">
                        Our system architecture is designed to embed ethical considerations from the ground up, 
                        making responsible behavior the default.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 rounded-2xl p-8">
                <h4 className="text-lg font-thin text-black mb-4">Ethics Review Checklist</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-black rounded-sm"></div>
                    <span className="text-sm font-thin text-gray-600">Bias testing with diverse datasets</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-black rounded-sm"></div>
                    <span className="text-sm font-thin text-gray-600">Privacy impact analysis</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-black rounded-sm"></div>
                    <span className="text-sm font-thin text-gray-600">Explainability requirements</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-black rounded-sm"></div>
                    <span className="text-sm font-thin text-gray-600">Safety boundary definition</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-black rounded-sm"></div>
                    <span className="text-sm font-thin text-gray-600">User consent mechanisms</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="lg:order-2">
                <h3 className="text-2xl font-thin text-black mb-6">Development & Testing</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">4</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-thin text-black mb-2">Bias Detection & Mitigation</h4>
                      <p className="text-base font-thin text-gray-600">
                        We use automated tools and human review to identify and address bias in training data, 
                        model behavior, and system outputs.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">5</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-thin text-black mb-2">Stress Testing</h4>
                      <p className="text-base font-thin text-gray-600">
                        Our systems undergo rigorous testing under various conditions to ensure reliable 
                        and safe operation across diverse scenarios.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">6</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-thin text-black mb-2">Red Team Exercises</h4>
                      <p className="text-base font-thin text-gray-600">
                        Independent teams attempt to find ethical vulnerabilities and edge cases 
                        before deployment to production environments.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:order-1 bg-gray-50 rounded-2xl p-8">
                <h4 className="text-lg font-thin text-black mb-4">Testing Metrics</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm font-thin text-gray-600">Fairness Score</span>
                    <span className="text-sm font-thin text-black">95%+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-thin text-gray-600">Bias Detection Rate</span>
                    <span className="text-sm font-thin text-black">98%+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-thin text-gray-600">Privacy Compliance</span>
                    <span className="text-sm font-thin text-black">100%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-thin text-gray-600">Safety Threshold</span>
                    <span className="text-sm font-thin text-black">99.9%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-thin text-black mb-6">Deployment & Monitoring</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">7</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-thin text-black mb-2">Gradual Rollout</h4>
                      <p className="text-base font-thin text-gray-600">
                        New AI features are deployed gradually with careful monitoring to identify 
                        and address any unforeseen ethical issues.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">8</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-thin text-black mb-2">Continuous Monitoring</h4>
                      <p className="text-base font-thin text-gray-600">
                        Real-time monitoring systems track ethical metrics and alert us to potential 
                        issues before they impact users.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">9</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-thin text-black mb-2">Feedback Integration</h4>
                      <p className="text-base font-thin text-gray-600">
                        User feedback and ethical concerns are systematically collected and integrated 
                        into ongoing system improvements.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 rounded-2xl p-8">
                <h4 className="text-lg font-thin text-black mb-4">Monitoring Dashboard</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-thin text-gray-600">Bias detection systems active</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-thin text-gray-600">Privacy compliance verified</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-thin text-gray-600">Safety thresholds maintained</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-thin text-gray-600">User feedback processed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Governance */}
      <section className="relative w-full bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-thin text-black mb-6">Ethics Governance</h2>
            <p className="text-lg font-thin text-gray-600 max-w-3xl mx-auto">
              Our organizational structure ensures ethical considerations are embedded at every level 
              of decision-making and development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-thin text-black mb-6">AI Ethics Committee</h3>
              <p className="text-base font-thin text-gray-600 mb-6">
                A cross-functional committee of engineers, researchers, ethicists, and external advisors 
                who review all AI projects and provide ethical guidance.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                  <span className="text-sm font-thin text-gray-600">Quarterly ethics reviews</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                  <span className="text-sm font-thin text-gray-600">Project approval authority</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                  <span className="text-sm font-thin text-gray-600">Policy development oversight</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                  <span className="text-sm font-thin text-gray-600">External expert consultation</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-thin text-black mb-6">Training & Education</h3>
              <p className="text-base font-thin text-gray-600 mb-6">
                All team members receive comprehensive training on AI ethics, responsible development 
                practices, and our ethical framework.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                  <span className="text-sm font-thin text-gray-600">Mandatory ethics training</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                  <span className="text-sm font-thin text-gray-600">Regular workshops & seminars</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                  <span className="text-sm font-thin text-gray-600">Guest expert presentations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                  <span className="text-sm font-thin text-gray-600">Ongoing certification programs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transparency & Accountability */}
      <section className="relative w-full bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-thin text-black mb-6">Transparency & Accountability</h2>
            <p className="text-lg font-thin text-gray-600 max-w-3xl mx-auto">
              We believe in open communication about our AI ethics practices and welcome external 
              scrutiny and feedback.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-black rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">📋</span>
              </div>
              <h3 className="text-xl font-thin text-black mb-4">Annual Ethics Report</h3>
              <p className="text-base font-thin text-gray-600 mb-6">
                Comprehensive yearly report on our ethical practices, challenges faced, 
                and improvements made.
              </p>
              <button className="bg-black text-white px-6 py-3 rounded-full text-sm font-thin hover:bg-gray-800 transition-colors">
                Download 2024 Report
              </button>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-black rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">🗣️</span>
              </div>
              <h3 className="text-xl font-thin text-black mb-4">Ethics Feedback Portal</h3>
              <p className="text-base font-thin text-gray-600 mb-6">
                Direct channel for reporting ethical concerns or suggestions about 
                our AI systems and practices.
              </p>
              <button className="bg-black text-white px-6 py-3 rounded-full text-sm font-thin hover:bg-gray-800 transition-colors">
                Submit Feedback
              </button>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-black rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">👥</span>
              </div>
              <h3 className="text-xl font-thin text-black mb-4">Community Engagement</h3>
              <p className="text-base font-thin text-gray-600 mb-6">
                Regular participation in industry forums, academic conferences, 
                and public discussions about AI ethics.
              </p>
              <button className="bg-black text-white px-6 py-3 rounded-full text-sm font-thin hover:bg-gray-800 transition-colors">
                Join Discussions
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full bg-black py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-5xl font-thin text-white mb-6">Building AI Together</h2>
          <p className="text-lg font-thin text-white/80 mb-8 max-w-3xl mx-auto">
            Responsible AI development requires collaboration across the entire community. 
            Join us in building ethical AI that benefits everyone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-black px-8 py-4 rounded-full text-lg font-thin hover:bg-gray-100 transition-colors">
              Learn About Our Products
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-full text-lg font-thin hover:bg-white hover:text-black transition-colors">
              Share Your Feedback
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIEthicsPage;
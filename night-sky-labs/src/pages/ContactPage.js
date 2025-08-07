import React, { useState } from 'react';
import Navigation from '../components/common/layout/Navigation';
import Footer from '../components/common/layout/Footer';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="relative w-full bg-white overflow-hidden">
      <Navigation />

      {/* Hero Section */}
      <section className="relative w-full bg-white pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h1 className="text-4xl md:text-6xl font-thin text-black mb-6">Get In Touch</h1>
          <div className="w-24 h-0.5 bg-black mx-auto mb-8"></div>
          <p className="text-lg md:text-xl font-thin text-gray-600 max-w-4xl mx-auto">
            Ready to transform your business with AI? Let's discuss how we can help you achieve your goals.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="relative w-full bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm">
              <h2 className="text-3xl font-thin text-black mb-8">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-base font-thin text-black mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg text-base font-thin text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-base font-thin text-black mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg text-base font-thin text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-base font-thin text-black mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg text-base font-thin text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-base font-thin text-black mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg text-base font-thin text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-base font-thin text-black mb-2">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg text-base font-thin text-black focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                  >
                    <option value="">Select a service</option>
                    <option value="ai-strategy">AI Strategy</option>
                    <option value="automation-design">Automation Design</option>
                    <option value="behavioral-analysis">Behavioral Analysis</option>
                    <option value="system-integration">System Integration</option>
                    <option value="custom-development">Custom Development</option>
                    <option value="technical-integration">Technical Integration</option>
                    <option value="deployment-optimization">Deployment & Optimization</option>
                    <option value="performance-analysis">Performance Analysis</option>
                    <option value="soul-cli">Soul CLI</option>
                    <option value="voice-platform">Voice Platform</option>
                    <option value="qurious-learning">Qurious Learning</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-base font-thin text-black mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg text-base font-thin text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all resize-vertical"
                    placeholder="Tell us about your project, goals, and how we can help..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-black text-white px-8 py-4 rounded-full text-lg font-thin hover:bg-gray-800 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              
              {/* Contact Details */}
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-2xl font-thin text-black mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xl">📧</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-thin text-black mb-1">Email</h4>
                      <p className="text-base font-thin text-gray-600">hello@nightskylabs.ai</p>
                      <p className="text-base font-thin text-gray-600">sales@nightskylabs.ai</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xl">📞</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-thin text-black mb-1">Phone</h4>
                      <p className="text-base font-thin text-gray-600">+1 (555) 123-4567</p>
                      <p className="text-sm font-thin text-gray-500">Monday - Friday, 9AM - 6PM PST</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xl">📍</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-thin text-black mb-1">Office</h4>
                      <p className="text-base font-thin text-gray-600">
                        123 Innovation Drive<br />
                        San Francisco, CA 94105<br />
                        United States
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-2xl font-thin text-black mb-6">Response Time</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-base font-thin text-gray-600">General Inquiries</span>
                    <span className="text-base font-thin text-black">24 hours</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-base font-thin text-gray-600">Sales Inquiries</span>
                    <span className="text-base font-thin text-black">4 hours</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-base font-thin text-gray-600">Support Requests</span>
                    <span className="text-base font-thin text-black">12 hours</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-base font-thin text-gray-600">Partnership Inquiries</span>
                    <span className="text-base font-thin text-black">48 hours</span>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-2xl font-thin text-black mb-6">Quick Links</h3>
                <div className="space-y-3">
                  <a href="/services" className="block text-base font-thin text-gray-600 hover:text-black transition-colors">
                    View All Services
                  </a>
                  <a href="/about" className="block text-base font-thin text-gray-600 hover:text-black transition-colors">
                    About NightSkyLabs
                  </a>
                  <a href="/careers" className="block text-base font-thin text-gray-600 hover:text-black transition-colors">
                    Join Our Team
                  </a>
                  <a href="/blog" className="block text-base font-thin text-gray-600 hover:text-black transition-colors">
                    Read Our Blog
                  </a>
                  <a href="/case-studies" className="block text-base font-thin text-gray-600 hover:text-black transition-colors">
                    Success Stories
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative w-full bg-white py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-thin text-black mb-6">Frequently Asked Questions</h2>
            <p className="text-lg font-thin text-gray-600 max-w-3xl mx-auto">
              Common questions about our services, process, and partnerships.
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-thin text-black mb-4">How do you approach new AI projects?</h3>
              <p className="text-base font-thin text-gray-600">
                We start with a comprehensive discovery phase to understand your business objectives, 
                current technology landscape, and specific challenges. This allows us to design 
                AI solutions that align with your goals and integrate seamlessly with existing systems.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-thin text-black mb-4">What is the typical project timeline?</h3>
              <p className="text-base font-thin text-gray-600">
                Project timelines vary based on complexity and scope. Strategic consulting projects 
                typically take 4-8 weeks, while custom AI development can range from 3-9 months. 
                We provide detailed timelines during the initial consultation.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-thin text-black mb-4">Do you work with companies of all sizes?</h3>
              <p className="text-base font-thin text-gray-600">
Yes, we're designed to work with organizations of all sizes. 
                Our approach is tailored to meet the specific needs and constraints of each client, 
                regardless of size or industry.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-thin text-black mb-4">What ongoing support do you provide?</h3>
              <p className="text-base font-thin text-gray-600">
                We offer comprehensive post-deployment support including system monitoring, 
                performance optimization, user training, and continuous improvement recommendations. 
                Support packages are customized based on your specific needs.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-thin text-black mb-4">How do you ensure data security and privacy?</h3>
              <p className="text-base font-thin text-gray-600">
                Data security is paramount in all our work. We implement enterprise-grade security 
                measures, follow industry best practices, and ensure compliance with relevant 
                regulations including GDPR, CCPA, and industry-specific requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full bg-black py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-5xl font-thin text-white mb-6">Ready to Start Your AI Journey?</h2>
          <p className="text-lg font-thin text-white/80 mb-8 max-w-3xl mx-auto">
            Schedule a free consultation to discuss your AI needs and discover how we can help 
            transform your business operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-black px-8 py-4 rounded-full text-lg font-thin hover:bg-gray-100 transition-colors">
              Schedule Free Consultation
            </button>
            <a href="tel:+15551234567" className="border border-white text-white px-8 py-4 rounded-full text-lg font-thin hover:bg-white hover:text-black transition-colors">
              Call Now: (555) 123-4567
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
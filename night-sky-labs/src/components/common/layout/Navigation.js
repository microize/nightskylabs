import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';
import UserProfile from '../../auth/UserProfile';

const Navigation = ({ currentPage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState(null);
  const location = useLocation();
  const { isAuthenticated } = useAuth();
  
  // Determine current page from route if not explicitly provided
  const activePage = currentPage || (() => {
    const path = location.pathname;
    if (path === '/services') return 'services';
    if (path === '/soul') return 'soul';
    if (path === '/voice') return 'voice';
    if (path === '/qurious') return 'qurious';
    return 'home';
  })();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setExpandedSection(null);
  };

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };


  const productItems = [
    { to: '/soul', label: 'Soul', key: 'soul' },
    { to: '/voice', label: 'Voice', key: 'voice' },
    { to: '/qurious', label: 'Qurious', key: 'qurious' }
  ];

  return (
    <nav className={`absolute top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isMobileMenuOpen 
        ? 'bg-white md:bg-transparent' 
        : 'bg-transparent md:bg-transparent'
    } backdrop-blur-sm`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-lg md:text-body font-thin text-black">
              NightSkyLabs
            </Link>
          </div>
          
          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Products Dropdown */}
            <div className="relative group">
              <a href="#products" className={`text-small font-thin transition-colors relative ${
                ['soul', 'voice', 'qurious'].includes(activePage) 
                  ? 'text-black' 
                  : 'text-black/80 hover:text-black'
              }`}>
                Products
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-black transition-all duration-300 ${
                  ['soul', 'voice', 'qurious'].includes(activePage) 
                    ? 'w-full' 
                    : 'w-0 group-hover:w-full'
                }`}></span>
              </a>
              
              {/* Products Dropdown */}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-screen max-w-5xl bg-white shadow-xl border border-gray-100 rounded-3xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="px-12 py-16 max-w-5xl mx-auto">
                  <div className="grid grid-cols-3 gap-8 md:gap-12 divide-x divide-gray-200">
                    
                    {/* Soul */}
                    <div className="text-center">
                      <div className="mb-6">
                        <h3 className="text-xl font-thin text-black mb-4">Soul</h3>
                        <p className="text-sm font-thin text-gray-600 mb-6">AI-powered command-line interface for developers</p>
                      </div>
                      <Link to="/soul" className="inline-block bg-gray-50 text-black px-4 py-2 rounded-full text-sm font-thin hover:bg-black hover:text-white transition-colors">
                        Learn More
                      </Link>
                    </div>
                    
                    {/* Voice */}
                    <div className="text-center pl-12">
                      <div className="mb-6">
                        <h3 className="text-xl font-thin text-black mb-4">Voice</h3>
                        <p className="text-sm font-thin text-gray-600 mb-6">AI-driven voice interview platform for recruitment</p>
                      </div>
                      <Link to="/voice" className="inline-block bg-gray-50 text-black px-4 py-2 rounded-full text-sm font-thin hover:bg-black hover:text-white transition-colors">
                        Learn More
                      </Link>
                    </div>
                    
                    {/* Qurious */}
                    <div className="text-center pl-12">
                      <div className="mb-6">
                        <h3 className="text-xl font-thin text-black mb-4">Qurious</h3>
                        <p className="text-sm font-thin text-gray-600 mb-6">Personalized AI learning platform with adaptive tutoring</p>
                      </div>
                      <Link to="/qurious" className="inline-block bg-gray-50 text-black px-4 py-2 rounded-full text-sm font-thin hover:bg-black hover:text-white transition-colors">
                        Learn More
                      </Link>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <a href="#services" className={`text-small font-thin transition-colors relative ${
                activePage === 'services' 
                  ? 'text-black' 
                  : 'text-black/80 hover:text-black'
              }`}>
                Services
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-black transition-all duration-300 ${
                  activePage === 'services' 
                    ? 'w-full' 
                    : 'w-0 group-hover:w-full'
                }`}></span>
              </a>
              
              {/* Services Dropdown */}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-screen max-w-5xl bg-white shadow-xl border border-gray-100 rounded-3xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="px-12 py-16">
                  <div className="grid grid-cols-2 gap-16 divide-x divide-gray-200">
                    
                    {/* Strategic Design Solutions */}
                    <div>
                      <h3 className="text-2xl font-thin text-black mb-6">Strategic Design Solutions</h3>
                      <div className="space-y-4">
                        <div>
                          <Link to="/services/ai-strategy" className="block hover:bg-gray-50 p-2 rounded transition-colors">
                            <h4 className="text-base font-thin text-black mb-1">AI Strategy</h4>
                            <p className="text-sm font-thin text-gray-600">Comprehensive AI adoption roadmaps</p>
                          </Link>
                        </div>
                        <div>
                          <Link to="/services/automation-design" className="block hover:bg-gray-50 p-2 rounded transition-colors">
                            <h4 className="text-base font-thin text-black mb-1">Automation Design</h4>
                            <p className="text-sm font-thin text-gray-600">Intelligent workflow optimization</p>
                          </Link>
                        </div>
                        <div>
                          <Link to="/services/behavioral-analysis" className="block hover:bg-gray-50 p-2 rounded transition-colors">
                            <h4 className="text-base font-thin text-black mb-1">Behavioral Analysis</h4>
                            <p className="text-sm font-thin text-gray-600">Human-centered AI system design</p>
                          </Link>
                        </div>
                        <div>
                          <Link to="/services/system-integration" className="block hover:bg-gray-50 p-2 rounded transition-colors">
                            <h4 className="text-base font-thin text-black mb-1">System Integration</h4>
                            <p className="text-sm font-thin text-gray-600">Seamless AI implementation</p>
                          </Link>
                        </div>
                      </div>
                    </div>
                    
                    {/* Implementation Services */}
                    <div className="pl-16">
                      <h3 className="text-2xl font-thin text-black mb-6">Implementation Services</h3>
                      <div className="space-y-4">
                        <div>
                          <Link to="/services/custom-development" className="block hover:bg-gray-50 p-2 rounded transition-colors">
                            <h4 className="text-base font-thin text-black mb-1">Custom Development</h4>
                            <p className="text-sm font-thin text-gray-600">Tailored AI solutions for your needs</p>
                          </Link>
                        </div>
                        <div>
                          <Link to="/services/technical-integration" className="block hover:bg-gray-50 p-2 rounded transition-colors">
                            <h4 className="text-base font-thin text-black mb-1">Technical Integration</h4>
                            <p className="text-sm font-thin text-gray-600">Enterprise system connectivity</p>
                          </Link>
                        </div>
                        <div>
                          <Link to="/services/deployment-optimization" className="block hover:bg-gray-50 p-2 rounded transition-colors">
                            <h4 className="text-base font-thin text-black mb-1">Deployment & Optimization</h4>
                            <p className="text-sm font-thin text-gray-600">Production-ready AI systems</p>
                          </Link>
                        </div>
                        <div>
                          <Link to="/services/performance-analysis" className="block hover:bg-gray-50 p-2 rounded transition-colors">
                            <h4 className="text-base font-thin text-black mb-1">Performance Analysis</h4>
                            <p className="text-sm font-thin text-gray-600">ROI measurement and optimization</p>
                          </Link>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
            
            {/* About Dropdown */}
            <div className="relative group">
              <a href="#about" className={`text-small font-thin transition-colors relative ${
                activePage === 'about' 
                  ? 'text-black' 
                  : 'text-black/80 hover:text-black'
              }`}>
                About
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-black transition-all duration-300 ${
                  activePage === 'about' 
                    ? 'w-full' 
                    : 'w-0 group-hover:w-full'
                }`}></span>
              </a>
              
              {/* About Dropdown */}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-screen max-w-5xl bg-white shadow-xl border border-gray-100 rounded-3xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="px-12 py-16">
                  <div className="grid grid-cols-2 gap-12 divide-x divide-gray-200">
                    
                    {/* Company */}
                    <div>
                      <h3 className="text-2xl font-thin text-black mb-6">Company</h3>
                      <div className="space-y-4">
                        <div>
                          <Link to="/our-story" className="block hover:bg-gray-50 p-2 rounded transition-colors">
                            <h4 className="text-base font-thin text-black mb-1">Our Story</h4>
                            <p className="text-sm font-thin text-gray-600">Mission, vision, and AI transformation journey</p>
                          </Link>
                        </div>
                        <div>
                          <Link to="/leadership" className="block hover:bg-gray-50 p-2 rounded transition-colors">
                            <h4 className="text-base font-thin text-black mb-1">Leadership Team</h4>
                            <p className="text-sm font-thin text-gray-600">Meet the minds behind NightSkyLabs</p>
                          </Link>
                        </div>
                        <div>
                          <Link to="/ai-ethics" className="block hover:bg-gray-50 p-2 rounded transition-colors">
                            <h4 className="text-base font-thin text-black mb-1">AI Ethics</h4>
                            <p className="text-sm font-thin text-gray-600">Our principles for responsible AI development</p>
                          </Link>
                        </div>
                      </div>
                    </div>
                    
                    {/* Opportunities */}
                    <div className="pl-12">
                      <h3 className="text-2xl font-thin text-black mb-6">Join Us</h3>
                      <div className="space-y-4">
                        <div>
                          <Link to="/careers" className="block hover:bg-gray-50 p-2 rounded transition-colors">
                            <h4 className="text-base font-thin text-black mb-1">Careers</h4>
                            <p className="text-sm font-thin text-gray-600">Open positions and company culture</p>
                          </Link>
                        </div>
                        <div>
                          <Link to="/investors" className="block hover:bg-gray-50 p-2 rounded transition-colors">
                            <h4 className="text-base font-thin text-black mb-1">Investors</h4>
                            <p className="text-sm font-thin text-gray-600">Partnership and funding opportunities</p>
                          </Link>
                        </div>
                        <div>
                          <Link to="/press" className="block hover:bg-gray-50 p-2 rounded transition-colors">
                            <h4 className="text-base font-thin text-black mb-1">Press & Media</h4>
                            <p className="text-sm font-thin text-gray-600">News, media kit, and press releases</p>
                          </Link>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
            
            {/* Resources Dropdown */}
            <div className="relative group">
              <a href="#resources" className={`text-small font-thin transition-colors relative ${
                activePage === 'resources' 
                  ? 'text-black' 
                  : 'text-black/80 hover:text-black'
              }`}>
                Resources
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-black transition-all duration-300 ${
                  activePage === 'resources' 
                    ? 'w-full' 
                    : 'w-0 group-hover:w-full'
                }`}></span>
              </a>
              
              {/* Resources Dropdown */}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-screen max-w-5xl bg-white shadow-xl border border-gray-100 rounded-3xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="px-12 py-16">
                  <div className="grid grid-cols-2 gap-12 divide-x divide-gray-200">
                    
                    {/* Knowledge */}
                    <div>
                      <h3 className="text-2xl font-thin text-black mb-6">Knowledge</h3>
                      <div className="space-y-4">
                        <div>
                          <Link to="/blog" className="block hover:bg-gray-50 p-2 rounded transition-colors">
                            <h4 className="text-base font-thin text-black mb-1">Blog</h4>
                            <p className="text-sm font-thin text-gray-600">AI insights, trends, and industry analysis</p>
                          </Link>
                        </div>
                        <div>
                          <Link to="/case-studies" className="block hover:bg-gray-50 p-2 rounded transition-colors">
                            <h4 className="text-base font-thin text-black mb-1">Case Studies</h4>
                            <p className="text-sm font-thin text-gray-600">Our approach to AI solution development</p>
                          </Link>
                        </div>
                        <div>
                          <Link to="/research" className="block hover:bg-gray-50 p-2 rounded transition-colors">
                            <h4 className="text-base font-thin text-black mb-1">Research</h4>
                            <p className="text-sm font-thin text-gray-600">Whitepapers and AI research publications</p>
                          </Link>
                        </div>
                      </div>
                    </div>
                    
                    {/* Support */}
                    <div className="pl-12">
                      <h3 className="text-2xl font-thin text-black mb-6">Support</h3>
                      <div className="space-y-4">
                        <div>
                          <Link to="/documentation" className="block hover:bg-gray-50 p-2 rounded transition-colors">
                            <h4 className="text-base font-thin text-black mb-1">Documentation</h4>
                            <p className="text-sm font-thin text-gray-600">Technical guides and API references</p>
                          </Link>
                        </div>
                        <div>
                          <Link to="/help" className="block hover:bg-gray-50 p-2 rounded transition-colors">
                            <h4 className="text-base font-thin text-black mb-1">Help Center</h4>
                            <p className="text-sm font-thin text-gray-600">FAQs, tutorials, and troubleshooting</p>
                          </Link>
                        </div>
                        <div>
                          <Link to="/community" className="block hover:bg-gray-50 p-2 rounded transition-colors">
                            <h4 className="text-base font-thin text-black mb-1">Community</h4>
                            <p className="text-sm font-thin text-gray-600">Developer forums and discussions</p>
                          </Link>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Auth/CTA Section - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <UserProfile />
            ) : (
              <>
                <Link 
                  to="/signin"
                  className="text-small font-thin text-black/80 hover:text-black transition-colors"
                >
                  Sign In
                </Link>
                <Link to="/contact" className="bg-black text-white px-4 py-2 rounded-full text-small font-thin hover:bg-gray-800 transition-colors">
                  Get In Touch
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 relative z-50"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 h-screen w-screen bg-white transform transition-transform duration-300 ease-in-out md:hidden z-50 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full overflow-y-auto">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <Link to="/" className="text-xl font-thin text-black" onClick={closeMobileMenu}>
              NightSkyLabs
            </Link>
            <button 
              onClick={closeMobileMenu}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Mobile Navigation Content */}
          <div className="flex-1 px-6 py-8">
            
            {/* Products Section */}
            <div className="border-b border-gray-100 pb-6 mb-6">
              <button
                onClick={() => toggleSection('products')}
                className="flex items-center justify-between w-full py-3 text-left"
              >
                <span className="text-xl font-thin text-black">Products</span>
                <svg 
                  className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                    expandedSection === 'products' ? 'rotate-180' : ''
                  }`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${
                expandedSection === 'products' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="pl-4 pt-2 space-y-3">
                  {productItems.map(({ to, label, key }) => (
                    <Link 
                      key={key}
                      to={to}
                      className="block py-2 text-base font-thin text-gray-600 hover:text-black transition-colors"
                      onClick={closeMobileMenu}
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Services Section */}
            <div className="border-b border-gray-100 pb-6 mb-6">
              <button
                onClick={() => toggleSection('services')}
                className="flex items-center justify-between w-full py-3 text-left"
              >
                <span className="text-xl font-thin text-black">Services</span>
                <svg 
                  className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                    expandedSection === 'services' ? 'rotate-180' : ''
                  }`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${
                expandedSection === 'services' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="pl-4 pt-2 space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-2">Strategic Design</h4>
                    <div className="space-y-2">
                      <Link to="/services/ai-strategy" className="block py-1 text-sm font-thin text-gray-600 hover:text-black transition-colors" onClick={closeMobileMenu}>
                        AI Strategy
                      </Link>
                      <Link to="/services/automation-design" className="block py-1 text-sm font-thin text-gray-600 hover:text-black transition-colors" onClick={closeMobileMenu}>
                        Automation Design
                      </Link>
                      <Link to="/services/behavioral-analysis" className="block py-1 text-sm font-thin text-gray-600 hover:text-black transition-colors" onClick={closeMobileMenu}>
                        Behavioral Analysis
                      </Link>
                      <Link to="/services/system-integration" className="block py-1 text-sm font-thin text-gray-600 hover:text-black transition-colors" onClick={closeMobileMenu}>
                        System Integration
                      </Link>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-2">Implementation</h4>
                    <div className="space-y-2">
                      <Link to="/services/custom-development" className="block py-1 text-sm font-thin text-gray-600 hover:text-black transition-colors" onClick={closeMobileMenu}>
                        Custom Development
                      </Link>
                      <Link to="/services/technical-integration" className="block py-1 text-sm font-thin text-gray-600 hover:text-black transition-colors" onClick={closeMobileMenu}>
                        Technical Integration
                      </Link>
                      <Link to="/services/deployment-optimization" className="block py-1 text-sm font-thin text-gray-600 hover:text-black transition-colors" onClick={closeMobileMenu}>
                        Deployment & Optimization
                      </Link>
                      <Link to="/services/performance-analysis" className="block py-1 text-sm font-thin text-gray-600 hover:text-black transition-colors" onClick={closeMobileMenu}>
                        Performance Analysis
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* About Section */}
            <div className="border-b border-gray-100 pb-6 mb-6">
              <button
                onClick={() => toggleSection('about')}
                className="flex items-center justify-between w-full py-3 text-left"
              >
                <span className="text-xl font-thin text-black">About</span>
                <svg 
                  className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                    expandedSection === 'about' ? 'rotate-180' : ''
                  }`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${
                expandedSection === 'about' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="pl-4 pt-2 space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-2">Company</h4>
                    <div className="space-y-2">
                      <Link to="/our-story" className="block py-1 text-sm font-thin text-gray-600 hover:text-black transition-colors" onClick={closeMobileMenu}>
                        Our Story
                      </Link>
                      <Link to="/leadership" className="block py-1 text-sm font-thin text-gray-600 hover:text-black transition-colors" onClick={closeMobileMenu}>
                        Leadership Team
                      </Link>
                      <Link to="/ai-ethics" className="block py-1 text-sm font-thin text-gray-600 hover:text-black transition-colors" onClick={closeMobileMenu}>
                        AI Ethics
                      </Link>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-2">Join Us</h4>
                    <div className="space-y-2">
                      <Link to="/careers" className="block py-1 text-sm font-thin text-gray-600 hover:text-black transition-colors" onClick={closeMobileMenu}>
                        Careers
                      </Link>
                      <Link to="/investors" className="block py-1 text-sm font-thin text-gray-600 hover:text-black transition-colors" onClick={closeMobileMenu}>
                        Investors
                      </Link>
                      <Link to="/press" className="block py-1 text-sm font-thin text-gray-600 hover:text-black transition-colors" onClick={closeMobileMenu}>
                        Press & Media
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Resources Section */}
            <div className="border-b border-gray-100 pb-6 mb-8">
              <button
                onClick={() => toggleSection('resources')}
                className="flex items-center justify-between w-full py-3 text-left"
              >
                <span className="text-xl font-thin text-black">Resources</span>
                <svg 
                  className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                    expandedSection === 'resources' ? 'rotate-180' : ''
                  }`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${
                expandedSection === 'resources' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="pl-4 pt-2 space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-2">Knowledge</h4>
                    <div className="space-y-2">
                      <Link to="/blog" className="block py-1 text-sm font-thin text-gray-600 hover:text-black transition-colors" onClick={closeMobileMenu}>
                        Blog
                      </Link>
                      <Link to="/case-studies" className="block py-1 text-sm font-thin text-gray-600 hover:text-black transition-colors" onClick={closeMobileMenu}>
                        Case Studies
                      </Link>
                      <Link to="/research" className="block py-1 text-sm font-thin text-gray-600 hover:text-black transition-colors" onClick={closeMobileMenu}>
                        Research
                      </Link>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-2">Support</h4>
                    <div className="space-y-2">
                      <Link to="/documentation" className="block py-1 text-sm font-thin text-gray-600 hover:text-black transition-colors" onClick={closeMobileMenu}>
                        Documentation
                      </Link>
                      <Link to="/help" className="block py-1 text-sm font-thin text-gray-600 hover:text-black transition-colors" onClick={closeMobileMenu}>
                        Help Center
                      </Link>
                      <Link to="/community" className="block py-1 text-sm font-thin text-gray-600 hover:text-black transition-colors" onClick={closeMobileMenu}>
                        Community
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Auth/CTA Buttons */}
            <div className="space-y-4">
              {isAuthenticated ? (
                <div className="text-center">
                  <UserProfile showDropdown={false} />
                </div>
              ) : (
                <div className="text-center">
                  <Link 
                    to="/signin"
                    onClick={closeMobileMenu}
                    className="block w-full border-2 border-black text-black px-8 py-4 rounded-full text-lg font-thin hover:bg-black hover:text-white transition-colors mb-4"
                  >
                    Sign In
                  </Link>
                </div>
              )}
              <div className="text-center">
                <Link 
                  to="/contact"
                  className="block bg-black text-white px-8 py-4 rounded-full text-lg font-thin hover:bg-gray-800 transition-colors"
                  onClick={closeMobileMenu}
                >
                  Get In Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
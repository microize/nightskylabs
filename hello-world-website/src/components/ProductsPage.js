import React, { useEffect } from 'react';

const ProductsPage = () => {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const textElement = entry.target.querySelector('.reading-text');
          if (textElement && !textElement.dataset.animated) {
            textElement.dataset.animated = 'true';
            
            const text = textElement.textContent;
            const words = text.split(' ');
            
            textElement.innerHTML = words.map(word => 
              `<span class="reading-word">${word}</span>`
            ).join(' ');
            
            const wordElements = textElement.querySelectorAll('.reading-word');
            wordElements.forEach((word, index) => {
              setTimeout(() => {
                word.classList.add('word-read');
              }, index * 150);
            });
          }
        }
      });
    }, observerOptions);

    const animatedSections = document.querySelectorAll('.animated-section');
    animatedSections.forEach(section => {
      observer.observe(section);
    });

    return () => {
      animatedSections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="relative w-full bg-white overflow-hidden">
      {/* Navigation Bar */}
      <nav className="absolute top-0 left-0 right-0 z-50 bg-white/95 md:bg-transparent backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <a href="/" className="text-lg md:text-body font-thin text-black">NightSkyLabs</a>
            </div>
            
            {/* Navigation Links - Desktop */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-small font-thin text-black/80 hover:text-black transition-colors relative group">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="/products" className="text-small font-thin text-black transition-colors relative">
                Products
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-black"></span>
              </a>
            </div>
            
            {/* CTA Button - Desktop */}
            <div className="hidden md:block">
              <button className="bg-black text-white px-4 py-2 rounded-full text-small font-thin hover:bg-gray-800 transition-colors">
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative w-full bg-white pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-thin text-black leading-tight mb-6">
              Our Products
            </h1>
            <div className="w-24 h-0.5 bg-black mx-auto mb-8"></div>
            <p className="text-lg md:text-xl font-thin text-gray-600 max-w-3xl mx-auto leading-relaxed">
              AI-powered tools designed to transform how you work, learn, and grow. From development workflows to learning experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Soul CLI Section */}
      <section className="animated-section relative w-full bg-white py-16 md:py-24">
        <div className="w-4/5 mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div>
              <h2 className="text-3xl md:text-5xl font-thin text-black mb-6">Soul</h2>
              <h3 className="text-xl md:text-2xl font-thin text-gray-600 mb-8">AI-Powered Coding CLI</h3>
              
              <div className="reading-text text-base md:text-lg font-thin text-gray-600 mb-12" style={{ lineHeight: '2' }}>
                Soul is an intelligent command-line interface that transforms how developers work. Like Google's CLI tools but powered by advanced AI, Soul understands your codebase, automates repetitive tasks, and provides intelligent suggestions to accelerate your development workflow.
              </div>

              <div className="space-y-6">
                <h4 className="text-lg font-thin text-black mb-4">Key Features</h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h5 className="font-thin text-black mb-1">Intelligent Code Analysis</h5>
                      <p className="text-sm font-thin text-gray-600">AI-powered understanding of your entire codebase</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h5 className="font-thin text-black mb-1">Automated Workflows</h5>
                      <p className="text-sm font-thin text-gray-600">Smart automation for testing, deployment, and refactoring</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h5 className="font-thin text-black mb-1">Natural Language Commands</h5>
                      <p className="text-sm font-thin text-gray-600">Describe what you want, Soul figures out how to do it</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h5 className="font-thin text-black mb-1">Enterprise Integration</h5>
                      <p className="text-sm font-thin text-gray-600">Seamless integration with existing development tools</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CLI Demo */}
            <div className="bg-black rounded-2xl p-6 md:p-8">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="font-mono text-green-400 text-sm space-y-2">
                <div>$ soul analyze --project</div>
                <div className="text-gray-400">Analyzing codebase...</div>
                <div className="text-white">✓ Found 247 files, 15 modules</div>
                <div className="text-white">✓ Detected React + TypeScript project</div>
                <div className="text-white">✓ 3 potential optimizations found</div>
                <div className="mt-4">$ soul suggest "optimize performance"</div>
                <div className="text-gray-400">AI analyzing performance bottlenecks...</div>
                <div className="text-white">✓ Lazy loading recommendations</div>
                <div className="text-white">✓ Bundle splitting suggestions</div>
                <div className="text-white">✓ Memoization opportunities</div>
                <div className="mt-4">$ soul implement --suggestion 1</div>
                <div className="text-gray-400">Implementing lazy loading...</div>
                <div className="text-white">✓ Components updated</div>
                <div className="text-white">✓ Performance improved by 34%</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Voice Platform Section */}
      <section className="animated-section relative w-full bg-gray-50 py-16 md:py-24">
        <div className="w-4/5 mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Visual */}
            <div className="order-2 lg:order-1">
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 md:p-12">
                <div className="text-center space-y-8">
                  <div className="w-24 h-24 bg-black rounded-full mx-auto flex items-center justify-center">
                    <div className="w-8 h-8 bg-white rounded-full animate-pulse"></div>
                  </div>
                  <div className="space-y-4">
                    <div className="text-sm font-thin text-gray-600">Real-time AI Analysis</div>
                    <div className="space-y-2">
                      <div className="h-2 bg-black rounded-full w-3/4 mx-auto"></div>
                      <div className="h-2 bg-gray-400 rounded-full w-1/2 mx-auto"></div>
                      <div className="h-2 bg-gray-300 rounded-full w-2/3 mx-auto"></div>
                    </div>
                    <div className="text-xs font-thin text-gray-500">Communication • Technical Skills • Cultural Fit</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-5xl font-thin text-black mb-6">Voice</h2>
              <h3 className="text-xl md:text-2xl font-thin text-gray-600 mb-8">Real-time Interview Platform</h3>
              
              <div className="reading-text text-base md:text-lg font-thin text-gray-600 mb-12" style={{ lineHeight: '2' }}>
                Voice revolutionizes the hiring process with AI-driven voice interviews that provide real-time insights into candidate capabilities. Our platform analyzes communication skills, technical knowledge, and cultural fit through natural conversation.
              </div>

              <div className="space-y-6">
                <h4 className="text-lg font-thin text-black mb-4">Platform Features</h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h5 className="font-thin text-black mb-1">AI-Powered Analysis</h5>
                      <p className="text-sm font-thin text-gray-600">Real-time assessment of communication and technical skills</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h5 className="font-thin text-black mb-1">Bias Reduction</h5>
                      <p className="text-sm font-thin text-gray-600">Objective evaluation based on skills, not demographics</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h5 className="font-thin text-black mb-1">Scalable Screening</h5>
                      <p className="text-sm font-thin text-gray-600">Handle hundreds of interviews simultaneously</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h5 className="font-thin text-black mb-1">Detailed Reports</h5>
                      <p className="text-sm font-thin text-gray-600">Comprehensive candidate insights and recommendations</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Qurious Learning Section */}
      <section className="animated-section relative w-full bg-white py-16 md:py-24">
        <div className="w-4/5 mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div>
              <h2 className="text-3xl md:text-5xl font-thin text-black mb-6">Qurious</h2>
              <h3 className="text-xl md:text-2xl font-thin text-gray-600 mb-8">AI-First Learning Platform</h3>
              
              <div className="reading-text text-base md:text-lg font-thin text-gray-600 mb-12" style={{ lineHeight: '2' }}>
                Qurious transforms education through personalized AI tutoring that adapts to each learner's pace, style, and goals. Our platform creates dynamic learning experiences that evolve with the student, making complex subjects accessible and engaging.
              </div>

              <div className="space-y-6">
                <h4 className="text-lg font-thin text-black mb-4">Learning Features</h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h5 className="font-thin text-black mb-1">Adaptive AI Tutoring</h5>
                      <p className="text-sm font-thin text-gray-600">Personalized instruction that adapts to learning style</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h5 className="font-thin text-black mb-1">Real-time Assessment</h5>
                      <p className="text-sm font-thin text-gray-600">Continuous evaluation and feedback for optimal progress</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h5 className="font-thin text-black mb-1">Interactive Content</h5>
                      <p className="text-sm font-thin text-gray-600">Dynamic lessons that engage and challenge students</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h5 className="font-thin text-black mb-1">Progress Analytics</h5>
                      <p className="text-sm font-thin text-gray-600">Detailed insights into learning patterns and achievements</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Learning Interface */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 md:p-8">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h4 className="font-thin text-black">Today's Learning Path</h4>
                  <div className="text-sm font-thin text-gray-600">67% Complete</div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-white rounded-xl p-4 border border-gray-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-thin text-black">Machine Learning Basics</span>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1">
                      <div className="bg-black h-1 rounded-full" style={{width: '100%'}}></div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl p-4 border-2 border-black">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-thin text-black">Neural Networks</span>
                      <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1">
                      <div className="bg-black h-1 rounded-full" style={{width: '60%'}}></div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl p-4 border border-gray-200 opacity-50">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-thin text-black">Deep Learning</span>
                      <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1">
                      <div className="bg-gray-300 h-1 rounded-full" style={{width: '0%'}}></div>
                    </div>
                  </div>
                </div>

                <div className="bg-black rounded-xl p-4 text-white">
                  <div className="text-sm font-thin mb-2">AI Tutor Insight</div>
                  <div className="text-xs font-thin text-gray-300">
                    "You're excelling at pattern recognition! Ready to tackle backpropagation next?"
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative w-full bg-black py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-5xl font-thin text-white mb-8">
            Ready to Transform Your Workflow?
          </h2>
          <p className="text-lg md:text-xl font-thin text-gray-300 mb-12 max-w-3xl mx-auto">
            Discover how our AI-powered tools can accelerate your development, hiring, and learning processes.
          </p>
          <button className="bg-white text-black px-8 py-4 rounded-full text-lg font-thin hover:bg-gray-100 transition-colors">
            Get Started Today
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 md:py-32 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16 md:mb-20">
            <h3 className="text-xl md:text-large font-thin text-white mb-4 md:mb-6">Stay Updated</h3>
            <p className="text-base md:text-body font-thin text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto">
              Get updates on our products, features, and AI technology insights.
            </p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-3 sm:gap-0">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 md:px-6 py-3 bg-gray-800 border border-gray-700 rounded-lg sm:rounded-l-lg sm:rounded-r-none text-white placeholder-gray-400 font-thin focus:outline-none focus:border-gray-500 focus:ring-2 focus:ring-gray-500/20"
              />
              <button className="px-6 md:px-8 py-3 bg-white text-black font-thin rounded-lg sm:rounded-r-lg sm:rounded-l-none hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 md:pt-12 text-center">
            <p className="text-sm md:text-small font-thin text-gray-400">© 2025 NightSkyLabs Holdings. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProductsPage;
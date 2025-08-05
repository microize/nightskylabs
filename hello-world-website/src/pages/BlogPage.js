import React from 'react';
import Navigation from '../components/shared/Navigation';
import Footer from '../components/shared/Footer';

const BlogPage = () => {
  const blogPost = {
    title: "The Future of AI-Powered Development: How Soul CLI is Transforming Developer Workflows",
    excerpt: "Exploring how AI-powered command-line tools are revolutionizing software development, from automated code analysis to intelligent workflow optimization.",
    author: "Alex Chen",
    date: "January 15, 2025",
    readTime: "8 min read",
    tags: ["AI Development", "Developer Tools", "Automation", "CLI Tools"],
    image: "/blog-hero.jpg"
  };

  return (
    <div className="relative w-full bg-white overflow-hidden">
      <Navigation currentPage="resources" />

      {/* Hero Section */}
      <section className="relative w-full bg-white pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-thin text-black mb-6">AI Insights & Analysis</h1>
            <div className="w-24 h-0.5 bg-black mx-auto mb-8"></div>
            <p className="text-lg md:text-xl font-thin text-gray-600 max-w-4xl mx-auto">
              Deep insights into AI technology, industry trends, and the future of intelligent automation.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Blog Post */}
      <section className="relative w-full bg-gray-50 py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* Blog Post Header */}
            <div className="h-64 md:h-80 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
              <div className="text-gray-400 text-6xl">📝</div>
            </div>
            
            {/* Blog Post Content */}
            <div className="p-8 md:p-12">
              <div className="flex flex-wrap gap-2 mb-6">
                {blogPost.tags.map((tag, index) => (
                  <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-thin">
                    {tag}
                  </span>
                ))}
              </div>
              
              <h2 className="text-2xl md:text-4xl font-thin text-black mb-6 leading-tight">
                {blogPost.title}
              </h2>
              
              <div className="flex items-center text-sm font-thin text-gray-500 mb-8 space-x-4">
                <span>By {blogPost.author}</span>
                <span>•</span>
                <span>{blogPost.date}</span>
                <span>•</span>
                <span>{blogPost.readTime}</span>
              </div>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-lg font-thin text-gray-600 mb-8 leading-relaxed">
                  {blogPost.excerpt}
                </p>
                
                <h3 className="text-xl font-thin text-black mb-4">The Developer Experience Revolution</h3>
                <p className="text-base font-thin text-gray-600 mb-6 leading-relaxed">
                  The landscape of software development is undergoing a fundamental transformation. Traditional development 
                  workflows, while functional, often involve repetitive tasks that consume valuable time and mental energy. 
                  From manually analyzing code quality to writing boilerplate configurations, developers spend significant 
                  portions of their day on activities that could be intelligently automated.
                </p>
                
                <p className="text-base font-thin text-gray-600 mb-6 leading-relaxed">
                  This is where AI-powered development tools like Soul CLI are making a profound impact. By understanding 
                  the context of your codebase, these tools can provide intelligent suggestions, automate routine tasks, 
                  and even predict potential issues before they become problems.
                </p>
                
                <h3 className="text-xl font-thin text-black mb-4">Key Benefits of AI-Powered CLI Tools</h3>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <strong className="font-thin text-black">Intelligent Code Analysis:</strong>
                      <span className="font-thin text-gray-600"> AI understands your entire codebase, detecting patterns, dependencies, and optimization opportunities that might be missed in manual reviews.</span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <strong className="font-thin text-black">Automated Workflow Optimization:</strong>
                      <span className="font-thin text-gray-600"> From testing strategies to deployment processes, AI can suggest and implement improvements based on industry best practices.</span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <strong className="font-thin text-black">Natural Language Commands:</strong>
                      <span className="font-thin text-gray-600"> Describe what you want to accomplish in plain English, and let AI figure out the implementation details.</span>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-thin text-black mb-4">Looking Forward</h3>
                <p className="text-base font-thin text-gray-600 mb-6 leading-relaxed">
                  As AI technology continues to evolve, we can expect even more sophisticated developer tools that not only 
                  automate routine tasks but also provide creative suggestions for solving complex problems. The future of 
                  development lies in human-AI collaboration, where developers focus on high-level design and creative 
                  problem-solving while AI handles the implementation details.
                </p>
                
                <div className="bg-gray-50 rounded-xl p-6 mt-8">
                  <p className="text-sm font-thin text-gray-600 italic">
                    "The goal isn't to replace developers, but to amplify their capabilities. AI should handle the routine 
                    so humans can focus on the revolutionary." - Alex Chen, CEO of NightSkyLabs
                  </p>
                </div>
              </div>
              
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                    <div>
                      <div className="font-thin text-black">{blogPost.author}</div>
                      <div className="text-sm font-thin text-gray-500">CEO & Founder</div>
                    </div>
                  </div>
                  <div className="flex space-x-4">
                    <button className="text-sm font-thin text-gray-500 hover:text-black transition-colors">Share</button>
                    <button className="text-sm font-thin text-gray-500 hover:text-black transition-colors">Save</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More Blog Posts - Coming Soon */}
      <section className="relative w-full bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-thin text-black mb-6">More Insights Coming Soon</h2>
            <div className="w-24 h-0.5 bg-black mx-auto mb-8"></div>
            <p className="text-lg font-thin text-gray-600 max-w-3xl mx-auto mb-12">
              We're preparing more in-depth articles on AI development, industry trends, and technical insights. 
              Subscribe to our newsletter to be notified when new content is published.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-gray-200 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-gray-400 text-2xl">🤖</span>
                </div>
                <h3 className="text-lg font-thin text-black mb-2">AI Ethics in Practice</h3>
                <p className="text-sm font-thin text-gray-600">Coming Soon</p>
              </div>
              
              <div className="bg-gray-50 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-gray-200 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-gray-400 text-2xl">📊</span>
                </div>
                <h3 className="text-lg font-thin text-black mb-2">AI Market Trends 2025</h3>
                <p className="text-sm font-thin text-gray-600">Coming Soon</p>
              </div>
              
              <div className="bg-gray-50 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-gray-200 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-gray-400 text-2xl">🚀</span>
                </div>
                <h3 className="text-lg font-thin text-black mb-2">Building AI Products</h3>
                <p className="text-sm font-thin text-gray-600">Coming Soon</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPage;
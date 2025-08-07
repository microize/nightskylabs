import React from 'react';

const DocumentationContent = ({ content, title, lastUpdated, difficulty, estimatedTime, prerequisites = [] }) => {
  const createMarkup = (htmlContent) => {
    return { __html: htmlContent };
  };

  // Extract headings from content for TOC
  const extractHeadings = (htmlContent) => {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlContent;
    const headings = [];
    
    const headingElements = tempDiv.querySelectorAll('h1, h2, h3, h4, h5, h6');
    headingElements.forEach((heading, index) => {
      const id = heading.textContent.toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
      
      heading.id = id;
      headings.push({
        id,
        text: heading.textContent,
        level: parseInt(heading.tagName.charAt(1))
      });
    });
    
    return { headings, content: tempDiv.innerHTML };
  };

  const { headings, content: processedContent } = content ? extractHeadings(content) : { headings: [], content: '' };

  const getDifficultyColor = (level) => {
    switch (level?.toLowerCase()) {
      case 'beginner': return 'bg-green-100 text-green-800 border-green-200';
      case 'intermediate': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'advanced': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="max-w-4xl">
      {/* Article header */}
      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-thin text-black mb-6 leading-tight">
          {title}
        </h1>
        
        {/* Metadata */}
        <div className="flex flex-wrap items-center gap-4 text-sm font-thin text-gray-600 mb-6">
          {difficulty && (
            <span className={`px-3 py-1 rounded-full border ${getDifficultyColor(difficulty)}`}>
              {difficulty}
            </span>
          )}
          {estimatedTime && (
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {estimatedTime}
            </span>
          )}
          {lastUpdated && (
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Updated {new Date(lastUpdated).toLocaleDateString()}
            </span>
          )}
        </div>

        {/* Prerequisites */}
        {prerequisites.length > 0 && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-medium text-blue-900 mb-3 flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Prerequisites
            </h3>
            <ul className="space-y-2">
              {prerequisites.map((prereq, index) => (
                <li key={index} className="flex items-start text-blue-800 font-thin">
                  <svg className="w-4 h-4 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {prereq}
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>

      {/* Article content */}
      <article 
        className="prose prose-lg max-w-none font-thin
          prose-headings:font-thin prose-headings:text-black
          prose-p:text-gray-600 prose-p:leading-relaxed
          prose-a:text-black prose-a:no-underline hover:prose-a:underline
          prose-strong:text-black prose-strong:font-medium
          prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm prose-code:font-mono prose-code:text-gray-800
          prose-pre:bg-gray-100 prose-pre:border prose-pre:border-gray-200
          prose-blockquote:border-l-4 prose-blockquote:border-gray-200 prose-blockquote:bg-gray-50 prose-blockquote:font-thin
          prose-ul:space-y-2 prose-ol:space-y-2
          prose-li:text-gray-600 prose-li:font-thin"
        dangerouslySetInnerHTML={createMarkup(processedContent)}
      />

      {/* Navigation footer */}
      <footer className="mt-16 pt-8 border-t border-gray-200">
        <div className="flex items-center justify-between">
          <div className="text-sm font-thin text-gray-600">
            Was this page helpful?
          </div>
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 text-sm font-thin text-gray-600 hover:text-black transition-colors">
              Edit on GitHub
            </button>
            <button className="px-4 py-2 bg-black text-white text-sm font-thin rounded-lg hover:bg-gray-800 transition-colors">
              Report Issue
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DocumentationContent;
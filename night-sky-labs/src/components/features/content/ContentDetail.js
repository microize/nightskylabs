import React from 'react';
import { ArrowLeftIcon, CalendarIcon, UserIcon, ClockIcon, TagIcon } from '@heroicons/react/24/outline';
import { formatDate, calculateReadingTime } from '../../../utils/contentUtils';

const ContentDetail = ({ content, contentType, onBack }) => {
  const readingTime = content.readingTime || calculateReadingTime(content.content || '');

  // Render content based on type
  const renderContent = () => {
    // If content has markdown, we should parse it properly
    // For now, displaying as plain text with basic formatting
    if (content.content) {
      return (
        <div className="prose prose-lg max-w-none font-thin leading-relaxed">
          {content.content.split('\n').map((paragraph, index) => (
            paragraph.trim() && (
              <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                {paragraph}
              </p>
            )
          ))}
        </div>
      );
    }
    
    return (
      <div className="prose prose-lg max-w-none font-thin leading-relaxed">
        <p className="text-gray-700 leading-relaxed">
          {content.excerpt || content.description || content.summary}
        </p>
      </div>
    );
  };

  // Render case study specific sections
  const renderCaseStudyDetails = () => (
    <div className="grid md:grid-cols-2 gap-8 mb-8">
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-thin text-black mb-3">Challenge</h3>
          <p className="text-gray-700 font-thin leading-relaxed">
            {content.challenge || 'Details about the challenges faced in this project...'}
          </p>
        </div>
        
        <div>
          <h3 className="text-lg font-thin text-black mb-3">Solution</h3>
          <p className="text-gray-700 font-thin leading-relaxed">
            {content.solution || 'Overview of the solution implemented...'}
          </p>
        </div>
      </div>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-thin text-black mb-3">Results</h3>
          <p className="text-gray-700 font-thin leading-relaxed">
            {content.results || 'Measurable outcomes and impact achieved...'}
          </p>
        </div>
        
        {content.technologies && (
          <div>
            <h3 className="text-lg font-thin text-black mb-3">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {content.technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-thin"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );

  // Render research specific sections
  const renderResearchDetails = () => (
    <div className="mb-8 space-y-6">
      {content.abstract && (
        <div>
          <h3 className="text-lg font-thin text-black mb-3">Abstract</h3>
          <p className="text-gray-700 font-thin leading-relaxed bg-gray-50 p-4 rounded-lg">
            {content.abstract}
          </p>
        </div>
      )}
      
      <div className="grid md:grid-cols-2 gap-8">
        {content.methodology && (
          <div>
            <h3 className="text-lg font-thin text-black mb-3">Methodology</h3>
            <p className="text-gray-700 font-thin leading-relaxed">
              {content.methodology}
            </p>
          </div>
        )}
        
        {content.keywords && content.keywords.length > 0 && (
          <div>
            <h3 className="text-lg font-thin text-black mb-3">Keywords</h3>
            <div className="flex flex-wrap gap-2">
              {content.keywords.map((keyword, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-thin"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <article className="max-w-4xl mx-auto">
      {/* Back Button */}
      <div className="mb-8">
        <button
          onClick={onBack}
          className="inline-flex items-center text-sm font-thin text-gray-600 hover:text-black transition-colors"
        >
          <ArrowLeftIcon className="w-4 h-4 mr-2" />
          Back to {contentType === 'case-studies' ? 'case studies' : contentType}
        </button>
      </div>

      {/* Header */}
      <header className="mb-8">
        {/* Categories/Tags */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          {content.category && (
            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-thin">
              {content.category}
            </span>
          )}
          {content.industry && (
            <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-thin">
              {content.industry}
            </span>
          )}
          {content.featured && (
            <span className="px-3 py-1 bg-black text-white rounded-full text-sm font-thin">
              Featured
            </span>
          )}
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-thin text-black mb-6 leading-tight">
          {content.title}
        </h1>

        {/* Subtitle */}
        {content.subtitle && (
          <p className="text-xl font-thin text-gray-600 mb-6 leading-relaxed">
            {content.subtitle}
          </p>
        )}

        {/* Meta Information */}
        <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 font-thin">
          {content.author && (
            <div className="flex items-center space-x-2">
              <UserIcon className="w-4 h-4" />
              <span>{content.author}</span>
            </div>
          )}
          
          <div className="flex items-center space-x-2">
            <CalendarIcon className="w-4 h-4" />
            <time>{formatDate(content.date || content.publishedAt, 'medium')}</time>
          </div>
          
          {contentType === 'blog' && readingTime > 0 && (
            <div className="flex items-center space-x-2">
              <ClockIcon className="w-4 h-4" />
              <span>{readingTime} min read</span>
            </div>
          )}

          {contentType === 'case-studies' && content.client && (
            <div className="flex items-center space-x-2">
              <span className="font-medium">Client:</span>
              <span>{content.client}</span>
            </div>
          )}
        </div>
      </header>

      {/* Featured Image */}
      {content.image && (
        <div className="mb-8">
          <img 
            src={content.image} 
            alt={content.title}
            className="w-full h-auto rounded-lg shadow-sm"
          />
        </div>
      )}

      {/* Content Type Specific Details */}
      {contentType === 'case-studies' && renderCaseStudyDetails()}
      {contentType === 'research' && renderResearchDetails()}

      {/* Main Content */}
      <div className="mb-8">
        {renderContent()}
      </div>

      {/* Tags */}
      {content.tags && content.tags.length > 0 && (
        <div className="mb-8 pt-8 border-t border-gray-200">
          <div className="flex items-center space-x-2 mb-3">
            <TagIcon className="w-4 h-4 text-gray-400" />
            <span className="text-sm font-thin text-gray-600">Tags</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {content.tags.map((tag, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-gray-50 text-gray-600 rounded-full text-sm font-thin hover:bg-gray-100 transition-colors cursor-pointer"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Footer Actions */}
      <footer className="pt-8 border-t border-gray-200">
        <div className="flex items-center justify-between">
          <button
            onClick={onBack}
            className="px-6 py-2 border border-gray-200 rounded-full text-sm font-thin text-gray-600 hover:text-black hover:border-gray-300 transition-colors"
          >
            Back to List
          </button>
          
          <div className="flex items-center space-x-4">
            <button className="text-sm font-thin text-gray-600 hover:text-black transition-colors">
              Share
            </button>
            <button className="text-sm font-thin text-gray-600 hover:text-black transition-colors">
              Print
            </button>
          </div>
        </div>
      </footer>
    </article>
  );
};

export default ContentDetail;
import React from 'react';
import { getContentConfig, formatDate, calculateReadingTime } from '../../../utils/contentUtils';
import LoadingSpinner from '../../common/ui/LoadingSpinner';

const ContentCard = ({ item, contentType, onClick }) => {
  const config = getContentConfig(contentType);
  
  const handleClick = () => {
    onClick(item);
  };

  const readingTime = item.readingTime || calculateReadingTime(item.content || '');

  return (
    <article 
      className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg hover:border-gray-200 transition-all duration-300 cursor-pointer group"
      onClick={handleClick}
    >
      {/* Image */}
      {item.image && (
        <div className="aspect-video overflow-hidden bg-gray-50">
          <img 
            src={item.image} 
            alt={item.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      
      {/* Content */}
      <div className="p-6">
        {/* Header badges */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            {/* Category/Industry */}
            {config.showCategory && item.category && (
              <span className="px-2 py-1 text-xs font-thin bg-gray-100 text-gray-600 rounded-full">
                {item.category}
              </span>
            )}
            {config.showIndustry && item.industry && (
              <span className="px-2 py-1 text-xs font-thin bg-blue-50 text-blue-600 rounded-full">
                {item.industry}
              </span>
            )}
            {config.showMethodology && item.methodology && (
              <span className="px-2 py-1 text-xs font-thin bg-green-50 text-green-600 rounded-full">
                {item.methodology}
              </span>
            )}
            {item.featured && (
              <span className="px-2 py-1 text-xs font-thin bg-black text-white rounded-full">
                Featured
              </span>
            )}
          </div>
          
          {/* Reading time for blog */}
          {config.showReadingTime && readingTime > 0 && (
            <span className="text-xs text-gray-400 font-thin">
              {readingTime} min read
            </span>
          )}
        </div>

        {/* Title */}
        <h2 className="text-xl font-thin text-black mb-3 line-clamp-2 group-hover:text-gray-700 transition-colors">
          {item.title}
        </h2>

        {/* Excerpt/Description */}
        <p className="text-gray-600 font-thin text-sm leading-relaxed mb-4 line-clamp-3">
          {item.excerpt || item.description || item.summary}
        </p>

        {/* Case study specific fields */}
        {contentType === 'case-studies' && (
          <div className="space-y-2 mb-4">
            {config.showClient && item.client && (
              <div className="flex items-center text-sm">
                <span className="text-gray-500 font-thin mr-2">Client:</span>
                <span className="font-thin text-black">{item.client}</span>
              </div>
            )}
            {config.showResults && item.results && (
              <div className="flex items-center text-sm">
                <span className="text-gray-500 font-thin mr-2">Results:</span>
                <span className="font-thin text-green-600">{item.results}</span>
              </div>
            )}
          </div>
        )}

        {/* Research specific fields */}
        {contentType === 'research' && (
          <div className="space-y-2 mb-4">
            {config.showKeywords && item.keywords && (
              <div className="flex flex-wrap gap-1">
                {item.keywords.slice(0, 3).map((keyword, index) => (
                  <span 
                    key={index}
                    className="px-2 py-1 text-xs font-thin bg-gray-50 text-gray-600 rounded"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center space-x-3">
            {/* Author */}
            {config.showAuthor && item.author && (
              <div className="flex items-center space-x-2">
                {item.authorAvatar && (
                  <img 
                    src={item.authorAvatar} 
                    alt={item.author}
                    className="w-6 h-6 rounded-full"
                  />
                )}
                <span className="text-xs font-thin text-gray-600">{item.author}</span>
              </div>
            )}
          </div>
          
          {/* Date */}
          <time className="text-xs text-gray-400 font-thin">
            {formatDate(item.date || item.publishedAt, 'short')}
          </time>
        </div>

        {/* Tags */}
        {config.showTags && item.tags && item.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-3">
            {item.tags.slice(0, 4).map((tag, index) => (
              <span 
                key={index}
                className="px-2 py-1 text-xs font-thin text-gray-500 hover:text-black transition-colors"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
};

const ContentGrid = ({ items, loading, contentType, onItemClick }) => {
  const config = getContentConfig(contentType);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-16">
        <LoadingSpinner />
      </div>
    );
  }

  if (!items || items.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
        <h3 className="text-lg font-thin text-black mb-2">No content found</h3>
        <p className="text-gray-600 font-thin">Try adjusting your search criteria.</p>
      </div>
    );
  }

  return (
    <div className={`grid ${config.gridCols} gap-8`}>
      {items.map((item, index) => (
        <ContentCard
          key={item.id || item.slug || index}
          item={item}
          contentType={contentType}
          onClick={onItemClick}
        />
      ))}
    </div>
  );
};

export default ContentGrid;
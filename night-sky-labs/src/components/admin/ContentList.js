import React from 'react';

const ContentList = ({ content, loading, onEdit, onDelete }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'published':
        return 'bg-green-100 text-green-800';
      case 'draft':
        return 'bg-yellow-100 text-yellow-800';
      case 'scheduled':
        return 'bg-blue-100 text-blue-800';
      case 'archived':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getContentTypeIcon = (type) => {
    switch (type) {
      case 'blog':
        return '📝';
      case 'documentation':
        return '📚';
      case 'research':
        return '🔬';
      case 'case-study':
        return '📊';
      case 'help':
        return '❓';
      default:
        return '📄';
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'Not published';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const formatNumber = (num) => {
    if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}k`;
    }
    return num.toString();
  };

  if (loading) {
    return (
      <div className="space-y-4">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="animate-pulse">
              <div className="flex justify-between items-start mb-4">
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded w-48"></div>
                  <div className="h-3 bg-gray-200 rounded w-32"></div>
                </div>
                <div className="h-6 bg-gray-200 rounded-full w-20"></div>
              </div>
              <div className="h-3 bg-gray-200 rounded w-full mb-2"></div>
              <div className="h-3 bg-gray-200 rounded w-3/4"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (content.length === 0) {
    return (
      <div className="bg-white border border-gray-200 rounded-lg p-12 text-center">
        <div className="text-4xl mb-4">📝</div>
        <h3 className="text-lg font-thin text-black mb-2">No content found</h3>
        <p className="text-gray-600 font-thin">
          No content matches your current filters. Try adjusting your search criteria.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {content.map((item) => (
        <div
          key={item.id}
          className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
        >
          <div className="flex justify-between items-start mb-4">
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-3 mb-2">
                <span className="text-lg">{getContentTypeIcon(item.contentType)}</span>
                <h3 className="text-lg font-thin text-black truncate">
                  {item.title}
                </h3>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-thin ${getStatusColor(item.status)}`}
                >
                  {item.status}
                </span>
              </div>
              
              <p className="text-gray-600 font-thin text-sm mb-3 line-clamp-2">
                {item.excerpt}
              </p>
              
              <div className="flex items-center space-x-6 text-xs text-gray-500">
                <div className="flex items-center space-x-1">
                  <span>👤</span>
                  <span>{item.author.name}</span>
                </div>
                
                <div className="flex items-center space-x-1">
                  <span>📅</span>
                  <span>{formatDate(item.publishedAt)}</span>
                </div>
                
                <div className="flex items-center space-x-1">
                  <span>👁️</span>
                  <span>{formatNumber(item.views)} views</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-1">
                    <span>👍</span>
                    <span>{item.reactions.likes}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span>💡</span>
                    <span>{item.reactions.helpful}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span>🔖</span>
                    <span>{item.reactions.bookmarks}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-2 ml-4">
              <button
                onClick={() => onEdit(item)}
                className="p-2 text-gray-600 hover:text-black hover:bg-gray-100 rounded-lg transition-colors"
                title="Edit content"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </button>
              
              <button
                onClick={() => onDelete(item.id)}
                className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                title="Delete content"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
              
              <div className="flex items-center space-x-2">
                {item.productId !== 'general' && (
                  <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-thin">
                    {item.productId}
                  </span>
                )}
                
                <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-thin">
                  {item.category}
                </span>
              </div>
            </div>
          </div>
          
          {item.productId !== 'general' && item.sectionId && (
            <div className="text-xs text-gray-500 bg-gray-50 px-3 py-2 rounded-lg">
              Path: /docs/{item.productId}/{item.sectionId}{item.pageId ? `/${item.pageId}` : ''}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ContentList;
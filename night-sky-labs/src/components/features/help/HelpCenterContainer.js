import React, { useState, useEffect } from 'react';
import DOMPurify from 'dompurify';
import HelpCenterLayout from './HelpCenterLayout';
import { loadHelpPosts } from '../../../utils/markdownUtils';

// Help Center categories structure
const HELP_CATEGORIES = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    type: 'getting-started',
    subcategories: [
      { id: 'account-setup', title: 'Account Setup' },
      { id: 'first-steps', title: 'First Steps' },
      { id: 'basic-usage', title: 'Basic Usage' }
    ]
  },
  {
    id: 'troubleshooting',
    title: 'Troubleshooting',
    type: 'troubleshooting',
    subcategories: [
      { id: 'common-issues', title: 'Common Issues' },
      { id: 'error-messages', title: 'Error Messages' },
      { id: 'performance-issues', title: 'Performance Issues' }
    ]
  },
  {
    id: 'faq',
    title: 'Frequently Asked Questions',
    type: 'faq'
  },
  {
    id: 'billing',
    title: 'Billing & Account',
    type: 'billing',
    subcategories: [
      { id: 'subscription', title: 'Subscription Management' },
      { id: 'payment-issues', title: 'Payment Issues' },
      { id: 'refunds', title: 'Refunds & Cancellations' }
    ]
  },
  {
    id: 'contact',
    title: 'Contact Support',
    type: 'contact'
  }
];

const HelpArticleCard = ({ article, onArticleClick }) => {
  const getPriorityColor = (priority) => {
    switch (priority?.toLowerCase()) {
      case 'high': return 'bg-red-100 text-red-700 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'low': return 'bg-green-100 text-green-700 border-green-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <article 
      className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow cursor-pointer"
      onClick={() => onArticleClick && onArticleClick(article)}
    >
      {/* Article header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-thin text-black mb-2 leading-tight hover:text-gray-700 transition-colors">
            {article.title}
          </h3>
          
          {/* Tags and priority */}
          <div className="flex flex-wrap gap-2 mb-3">
            {article.priority && (
              <span className={`px-2 py-1 rounded-full text-xs font-thin border ${getPriorityColor(article.priority)}`}>
                {article.priority} Priority
              </span>
            )}
            {article.tags.slice(0, 3).map((tag, index) => (
              <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-thin">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      {/* Excerpt */}
      <p className="text-gray-600 font-thin mb-4 leading-relaxed line-clamp-2">
        {article.excerpt}
      </p>
      
      {/* Footer */}
      <div className="flex items-center justify-between text-sm font-thin text-gray-500">
        <div className="flex items-center space-x-4">
          <span>Updated {new Date(article.lastUpdated).toLocaleDateString()}</span>
          <span>•</span>
          <span>{article.readTime}</span>
        </div>
        <span className="text-black hover:text-gray-600 transition-colors">
          Read Article →
        </span>
      </div>
    </article>
  );
};

const HelpArticleContent = ({ article, onBack }) => {
  const createMarkup = (htmlContent) => {
    return { __html: DOMPurify.sanitize(htmlContent) };
  };

  return (
    <div className="max-w-4xl">
      {/* Back button */}
      <button
        onClick={onBack}
        className="flex items-center text-sm font-thin text-gray-600 hover:text-black transition-colors mb-6"
      >
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to Help Center
      </button>

      {/* Article header */}
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-thin text-black mb-4 leading-tight">
          {article.title}
        </h1>
        
        {/* Metadata */}
        <div className="flex flex-wrap items-center gap-4 text-sm font-thin text-gray-600 mb-6">
          <span>Last updated {new Date(article.lastUpdated).toLocaleDateString()}</span>
          <span>•</span>
          <span>{article.readTime}</span>
          <span>•</span>
          <span>{article.category}</span>
        </div>
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
        dangerouslySetInnerHTML={createMarkup(article.content)}
      />

      {/* Feedback section */}
      <footer className="mt-12 pt-8 border-t border-gray-200">
        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="text-lg font-thin text-black mb-4">Was this article helpful?</h3>
          <div className="flex items-center space-x-4 mb-4">
            <button className="px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors font-thin">
              👍 Yes, this helped
            </button>
            <button className="px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors font-thin">
              👎 No, needs improvement
            </button>
          </div>
          <p className="text-sm font-thin text-gray-600">
            Still need help? <button className="text-black hover:underline">Contact our support team</button>
          </p>
        </div>
      </footer>
    </div>
  );
};

const PopularArticles = ({ articles, onArticleClick }) => {
  return (
    <div className="bg-blue-50 rounded-lg p-6 mb-8">
      <h2 className="text-xl font-thin text-black mb-4">Popular Help Articles</h2>
      <div className="space-y-3">
        {articles.slice(0, 5).map((article) => (
          <button
            key={article.id}
            onClick={() => onArticleClick(article)}
            className="block w-full text-left p-3 bg-white rounded-lg hover:shadow-sm transition-shadow"
          >
            <h3 className="font-thin text-black mb-1">{article.title}</h3>
            <p className="text-sm text-gray-600 font-thin">{article.category}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

const HelpCenterContainer = () => {
  const [currentCategory, setCurrentCategory] = useState('getting-started');
  const [helpArticles, setHelpArticles] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchResults, setSearchResults] = useState(null);

  // Load help content
  useEffect(() => {
    const loadContent = async () => {
      try {
        const articles = await loadHelpPosts();
        setHelpArticles(articles);
      } catch (error) {
        console.error('Error loading help content:', error);
        setHelpArticles([]);
      } finally {
        setLoading(false);
      }
    };
    
    loadContent();
  }, []);

  // Get current content based on category or search
  const getCurrentContent = () => {
    if (searchResults) {
      return searchResults.results;
    }
    
    if (currentCategory === 'getting-started') {
      return helpArticles.filter(article => 
        article.category === 'Getting Started' || 
        article.tags.some(tag => tag.toLowerCase().includes('getting started'))
      );
    }
    
    return helpArticles.filter(article => 
      article.category === currentCategory ||
      article.tags.some(tag => tag.toLowerCase().includes(currentCategory.toLowerCase()))
    );
  };

  // Generate breadcrumb path
  const getBreadcrumbPath = () => {
    const path = [{ id: 'help', title: 'Help Center', onClick: () => setSelectedArticle(null) }];
    
    const category = HELP_CATEGORIES.find(cat => cat.id === currentCategory);
    if (category) {
      path.push({ id: category.id, title: category.title });
    }
    
    return path;
  };

  // Handle search
  const handleSearch = (query) => {
    if (!query.trim()) {
      setSearchResults(null);
      return;
    }
    
    const results = helpArticles.filter(article => 
      article.title.toLowerCase().includes(query.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(query.toLowerCase()) ||
      article.content.toLowerCase().includes(query.toLowerCase())
    );
    
    setSearchResults({ query, results });
  };

  // Handle category change
  const handleCategoryChange = (categoryId) => {
    setCurrentCategory(categoryId);
    setSelectedArticle(null);
    setSearchResults(null);
  };

  // Handle article selection
  const handleArticleSelect = (article) => {
    setSelectedArticle(article);
  };

  // Handle back to list
  const handleBackToList = () => {
    setSelectedArticle(null);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black mx-auto mb-4"></div>
          <p className="text-gray-600 font-thin">Loading help articles...</p>
        </div>
      </div>
    );
  }

  // If viewing individual article
  if (selectedArticle) {
    return (
      <HelpCenterLayout
        categories={HELP_CATEGORIES}
        currentCategory={currentCategory}
        onCategoryChange={handleCategoryChange}
        breadcrumbPath={getBreadcrumbPath()}
        onSearch={handleSearch}
        showQuickActions={false}
      >
        <HelpArticleContent
          article={selectedArticle}
          onBack={handleBackToList}
        />
      </HelpCenterLayout>
    );
  }

  const currentContent = getCurrentContent();
  const breadcrumbPath = getBreadcrumbPath();

  return (
    <HelpCenterLayout
      categories={HELP_CATEGORIES}
      currentCategory={currentCategory}
      onCategoryChange={handleCategoryChange}
      breadcrumbPath={breadcrumbPath}
      onSearch={handleSearch}
    >
      <div className="space-y-8">
        {/* Popular Articles */}
        {!searchResults && (
          <PopularArticles 
            articles={helpArticles}
            onArticleClick={handleArticleSelect}
          />
        )}

        {/* Results header */}
        <div>
          <h2 className="text-2xl font-thin text-black mb-2">
            {searchResults 
              ? `Search Results for "${searchResults.query}"` 
              : HELP_CATEGORIES.find(cat => cat.id === currentCategory)?.title || 'Help Articles'
            }
          </h2>
          <p className="text-gray-600 font-thin">
            {currentContent.length} {currentContent.length === 1 ? 'article' : 'articles'} found
          </p>
        </div>

        {/* Articles grid */}
        {currentContent.length > 0 ? (
          <div className="grid gap-6">
            {currentContent.map((article) => (
              <HelpArticleCard 
                key={article.id} 
                article={article} 
                onArticleClick={handleArticleSelect}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-4xl text-gray-300 mb-4">📄</div>
            <h3 className="text-xl font-thin text-gray-600 mb-2">No articles found</h3>
            <p className="text-gray-500 font-thin">Try adjusting your search or browse other categories</p>
          </div>
        )}
      </div>
    </HelpCenterLayout>
  );
};

export default HelpCenterContainer;
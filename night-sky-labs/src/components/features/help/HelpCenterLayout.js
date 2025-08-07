import React, { useState, useEffect } from 'react';
import { ChevronRightIcon, ChevronDownIcon, QuestionMarkCircleIcon, ExclamationTriangleIcon, CogIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';

const HelpCenterSidebar = ({ categories, currentCategory, onCategoryChange, className = "" }) => {
  const [expandedSections, setExpandedSections] = useState(new Set(['getting-started']));

  const toggleSection = (sectionId) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(sectionId)) {
      newExpanded.delete(sectionId);
    } else {
      newExpanded.add(sectionId);
    }
    setExpandedSections(newExpanded);
  };

  const getCategoryIcon = (type) => {
    switch (type) {
      case 'faq': return QuestionMarkCircleIcon;
      case 'troubleshooting': return ExclamationTriangleIcon;
      case 'getting-started': return CogIcon;
      case 'contact': return ChatBubbleLeftRightIcon;
      default: return QuestionMarkCircleIcon;
    }
  };

  return (
    <div className={`w-80 bg-gray-50 border-r border-gray-200 h-full overflow-y-auto ${className}`}>
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-xl font-thin text-black">Help Center</h2>
        <p className="text-sm font-thin text-gray-600 mt-2">Find answers and get support</p>
      </div>
      
      <nav className="p-4 space-y-2">
        {categories.map((category) => {
          const IconComponent = getCategoryIcon(category.type);
          const isExpanded = expandedSections.has(category.id);
          const hasSubcategories = category.subcategories && category.subcategories.length > 0;

          return (
            <div key={category.id}>
              <button
                onClick={() => {
                  if (hasSubcategories) {
                    toggleSection(category.id);
                  } else {
                    onCategoryChange(category.id);
                  }
                }}
                className={`w-full flex items-center justify-between p-3 rounded-lg text-left transition-colors ${
                  currentCategory === category.id
                    ? 'bg-black text-white'
                    : 'hover:bg-gray-100 text-gray-700'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <IconComponent className="w-5 h-5" />
                  <span className="font-thin">{category.title}</span>
                </div>
                {hasSubcategories && (
                  isExpanded ? 
                    <ChevronDownIcon className="w-4 h-4" /> : 
                    <ChevronRightIcon className="w-4 h-4" />
                )}
              </button>
              
              {hasSubcategories && isExpanded && (
                <div className="ml-8 mt-2 space-y-1">
                  {category.subcategories.map((subcategory) => (
                    <button
                      key={subcategory.id}
                      onClick={() => onCategoryChange(subcategory.id)}
                      className={`w-full text-left p-2 rounded-lg font-thin text-sm transition-colors ${
                        currentCategory === subcategory.id
                          ? 'bg-black text-white'
                          : 'hover:bg-gray-100 text-gray-600'
                      }`}
                    >
                      {subcategory.title}
                    </button>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </div>
  );
};

const HelpSearchBar = ({ onSearch, className = "" }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit} className={`relative ${className}`}>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search help articles..."
        className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent font-thin text-lg"
      />
      <button
        type="submit"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-black transition-colors"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </button>
    </form>
  );
};

const QuickActions = ({ className = "" }) => {
  const actions = [
    { id: 'contact', title: 'Contact Support', description: 'Get in touch with our team', icon: '📧' },
    { id: 'status', title: 'Service Status', description: 'Check system status', icon: '⚡' },
    { id: 'community', title: 'Community Forum', description: 'Join the discussion', icon: '👥' },
    { id: 'feedback', title: 'Give Feedback', description: 'Help us improve', icon: '💬' }
  ];

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ${className}`}>
      {actions.map((action) => (
        <button
          key={action.id}
          className="p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow text-left"
        >
          <div className="text-2xl mb-2">{action.icon}</div>
          <h3 className="font-medium text-black mb-1">{action.title}</h3>
          <p className="text-sm text-gray-600 font-thin">{action.description}</p>
        </button>
      ))}
    </div>
  );
};

const Breadcrumbs = ({ path, className = "" }) => {
  return (
    <nav className={`flex items-center space-x-2 text-sm font-thin text-gray-600 ${className}`}>
      {path.map((item, index) => (
        <React.Fragment key={item.id}>
          {index > 0 && <ChevronRightIcon className="w-4 h-4" />}
          <button
            onClick={item.onClick}
            className={`hover:text-black transition-colors ${
              index === path.length - 1 ? 'text-black font-medium' : ''
            }`}
            disabled={index === path.length - 1}
          >
            {item.title}
          </button>
        </React.Fragment>
      ))}
    </nav>
  );
};

const HelpCenterLayout = ({ 
  children, 
  categories, 
  currentCategory, 
  onCategoryChange,
  breadcrumbPath = [],
  onSearch = () => {},
  showQuickActions = true
}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="bg-white flex" style={{ minHeight: 'inherit' }}>
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <HelpCenterSidebar
        categories={categories}
        currentCategory={currentCategory}
        onCategoryChange={onCategoryChange}
        className={`fixed top-20 bottom-0 left-0 z-40 lg:static lg:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      />

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header with search */}
        <header className="bg-white border-b border-gray-200 px-6 py-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <Breadcrumbs path={breadcrumbPath} />
            </div>
          </div>
          
          <HelpSearchBar onSearch={onSearch} className="max-w-2xl mx-auto" />
          
          {showQuickActions && (
            <QuickActions className="mt-8" />
          )}
        </header>

        {/* Content area */}
        <main className="flex-1 px-6 py-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default HelpCenterLayout;
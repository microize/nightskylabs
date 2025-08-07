import React, { useState, useEffect } from 'react';
import { ChevronRightIcon, ChevronDownIcon, BookOpenIcon, CodeBracketIcon, RocketLaunchIcon, CogIcon, DocumentTextIcon, AcademicCapIcon, MicrophoneIcon } from '@heroicons/react/24/outline';
import { PRODUCT_DOCUMENTATION } from '../../../config/documentationStructure';

const ProductSidebar = ({ currentProduct, productId, sectionId, pageId, onSectionChange, className = "" }) => {
  const [expandedSections, setExpandedSections] = useState(new Set(['getting-started']));

  const toggleSection = (sectionKey) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(sectionKey)) {
      newExpanded.delete(sectionKey);
    } else {
      newExpanded.add(sectionKey);
    }
    setExpandedSections(newExpanded);
  };

  const getSectionIcon = (type) => {
    switch (type) {
      case 'guide': return BookOpenIcon;
      case 'reference': return CodeBracketIcon;
      case 'tutorial': return RocketLaunchIcon;
      default: return CogIcon;
    }
  };

  const getProductIcon = (productId) => {
    switch (productId) {
      case 'soul': return CodeBracketIcon;
      case 'voice': return MicrophoneIcon;
      case 'qurious': return AcademicCapIcon;
      default: return DocumentTextIcon;
    }
  };

  if (!currentProduct) {
    return (
      <div className={`w-80 bg-gray-50 border-r border-gray-200 h-full overflow-y-auto ${className}`}>
        <div className="p-6 text-center">
          <div className="animate-pulse">
            <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
            <div className="h-3 bg-gray-200 rounded w-1/2"></div>
          </div>
        </div>
      </div>
    );
  }

  const ProductIcon = getProductIcon(productId);

  return (
    <div className={`w-80 bg-gray-50 border-r border-gray-200 h-full overflow-y-auto ${className}`}>
      {/* Product Header */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center space-x-3 mb-3">
          <ProductIcon className="w-6 h-6 text-black" />
          <h2 className="text-xl font-thin text-black">{currentProduct.name}</h2>
        </div>
        <p className="text-sm font-thin text-gray-600">{currentProduct.description}</p>
      </div>
      
      {/* Navigation */}
      <nav className="p-4 space-y-2">
        {currentProduct.sections.map((section) => {
          const IconComponent = getSectionIcon(section.type);
          const isExpanded = expandedSections.has(section.id);
          const hasPages = section.pages && section.pages.length > 0;
          const isCurrentSection = sectionId === section.id;

          return (
            <div key={section.id}>
              <button
                onClick={() => {
                  if (hasPages) {
                    toggleSection(section.id);
                    // Navigate to first page if not already in this section
                    if (!isCurrentSection) {
                      onSectionChange(productId, section.id, section.pages[0].id);
                    }
                  } else {
                    onSectionChange(productId, section.id);
                  }
                }}
                className={`w-full flex items-center justify-between p-3 rounded-lg text-left transition-colors ${
                  isCurrentSection
                    ? 'bg-black text-white'
                    : 'text-gray-700 hover:bg-white hover:text-black'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <IconComponent className="w-4 h-4" />
                  <span className="font-thin text-sm">{section.title}</span>
                </div>
                {hasPages && (
                  isExpanded ? 
                    <ChevronDownIcon className="w-4 h-4" /> : 
                    <ChevronRightIcon className="w-4 h-4" />
                )}
              </button>

              {/* Pages/Subsections */}
              {hasPages && isExpanded && (
                <div className="ml-4 mt-2 space-y-1">
                  {section.pages.map((page) => {
                    const isCurrentPage = pageId === page.id;
                    
                    return (
                      <button
                        key={page.id}
                        onClick={() => onSectionChange(productId, section.id, page.id)}
                        className={`w-full text-left p-2 rounded-md text-sm font-thin transition-colors ${
                          isCurrentPage
                            ? 'bg-gray-900 text-white'
                            : 'text-gray-600 hover:bg-white hover:text-black'
                        }`}
                      >
                        {page.title}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      {/* Product Switcher */}
      <div className="mt-8 border-t border-gray-200 p-4">
        <h3 className="text-xs font-thin text-gray-500 uppercase tracking-wider mb-3">
          Other Products
        </h3>
        <div className="space-y-2">
          {Object.values(PRODUCT_DOCUMENTATION)
            .filter(product => product.id !== productId)
            .map((product) => {
              const Icon = getProductIcon(product.id);
              return (
                <button
                  key={product.id}
                  onClick={() => onSectionChange(product.id, 'getting-started', product.sections[0]?.pages?.[0]?.id)}
                  className="w-full flex items-center space-x-3 p-2 rounded-md text-left text-gray-600 hover:bg-white hover:text-black transition-colors"
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm font-thin">{product.name}</span>
                </button>
              );
            })}
        </div>
      </div>
    </div>
  );
};

const TableOfContents = ({ headings, className = "" }) => {
  const [activeHeading, setActiveHeading] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const headingElements = headings.map(heading => 
        document.getElementById(heading.id)
      ).filter(Boolean);

      const currentHeading = headingElements.find(element => {
        const rect = element.getBoundingClientRect();
        return rect.top >= 0 && rect.top <= window.innerHeight / 3;
      });

      if (currentHeading) {
        setActiveHeading(currentHeading.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [headings]);

  if (!headings || headings.length === 0) {
    return null;
  }

  return (
    <div className={`w-64 bg-white border-l border-gray-200 p-6 ${className}`}>
      <h3 className="text-sm font-thin text-black mb-4 uppercase tracking-wider">
        On This Page
      </h3>
      <nav className="space-y-2">
        {headings.map((heading) => (
          <a
            key={heading.id}
            href={`#${heading.id}`}
            className={`block text-sm font-thin transition-colors ${
              activeHeading === heading.id
                ? 'text-black font-medium'
                : 'text-gray-600 hover:text-black'
            }`}
            style={{
              paddingLeft: `${(heading.level - 1) * 12}px`
            }}
          >
            {heading.text}
          </a>
        ))}
      </nav>
    </div>
  );
};

const Breadcrumbs = ({ breadcrumbPath }) => {
  if (!breadcrumbPath || breadcrumbPath.length === 0) {
    return null;
  }

  return (
    <nav className="flex items-center space-x-2 text-sm font-thin text-gray-500 mb-6">
      {breadcrumbPath.map((item, index) => (
        <React.Fragment key={item.id || index}>
          {index > 0 && (
            <ChevronRightIcon className="w-4 h-4" />
          )}
          {item.href ? (
            <a
              href={item.href}
              className="hover:text-black transition-colors"
            >
              {item.title}
            </a>
          ) : (
            <span className={index === breadcrumbPath.length - 1 ? 'text-black' : ''}>
              {item.title}
            </span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search documentation..."
          className="w-full p-3 pl-10 border border-gray-300 rounded-lg font-thin text-sm focus:ring-2 focus:ring-black focus:border-transparent"
        />
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>
    </form>
  );
};

const DocumentationLayout = ({ 
  currentProduct, 
  productId, 
  sectionId, 
  pageId, 
  onSectionChange, 
  headings, 
  breadcrumbPath, 
  onSearch, 
  children 
}) => {
  return (
    <div className="flex h-full">
      {/* Sidebar */}
      <ProductSidebar
        currentProduct={currentProduct}
        productId={productId}
        sectionId={sectionId}
        pageId={pageId}
        onSectionChange={onSectionChange}
        className="fixed left-0 top-20 bottom-0 z-10"
      />

      {/* Main Content */}
      <div className="flex-1 ml-80">
        <div className="flex">
          {/* Content Area */}
          <div className="flex-1 max-w-4xl">
            <div className="p-8">
              <Breadcrumbs breadcrumbPath={breadcrumbPath} />
              <SearchBar onSearch={onSearch} />
              {children}
            </div>
          </div>

          {/* Table of Contents */}
          <TableOfContents
            headings={headings}
            className="fixed right-0 top-20 bottom-0 hidden xl:block"
          />
        </div>
      </div>
    </div>
  );
};

export default DocumentationLayout;
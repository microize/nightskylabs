import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const CategoryFilter = ({ 
  categories = ['All'], 
  selectedCategory = 'All', 
  onCategoryChange,
  contentType = 'blog'
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleCategoryClick = (category) => {
    onCategoryChange(category);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Get label based on content type
  const getFilterLabel = () => {
    switch (contentType) {
      case 'research':
        return 'Filter by methodology';
      case 'case-studies':
        return 'Filter by industry';
      default:
        return 'Filter by category';
    }
  };

  // Desktop horizontal filter (for small number of categories)
  const renderHorizontalFilter = () => (
    <div className="flex flex-wrap items-center justify-center gap-2">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => handleCategoryClick(category)}
          className={`px-4 py-2 rounded-full text-sm font-thin transition-all duration-200 ${
            selectedCategory === category
              ? 'bg-black text-white shadow-md'
              : 'bg-white text-gray-600 hover:text-black hover:bg-gray-50 border border-gray-200 hover:border-gray-300'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );

  // Dropdown filter (for large number of categories)
  const renderDropdownFilter = () => (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="inline-flex items-center justify-center w-full px-6 py-3 bg-white border border-gray-200 rounded-full text-sm font-thin text-gray-700 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-20 transition-all duration-200"
      >
        <span className="mr-2">{getFilterLabel()}</span>
        <span className="font-medium text-black">
          {selectedCategory}
        </span>
        <ChevronDownIcon 
          className={`ml-2 h-4 w-4 transition-transform duration-200 ${
            isDropdownOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {isDropdownOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-10"
            onClick={() => setIsDropdownOpen(false)}
          />
          
          {/* Dropdown Menu */}
          <div className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 z-20 max-h-80 overflow-y-auto">
            <div className="py-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryClick(category)}
                  className={`w-full text-left px-4 py-3 text-sm font-thin transition-colors flex items-center justify-between ${
                    selectedCategory === category
                      ? 'bg-black text-white'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-black'
                  }`}
                >
                  <span>{category}</span>
                  {selectedCategory === category && (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path 
                        fillRule="evenodd" 
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                        clipRule="evenodd" 
                      />
                    </svg>
                  )}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );

  // Show horizontal filter if 8 or fewer categories, otherwise use dropdown
  const shouldUseDropdown = categories.length > 8;

  return (
    <div className="flex flex-col items-center space-y-4">
      {/* Filter Label */}
      <div className="text-center">
        <p className="text-sm font-thin text-gray-600">
          {getFilterLabel()}
        </p>
      </div>

      {/* Filter Options */}
      <div className="w-full flex justify-center">
        {shouldUseDropdown ? renderDropdownFilter() : renderHorizontalFilter()}
      </div>

      {/* Active Filter Indicator */}
      {selectedCategory !== 'All' && (
        <div className="flex items-center space-x-2 text-xs text-gray-500">
          <span>Active filter:</span>
          <span className="font-medium text-black">{selectedCategory}</span>
          <button
            onClick={() => handleCategoryClick('All')}
            className="text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Clear filter"
          >
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path 
                fillRule="evenodd" 
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" 
                clipRule="evenodd" 
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default CategoryFilter;
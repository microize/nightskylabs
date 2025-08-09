import React, { useState, useEffect, useRef } from 'react';
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline';

const SearchBar = ({ 
  searchTerm, 
  onSearchChange, 
  placeholder = "Search content...",
  suggestions = [],
  showSuggestions = false 
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [showSuggestionsList, setShowSuggestionsList] = useState(false);
  const searchRef = useRef(null);
  const suggestionsRef = useRef(null);

  // Handle input change
  const handleInputChange = (e) => {
    const value = e.target.value;
    onSearchChange(value);
    setShowSuggestionsList(value.length > 0 && suggestions.length > 0);
  };

  // Handle clear search
  const handleClear = () => {
    onSearchChange('');
    setShowSuggestionsList(false);
    searchRef.current?.focus();
  };

  // Handle suggestion click
  const handleSuggestionClick = (suggestion) => {
    onSearchChange(suggestion);
    setShowSuggestionsList(false);
    searchRef.current?.blur();
  };

  // Handle focus
  const handleFocus = () => {
    setIsFocused(true);
    if (showSuggestions && searchTerm.length > 0 && suggestions.length > 0) {
      setShowSuggestionsList(true);
    }
  };

  // Handle blur
  const handleBlur = (e) => {
    // Delay hiding suggestions to allow clicking on them
    setTimeout(() => {
      if (!suggestionsRef.current?.contains(document.activeElement)) {
        setIsFocused(false);
        setShowSuggestionsList(false);
      }
    }, 200);
  };

  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      setShowSuggestionsList(false);
      searchRef.current?.blur();
    }
  };

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchRef.current && 
        !searchRef.current.contains(event.target) &&
        suggestionsRef.current && 
        !suggestionsRef.current.contains(event.target)
      ) {
        setShowSuggestionsList(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Search Input */}
      <div className={`relative transition-all duration-200 ${
        isFocused ? 'scale-105' : 'scale-100'
      }`}>
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <MagnifyingGlassIcon className={`h-5 w-5 transition-colors ${
            isFocused ? 'text-[#998664]' : 'text-gray-400'
          }`} />
        </div>
        
        <input
          ref={searchRef}
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className={`block w-full pl-12 pr-12 py-4 text-base font-thin rounded-full border-2 transition-all duration-200 bg-white ${
            isFocused 
              ? 'border-[#998664] shadow-lg focus:outline-none' 
              : 'border-gray-200 hover:border-gray-300 focus:outline-none focus:border-[#998664]'
          }`}
        />
        
        {/* Clear button */}
        {searchTerm && (
          <div className="absolute inset-y-0 right-0 pr-4 flex items-center">
            <button
              onClick={handleClear}
              className="p-1 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Clear search"
            >
              <XMarkIcon className="h-4 w-4 text-gray-400 hover:text-gray-600" />
            </button>
          </div>
        )}
      </div>

      {/* Search Suggestions */}
      {showSuggestions && showSuggestionsList && suggestions.length > 0 && (
        <div
          ref={suggestionsRef}
          className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-100 z-50 max-h-60 overflow-y-auto"
        >
          <div className="py-2">
            <div className="px-4 py-2 text-xs font-thin text-gray-500 uppercase tracking-wide">
              Suggestions
            </div>
            {suggestions.map((suggestion, index) => (
              <button
                key={index}
                onClick={() => handleSuggestionClick(suggestion)}
                className="w-full text-left px-4 py-2 text-sm font-thin text-gray-700 hover:bg-gray-50 hover:text-[#998664] transition-colors flex items-center space-x-2"
              >
                <MagnifyingGlassIcon className="h-4 w-4 text-gray-400" />
                <span>{suggestion}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Search Results Count Indicator */}
      {searchTerm && (
        <div className="absolute -bottom-8 left-0 right-0 text-center">
          <div className="inline-flex items-center space-x-2 text-xs text-gray-500">
            <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
            <span>Press Enter to search</span>
            <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
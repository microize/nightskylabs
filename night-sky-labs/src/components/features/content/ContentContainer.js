import React, { useState, useEffect, useMemo } from 'react';
import { 
  filterContentBySearch, 
  filterContentByCategory, 
  sortContentByDate, 
  paginateContent 
} from '../../../utils/contentUtils';
import SearchBar from './SearchBar';
import CategoryFilter from './CategoryFilter';
import ContentGrid from './ContentGrid';
import ContentDetail from './ContentDetail';
import Pagination from './Pagination';
import LoadingSpinner from '../../common/ui/LoadingSpinner';

const ContentContainer = ({ 
  contentType = 'blog', // 'blog', 'research', 'case-studies'
  loadContent,
  generateCategories,
  heroConfig = {}
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedContent, setSelectedContent] = useState(null);
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState([]);
  const [categories, setCategories] = useState(['All']);
  
  const itemsPerPage = contentType === 'case-studies' ? 4 : 6;

  // Load content on mount
  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const items = await loadContent();
        const cats = generateCategories(items);
        setContent(items);
        setCategories(cats);
      } catch (error) {
        console.error(`Error loading ${contentType} content:`, error);
        setContent([]);
        setCategories(['All']);
      } finally {
        setLoading(false);
      }
    };
    
    loadData();
  }, [loadContent, generateCategories, contentType]);

  // Filter and sort content
  const filteredContent = useMemo(() => {
    let items = [...content];
    
    // Apply search filter
    if (searchTerm) {
      items = filterContentBySearch(items, searchTerm);
    }
    
    // Apply category filter
    if (selectedCategory !== 'All') {
      items = filterContentByCategory(items, selectedCategory);
    }
    
    // Sort by date (newest first) or by featured status for case studies
    if (contentType === 'case-studies') {
      items = items.sort((a, b) => {
        // Featured items first, then by date
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return new Date(b.date) - new Date(a.date);
      });
    } else {
      items = sortContentByDate(items, false);
    }
    
    return items;
  }, [content, searchTerm, selectedCategory, contentType]);

  // Paginate filtered content
  const paginatedData = useMemo(() => {
    return paginateContent(filteredContent, currentPage, itemsPerPage);
  }, [filteredContent, currentPage, itemsPerPage]);

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory]);

  // Handle search
  const handleSearchChange = (term) => {
    setLoading(true);
    setSearchTerm(term);
    setTimeout(() => setLoading(false), 300);
  };

  // Handle category change
  const handleCategoryChange = (category) => {
    setLoading(true);
    setSelectedCategory(category);
    setTimeout(() => setLoading(false), 200);
  };

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle content selection
  const handleContentSelect = (item) => {
    setSelectedContent(item);
  };

  // Handle back to list
  const handleBackToList = () => {
    setSelectedContent(null);
  };

  // Get content type specific labels
  const getLabels = () => {
    switch (contentType) {
      case 'research':
        return {
          searchPlaceholder: 'Search research papers, authors, or topics...',
          itemLabel: 'papers',
          noResults: 'No research papers found'
        };
      case 'case-studies':
        return {
          searchPlaceholder: 'Search case studies, clients, or industries...',
          itemLabel: 'case studies',
          noResults: 'No case studies found'
        };
      default:
        return {
          searchPlaceholder: 'Search articles, authors, or tags...',
          itemLabel: 'articles',
          noResults: 'No articles found'
        };
    }
  };

  const labels = getLabels();

  // If viewing individual content
  if (selectedContent) {
    return (
      <ContentDetail 
        content={selectedContent} 
        contentType={contentType}
        onBack={handleBackToList} 
      />
    );
  }

  return (
    <div className="space-y-12">
      {/* Search and Filter Controls */}
      <div className="space-y-6">
        {/* Search Bar */}
        <SearchBar 
          searchTerm={searchTerm}
          onSearchChange={handleSearchChange}
          placeholder={labels.searchPlaceholder}
        />
        
        {/* Category Filter */}
        <CategoryFilter 
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
          contentType={contentType}
        />
      </div>

      {/* Results Summary */}
      <div className="text-center">
        <p className="text-sm font-thin text-gray-600">
          {loading ? 'Searching...' : `Showing ${paginatedData.items.length} of ${filteredContent.length} ${labels.itemLabel}`}
          {searchTerm && ` for "${searchTerm}"`}
          {selectedCategory !== 'All' && ` in ${selectedCategory}`}
        </p>
      </div>

      {/* Content Grid or No Results */}
      {filteredContent.length === 0 && !loading ? (
        <div className="text-center py-16">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h3 className="text-lg font-thin text-black mb-2">{labels.noResults}</h3>
          <p className="text-gray-600 font-thin">Try adjusting your search criteria or browse all categories.</p>
        </div>
      ) : (
        <>
          <ContentGrid 
            items={paginatedData.items}
            loading={loading}
            contentType={contentType}
            onItemClick={handleContentSelect}
          />

          {/* Pagination */}
          <Pagination 
            currentPage={paginatedData.currentPage}
            totalPages={paginatedData.totalPages}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </div>
  );
};

export default ContentContainer;
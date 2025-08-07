import { useState, useEffect, useMemo } from 'react';
import { 
  filterPostsBySearch, 
  filterPostsByCategory, 
  sortPostsByDate, 
  paginatePosts 
} from '../utils/blogUtils';

/**
 * Generic hook for managing content containers (blog, research, case studies, etc.)
 * Provides search, filtering, pagination, and post selection functionality
 */
export const useContentContainer = (posts, categories, config = {}) => {
  const {
    postsPerPage = 6,
    defaultSort = 'date-desc',
    enableSearch = true,
    enableFiltering = true,
    enablePagination = true
  } = config;

  // State management
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPost, setSelectedPost] = useState(null);
  const [loading, setLoading] = useState(false);

  // Filter and sort posts
  const filteredPosts = useMemo(() => {
    let processedPosts = [...posts];
    
    // Apply search filter
    if (enableSearch && searchTerm) {
      processedPosts = filterPostsBySearch(processedPosts, searchTerm);
    }
    
    // Apply category filter
    if (enableFiltering && selectedCategory !== 'All') {
      processedPosts = filterPostsByCategory(processedPosts, selectedCategory);
    }
    
    // Apply sorting
    switch (defaultSort) {
      case 'date-desc':
        processedPosts = sortPostsByDate(processedPosts, false);
        break;
      case 'date-asc':
        processedPosts = sortPostsByDate(processedPosts, true);
        break;
      case 'title':
        processedPosts.sort((a, b) => a.title.localeCompare(b.title));
        break;
      default:
        processedPosts = sortPostsByDate(processedPosts, false);
    }
    
    return processedPosts;
  }, [posts, searchTerm, selectedCategory, defaultSort, enableSearch, enableFiltering]);

  // Paginate filtered posts
  const paginatedData = useMemo(() => {
    if (!enablePagination) {
      return {
        posts: filteredPosts,
        totalPages: 1,
        currentPage: 1,
        totalPosts: filteredPosts.length,
        hasNextPage: false,
        hasPrevPage: false
      };
    }
    
    return paginatePosts(filteredPosts, currentPage, postsPerPage);
  }, [filteredPosts, currentPage, postsPerPage, enablePagination]);

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory]);

  // Event handlers
  const handleSearchChange = (term, delay = 300) => {
    setLoading(true);
    setSearchTerm(term);
    setTimeout(() => setLoading(false), delay);
  };

  const handleCategoryChange = (category, delay = 200) => {
    setLoading(true);
    setSelectedCategory(category);
    setTimeout(() => setLoading(false), delay);
  };

  const handlePageChange = (page, scrollToTop = true) => {
    setCurrentPage(page);
    if (scrollToTop) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePostSelect = (post) => {
    setSelectedPost(post);
  };

  const handleBackToList = () => {
    setSelectedPost(null);
  };

  // Computed properties
  const hasResults = paginatedData.posts.length > 0;
  const isFiltered = searchTerm || selectedCategory !== 'All';
  const resultsSummary = {
    showing: paginatedData.posts.length,
    total: filteredPosts.length,
    searchTerm,
    category: selectedCategory !== 'All' ? selectedCategory : null
  };

  return {
    // State
    searchTerm,
    selectedCategory,
    currentPage,
    selectedPost,
    loading,
    
    // Data
    posts: paginatedData.posts,
    totalPages: paginatedData.totalPages,
    totalPosts: paginatedData.totalPosts,
    hasNextPage: paginatedData.hasNextPage,
    hasPrevPage: paginatedData.hasPrevPage,
    categories,
    
    // Computed
    hasResults,
    isFiltered,
    resultsSummary,
    
    // Handlers
    handleSearchChange,
    handleCategoryChange,
    handlePageChange,
    handlePostSelect,
    handleBackToList,
    
    // Direct setters (for advanced use)
    setSearchTerm,
    setSelectedCategory,
    setCurrentPage,
    setSelectedPost,
    setLoading
  };
};
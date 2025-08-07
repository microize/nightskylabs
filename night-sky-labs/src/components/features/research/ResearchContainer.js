import React, { useState, useEffect, useMemo } from 'react';
import { loadResearchPosts, generateCategories } from '../../../utils/markdownUtils';
import { 
  filterPostsBySearch, 
  filterPostsByCategory, 
  sortPostsByDate, 
  paginatePosts 
} from '../../../utils/blogUtils';
import SearchBar from '../blog/SearchBar';
import CategoryFilter from '../blog/CategoryFilter';
import BlogGrid from '../blog/BlogGrid';
import BlogPost from '../blog/BlogPost';
import Pagination from '../blog/Pagination';

const ResearchContainer = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPost, setSelectedPost] = useState(null);
  const [loading, setLoading] = useState(false);
  const [researchPosts, setResearchPosts] = useState([]);
  const [researchCategories, setResearchCategories] = useState(['All']);
  
  const postsPerPage = 6;

  // Load content on mount
  useEffect(() => {
    const loadContent = async () => {
      setLoading(true);
      try {
        const posts = await loadResearchPosts();
        const cats = generateCategories(posts);
        setResearchPosts(posts);
        setResearchCategories(cats);
      } catch (error) {
        console.error('Error loading research content:', error);
        setResearchPosts([]);
        setResearchCategories(['All']);
      } finally {
        setLoading(false);
      }
    };
    
    loadContent();
  }, []);

  // Filter and sort posts
  const filteredPosts = useMemo(() => {
    let posts = [...researchPosts];
    
    // Apply search filter
    if (searchTerm) {
      posts = filterPostsBySearch(posts, searchTerm);
    }
    
    // Apply category filter
    if (selectedCategory !== 'All') {
      posts = filterPostsByCategory(posts, selectedCategory);
    }
    
    // Sort by date (newest first)
    posts = sortPostsByDate(posts, false);
    
    return posts;
  }, [searchTerm, selectedCategory]);

  // Paginate filtered posts
  const paginatedData = useMemo(() => {
    return paginatePosts(filteredPosts, currentPage, postsPerPage);
  }, [filteredPosts, currentPage]);

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

  // Handle post selection
  const handlePostSelect = (post) => {
    setSelectedPost(post);
  };

  // Handle back to list
  const handleBackToList = () => {
    setSelectedPost(null);
  };

  // If viewing individual post
  if (selectedPost) {
    return <BlogPost post={selectedPost} onBack={handleBackToList} />;
  }

  return (
    <div className="space-y-12">
      {/* Search and Filter Controls */}
      <div className="space-y-6">
        {/* Search Bar */}
        <SearchBar 
          searchTerm={searchTerm}
          onSearchChange={handleSearchChange}
          placeholder="Search research papers, authors, or topics..."
        />
        
        {/* Category Filter */}
        <CategoryFilter 
          categories={researchCategories}
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
        />
      </div>

      {/* Results Summary */}
      <div className="text-center">
        <p className="text-sm font-thin text-gray-600">
          {loading ? 'Searching...' : `Showing ${paginatedData.posts.length} of ${filteredPosts.length} research papers`}
          {searchTerm && ` for "${searchTerm}"`}
          {selectedCategory !== 'All' && ` in ${selectedCategory}`}
        </p>
      </div>

      {/* Research Grid */}
      <BlogGrid 
        posts={paginatedData.posts}
        loading={loading}
        onPostClick={handlePostSelect}
      />

      {/* Pagination */}
      <Pagination 
        currentPage={paginatedData.currentPage}
        totalPages={paginatedData.totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default ResearchContainer;
import React, { useState, useEffect, useMemo } from 'react';
import { loadDocumentation, generateCategories } from '../../../utils/markdownUtils';
import { 
  filterPostsBySearch, 
  filterPostsByCategory, 
  sortPostsByDate, 
  paginatePosts 
} from '../../../utils/blogUtils';
import SearchBar from '../blog/SearchBar';
import CategoryFilter from '../blog/CategoryFilter';
import BlogPost from '../blog/BlogPost';
import Pagination from '../blog/Pagination';

// Custom Documentation Card component
const DocumentationCard = ({ post, featured = false, onPostClick }) => {
  const cardClass = featured 
    ? "bg-white rounded-2xl shadow-lg overflow-hidden col-span-full lg:col-span-2 cursor-pointer hover:shadow-xl transition-shadow"
    : "bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow";

  const getDifficultyColor = (difficulty) => {
    switch(difficulty?.toLowerCase()) {
      case 'beginner': return 'bg-green-100 text-green-700';
      case 'intermediate': return 'bg-yellow-100 text-yellow-700';
      case 'advanced': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <article className={cardClass} onClick={() => onPostClick && onPostClick(post)}>
      {/* Icon Header */}
      <div className={`${featured ? 'h-64 md:h-80' : 'h-48'} bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center`}>
        <div className="text-center">
          <span className="text-6xl mb-4 block">📖</span>
          {post.difficulty && (
            <span className={`px-3 py-1 rounded-full text-xs font-thin ${getDifficultyColor(post.difficulty)}`}>
              {post.difficulty}
            </span>
          )}
        </div>
      </div>
      
      {/* Content */}
      <div className={`${featured ? 'p-8 md:p-12' : 'p-6'}`}>
        {/* Metadata */}
        <div className="flex flex-wrap gap-2 mb-4">
          {post.estimatedTime && (
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-thin">
              ⏱️ {post.estimatedTime}
            </span>
          )}
          {post.tags.slice(0, featured ? 3 : 2).map((tag, index) => (
            <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-thin">
              {tag}
            </span>
          ))}
        </div>
        
        {/* Title */}
        <h2 className={`${featured ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'} font-thin text-black mb-4 leading-tight hover:text-gray-700 transition-colors`}>
          {post.title}
        </h2>
        
        {/* Excerpt */}
        <p className={`${featured ? 'text-lg' : 'text-base'} font-thin text-gray-600 mb-6 leading-relaxed`}>
          {post.excerpt}
        </p>
        
        {/* Meta Information */}
        <div className="flex items-center text-sm font-thin text-gray-500 space-x-4 mb-6">
          <span>By {post.author}</span>
          <span>•</span>
          <span>{post.readTime}</span>
          <span>•</span>
          <span>{post.category}</span>
        </div>
        
        {/* Read More Button */}
        <div>
          <span className="text-blue-600 font-thin hover:text-blue-800 transition-colors text-sm uppercase tracking-wide">
            Read Guide
          </span>
        </div>
      </div>
    </article>
  );
};

// Custom Grid for Documentation
const DocumentationGrid = ({ posts, loading = false, onPostClick }) => {
  if (loading) {
    return <div>Loading...</div>;
  }

  if (!posts || posts.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="text-6xl text-gray-300 mb-4">📖</div>
        <h3 className="text-xl font-thin text-gray-600 mb-2">No documentation found</h3>
        <p className="text-gray-500 font-thin">Try adjusting your search or filter criteria</p>
      </div>
    );
  }

  const featuredPost = posts.find(post => post.featured);
  const regularPosts = posts.filter(post => !post.featured);

  return (
    <div className="space-y-8">
      {/* Featured Documentation */}
      {featuredPost && (
        <div className="mb-16">
          <DocumentationCard post={featuredPost} featured={true} onPostClick={onPostClick} />
        </div>
      )}

      {/* Regular Documentation Grid */}
      {regularPosts.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post) => (
            <DocumentationCard key={post.id} post={post} onPostClick={onPostClick} />
          ))}
        </div>
      )}
    </div>
  );
};

const DocumentationContainer = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPost, setSelectedPost] = useState(null);
  const [loading, setLoading] = useState(false);
  const [documentationPosts, setDocumentationPosts] = useState([]);
  const [documentationCategories, setDocumentationCategories] = useState(['All']);
  
  const postsPerPage = 6;

  // Filter and sort posts
  const filteredPosts = useMemo(() => {
    let posts = [...documentationPosts];
    
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

  // Load content on mount
  useEffect(() => {
    const loadContent = async () => {
      setLoading(true);
      try {
        const posts = await loadDocumentation();
        const cats = generateCategories(posts);
        setDocumentationPosts(posts);
        setDocumentationCategories(cats);
      } catch (error) {
        console.error('Error loading documentation content:', error);
        setDocumentationPosts([]);
        setDocumentationCategories(['All']);
      } finally {
        setLoading(false);
      }
    };
    
    loadContent();
  }, []);

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

  // If viewing individual documentation
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
          placeholder="Search guides, API references, and tutorials..."
        />
        
        {/* Category Filter */}
        <CategoryFilter 
          categories={documentationCategories}
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
        />
      </div>

      {/* Results Summary */}
      <div className="text-center">
        <p className="text-sm font-thin text-gray-600">
          {loading ? 'Searching...' : `Showing ${paginatedData.posts.length} of ${filteredPosts.length} guides`}
          {searchTerm && ` for "${searchTerm}"`}
          {selectedCategory !== 'All' && ` in ${selectedCategory}`}
        </p>
      </div>

      {/* Documentation Grid */}
      <DocumentationGrid 
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

export default DocumentationContainer;
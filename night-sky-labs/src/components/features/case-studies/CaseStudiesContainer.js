import React, { useState, useEffect, useMemo } from 'react';
import { loadCaseStudies, generateCategories } from '../../../utils/markdownUtils';
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

// Custom Case Study Card component that extends BlogCard with additional metadata
const CaseStudyCard = ({ post, featured = false, onPostClick }) => {
  const cardClass = featured 
    ? "bg-white rounded-2xl shadow-lg overflow-hidden col-span-full lg:col-span-2 cursor-pointer hover:shadow-xl transition-shadow"
    : "bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow";

  return (
    <article className={cardClass} onClick={() => onPostClick && onPostClick(post)}>
      {/* Hero Image */}
      {post.image ? (
        <div className={`${featured ? 'h-64 md:h-80' : 'h-48'} bg-gradient-to-br from-gray-100 to-gray-200 bg-cover bg-center`}
             style={{ backgroundImage: `url(/images/blog/${post.image})` }}>
        </div>
      ) : (
        <div className={`${featured ? 'h-64 md:h-80' : 'h-48'} bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center`}>
          <span className="text-4xl">📊</span>
        </div>
      )}
      
      {/* Content */}
      <div className={`${featured ? 'p-8 md:p-12' : 'p-6'}`}>
        {/* Case Study Metadata */}
        {post.client && (
          <div className="mb-4">
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-thin">
              {post.industry}
            </span>
          </div>
        )}
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.slice(0, featured ? 4 : 3).map((tag, index) => (
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
        
        {/* Results Preview */}
        {post.results && (
          <div className="mb-6">
            <h4 className="text-sm font-medium text-gray-800 mb-2">Key Results:</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              {post.results.slice(0, 2).map((result, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  {result}
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {/* Meta Information */}
        <div className="flex items-center text-sm font-thin text-gray-500 space-x-4 mb-6">
          <span>By {post.author}</span>
          <span>•</span>
          <span>{post.duration}</span>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>
        
        {/* Read More Button */}
        <div>
          <span className="text-black font-thin hover:text-gray-600 transition-colors text-sm uppercase tracking-wide">
            View Case Study
          </span>
        </div>
      </div>
    </article>
  );
};

// Custom Grid for Case Studies
const CaseStudyGrid = ({ posts, loading = false, onPostClick }) => {
  if (loading) {
    return <div>Loading...</div>; // Use existing BlogGrid loading state
  }

  if (!posts || posts.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="text-6xl text-gray-300 mb-4">📊</div>
        <h3 className="text-xl font-thin text-gray-600 mb-2">No case studies found</h3>
        <p className="text-gray-500 font-thin">Try adjusting your search or filter criteria</p>
      </div>
    );
  }

  const featuredPost = posts.find(post => post.featured);
  const regularPosts = posts.filter(post => !post.featured);

  return (
    <div className="space-y-8">
      {/* Featured Case Study */}
      {featuredPost && (
        <div className="mb-16">
          <CaseStudyCard post={featuredPost} featured={true} onPostClick={onPostClick} />
        </div>
      )}

      {/* Regular Case Studies Grid */}
      {regularPosts.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post) => (
            <CaseStudyCard key={post.id} post={post} onPostClick={onPostClick} />
          ))}
        </div>
      )}
    </div>
  );
};

const CaseStudiesContainer = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPost, setSelectedPost] = useState(null);
  const [loading, setLoading] = useState(false);
  const [caseStudyPosts, setCaseStudyPosts] = useState([]);
  const [caseStudyCategories, setCaseStudyCategories] = useState(['All']);
  
  const postsPerPage = 6;

  // Filter and sort posts
  const filteredPosts = useMemo(() => {
    let posts = [...caseStudyPosts];
    
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
        const posts = await loadCaseStudies();
        const cats = generateCategories(posts);
        setCaseStudyPosts(posts);
        setCaseStudyCategories(cats);
      } catch (error) {
        console.error('Error loading case study content:', error);
        setCaseStudyPosts([]);
        setCaseStudyCategories(['All']);
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

  // If viewing individual case study
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
          placeholder="Search case studies, industries, or solutions..."
        />
        
        {/* Category Filter */}
        <CategoryFilter 
          categories={caseStudyCategories}
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
        />
      </div>

      {/* Results Summary */}
      <div className="text-center">
        <p className="text-sm font-thin text-gray-600">
          {loading ? 'Searching...' : `Showing ${paginatedData.posts.length} of ${filteredPosts.length} case studies`}
          {searchTerm && ` for "${searchTerm}"`}
          {selectedCategory !== 'All' && ` in ${selectedCategory}`}
        </p>
      </div>

      {/* Case Studies Grid */}
      <CaseStudyGrid 
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

export default CaseStudiesContainer;
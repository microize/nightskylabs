import React, { useState, useEffect, useMemo } from 'react';
import { loadHelpPosts, generateCategories } from '../../../utils/markdownUtils';
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

// Custom Help Card component
const HelpCard = ({ post, featured = false, onPostClick }) => {
  const cardClass = featured 
    ? "bg-white rounded-2xl shadow-lg overflow-hidden col-span-full lg:col-span-2 cursor-pointer hover:shadow-xl transition-shadow"
    : "bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow";

  const getCategoryIcon = (category) => {
    switch(category?.toLowerCase()) {
      case 'faq': return '❓';
      case 'troubleshooting': return '🔧';
      case 'getting started': return '🚀';
      case 'account & billing': return '💳';
      case 'technical support': return '⚙️';
      default: return '📋';
    }
  };

  const getCategoryColor = (category) => {
    switch(category?.toLowerCase()) {
      case 'faq': return 'bg-blue-100 text-blue-700';
      case 'troubleshooting': return 'bg-orange-100 text-orange-700';
      case 'getting started': return 'bg-green-100 text-green-700';
      case 'account & billing': return 'bg-purple-100 text-purple-700';
      case 'technical support': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <article className={cardClass} onClick={() => onPostClick && onPostClick(post)}>
      {/* Icon Header */}
      <div className={`${featured ? 'h-64 md:h-80' : 'h-48'} bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center`}>
        <div className="text-center">
          <span className="text-6xl mb-4 block">{getCategoryIcon(post.category)}</span>
          <span className={`px-3 py-1 rounded-full text-xs font-thin ${getCategoryColor(post.category)}`}>
            {post.category}
          </span>
        </div>
      </div>
      
      {/* Content */}
      <div className={`${featured ? 'p-8 md:p-12' : 'p-6'}`}>
        {/* Quick Info */}
        <div className="flex flex-wrap gap-2 mb-4">
          {post.difficulty && (
            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-thin">
              📊 {post.difficulty}
            </span>
          )}
          {post.lastUpdated && (
            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-thin">
              🕐 Updated {new Date(post.lastUpdated).toLocaleDateString()}
            </span>
          )}
        </div>
        
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
        
        {/* Meta Information */}
        <div className="flex items-center text-sm font-thin text-gray-500 space-x-4 mb-6">
          <span>By {post.author}</span>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>
        
        {/* Read More Button */}
        <div>
          <span className="text-green-600 font-thin hover:text-green-800 transition-colors text-sm uppercase tracking-wide">
            Get Help
          </span>
        </div>
      </div>
    </article>
  );
};

// Custom Grid for Help Center
const HelpGrid = ({ posts, loading = false, onPostClick }) => {
  if (loading) {
    return <div>Loading...</div>;
  }

  if (!posts || posts.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="text-6xl text-gray-300 mb-4">❓</div>
        <h3 className="text-xl font-thin text-gray-600 mb-2">No help articles found</h3>
        <p className="text-gray-500 font-thin">Try adjusting your search or filter criteria</p>
        <div className="mt-6">
          <p className="text-sm text-gray-500 mb-4">Still need help?</p>
          <button className="bg-green-600 text-white px-6 py-2 rounded-full text-sm font-thin hover:bg-green-700 transition-colors">
            Contact Support
          </button>
        </div>
      </div>
    );
  }

  const featuredPost = posts.find(post => post.featured);
  const regularPosts = posts.filter(post => !post.featured);

  return (
    <div className="space-y-8">
      {/* Featured Help Article */}
      {featuredPost && (
        <div className="mb-16">
          <HelpCard post={featuredPost} featured={true} onPostClick={onPostClick} />
        </div>
      )}

      {/* Regular Help Articles Grid */}
      {regularPosts.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post) => (
            <HelpCard key={post.id} post={post} onPostClick={onPostClick} />
          ))}
        </div>
      )}
    </div>
  );
};

const HelpContainer = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPost, setSelectedPost] = useState(null);
  const [loading, setLoading] = useState(false);
  const [helpPosts, setHelpPosts] = useState([]);
  const [helpCategories, setHelpCategories] = useState(['All']);
  
  const postsPerPage = 6;

  // Filter and sort posts
  const filteredPosts = useMemo(() => {
    let posts = [...helpPosts];
    
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
        const posts = await loadHelpPosts();
        const cats = generateCategories(posts);
        setHelpPosts(posts);
        setHelpCategories(cats);
      } catch (error) {
        console.error('Error loading help content:', error);
        setHelpPosts([]);
        setHelpCategories(['All']);
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

  // If viewing individual help article
  if (selectedPost) {
    return <BlogPost post={selectedPost} onBack={handleBackToList} />;
  }

  return (
    <div className="space-y-12">
      {/* Quick Actions */}
      <div className="bg-green-50 rounded-2xl p-6 text-center">
        <h3 className="text-xl font-thin text-black mb-4">Need immediate assistance?</h3>
        <div className="flex flex-wrap gap-4 justify-center">
          <button className="bg-green-600 text-white px-6 py-2 rounded-full text-sm font-thin hover:bg-green-700 transition-colors">
            Live Chat
          </button>
          <button className="bg-white text-green-600 border border-green-600 px-6 py-2 rounded-full text-sm font-thin hover:bg-green-50 transition-colors">
            Email Support
          </button>
          <button className="bg-white text-green-600 border border-green-600 px-6 py-2 rounded-full text-sm font-thin hover:bg-green-50 transition-colors">
            Check Status
          </button>
        </div>
      </div>

      {/* Search and Filter Controls */}
      <div className="space-y-6">
        {/* Search Bar */}
        <SearchBar 
          searchTerm={searchTerm}
          onSearchChange={handleSearchChange}
          placeholder="Search FAQs, troubleshooting guides, and support articles..."
        />
        
        {/* Category Filter */}
        <CategoryFilter 
          categories={helpCategories}
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
        />
      </div>

      {/* Results Summary */}
      <div className="text-center">
        <p className="text-sm font-thin text-gray-600">
          {loading ? 'Searching...' : `Showing ${paginatedData.posts.length} of ${filteredPosts.length} help articles`}
          {searchTerm && ` for "${searchTerm}"`}
          {selectedCategory !== 'All' && ` in ${selectedCategory}`}
        </p>
      </div>

      {/* Help Grid */}
      <HelpGrid 
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

      {/* Additional Support */}
      <div className="bg-gray-50 rounded-2xl p-8 text-center">
        <h3 className="text-xl font-thin text-black mb-4">Still can't find what you're looking for?</h3>
        <p className="text-gray-600 font-thin mb-6">Our support team is here to help you get the most out of NightSkyLabs products.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-2xl mb-2">📧</div>
            <h4 className="font-thin text-black mb-1">Email Support</h4>
            <p className="text-sm text-gray-600">support@nightskylabs.com</p>
            <p className="text-xs text-gray-500">24 hour response</p>
          </div>
          <div className="text-center">
            <div className="text-2xl mb-2">💬</div>
            <h4 className="font-thin text-black mb-1">Live Chat</h4>
            <p className="text-sm text-gray-600">Mon-Fri 9 AM - 6 PM EST</p>
            <p className="text-xs text-gray-500">Instant support</p>
          </div>
          <div className="text-center">
            <div className="text-2xl mb-2">🎯</div>
            <h4 className="font-thin text-black mb-1">Priority Support</h4>
            <p className="text-sm text-gray-600">Pro & Enterprise plans</p>
            <p className="text-xs text-gray-500">2 hour response</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpContainer;
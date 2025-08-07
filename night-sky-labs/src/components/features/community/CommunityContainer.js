import React, { useState, useEffect } from 'react';
import CommunityLayout, { UserAvatar } from './CommunityLayout';
import { useCommunityStats } from '../../../hooks/useCommunityStats';
import { useAuth } from '../../../contexts/AuthContext';
import LoginModal from '../../auth/LoginModal';

// Community categories structure
const COMMUNITY_CATEGORIES = [
  {
    id: 'announcements',
    title: 'Announcements',
    description: 'Official updates',
    type: 'announcements'
  },
  {
    id: 'general',
    title: 'General Discussion',
    description: 'Chat about anything',
    type: 'general'
  },
  {
    id: 'technical',
    title: 'Technical Support',
    description: 'Get help with issues',
    type: 'technical',
    subcategories: [
      { id: 'soul-support', title: 'Soul CLI Support' },
      { id: 'voice-support', title: 'Voice Platform Support' },
      { id: 'qurious-support', title: 'Qurious Support' }
    ]
  },
  {
    id: 'ideas',
    title: 'Feature Requests',
    description: 'Suggest improvements',
    type: 'ideas'
  },
  {
    id: 'showcase',
    title: 'Show & Tell',
    description: 'Share your projects',
    type: 'general'
  }
];

// Mock community posts data
const MOCK_POSTS = [
  {
    id: 1,
    title: "Welcome to the NightSkyLabs Community!",
    content: "We're excited to launch our community forum where developers can connect, share ideas, and get support for our AI tools.",
    author: {
      id: 1,
      name: "Sarah Chen",
      role: "Community Manager",
      reputation: 245,
      avatar: null
    },
    category: "announcements",
    tags: ["welcome", "community", "announcement"],
    createdAt: "2025-01-15T10:00:00Z",
    replies: 8,
    views: 127,
    likes: 12,
    isPinned: true,
    isSolved: false,
    lastActivity: "2025-01-15T15:30:00Z"
  },
  {
    id: 2,
    title: "How to integrate Soul CLI with VS Code?",
    content: "I'm trying to set up Soul CLI with my VS Code workflow but having some issues with the extension. Has anyone successfully integrated it?",
    author: {
      id: 2,
      name: "Alex Rodriguez",
      role: "Developer",
      reputation: 89,
      avatar: null
    },
    category: "soul-support",
    tags: ["soul-cli", "vscode", "integration", "help"],
    createdAt: "2025-01-14T14:30:00Z",
    replies: 3,
    views: 47,
    likes: 5,
    isPinned: false,
    isSolved: true,
    lastActivity: "2025-01-15T09:15:00Z"
  },
  {
    id: 3,
    title: "Feature Request: Voice API batch processing",
    content: "It would be great to have batch processing capabilities in the Voice API for processing multiple interviews at once. This would really help with scalability.",
    author: {
      id: 3,
      name: "Maria Santos",
      role: "Product Manager",
      reputation: 156,
      avatar: null
    },
    category: "ideas",
    tags: ["voice-api", "feature-request", "batch-processing"],
    createdAt: "2025-01-14T11:20:00Z",
    replies: 6,
    views: 73,
    likes: 9,
    isPinned: false,
    isSolved: false,
    lastActivity: "2025-01-14T16:45:00Z"
  },
  {
    id: 4,
    title: "Built an AI-powered code reviewer using Soul CLI",
    content: "Just wanted to share my latest project - a code reviewer that uses Soul CLI's analysis features. It's been really helpful for our team's workflow!",
    author: {
      id: 4,
      name: "David Kim",
      role: "Senior Developer",
      reputation: 203,
      avatar: null
    },
    category: "showcase",
    tags: ["showcase", "soul-cli", "code-review", "project"],
    createdAt: "2025-01-13T16:45:00Z",
    replies: 4,
    views: 68,
    likes: 11,
    isPinned: false,
    isSolved: false,
    lastActivity: "2025-01-14T08:20:00Z"
  },
  {
    id: 5,
    title: "Qurious learning paths - best practices?",
    content: "What are some best practices for creating effective learning paths in Qurious? Looking for tips on content organization and student engagement.",
    author: {
      id: 5,
      name: "Jennifer Wu",
      role: "Educator",
      reputation: 127,
      avatar: null
    },
    category: "qurious-support",
    tags: ["qurious", "learning-paths", "best-practices", "education"],
    createdAt: "2025-01-13T09:30:00Z",
    replies: 2,
    views: 34,
    likes: 6,
    isPinned: false,
    isSolved: false,
    lastActivity: "2025-01-13T14:15:00Z"
  }
];

const PostCard = ({ post, onPostClick }) => {
  const formatTimeAgo = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor((now - date) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours}h ago`;
    return `${Math.floor(diffInHours / 24)}d ago`;
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'announcements': return 'bg-blue-100 text-blue-800';
      case 'technical': return 'bg-red-100 text-red-800';
      case 'ideas': return 'bg-yellow-100 text-yellow-800';
      case 'showcase': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <article 
      className={`bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow cursor-pointer ${
        post.isPinned ? 'border-blue-200 bg-blue-50' : ''
      }`}
      onClick={() => onPostClick && onPostClick(post)}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3 flex-1">
          <UserAvatar user={post.author} size="md" />
          <div className="flex-1 min-w-0">
            <div className="flex items-center space-x-2 mb-1">
              <h3 className="font-thin text-black text-lg leading-tight hover:text-gray-700 transition-colors line-clamp-2">
                {post.isPinned && <span className="text-blue-600 mr-2">📌</span>}
                {post.title}
              </h3>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600 font-thin">
              <span>{post.author.name}</span>
              <span>•</span>
              <span className={`px-2 py-0.5 rounded-full text-xs ${getCategoryColor(post.category)}`}>
                {post.category.replace('-', ' ')}
              </span>
              <span>•</span>
              <span>{formatTimeAgo(post.createdAt)}</span>
            </div>
          </div>
        </div>
        
        {post.isSolved && (
          <div className="flex-shrink-0">
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
              ✓ Solved
            </span>
          </div>
        )}
      </div>

      {/* Content preview */}
      <p className="text-gray-600 font-thin mb-4 leading-relaxed line-clamp-2">
        {post.content}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {post.tags.slice(0, 4).map((tag, index) => (
          <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-thin">
            #{tag}
          </span>
        ))}
      </div>

      {/* Stats */}
      <div className="flex items-center justify-between text-sm text-gray-500 font-thin">
        <div className="flex items-center space-x-4">
          <span className="flex items-center space-x-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <span>{post.replies}</span>
          </span>
          <span className="flex items-center space-x-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            <span>{post.views}</span>
          </span>
          <span className="flex items-center space-x-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <span>{post.likes}</span>
          </span>
        </div>
        <span>Last activity {formatTimeAgo(post.lastActivity)}</span>
      </div>
    </article>
  );
};

const PostDetail = ({ post, onBack }) => {
  return (
    <div className="max-w-4xl">
      {/* Back button */}
      <button
        onClick={onBack}
        className="flex items-center text-sm font-thin text-gray-600 hover:text-black transition-colors mb-6"
      >
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to Community
      </button>

      {/* Post header */}
      <header className="mb-8">
        <div className="flex items-center space-x-4 mb-4">
          {post.isPinned && <span className="text-blue-600 text-xl">📌</span>}
          <h1 className="text-3xl md:text-4xl font-thin text-black leading-tight flex-1">
            {post.title}
          </h1>
          {post.isSolved && (
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-green-100 text-green-800">
              ✓ Solved
            </span>
          )}
        </div>
        
        <div className="flex items-center space-x-4">
          <UserAvatar user={post.author} size="lg" />
          <div>
            <div className="flex items-center space-x-2 mb-1">
              <span className="font-medium text-black">{post.author.name}</span>
              <span className="text-sm text-gray-500 font-thin">•</span>
              <span className="text-sm text-gray-500 font-thin">{post.author.role}</span>
            </div>
            <div className="text-sm text-gray-500 font-thin">
              Posted {new Date(post.createdAt).toLocaleDateString()}
            </div>
          </div>
        </div>
      </header>

      {/* Post content */}
      <article className="prose prose-lg max-w-none font-thin mb-8
        prose-headings:font-thin prose-headings:text-black
        prose-p:text-gray-600 prose-p:leading-relaxed">
        <p>{post.content}</p>
      </article>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-8">
        {post.tags.map((tag, index) => (
          <span key={index} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-thin">
            #{tag}
          </span>
        ))}
      </div>

      {/* Engagement actions */}
      <div className="border-t border-gray-200 pt-6">
        <div className="flex items-center space-x-6">
          <button className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-black hover:bg-gray-100 rounded-lg transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <span className="font-thin">{post.likes} Likes</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-black hover:bg-gray-100 rounded-lg transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <span className="font-thin">{post.replies} Replies</span>
          </button>
        </div>
      </div>
    </div>
  );
};

const CommunityContainer = () => {
  const [currentCategory, setCurrentCategory] = useState('general');
  const [selectedPost, setSelectedPost] = useState(null);
  const [activeTab, setActiveTab] = useState('recent');
  const [searchResults, setSearchResults] = useState(null);
  const [posts, setPosts] = useState(MOCK_POSTS);
  const [showLoginModal, setShowLoginModal] = useState(false);
  
  // Get dynamic community stats and auth state
  const { stats: communityStats, isLoading: statsLoading } = useCommunityStats();
  const { user, isAuthenticated } = useAuth();

  // Get current content based on category, tab, or search
  const getCurrentContent = () => {
    let filteredPosts = [...posts];
    
    if (searchResults) {
      return searchResults.results;
    }
    
    // Filter by category
    if (currentCategory !== 'general') {
      filteredPosts = filteredPosts.filter(post => 
        post.category === currentCategory ||
        post.tags.some(tag => tag.toLowerCase().includes(currentCategory.toLowerCase()))
      );
    }
    
    // Sort by tab
    switch (activeTab) {
      case 'trending':
        filteredPosts.sort((a, b) => (b.likes + b.replies) - (a.likes + a.replies));
        break;
      case 'unanswered':
        filteredPosts = filteredPosts.filter(post => !post.isSolved && post.replies === 0);
        break;
      case 'solved':
        filteredPosts = filteredPosts.filter(post => post.isSolved);
        break;
      default: // recent
        filteredPosts.sort((a, b) => new Date(b.lastActivity) - new Date(a.lastActivity));
    }
    
    return filteredPosts;
  };

  // Generate breadcrumb path
  const getBreadcrumbPath = () => {
    const path = [{ id: 'community', title: 'Community', onClick: () => setSelectedPost(null) }];
    
    const category = COMMUNITY_CATEGORIES.find(cat => cat.id === currentCategory);
    if (category) {
      path.push({ id: category.id, title: category.title });
    }
    
    return path;
  };

  // Handle search
  const handleSearch = (query) => {
    if (!query.trim()) {
      setSearchResults(null);
      return;
    }
    
    const results = posts.filter(post => 
      post.title.toLowerCase().includes(query.toLowerCase()) ||
      post.content.toLowerCase().includes(query.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
    );
    
    setSearchResults({ query, results });
  };

  // Handle category change
  const handleCategoryChange = (categoryId) => {
    setCurrentCategory(categoryId);
    setSelectedPost(null);
    setSearchResults(null);
  };

  // Handle post selection
  const handlePostSelect = (post) => {
    setSelectedPost(post);
  };

  // Handle back to list
  const handleBackToList = () => {
    setSelectedPost(null);
  };

  // Handle new post
  const handleNewPost = () => {
    if (isAuthenticated) {
      // Create a new post with user data
      const newPost = {
        id: posts.length + 1,
        title: `New post by ${user.name}`,
        content: "This is a sample post created by an authenticated user. In a real implementation, this would open a post creation modal.",
        author: {
          id: user.id,
          name: user.name,
          role: "Community Member",
          reputation: 1,
          avatar: user.picture
        },
        category: currentCategory,
        tags: ["new", "sample"],
        createdAt: new Date().toISOString(),
        replies: 0,
        views: 1,
        likes: 0,
        isPinned: false,
        isSolved: false,
        lastActivity: new Date().toISOString()
      };
      
      setPosts([newPost, ...posts]);
      alert(`New post created by ${user.name}! In a real app, this would open a post creation form.`);
    } else {
      setShowLoginModal(true);
    }
  };

  // If viewing individual post
  if (selectedPost) {
    return (
      <CommunityLayout
        categories={COMMUNITY_CATEGORIES}
        currentCategory={currentCategory}
        onCategoryChange={handleCategoryChange}
        breadcrumbPath={getBreadcrumbPath()}
        onSearch={handleSearch}
        onNewPost={handleNewPost}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        userStats={communityStats}
      >
        <PostDetail
          post={selectedPost}
          onBack={handleBackToList}
        />
      </CommunityLayout>
    );
  }

  const currentContent = getCurrentContent();
  const breadcrumbPath = getBreadcrumbPath();

  return (
    <CommunityLayout
      categories={COMMUNITY_CATEGORIES}
      currentCategory={currentCategory}
      onCategoryChange={handleCategoryChange}
      breadcrumbPath={breadcrumbPath}
      onSearch={handleSearch}
      onNewPost={handleNewPost}
      activeTab={activeTab}
      onTabChange={setActiveTab}
      userStats={communityStats}
    >
      <div className="space-y-6">
        {/* Results header */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-thin text-black">
              {searchResults 
                ? `Search Results for "${searchResults.query}"` 
                : COMMUNITY_CATEGORIES.find(cat => cat.id === currentCategory)?.title || 'All Discussions'
              }
            </h2>
            <p className="text-gray-600 font-thin">
              {currentContent.length} {currentContent.length === 1 ? 'post' : 'posts'} found
            </p>
          </div>
        </div>

        {/* Posts list */}
        {currentContent.length > 0 ? (
          <div className="space-y-4">
            {currentContent.map((post) => (
              <PostCard 
                key={post.id} 
                post={post} 
                onPostClick={handlePostSelect}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-4xl text-gray-300 mb-4">💬</div>
            <h3 className="text-xl font-thin text-gray-600 mb-2">No posts found</h3>
            <p className="text-gray-500 font-thin mb-4">Be the first to start a conversation!</p>
            <button 
              onClick={handleNewPost}
              className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-thin"
            >
              Create New Post
            </button>
          </div>
        )}
      </div>
      
      {/* Login Modal */}
      <LoginModal 
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        title="Sign in to participate in discussions"
      />
    </CommunityLayout>
  );
};

export default CommunityContainer;
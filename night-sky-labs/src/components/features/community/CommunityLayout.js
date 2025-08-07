import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ChevronRightIcon, ChevronDownIcon, UsersIcon, ChatBubbleLeftRightIcon, LightBulbIcon, CodeBracketIcon, MegaphoneIcon } from '@heroicons/react/24/outline';
import { useAuth } from '../../../contexts/AuthContext';
import communityService from '../../../services/communityService';

const CommunitySidebar = ({ categories, currentCategory, onCategoryChange, userStats, className = "" }) => {
  const [expandedSections, setExpandedSections] = useState(new Set(['discussions']));

  const toggleSection = (sectionId) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(sectionId)) {
      newExpanded.delete(sectionId);
    } else {
      newExpanded.add(sectionId);
    }
    setExpandedSections(newExpanded);
  };

  const getCategoryIcon = (type) => {
    switch (type) {
      case 'general': return ChatBubbleLeftRightIcon;
      case 'ideas': return LightBulbIcon;
      case 'technical': return CodeBracketIcon;
      case 'announcements': return MegaphoneIcon;
      default: return UsersIcon;
    }
  };

  const getCategoryColor = (type) => {
    switch (type) {
      case 'announcements': return 'text-blue-600 bg-blue-50';
      case 'technical': return 'text-green-600 bg-green-50';
      case 'ideas': return 'text-yellow-600 bg-yellow-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className={`w-80 bg-gray-50 border-r border-gray-200 h-full overflow-y-auto ${className}`}>
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-xl font-thin text-black">Community</h2>
        <p className="text-sm font-thin text-gray-600 mt-2">Connect with developers and users</p>
      </div>

      {/* User Stats */}
      <div className="p-4 border-b border-gray-200">
        <div className="bg-white rounded-lg p-4">
          <h3 className="text-sm font-medium text-black mb-3">Community Stats</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600 font-thin">Active Members</span>
              <span className="font-medium">{communityService.formatNumber(userStats?.activeMembers || 0)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 font-thin">Total Posts</span>
              <span className="font-medium">{communityService.formatNumber(userStats?.totalPosts || 0)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 font-thin">Online Now</span>
              <span className="font-medium text-green-600">{userStats?.onlineNow || 0}</span>
            </div>
          </div>
        </div>
      </div>
      
      <nav className="p-4 space-y-2">
        {categories.map((category) => {
          const IconComponent = getCategoryIcon(category.type);
          const isExpanded = expandedSections.has(category.id);
          const hasSubcategories = category.subcategories && category.subcategories.length > 0;
          const colorClass = getCategoryColor(category.type);

          return (
            <div key={category.id}>
              <button
                onClick={() => {
                  if (hasSubcategories) {
                    toggleSection(category.id);
                  } else {
                    onCategoryChange(category.id);
                  }
                }}
                className={`w-full flex items-center justify-between p-3 rounded-lg text-left transition-colors ${
                  currentCategory === category.id
                    ? 'bg-black text-white'
                    : 'hover:bg-gray-100 text-gray-700'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg ${currentCategory === category.id ? 'bg-white bg-opacity-20' : colorClass}`}>
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-thin">{category.title}</span>
                    <div className="text-xs text-gray-500 font-thin">{category.description}</div>
                  </div>
                </div>
                {hasSubcategories && (
                  isExpanded ? 
                    <ChevronDownIcon className="w-4 h-4" /> : 
                    <ChevronRightIcon className="w-4 h-4" />
                )}
              </button>
              
              {hasSubcategories && isExpanded && (
                <div className="ml-6 mt-2 space-y-1">
                  {category.subcategories.map((subcategory) => (
                    <button
                      key={subcategory.id}
                      onClick={() => onCategoryChange(subcategory.id)}
                      className={`w-full text-left p-2 rounded-lg font-thin text-sm transition-colors ${
                        currentCategory === subcategory.id
                          ? 'bg-black text-white'
                          : 'hover:bg-gray-100 text-gray-600'
                      }`}
                    >
                      {subcategory.title}
                    </button>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </div>
  );
};

const CommunityHeader = ({ onSearch, onNewPost, className = "" }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  const handleNewPost = () => {
    if (isAuthenticated) {
      onNewPost();
    } else {
      // Navigate to sign in page with current location as redirect
      navigate('/signin', { state: { from: location.pathname } });
    }
  };

  return (
    <header className={`bg-white border-b border-gray-200 px-6 py-6 ${className}`}>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-thin text-black">Community Forum</h1>
          <p className="text-gray-600 font-thin">Join the conversation with fellow developers</p>
        </div>
        <button
          onClick={handleNewPost}
          className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-thin"
        >
          New Post
        </button>
      </div>
      
      <form onSubmit={handleSubmit} className="relative max-w-md">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search discussions..."
          className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent font-thin"
        />
        <button
          type="submit"
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-black transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </form>
      
    </header>
  );
};

const CommunityTabs = ({ activeTab, onTabChange, className = "" }) => {
  const tabs = [
    { id: 'recent', label: 'Recent', icon: '🔥' },
    { id: 'trending', label: 'Trending', icon: '📈' },
    { id: 'unanswered', label: 'Unanswered', icon: '❓' },
    { id: 'solved', label: 'Solved', icon: '✅' }
  ];

  return (
    <div className={`border-b border-gray-200 ${className}`}>
      <nav className="flex space-x-6 px-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`py-4 px-2 border-b-2 font-thin transition-colors flex items-center space-x-2 ${
              activeTab === tab.id
                ? 'border-black text-black'
                : 'border-transparent text-gray-500 hover:text-black hover:border-gray-300'
            }`}
          >
            <span>{tab.icon}</span>
            <span>{tab.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};

const UserAvatar = ({ user, size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-6 h-6 text-xs',
    md: 'w-10 h-10 text-sm',
    lg: 'w-12 h-12 text-base'
  };

  return (
    <div className={`${sizeClasses[size]} bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-medium`}>
      {user?.avatar ? (
        <img src={user.avatar} alt={user.name} className="w-full h-full rounded-full object-cover" />
      ) : (
        user?.name?.charAt(0).toUpperCase() || '?'
      )}
    </div>
  );
};

const Breadcrumbs = ({ path, className = "" }) => {
  return (
    <nav className={`flex items-center space-x-2 text-sm font-thin text-gray-600 mb-4 ${className}`}>
      {path.map((item, index) => (
        <React.Fragment key={item.id}>
          {index > 0 && <ChevronRightIcon className="w-4 h-4" />}
          <button
            onClick={item.onClick}
            className={`hover:text-black transition-colors ${
              index === path.length - 1 ? 'text-black font-medium' : ''
            }`}
            disabled={index === path.length - 1}
          >
            {item.title}
          </button>
        </React.Fragment>
      ))}
    </nav>
  );
};

const CommunityLayout = ({ 
  children, 
  categories, 
  currentCategory, 
  onCategoryChange,
  breadcrumbPath = [],
  onSearch = () => {},
  onNewPost = () => {},
  activeTab = 'recent',
  onTabChange = () => {},
  userStats = {}
}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="bg-white flex" style={{ minHeight: 'inherit' }}>
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <CommunitySidebar
        categories={categories}
        currentCategory={currentCategory}
        onCategoryChange={onCategoryChange}
        userStats={userStats}
        className={`fixed top-20 bottom-0 left-0 z-40 lg:static lg:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      />

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <CommunityHeader 
          onSearch={onSearch} 
          onNewPost={onNewPost}
        />

        {/* Mobile menu button and breadcrumbs */}
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="flex items-center space-x-4 mb-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <Breadcrumbs path={breadcrumbPath} />
          </div>
        </div>

        {/* Tabs */}
        <CommunityTabs 
          activeTab={activeTab} 
          onTabChange={onTabChange}
        />

        {/* Content area */}
        <main className="flex-1 px-6 py-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default CommunityLayout;
export { UserAvatar };
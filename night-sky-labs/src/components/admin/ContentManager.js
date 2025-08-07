import React, { useState, useEffect } from 'react';
import ContentEditor from './ContentEditor';
import ContentList from './ContentList';
import { PRODUCT_DOCUMENTATION } from '../../config/documentationStructure';

const ContentManager = () => {
  const [view, setView] = useState('list'); // 'list' or 'editor'
  const [selectedContent, setSelectedContent] = useState(null);
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    contentType: '',
    productId: '',
    status: '',
    search: ''
  });

  // Mock API call - replace with actual API
  useEffect(() => {
    const fetchContent = async () => {
      setLoading(true);
      try {
        // Simulated API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Mock data
        const mockContent = [
          {
            id: '1',
            title: 'Soul CLI Getting Started',
            slug: 'soul-cli-getting-started',
            contentType: 'documentation',
            productId: 'soul',
            sectionId: 'getting-started',
            pageId: 'installation',
            status: 'published',
            category: 'Guide',
            excerpt: 'Learn how to install and set up Soul CLI for AI-powered development.',
            author: { name: 'John Doe', email: 'john@nightskylabs.com' },
            publishedAt: '2024-01-15T10:00:00Z',
            views: 1250,
            reactions: { likes: 45, helpful: 32, bookmarks: 18 }
          },
          {
            id: '2',
            title: 'AI Ethics in Practice',
            slug: 'ai-ethics-practice',
            contentType: 'blog',
            productId: 'general',
            status: 'published',
            category: 'Ethics',
            excerpt: 'Exploring practical applications of AI ethics in modern development.',
            author: { name: 'Jane Smith', email: 'jane@nightskylabs.com' },
            publishedAt: '2024-01-10T14:30:00Z',
            views: 2100,
            reactions: { likes: 78, helpful: 56, bookmarks: 34 }
          },
          {
            id: '3',
            title: 'Voice Platform API Reference',
            slug: 'voice-platform-api',
            contentType: 'documentation',
            productId: 'voice',
            sectionId: 'api-reference',
            pageId: 'authentication',
            status: 'draft',
            category: 'API Reference',
            excerpt: 'Complete API reference for Voice Platform authentication.',
            author: { name: 'Mike Johnson', email: 'mike@nightskylabs.com' },
            publishedAt: null,
            views: 0,
            reactions: { likes: 0, helpful: 0, bookmarks: 0 }
          }
        ];

        setContent(mockContent);
      } catch (error) {
        console.error('Error fetching content:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, []);

  const handleCreateNew = () => {
    setSelectedContent(null);
    setView('editor');
  };

  const handleEditContent = (contentItem) => {
    setSelectedContent(contentItem);
    setView('editor');
  };

  const handleBackToList = () => {
    setView('list');
    setSelectedContent(null);
  };

  const handleSaveContent = async (contentData) => {
    try {
      // Mock API call to save content
      console.log('Saving content:', contentData);
      
      if (selectedContent) {
        // Update existing content
        setContent(prev => prev.map(item => 
          item.id === selectedContent.id 
            ? { ...item, ...contentData, lastModified: new Date().toISOString() }
            : item
        ));
      } else {
        // Create new content
        const newContent = {
          id: Date.now().toString(),
          ...contentData,
          author: { name: 'Current User', email: 'user@nightskylabs.com' },
          createdAt: new Date().toISOString(),
          views: 0,
          reactions: { likes: 0, helpful: 0, bookmarks: 0 }
        };
        setContent(prev => [newContent, ...prev]);
      }

      setView('list');
      setSelectedContent(null);
    } catch (error) {
      console.error('Error saving content:', error);
      alert('Failed to save content. Please try again.');
    }
  };

  const handleDeleteContent = async (contentId) => {
    if (window.confirm('Are you sure you want to delete this content?')) {
      try {
        // Mock API call to delete content
        console.log('Deleting content:', contentId);
        setContent(prev => prev.filter(item => item.id !== contentId));
      } catch (error) {
        console.error('Error deleting content:', error);
        alert('Failed to delete content. Please try again.');
      }
    }
  };

  const filteredContent = content.filter(item => {
    if (filters.contentType && item.contentType !== filters.contentType) return false;
    if (filters.productId && item.productId !== filters.productId) return false;
    if (filters.status && item.status !== filters.status) return false;
    if (filters.search && !item.title.toLowerCase().includes(filters.search.toLowerCase())) return false;
    return true;
  });

  if (view === 'editor') {
    return (
      <ContentEditor
        content={selectedContent}
        onSave={handleSaveContent}
        onCancel={handleBackToList}
      />
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-thin text-black">Content Management</h2>
          <p className="text-gray-600 font-thin mt-1">
            Manage blog posts, documentation, research papers, and case studies
          </p>
        </div>
        <button
          onClick={handleCreateNew}
          className="bg-black text-white px-6 py-3 rounded-full text-sm font-thin hover:bg-gray-800 transition-colors"
        >
          Create New Content
        </button>
      </div>

      {/* Filters */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-thin text-gray-700 mb-2">
              Content Type
            </label>
            <select
              value={filters.contentType}
              onChange={(e) => setFilters(prev => ({ ...prev, contentType: e.target.value }))}
              className="w-full p-3 border border-gray-300 rounded-lg font-thin text-sm focus:ring-2 focus:ring-black focus:border-transparent"
            >
              <option value="">All Types</option>
              <option value="blog">Blog</option>
              <option value="documentation">Documentation</option>
              <option value="research">Research</option>
              <option value="case-study">Case Studies</option>
              <option value="help">Help</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-thin text-gray-700 mb-2">
              Product
            </label>
            <select
              value={filters.productId}
              onChange={(e) => setFilters(prev => ({ ...prev, productId: e.target.value }))}
              className="w-full p-3 border border-gray-300 rounded-lg font-thin text-sm focus:ring-2 focus:ring-black focus:border-transparent"
            >
              <option value="">All Products</option>
              <option value="general">General</option>
              {Object.values(PRODUCT_DOCUMENTATION).map(product => (
                <option key={product.id} value={product.id}>
                  {product.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-thin text-gray-700 mb-2">
              Status
            </label>
            <select
              value={filters.status}
              onChange={(e) => setFilters(prev => ({ ...prev, status: e.target.value }))}
              className="w-full p-3 border border-gray-300 rounded-lg font-thin text-sm focus:ring-2 focus:ring-black focus:border-transparent"
            >
              <option value="">All Status</option>
              <option value="draft">Draft</option>
              <option value="published">Published</option>
              <option value="scheduled">Scheduled</option>
              <option value="archived">Archived</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-thin text-gray-700 mb-2">
              Search
            </label>
            <input
              type="text"
              value={filters.search}
              onChange={(e) => setFilters(prev => ({ ...prev, search: e.target.value }))}
              placeholder="Search content..."
              className="w-full p-3 border border-gray-300 rounded-lg font-thin text-sm focus:ring-2 focus:ring-black focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* Content List */}
      <ContentList
        content={filteredContent}
        loading={loading}
        onEdit={handleEditContent}
        onDelete={handleDeleteContent}
      />
    </div>
  );
};

export default ContentManager;
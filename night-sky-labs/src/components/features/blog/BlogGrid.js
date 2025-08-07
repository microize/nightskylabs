import React from 'react';
import BlogCard from './BlogCard';

const BlogGrid = ({ posts, loading = false, onPostClick }) => {
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden animate-pulse">
            <div className="h-48 bg-gray-200"></div>
            <div className="p-6">
              <div className="flex gap-2 mb-4">
                <div className="w-16 h-4 bg-gray-200 rounded-full"></div>
                <div className="w-20 h-4 bg-gray-200 rounded-full"></div>
              </div>
              <div className="w-full h-6 bg-gray-200 rounded mb-2"></div>
              <div className="w-3/4 h-6 bg-gray-200 rounded mb-4"></div>
              <div className="w-full h-4 bg-gray-200 rounded mb-2"></div>
              <div className="w-full h-4 bg-gray-200 rounded mb-2"></div>
              <div className="w-2/3 h-4 bg-gray-200 rounded mb-6"></div>
              <div className="flex space-x-4">
                <div className="w-20 h-4 bg-gray-200 rounded"></div>
                <div className="w-24 h-4 bg-gray-200 rounded"></div>
                <div className="w-16 h-4 bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (!posts || posts.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="text-6xl text-gray-300 mb-4">📝</div>
        <h3 className="text-xl font-thin text-gray-600 mb-2">No articles found</h3>
        <p className="text-gray-500 font-thin">Try adjusting your search or filter criteria</p>
      </div>
    );
  }

  const featuredPost = posts.find(post => post.featured);
  const regularPosts = posts.filter(post => !post.featured);

  return (
    <div className="space-y-8">
      {/* Featured Post */}
      {featuredPost && (
        <div className="mb-16">
          <BlogCard post={featuredPost} featured={true} onPostClick={onPostClick} />
        </div>
      )}

      {/* Regular Posts Grid */}
      {regularPosts.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post) => (
            <BlogCard key={post.id} post={post} onPostClick={onPostClick} />
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogGrid;
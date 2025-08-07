import React from 'react';
import { LuCalendar, LuClock, LuUser, LuFileText, LuArrowLeft } from 'react-icons/lu';
import { formatDate } from '../../../utils/blogUtils';
import { BlogHeroImage } from './BlogImage';

const BlogPost = ({ post, onBack }) => {
  if (!post) {
    return (
      <div className="text-center py-16">
        <div className="text-6xl text-gray-300 mb-4">📝</div>
        <h3 className="text-xl font-thin text-gray-600 mb-2">Post not found</h3>
        <p className="text-gray-500 font-thin">The article you're looking for doesn't exist</p>
      </div>
    );
  }

  return (
    <article className="max-w-4xl mx-auto">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="flex items-center text-gray-600 hover:text-black transition-colors mb-8 font-thin"
      >
        <LuArrowLeft className="h-4 w-4 mr-2" />
        Back to Articles
      </button>

      {/* Article Header */}
      <header className="mb-12">
        {/* Featured Image */}
        {post.image ? (
          <div className="mb-8">
            <BlogHeroImage 
              src={post.image} 
              alt={post.title}
              className="h-64 md:h-96 w-full object-cover rounded-2xl"
            />
          </div>
        ) : (
          <div className="h-64 md:h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center mb-8">
            <LuFileText size={96} className="text-gray-400" />
          </div>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {post.tags.map((tag, index) => (
            <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-thin">
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-thin text-black mb-6 leading-tight">
          {post.title}
        </h1>

        {/* Meta Information */}
        <div className="flex flex-wrap items-center text-sm font-thin text-gray-500 space-x-6 mb-8">
          <div className="flex items-center space-x-2">
            <LuUser size={16} />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center space-x-2">
            <LuCalendar size={16} />
            <span>{formatDate(post.date)}</span>
          </div>
          <div className="flex items-center space-x-2">
            <LuClock size={16} />
            <span>{post.readTime}</span>
          </div>
        </div>

        {/* Excerpt */}
        <p className="text-xl font-thin text-gray-600 leading-relaxed border-l-4 border-gray-200 pl-6">
          {post.excerpt}
        </p>
      </header>

      {/* Article Content */}
      <div 
        className="prose prose-lg max-w-none font-thin text-gray-700 leading-relaxed"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {/* Author Section */}
      <div className="mt-16 pt-8 border-t border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
              <LuUser size={24} className="text-gray-400" />
            </div>
            <div>
              <div className="font-thin text-black text-lg">{post.author}</div>
              <div className="text-sm font-thin text-gray-500">Author at NightSkyLabs</div>
            </div>
          </div>
          <div className="flex space-x-4">
            <button className="text-sm font-thin text-gray-500 hover:text-black transition-colors">
              Share
            </button>
            <button className="text-sm font-thin text-gray-500 hover:text-black transition-colors">
              Save
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogPost;
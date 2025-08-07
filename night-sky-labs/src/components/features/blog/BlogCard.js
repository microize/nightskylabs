import React from 'react';
import { LuCalendar, LuClock, LuUser, LuFileText } from 'react-icons/lu';
import { formatDate } from '../../../utils/blogUtils';
import { BlogHeroImage } from './BlogImage';

const BlogCard = ({ post, featured = false, onPostClick }) => {
  const cardClass = featured 
    ? "bg-white rounded-2xl shadow-lg overflow-hidden col-span-full lg:col-span-2 cursor-pointer hover:shadow-xl transition-shadow"
    : "bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow";

  return (
    <article className={cardClass} onClick={() => onPostClick && onPostClick(post)}>
      {/* Blog Post Image/Icon */}
      {post.image ? (
        <BlogHeroImage 
          src={post.image} 
          alt={post.title}
          className={`${featured ? 'h-64 md:h-80' : 'h-48'} w-full object-cover`}
        />
      ) : (
        <div className={`${featured ? 'h-64 md:h-80' : 'h-48'} bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center`}>
          <LuFileText size={featured ? 64 : 48} className="text-gray-400" />
        </div>
      )}
      
      {/* Blog Post Content */}
      <div className={`${featured ? 'p-8 md:p-12' : 'p-6'}`}>
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.slice(0, featured ? 4 : 3).map((tag, index) => (
            <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-thin">
              {tag}
            </span>
          ))}
        </div>
        
        {/* Title */}
        <h2 className={`${featured ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'} font-thin text-black mb-4 leading-tight hover:text-gray-700 transition-colors cursor-pointer`}>
          {post.title}
        </h2>
        
        {/* Excerpt */}
        <p className={`${featured ? 'text-lg' : 'text-base'} font-thin text-gray-600 mb-6 leading-relaxed`}>
          {post.excerpt}
        </p>
        
        {/* Meta Information */}
        <div className="flex items-center text-sm font-thin text-gray-500 space-x-4">
          <div className="flex items-center space-x-1">
            <LuUser size={14} />
            <span>{post.author}</span>
          </div>
          <span>•</span>
          <div className="flex items-center space-x-1">
            <LuCalendar size={14} />
            <span>{formatDate(post.date)}</span>
          </div>
          <span>•</span>
          <div className="flex items-center space-x-1">
            <LuClock size={14} />
            <span>{post.readTime}</span>
          </div>
        </div>
        
        {/* Read More Button */}
        <div className="mt-6">
          <span className="text-black font-thin hover:text-gray-600 transition-colors text-sm uppercase tracking-wide">
            Read Article
          </span>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
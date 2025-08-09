import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeftIcon, ShareIcon, BookmarkIcon, ClockIcon, TagIcon, CalendarIcon, UserIcon } from '@heroicons/react/24/outline';
import Navigation from '../components/common/layout/Navigation';
import Footer from '../components/common/layout/Footer';
import LoadingSpinner from '../components/common/ui/LoadingSpinner';
import { loadBlogPosts } from '../utils/markdownUtils';

const BlogPostPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadPost = async () => {
      setLoading(true);
      try {
        const allPosts = await loadBlogPosts();
        
        // Find the current post by slug
        const currentPost = allPosts.find(p => p.slug === slug);
        
        if (!currentPost) {
          setError('Blog post not found');
          return;
        }
        
        setPost(currentPost);
        
        // Find related posts (same category or tags)
        const related = allPosts
          .filter(p => p.slug !== slug)
          .filter(p => 
            p.category === currentPost.category || 
            p.tags.some(tag => currentPost.tags.includes(tag))
          )
          .slice(0, 3);
        
        setRelatedPosts(related);
      } catch (err) {
        console.error('Error loading blog post:', err);
        setError('Failed to load blog post');
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      loadPost();
    }
  }, [slug]);

  const handleShare = async () => {
    const url = window.location.href;
    const title = post?.title || '';
    
    if (navigator.share) {
      try {
        await navigator.share({ title, url });
      } catch (err) {
        console.log('Share cancelled or failed');
      }
    } else {
      // Fallback: copy to clipboard
      try {
        await navigator.clipboard.writeText(url);
        alert('Link copied to clipboard!');
      } catch (err) {
        console.error('Failed to copy link');
      }
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const estimateReadTime = (content) => {
    const wordsPerMinute = 200;
    const words = content.split(/\s+/).length;
    return Math.ceil(words / wordsPerMinute);
  };

  if (loading) {
    return (
      <div className="relative w-full bg-white overflow-hidden">
        <Navigation currentPage="resources" />
        <div className="min-h-screen flex items-center justify-center pt-20">
          <LoadingSpinner />
        </div>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="relative w-full bg-white overflow-hidden">
        <Navigation currentPage="resources" />
        <div className="min-h-screen flex items-center justify-center pt-20 px-6">
          <div className="text-center max-w-md">
            <h2 className="text-3xl font-thin text-[#998664] mb-4">Post Not Found</h2>
            <p className="text-base font-thin text-gray-600 mb-8">
              {error}
            </p>
            <button 
              onClick={() => navigate('/blog')}
              className="bg-[#998664] text-white px-6 py-3 rounded-full text-sm font-thin hover:bg-[#aa9678] transition-colors inline-block"
            >
              Back to Blog
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!post) return null;

  return (
    <div className="relative w-full bg-white overflow-hidden">
      <Navigation currentPage="resources" />

      {/* Hero Section */}
      <article className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          {/* Back Button */}
          <button
            onClick={() => navigate('/blog')}
            className="flex items-center text-sm font-thin text-gray-600 hover:text-[#998664] transition-colors mb-8 group"
          >
            <ArrowLeftIcon className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </button>

          {/* Article Header */}
          <header className="mb-12">
            {/* Category Badge */}
            <div className="flex items-center mb-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-thin bg-[#998664] bg-opacity-10 text-[#998664] border border-[#998664] border-opacity-20">
                <TagIcon className="w-3 h-3 mr-1" />
                {post.category}
              </span>
              {post.featured && (
                <span className="ml-2 inline-flex items-center px-3 py-1 rounded-full text-xs font-thin bg-gradient-to-r from-[#998664] to-[#aa9678] text-white">
                  Featured
                </span>
              )}
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-thin text-[#998664] mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Excerpt */}
            {post.excerpt && (
              <p className="text-lg md:text-xl font-thin text-gray-600 mb-8 leading-relaxed">
                {post.excerpt}
              </p>
            )}

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-sm font-thin text-gray-500">
              <div className="flex items-center">
                <UserIcon className="w-4 h-4 mr-2" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center">
                <CalendarIcon className="w-4 h-4 mr-2" />
                <span>{formatDate(post.date)}</span>
              </div>
              <div className="flex items-center">
                <ClockIcon className="w-4 h-4 mr-2" />
                <span>{estimateReadTime(post.content)} min read</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-4 mt-8">
              <button
                onClick={handleShare}
                className="flex items-center px-4 py-2 text-gray-600 hover:text-[#998664] hover:bg-gray-50 rounded-lg transition-colors"
              >
                <ShareIcon className="w-4 h-4 mr-2" />
                Share
              </button>
              <button className="flex items-center px-4 py-2 text-gray-600 hover:text-[#998664] hover:bg-gray-50 rounded-lg transition-colors">
                <BookmarkIcon className="w-4 h-4 mr-2" />
                Save
              </button>
            </div>
          </header>

          {/* Divider */}
          <div className="w-24 h-0.5 bg-[#998664] mb-12"></div>

          {/* Article Content */}
          <div 
            className="prose prose-lg max-w-none font-thin
              prose-headings:font-thin prose-headings:text-[#998664]
              prose-p:text-gray-700 prose-p:leading-relaxed
              prose-a:text-[#998664] prose-a:no-underline hover:prose-a:underline
              prose-strong:text-[#998664] prose-strong:font-medium
              prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm prose-code:font-mono prose-code:text-gray-800
              prose-pre:bg-gray-100 prose-pre:border prose-pre:border-gray-200 prose-pre:rounded-lg
              prose-blockquote:border-l-4 prose-blockquote:border-[#998664] prose-blockquote:bg-gray-50 prose-blockquote:font-thin prose-blockquote:text-[#998664]
              prose-ul:space-y-2 prose-ol:space-y-2
              prose-li:text-gray-700 prose-li:font-thin
              prose-img:rounded-lg prose-img:shadow-sm"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm font-thin text-gray-600">Tags:</span>
              {post.tags.map((tag, index) => (
                <button
                  key={index}
                  onClick={() => navigate(`/blog?category=${encodeURIComponent(tag)}`)}
                  className="inline-flex items-center px-3 py-1 rounded-full text-xs font-thin bg-gray-100 text-gray-700 hover:bg-[#998664] hover:text-white transition-colors"
                >
                  #{tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="bg-gradient-to-r from-[#998664] to-[#aa9678] py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-thin text-white mb-4">Related Articles</h2>
              <div className="w-24 h-0.5 bg-white mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <article 
                  key={relatedPost.slug}
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
                  onClick={() => navigate(`/blog/${relatedPost.slug}`)}
                >
                  <div className="mb-4">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-thin bg-[#998664] bg-opacity-10 text-[#998664]">
                      {relatedPost.category}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-thin text-[#998664] mb-3 group-hover:text-[#aa9678] transition-colors line-clamp-2">
                    {relatedPost.title}
                  </h3>
                  
                  <p className="text-sm font-thin text-gray-600 mb-4 line-clamp-3">
                    {relatedPost.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs font-thin text-gray-500">
                    <span>{relatedPost.author}</span>
                    <span>{formatDate(relatedPost.date)}</span>
                  </div>
                </article>
              ))}
            </div>

            <div className="text-center mt-12">
              <button
                onClick={() => navigate('/blog')}
                className="bg-white text-[#998664] px-8 py-3 rounded-full text-lg font-thin hover:bg-gray-100 transition-colors"
              >
                View All Articles
              </button>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default BlogPostPage;
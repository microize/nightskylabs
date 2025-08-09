import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeftIcon, ShareIcon, BookmarkIcon, ClockIcon, TagIcon, CalendarIcon, UserIcon, AcademicCapIcon } from '@heroicons/react/24/outline';
import Navigation from '../components/common/layout/Navigation';
import Footer from '../components/common/layout/Footer';
import LoadingSpinner from '../components/common/ui/LoadingSpinner';
import { getResearchPaper } from '../utils/researchLoader';

const ResearchPostPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [research, setResearch] = useState(null);
  const [relatedResearch, setRelatedResearch] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadResearch = async () => {
      setLoading(true);
      try {
        const currentResearch = await getResearchPaper(slug);
        
        if (!currentResearch) {
          setError('Research paper not found');
          return;
        }
        
        setResearch(currentResearch);
        
        // Find related research (same field or tags)
        const { loadResearchFromFiles } = await import('../utils/researchLoader');
        const allResearch = await loadResearchFromFiles();
        const related = allResearch
          .filter(r => r.slug !== slug)
          .filter(r => 
            r.field === currentResearch.field || 
            r.tags.some(tag => currentResearch.tags.includes(tag))
          )
          .slice(0, 3);
        
        setRelatedResearch(related);
      } catch (err) {
        console.error('Error loading research paper:', err);
        setError('Failed to load research paper');
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      loadResearch();
    }
  }, [slug]);

  const handleShare = async () => {
    const shareData = {
      title: research.title,
      text: research.abstract,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard!');
      }
    } catch (err) {
      console.error('Error sharing:', err);
    }
  };

  const handleBookmark = () => {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarkedResearch') || '[]');
    const isBookmarked = bookmarks.includes(slug);
    
    if (isBookmarked) {
      const updated = bookmarks.filter(s => s !== slug);
      localStorage.setItem('bookmarkedResearch', JSON.stringify(updated));
    } else {
      bookmarks.push(slug);
      localStorage.setItem('bookmarkedResearch', JSON.stringify(bookmarks));
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <div className="container mx-auto px-6 py-20">
          <div className="text-center">
            <h1 className="text-4xl font-thin text-[#998664] mb-4">Research Paper Not Found</h1>
            <p className="text-gray-600 mb-8">{error}</p>
            <button 
              onClick={() => navigate('/research')}
              className="inline-flex items-center space-x-2 text-[#998664] hover:text-[#aa9678] transition-colors"
            >
              <ArrowLeftIcon className="h-4 w-4" />
              <span>Back to Research</span>
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#998664] to-[#aa9678] text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Back Navigation */}
            <button 
              onClick={() => navigate('/research')}
              className="inline-flex items-center space-x-2 text-white/80 hover:text-white transition-colors mb-8"
            >
              <ArrowLeftIcon className="h-4 w-4" />
              <span className="font-thin">Back to Research</span>
            </button>

            {/* Research Header */}
            <div className="mb-8">
              <h1 className="text-5xl md:text-6xl font-thin leading-tight mb-6">
                {research.title}
              </h1>
              <p className="text-xl font-thin text-white/90 leading-relaxed max-w-3xl">
                {research.abstract}
              </p>
            </div>

            {/* Research Meta */}
            <div className="flex flex-wrap items-center gap-6 text-white/80">
              <div className="flex items-center space-x-2">
                <UserIcon className="h-4 w-4" />
                <span className="font-thin">{research.authors.join(', ')}</span>
              </div>
              <div className="flex items-center space-x-2">
                <AcademicCapIcon className="h-4 w-4" />
                <span className="font-thin">{research.field}</span>
              </div>
              <div className="flex items-center space-x-2">
                <CalendarIcon className="h-4 w-4" />
                <span className="font-thin">{research.publishedDate}</span>
              </div>
              <div className="flex items-center space-x-2">
                <ClockIcon className="h-4 w-4" />
                <span className="font-thin">{research.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Action Bar */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-4">
              {research.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="inline-block bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-thin"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex items-center space-x-4">
              {research.pdfUrl && (
                <a 
                  href={research.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-600 hover:text-[#998664] transition-colors"
                  title="Download PDF"
                >
                  <AcademicCapIcon className="h-4 w-4" />
                  <span className="hidden sm:inline font-thin">PDF</span>
                </a>
              )}
              <button 
                onClick={handleShare}
                className="flex items-center space-x-2 text-gray-600 hover:text-[#998664] transition-colors"
                title="Share research"
              >
                <ShareIcon className="h-4 w-4" />
                <span className="hidden sm:inline font-thin">Share</span>
              </button>
              <button 
                onClick={handleBookmark}
                className="flex items-center space-x-2 text-gray-600 hover:text-[#998664] transition-colors"
                title="Bookmark research"
              >
                <BookmarkIcon className="h-4 w-4" />
                <span className="hidden sm:inline font-thin">Save</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Research Content */}
      <article className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {research.image && (
              <div className="mb-12">
                <img 
                  src={research.image} 
                  alt={research.title}
                  className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
                />
              </div>
            )}
            
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: research.content }}
            />
          </div>
        </div>
      </article>

      {/* Key Findings Section */}
      {research.keyFindings && (
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-thin text-[#998664] mb-8 text-center">Key Findings</h2>
              <div className="space-y-6">
                {research.keyFindings.map((finding, index) => (
                  <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                    <h3 className="text-xl font-thin text-[#998664] mb-3">{finding.title}</h3>
                    <p className="text-gray-700 font-thin leading-relaxed">{finding.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Citations Section */}
      {research.citations && (
        <section className="py-16 bg-white border-t border-gray-200">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-thin text-[#998664] mb-8 text-center">References</h2>
              <div className="space-y-4">
                {research.citations.map((citation, index) => (
                  <div key={index} className="text-sm text-gray-600 font-thin">
                    <span className="text-[#998664]">[{index + 1}]</span> {citation}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Related Research */}
      {relatedResearch.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-thin text-[#998664] mb-12 text-center">Related Research</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {relatedResearch.map((related, index) => (
                  <div 
                    key={index}
                    className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer group"
                    onClick={() => navigate(`/research/${related.slug}`)}
                  >
                    {related.image && (
                      <img 
                        src={related.image} 
                        alt={related.title}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                    )}
                    <div className="p-6">
                      <h3 className="text-xl font-thin text-[#998664] mb-2 group-hover:text-[#aa9678] transition-colors">
                        {related.title}
                      </h3>
                      <p className="text-gray-600 font-thin mb-4 line-clamp-3">
                        {related.abstract}
                      </p>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span className="font-thin">{related.authors[0]}</span>
                        <span className="font-thin">{related.field}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default ResearchPostPage;
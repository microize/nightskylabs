import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeftIcon, ShareIcon, BookmarkIcon, ClockIcon, TagIcon, CalendarIcon, UserIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline';
import Navigation from '../components/common/layout/Navigation';
import Footer from '../components/common/layout/Footer';
import LoadingSpinner from '../components/common/ui/LoadingSpinner';
import { getCaseStudy } from '../utils/caseStudyLoader';

const CaseStudyPostPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [caseStudy, setCaseStudy] = useState(null);
  const [relatedCaseStudies, setRelatedCaseStudies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadCaseStudy = async () => {
      setLoading(true);
      try {
        const currentCaseStudy = await getCaseStudy(slug);
        
        if (!currentCaseStudy) {
          setError('Case study not found');
          return;
        }
        
        setCaseStudy(currentCaseStudy);
        
        // Find related case studies (same industry or tags)
        const { loadCaseStudiesFromFiles } = await import('../utils/caseStudyLoader');
        const allCaseStudies = await loadCaseStudiesFromFiles();
        const related = allCaseStudies
          .filter(cs => cs.slug !== slug)
          .filter(cs => 
            cs.industry === currentCaseStudy.industry || 
            cs.tags.some(tag => currentCaseStudy.tags.includes(tag))
          )
          .slice(0, 3);
        
        setRelatedCaseStudies(related);
      } catch (err) {
        console.error('Error loading case study:', err);
        setError('Failed to load case study');
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      loadCaseStudy();
    }
  }, [slug]);

  const handleShare = async () => {
    const shareData = {
      title: caseStudy.title,
      text: caseStudy.excerpt,
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
    const bookmarks = JSON.parse(localStorage.getItem('bookmarkedCaseStudies') || '[]');
    const isBookmarked = bookmarks.includes(slug);
    
    if (isBookmarked) {
      const updated = bookmarks.filter(s => s !== slug);
      localStorage.setItem('bookmarkedCaseStudies', JSON.stringify(updated));
    } else {
      bookmarks.push(slug);
      localStorage.setItem('bookmarkedCaseStudies', JSON.stringify(bookmarks));
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
            <h1 className="text-4xl font-thin text-[#998664] mb-4">Case Study Not Found</h1>
            <p className="text-gray-600 mb-8">{error}</p>
            <button 
              onClick={() => navigate('/case-studies')}
              className="inline-flex items-center space-x-2 text-[#998664] hover:text-[#aa9678] transition-colors"
            >
              <ArrowLeftIcon className="h-4 w-4" />
              <span>Back to Case Studies</span>
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
              onClick={() => navigate('/case-studies')}
              className="inline-flex items-center space-x-2 text-white/80 hover:text-white transition-colors mb-8"
            >
              <ArrowLeftIcon className="h-4 w-4" />
              <span className="font-thin">Back to Case Studies</span>
            </button>

            {/* Case Study Header */}
            <div className="mb-8">
              <h1 className="text-5xl md:text-6xl font-thin leading-tight mb-6">
                {caseStudy.title}
              </h1>
              <p className="text-xl font-thin text-white/90 leading-relaxed max-w-3xl">
                {caseStudy.excerpt}
              </p>
            </div>

            {/* Case Study Meta */}
            <div className="flex flex-wrap items-center gap-6 text-white/80">
              <div className="flex items-center space-x-2">
                <BuildingOfficeIcon className="h-4 w-4" />
                <span className="font-thin">{caseStudy.client}</span>
              </div>
              <div className="flex items-center space-x-2">
                <TagIcon className="h-4 w-4" />
                <span className="font-thin">{caseStudy.industry}</span>
              </div>
              <div className="flex items-center space-x-2">
                <CalendarIcon className="h-4 w-4" />
                <span className="font-thin">{caseStudy.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <ClockIcon className="h-4 w-4" />
                <span className="font-thin">{caseStudy.readTime}</span>
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
              {caseStudy.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="inline-block bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-thin"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex items-center space-x-4">
              <button 
                onClick={handleShare}
                className="flex items-center space-x-2 text-gray-600 hover:text-[#998664] transition-colors"
                title="Share case study"
              >
                <ShareIcon className="h-4 w-4" />
                <span className="hidden sm:inline font-thin">Share</span>
              </button>
              <button 
                onClick={handleBookmark}
                className="flex items-center space-x-2 text-gray-600 hover:text-[#998664] transition-colors"
                title="Bookmark case study"
              >
                <BookmarkIcon className="h-4 w-4" />
                <span className="hidden sm:inline font-thin">Save</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Case Study Content */}
      <article className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {caseStudy.image && (
              <div className="mb-12">
                <img 
                  src={caseStudy.image} 
                  alt={caseStudy.title}
                  className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
                />
              </div>
            )}
            
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: caseStudy.content }}
            />
          </div>
        </div>
      </article>

      {/* Results Section */}
      {caseStudy.results && (
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-thin text-[#998664] mb-8 text-center">Key Results</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {caseStudy.results.map((result, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl font-thin text-[#998664] mb-2">{result.metric}</div>
                    <div className="text-gray-600 font-thin">{result.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Related Case Studies */}
      {relatedCaseStudies.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-thin text-[#998664] mb-12 text-center">Related Case Studies</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {relatedCaseStudies.map((related, index) => (
                  <div 
                    key={index}
                    className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer group"
                    onClick={() => navigate(`/case-studies/${related.slug}`)}
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
                        {related.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span className="font-thin">{related.client}</span>
                        <span className="font-thin">{related.industry}</span>
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

export default CaseStudyPostPage;
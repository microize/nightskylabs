import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import DocumentationLayout from './DocumentationLayout';
import DocumentationContent from './DocumentationContent';
import { PRODUCT_DOCUMENTATION, generateBreadcrumbs } from '../../../config/documentationStructure';
import { contentService } from '../../../services/contentService';

const DocumentationContainer = () => {
  const { productId, sectionId, pageId } = useParams();
  const navigate = useNavigate();
  
  const [currentContent, setCurrentContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchResults, setSearchResults] = useState(null);
  const [currentProduct, setCurrentProduct] = useState(null);

  // Determine current product and content
  useEffect(() => {
    const loadContent = async () => {
      setLoading(true);
      try {
        // If no product specified, default to Soul
        const targetProductId = productId || 'soul';
        const targetSectionId = sectionId || 'getting-started';
        const targetPageId = pageId || 'installation';

        // Get product structure
        const product = PRODUCT_DOCUMENTATION[targetProductId];
        if (!product) {
          navigate('/docs/soul');
          return;
        }

        setCurrentProduct(product);

        // Load content from API
        try {
          const content = await contentService.getContentByProduct(
            targetProductId, 
            targetSectionId, 
            targetPageId
          );

          if (content && content.length > 0) {
            setCurrentContent(content[0]);
          } else {
            throw new Error('No content found');
          }
        } catch (apiError) {
          // Fallback to mock content
          setCurrentContent({
            id: `${targetProductId}-${targetSectionId}-${targetPageId}`,
            title: getPageTitle(targetProductId, targetSectionId, targetPageId),
            content: generateMockContent(targetProductId, targetSectionId, targetPageId),
            lastUpdated: new Date().toISOString(),
            difficulty: 'Beginner',
            estimatedTime: '10 min',
            prerequisites: []
          });
        }
      } catch (error) {
        console.error('Error loading documentation:', error);
        // Set fallback content
        setCurrentContent({
          title: 'Documentation Loading Error',
          content: '<p>Unable to load documentation content. Please try again later.</p>',
          lastUpdated: new Date().toISOString()
        });
      } finally {
        setLoading(false);
      }
    };
    
    loadContent();
  }, [productId, sectionId, pageId, navigate]);

  // Helper functions for mock content generation
  const getPageTitle = (productId, sectionId, pageId) => {
    const product = PRODUCT_DOCUMENTATION[productId];
    if (!product) return 'Documentation';
    
    const section = product.sections.find(s => s.id === sectionId);
    if (!section) return product.name;
    
    const page = section.pages?.find(p => p.id === pageId);
    return page ? page.title : section.title;
  };

  const generateMockContent = (productId, sectionId, pageId) => {
    const product = PRODUCT_DOCUMENTATION[productId];
    const section = product?.sections.find(s => s.id === sectionId);
    const page = section?.pages?.find(p => p.id === pageId);
    
    return `
      <h1>${getPageTitle(productId, sectionId, pageId)}</h1>
      <p class="text-lg text-gray-600 mb-6">Learn how to use ${product?.name || 'this feature'} effectively.</p>
      
      <h2>Overview</h2>
      <p>This ${page ? 'page' : 'section'} covers ${page ? page.title.toLowerCase() : section?.title.toLowerCase() || 'this topic'} for ${product?.name || 'the product'}.</p>
      
      <h2>Getting Started</h2>
      <p>Follow these steps to get started:</p>
      <ol>
        <li>Review the prerequisites</li>
        <li>Set up your environment</li>
        <li>Follow the implementation guide</li>
      </ol>
      
      <div class="bg-blue-50 border border-blue-200 rounded-lg p-4 my-6">
        <h3 class="text-blue-900 font-medium mb-2">📝 Note</h3>
        <p class="text-blue-800">This is placeholder content. The actual documentation will be loaded from the CMS backend.</p>
      </div>
      
      <h2>Next Steps</h2>
      <p>After completing this section, you can:</p>
      <ul>
        <li>Explore advanced features</li>
        <li>Check out related tutorials</li>
        <li>Join our community discussions</li>
      </ul>
    `;
  };

  // Get current documentation content
  const getCurrentContent = () => {
    if (searchResults) {
      return {
        title: `Search Results for "${searchResults.query}"`,
        content: generateSearchResultsHTML(searchResults.results),
        lastUpdated: new Date().toISOString()
      };
    }
    
    return currentContent || {
      title: 'Loading...',
      content: '<p>Loading documentation content...</p>',
      lastUpdated: new Date().toISOString()
    };
  };

  // Generate breadcrumb path
  const getBreadcrumbPath = () => {
    const targetProductId = productId || 'soul';
    const targetSectionId = sectionId || 'getting-started';
    const targetPageId = pageId || 'installation';
    
    return generateBreadcrumbs(targetProductId, targetSectionId, targetPageId);
  };

  // Handle search
  const handleSearch = async (query) => {
    if (!query.trim()) {
      setSearchResults(null);
      return;
    }
    
    try {
      const results = await contentService.searchContent(query, 'documentation', productId);
      setSearchResults({ query, results: results.data || [] });
    } catch (error) {
      console.error('Search error:', error);
      // Fallback to mock search results
      setSearchResults({ 
        query, 
        results: [
          {
            title: `Search results for "${query}"`,
            excerpt: 'Mock search results will be replaced with actual content from the CMS.',
            category: 'Documentation',
            estimatedReadTime: '5 min'
          }
        ]
      });
    }
  };

  // Generate search results HTML
  const generateSearchResultsHTML = (results) => {
    if (results.length === 0) {
      return '<p>No results found. Try adjusting your search terms.</p>';
    }
    
    return results.map(post => `
      <div class="border-b border-gray-200 pb-6 mb-6">
        <h3 class="text-xl font-thin text-black mb-2">
          <a href="${post.fullPath || '#'}" class="hover:underline">${post.title}</a>
        </h3>
        <p class="text-gray-600 font-thin mb-2">${post.excerpt}</p>
        <div class="text-sm text-gray-500">
          <span>${post.category}</span> • <span>${post.estimatedReadTime || '5 min'}</span>
        </div>
      </div>
    `).join('');
  };

  // Extract headings from content
  const extractHeadings = (content) => {
    if (!content) return [];
    
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = content;
    const headings = [];
    
    tempDiv.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach((heading, index) => {
      const id = heading.textContent.toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
      
      headings.push({
        id,
        text: heading.textContent,
        level: parseInt(heading.tagName.charAt(1))
      });
    });
    
    return headings;
  };

  // Handle navigation
  const handleSectionChange = (productId, sectionId, pageId) => {
    const path = `/docs/${productId}${sectionId ? `/${sectionId}` : ''}${pageId ? `/${pageId}` : ''}`;
    navigate(path);
    setSearchResults(null);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black mx-auto mb-4"></div>
          <p className="text-gray-600 font-thin">Loading documentation...</p>
        </div>
      </div>
    );
  }

  const currentContentData = getCurrentContent();
  const headings = extractHeadings(currentContentData.content);
  const breadcrumbPath = getBreadcrumbPath();

  return (
    <DocumentationLayout
      currentProduct={currentProduct}
      productId={productId || 'soul'}
      sectionId={sectionId || 'getting-started'}
      pageId={pageId || 'installation'}
      onSectionChange={handleSectionChange}
      headings={headings}
      breadcrumbPath={breadcrumbPath}
      onSearch={handleSearch}
    >
      <DocumentationContent
        title={currentContentData.title}
        content={currentContentData.content}
        lastUpdated={currentContentData.lastUpdated}
        difficulty={currentContentData.difficulty}
        estimatedTime={currentContentData.estimatedTime || currentContentData.estimatedReadTime}
        prerequisites={currentContentData.prerequisites}
      />
    </DocumentationLayout>
  );
};

export default DocumentationContainer;
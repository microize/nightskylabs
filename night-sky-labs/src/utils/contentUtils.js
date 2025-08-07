/**
 * Unified content utilities for blog, research, and case studies
 * Following industry best practices for content management
 */

// Filter content by search term
export const filterContentBySearch = (items, searchTerm) => {
  if (!searchTerm) return items;
  
  const term = searchTerm.toLowerCase();
  
  return items.filter(item => {
    // Search in title, excerpt/description, tags, author, and category
    const searchableContent = [
      item.title,
      item.excerpt || item.description || item.summary,
      ...(item.tags || []),
      item.author,
      item.category,
      item.industry, // For case studies
      item.client, // For case studies
      item.methodology, // For research
      item.keywords, // For research
    ].filter(Boolean).join(' ').toLowerCase();
    
    return searchableContent.includes(term);
  });
};

// Filter content by category
export const filterContentByCategory = (items, category) => {
  if (!category || category === 'All') return items;
  
  return items.filter(item => {
    // Handle different category fields for different content types
    return item.category === category || 
           item.industry === category || 
           item.methodology === category ||
           (item.tags && item.tags.includes(category));
  });
};

// Sort content by date
export const sortContentByDate = (items, ascending = false) => {
  return [...items].sort((a, b) => {
    const dateA = new Date(a.date || a.publishedAt || a.createdAt);
    const dateB = new Date(b.date || b.publishedAt || b.createdAt);
    
    return ascending ? dateA - dateB : dateB - dateA;
  });
};

// Sort content by reading time (for blogs)
export const sortContentByReadingTime = (items, ascending = true) => {
  return [...items].sort((a, b) => {
    const timeA = a.readingTime || 0;
    const timeB = b.readingTime || 0;
    
    return ascending ? timeA - timeB : timeB - timeA;
  });
};

// Paginate content
export const paginateContent = (items, currentPage, itemsPerPage) => {
  const totalItems = items.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  
  return {
    items: items.slice(startIndex, endIndex),
    currentPage: Math.max(1, Math.min(currentPage, totalPages)),
    totalPages,
    totalItems,
    hasNextPage: currentPage < totalPages,
    hasPreviousPage: currentPage > 1,
    startIndex: startIndex + 1,
    endIndex: Math.min(endIndex, totalItems)
  };
};

// Generate categories from content
export const generateCategories = (items, contentType = 'blog') => {
  const categorySet = new Set(['All']);
  
  items.forEach(item => {
    // Add main category
    if (item.category) {
      categorySet.add(item.category);
    }
    
    // Add industry for case studies
    if (contentType === 'case-studies' && item.industry) {
      categorySet.add(item.industry);
    }
    
    // Add methodology for research
    if (contentType === 'research' && item.methodology) {
      categorySet.add(item.methodology);
    }
    
    // Add tags as categories
    if (item.tags && Array.isArray(item.tags)) {
      item.tags.forEach(tag => categorySet.add(tag));
    }
  });
  
  return Array.from(categorySet).sort((a, b) => {
    if (a === 'All') return -1;
    if (b === 'All') return 1;
    return a.localeCompare(b);
  });
};

// Calculate reading time for text content
export const calculateReadingTime = (text, wordsPerMinute = 200) => {
  if (!text) return 0;
  
  const wordCount = text.split(/\s+/).filter(word => word.length > 0).length;
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  
  return Math.max(1, minutes);
};

// Format date for display
export const formatDate = (date, format = 'long') => {
  const dateObj = new Date(date);
  
  if (isNaN(dateObj.getTime())) {
    return 'Invalid Date';
  }
  
  switch (format) {
    case 'short':
      return dateObj.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      });
    case 'medium':
      return dateObj.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      });
    case 'long':
    default:
      return dateObj.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
  }
};

// Extract excerpt from content
export const extractExcerpt = (content, maxLength = 160) => {
  if (!content) return '';
  
  // Remove markdown formatting and HTML tags
  const cleanText = content
    .replace(/[#*_`~\[\]()]/g, '') // Remove markdown characters
    .replace(/<[^>]*>/g, '') // Remove HTML tags
    .replace(/\n+/g, ' ') // Replace newlines with spaces
    .trim();
  
  if (cleanText.length <= maxLength) {
    return cleanText;
  }
  
  // Find the last complete word before the limit
  const truncated = cleanText.substring(0, maxLength);
  const lastSpaceIndex = truncated.lastIndexOf(' ');
  
  if (lastSpaceIndex > 0) {
    return truncated.substring(0, lastSpaceIndex) + '...';
  }
  
  return truncated + '...';
};

// Get content type specific configuration
export const getContentConfig = (contentType) => {
  const configs = {
    blog: {
      itemsPerPage: 6,
      cardAspectRatio: '16:9',
      showReadingTime: true,
      showAuthor: true,
      showCategory: true,
      showTags: true,
      defaultSort: 'date',
      gridCols: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
    },
    research: {
      itemsPerPage: 8,
      cardAspectRatio: '4:3',
      showReadingTime: false,
      showAuthor: true,
      showCategory: false,
      showTags: true,
      showMethodology: true,
      showKeywords: true,
      defaultSort: 'date',
      gridCols: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
    },
    'case-studies': {
      itemsPerPage: 4,
      cardAspectRatio: '3:4',
      showReadingTime: false,
      showAuthor: false,
      showCategory: false,
      showIndustry: true,
      showClient: true,
      showResults: true,
      defaultSort: 'featured',
      gridCols: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4'
    }
  };
  
  return configs[contentType] || configs.blog;
};

// Validate content item structure
export const validateContentItem = (item, contentType) => {
  const requiredFields = {
    blog: ['title', 'date', 'category'],
    research: ['title', 'date', 'methodology'],
    'case-studies': ['title', 'date', 'industry', 'client']
  };
  
  const required = requiredFields[contentType] || requiredFields.blog;
  
  return required.every(field => item[field] != null);
};

// Search suggestions based on content
export const generateSearchSuggestions = (items, contentType) => {
  const suggestions = new Set();
  
  items.forEach(item => {
    // Add categories
    if (item.category) suggestions.add(item.category);
    
    // Add specific fields based on content type
    if (contentType === 'research') {
      if (item.methodology) suggestions.add(item.methodology);
      if (item.keywords) {
        item.keywords.forEach(keyword => suggestions.add(keyword));
      }
    }
    
    if (contentType === 'case-studies') {
      if (item.industry) suggestions.add(item.industry);
      if (item.client) suggestions.add(item.client);
    }
    
    // Add tags
    if (item.tags) {
      item.tags.forEach(tag => suggestions.add(tag));
    }
    
    // Add author names
    if (item.author) suggestions.add(item.author);
  });
  
  return Array.from(suggestions)
    .sort()
    .slice(0, 10); // Limit to top 10 suggestions
};
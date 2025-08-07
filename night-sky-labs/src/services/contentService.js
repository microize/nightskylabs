import apiClient from './apiClient';

export const contentService = {
  // Get all content with filtering
  async getAllContent(params = {}) {
    const queryParams = new URLSearchParams(params).toString();
    const response = await apiClient.get(`/content?${queryParams}`);
    return response.data;
  },

  // Get content by slug
  async getContentBySlug(slug) {
    const response = await apiClient.get(`/content/slug/${slug}`);
    return response.data;
  },

  // Get content by product structure
  async getContentByProduct(productId, sectionId = null, pageId = null) {
    let url = `/content/product/${productId}`;
    if (sectionId) url += `/${sectionId}`;
    if (pageId) url += `/${pageId}`;
    
    const response = await apiClient.get(url);
    return response.data;
  },

  // Search content
  async searchContent(query, contentType = null, productId = null) {
    const params = { q: query };
    if (contentType) params.contentType = contentType;
    if (productId) params.productId = productId;
    
    const queryParams = new URLSearchParams(params).toString();
    const response = await apiClient.get(`/content/search?${queryParams}`);
    return response.data;
  },

  // Create content (admin only)
  async createContent(contentData) {
    const response = await apiClient.post('/content', contentData);
    return response.data;
  },

  // Update content (admin/editor only)
  async updateContent(id, contentData) {
    const response = await apiClient.put(`/content/${id}`, contentData);
    return response.data;
  },

  // Delete content (admin only)
  async deleteContent(id) {
    const response = await apiClient.delete(`/content/${id}`);
    return response.data;
  },

  // Publish content (editor/admin only)
  async publishContent(id, scheduledAt = null) {
    const response = await apiClient.patch(`/content/${id}/publish`, { scheduledAt });
    return response.data;
  },

  // Add reaction to content
  async addReaction(id, type) {
    const response = await apiClient.post(`/content/${id}/reaction`, { type });
    return response.data;
  }
};

// Blog-specific content methods
export const blogService = {
  async getAllPosts(params = {}) {
    return contentService.getAllContent({ ...params, contentType: 'blog' });
  },

  async getPostBySlug(slug) {
    return contentService.getContentBySlug(slug);
  },

  async getFeaturedPosts() {
    return contentService.getAllContent({ 
      contentType: 'blog', 
      featured: true, 
      limit: 6 
    });
  },

  async getPostsByCategory(category) {
    return contentService.getAllContent({ 
      contentType: 'blog', 
      category,
      status: 'published' 
    });
  }
};

// Documentation-specific methods
export const documentationService = {
  async getDocumentationByProduct(productId, sectionId = null, pageId = null) {
    return contentService.getContentByProduct(productId, sectionId, pageId);
  },

  async getAllDocumentation(params = {}) {
    return contentService.getAllContent({ ...params, contentType: 'documentation' });
  },

  async searchDocumentation(query, productId = null) {
    return contentService.searchContent(query, 'documentation', productId);
  }
};

// Research-specific methods
export const researchService = {
  async getAllResearch(params = {}) {
    return contentService.getAllContent({ ...params, contentType: 'research' });
  },

  async getFeaturedResearch() {
    return contentService.getAllContent({ 
      contentType: 'research', 
      featured: true, 
      limit: 4 
    });
  },

  async getResearchByDifficulty(difficulty) {
    return contentService.getAllContent({ 
      contentType: 'research', 
      difficulty,
      status: 'published' 
    });
  }
};

// Case studies-specific methods
export const caseStudyService = {
  async getAllCaseStudies(params = {}) {
    return contentService.getAllContent({ ...params, contentType: 'case-study' });
  },

  async getCaseStudiesByIndustry(industry) {
    return contentService.getAllContent({ 
      contentType: 'case-study', 
      category: industry,
      status: 'published' 
    });
  },

  async getFeaturedCaseStudies() {
    return contentService.getAllContent({ 
      contentType: 'case-study', 
      featured: true, 
      limit: 3 
    });
  }
};

// Help center-specific methods
export const helpService = {
  async getAllHelpArticles(params = {}) {
    return contentService.getAllContent({ ...params, contentType: 'help' });
  },

  async searchHelp(query) {
    return contentService.searchContent(query, 'help');
  },

  async getHelpByCategory(category) {
    return contentService.getAllContent({ 
      contentType: 'help', 
      category,
      status: 'published' 
    });
  }
};

// Export individual services and main content service
export default contentService;
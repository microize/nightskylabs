import React, { useState, useEffect } from 'react';
import { PRODUCT_DOCUMENTATION } from '../../config/documentationStructure';

const ContentEditor = ({ content, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    contentType: 'blog',
    productId: 'general',
    sectionId: '',
    pageId: '',
    category: '',
    tags: [],
    status: 'draft',
    difficulty: 'All Levels',
    estimatedReadTime: '5 min',
    prerequisites: [],
    meta: {
      title: '',
      description: '',
      keywords: []
    },
    featuredImage: {
      url: '',
      alt: '',
      caption: ''
    },
    featured: false
  });

  const [errors, setErrors] = useState({});
  const [saving, setSaving] = useState(false);

  // Initialize form with existing content
  useEffect(() => {
    if (content) {
      setFormData({
        title: content.title || '',
        slug: content.slug || '',
        excerpt: content.excerpt || '',
        content: content.content || '',
        contentType: content.contentType || 'blog',
        productId: content.productId || 'general',
        sectionId: content.sectionId || '',
        pageId: content.pageId || '',
        category: content.category || '',
        tags: content.tags || [],
        status: content.status || 'draft',
        difficulty: content.difficulty || 'All Levels',
        estimatedReadTime: content.estimatedReadTime || '5 min',
        prerequisites: content.prerequisites || [],
        meta: {
          title: content.meta?.title || '',
          description: content.meta?.description || '',
          keywords: content.meta?.keywords || []
        },
        featuredImage: {
          url: content.featuredImage?.url || '',
          alt: content.featuredImage?.alt || '',
          caption: content.featuredImage?.caption || ''
        },
        featured: content.featured || false
      });
    }
  }, [content]);

  // Auto-generate slug from title
  useEffect(() => {
    if (formData.title && !content) {
      const slug = formData.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
      setFormData(prev => ({ ...prev, slug }));
    }
  }, [formData.title, content]);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));

    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: null
      }));
    }
  };

  const handleNestedInputChange = (parent, field, value) => {
    setFormData(prev => ({
      ...prev,
      [parent]: {
        ...prev[parent],
        [field]: value
      }
    }));
  };

  const handleArrayInputChange = (field, value) => {
    const array = value.split(',').map(item => item.trim()).filter(item => item);
    setFormData(prev => ({
      ...prev,
      [field]: array
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.title) newErrors.title = 'Title is required';
    if (!formData.excerpt) newErrors.excerpt = 'Excerpt is required';
    if (!formData.content) newErrors.content = 'Content is required';
    if (!formData.category) newErrors.category = 'Category is required';

    // Validate slug uniqueness (mock validation)
    if (!formData.slug) newErrors.slug = 'Slug is required';

    // Product-specific validation
    if (formData.contentType === 'documentation' && formData.productId !== 'general') {
      if (!formData.sectionId) newErrors.sectionId = 'Section is required for documentation';
      if (!formData.pageId) newErrors.pageId = 'Page is required for documentation';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = async () => {
    if (!validateForm()) return;

    setSaving(true);
    try {
      await onSave(formData);
    } catch (error) {
      console.error('Save error:', error);
    } finally {
      setSaving(false);
    }
  };

  const getAvailableSections = () => {
    if (formData.productId === 'general') return [];
    const product = PRODUCT_DOCUMENTATION[formData.productId];
    return product ? product.sections : [];
  };

  const getAvailablePages = () => {
    if (!formData.sectionId) return [];
    const sections = getAvailableSections();
    const section = sections.find(s => s.id === formData.sectionId);
    return section ? section.pages || [] : [];
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-thin text-black">
            {content ? 'Edit Content' : 'Create New Content'}
          </h2>
          <p className="text-gray-600 font-thin mt-1">
            {content ? `Editing: ${content.title}` : 'Create new blog post, documentation, or research content'}
          </p>
        </div>
        <div className="flex space-x-3">
          <button
            onClick={onCancel}
            className="px-6 py-3 border border-gray-300 rounded-full text-sm font-thin hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            disabled={saving}
            className="bg-black text-white px-6 py-3 rounded-full text-sm font-thin hover:bg-gray-800 transition-colors disabled:opacity-50"
          >
            {saving ? 'Saving...' : (content ? 'Update' : 'Create')}
          </button>
        </div>
      </div>

      {/* Form */}
      <div className="bg-white border border-gray-200 rounded-lg">
        <div className="p-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Title */}
              <div>
                <label className="block text-sm font-thin text-gray-700 mb-2">
                  Title *
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => handleInputChange('title', e.target.value)}
                  className={`w-full p-4 border rounded-lg font-thin text-lg focus:ring-2 focus:ring-black focus:border-transparent ${
                    errors.title ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter content title..."
                />
                {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
              </div>

              {/* Slug */}
              <div>
                <label className="block text-sm font-thin text-gray-700 mb-2">
                  Slug *
                </label>
                <input
                  type="text"
                  value={formData.slug}
                  onChange={(e) => handleInputChange('slug', e.target.value)}
                  className={`w-full p-3 border rounded-lg font-thin focus:ring-2 focus:ring-black focus:border-transparent ${
                    errors.slug ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="url-friendly-slug"
                />
                {errors.slug && <p className="text-red-500 text-sm mt-1">{errors.slug}</p>}
              </div>

              {/* Excerpt */}
              <div>
                <label className="block text-sm font-thin text-gray-700 mb-2">
                  Excerpt *
                </label>
                <textarea
                  value={formData.excerpt}
                  onChange={(e) => handleInputChange('excerpt', e.target.value)}
                  rows={3}
                  className={`w-full p-4 border rounded-lg font-thin focus:ring-2 focus:ring-black focus:border-transparent ${
                    errors.excerpt ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Brief description of the content..."
                />
                {errors.excerpt && <p className="text-red-500 text-sm mt-1">{errors.excerpt}</p>}
              </div>

              {/* Content */}
              <div>
                <label className="block text-sm font-thin text-gray-700 mb-2">
                  Content *
                </label>
                <textarea
                  value={formData.content}
                  onChange={(e) => handleInputChange('content', e.target.value)}
                  rows={20}
                  className={`w-full p-4 border rounded-lg font-thin focus:ring-2 focus:ring-black focus:border-transparent ${
                    errors.content ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Write your content in Markdown..."
                />
                {errors.content && <p className="text-red-500 text-sm mt-1">{errors.content}</p>}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Content Type */}
              <div>
                <label className="block text-sm font-thin text-gray-700 mb-2">
                  Content Type
                </label>
                <select
                  value={formData.contentType}
                  onChange={(e) => handleInputChange('contentType', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg font-thin focus:ring-2 focus:ring-black focus:border-transparent"
                >
                  <option value="blog">Blog Post</option>
                  <option value="documentation">Documentation</option>
                  <option value="research">Research</option>
                  <option value="case-study">Case Study</option>
                  <option value="help">Help Article</option>
                </select>
              </div>

              {/* Product */}
              <div>
                <label className="block text-sm font-thin text-gray-700 mb-2">
                  Product
                </label>
                <select
                  value={formData.productId}
                  onChange={(e) => {
                    handleInputChange('productId', e.target.value);
                    handleInputChange('sectionId', '');
                    handleInputChange('pageId', '');
                  }}
                  className="w-full p-3 border border-gray-300 rounded-lg font-thin focus:ring-2 focus:ring-black focus:border-transparent"
                >
                  <option value="general">General</option>
                  {Object.values(PRODUCT_DOCUMENTATION).map(product => (
                    <option key={product.id} value={product.id}>
                      {product.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Section (for documentation) */}
              {formData.contentType === 'documentation' && formData.productId !== 'general' && (
                <div>
                  <label className="block text-sm font-thin text-gray-700 mb-2">
                    Section *
                  </label>
                  <select
                    value={formData.sectionId}
                    onChange={(e) => {
                      handleInputChange('sectionId', e.target.value);
                      handleInputChange('pageId', '');
                    }}
                    className={`w-full p-3 border rounded-lg font-thin focus:ring-2 focus:ring-black focus:border-transparent ${
                      errors.sectionId ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Select Section</option>
                    {getAvailableSections().map(section => (
                      <option key={section.id} value={section.id}>
                        {section.title}
                      </option>
                    ))}
                  </select>
                  {errors.sectionId && <p className="text-red-500 text-sm mt-1">{errors.sectionId}</p>}
                </div>
              )}

              {/* Page (for documentation) */}
              {formData.sectionId && (
                <div>
                  <label className="block text-sm font-thin text-gray-700 mb-2">
                    Page *
                  </label>
                  <select
                    value={formData.pageId}
                    onChange={(e) => handleInputChange('pageId', e.target.value)}
                    className={`w-full p-3 border rounded-lg font-thin focus:ring-2 focus:ring-black focus:border-transparent ${
                      errors.pageId ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Select Page</option>
                    {getAvailablePages().map(page => (
                      <option key={page.id} value={page.id}>
                        {page.title}
                      </option>
                    ))}
                  </select>
                  {errors.pageId && <p className="text-red-500 text-sm mt-1">{errors.pageId}</p>}
                </div>
              )}

              {/* Category */}
              <div>
                <label className="block text-sm font-thin text-gray-700 mb-2">
                  Category *
                </label>
                <input
                  type="text"
                  value={formData.category}
                  onChange={(e) => handleInputChange('category', e.target.value)}
                  className={`w-full p-3 border rounded-lg font-thin focus:ring-2 focus:ring-black focus:border-transparent ${
                    errors.category ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="e.g., Technology, Guide, Tutorial"
                />
                {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category}</p>}
              </div>

              {/* Tags */}
              <div>
                <label className="block text-sm font-thin text-gray-700 mb-2">
                  Tags
                </label>
                <input
                  type="text"
                  value={formData.tags.join(', ')}
                  onChange={(e) => handleArrayInputChange('tags', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg font-thin focus:ring-2 focus:ring-black focus:border-transparent"
                  placeholder="tag1, tag2, tag3"
                />
              </div>

              {/* Status */}
              <div>
                <label className="block text-sm font-thin text-gray-700 mb-2">
                  Status
                </label>
                <select
                  value={formData.status}
                  onChange={(e) => handleInputChange('status', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg font-thin focus:ring-2 focus:ring-black focus:border-transparent"
                >
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                  <option value="scheduled">Scheduled</option>
                  <option value="archived">Archived</option>
                </select>
              </div>

              {/* Featured */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="featured"
                  checked={formData.featured}
                  onChange={(e) => handleInputChange('featured', e.target.checked)}
                  className="rounded border-gray-300 text-black focus:ring-black"
                />
                <label htmlFor="featured" className="ml-2 text-sm font-thin text-gray-700">
                  Featured Content
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentEditor;
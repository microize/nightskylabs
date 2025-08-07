/**
 * Image utility functions for blog posts
 */

// Image processing and optimization utilities
export const getImagePath = (imageName, subfolder = '') => {
  const basePath = '/images/blog';
  return subfolder ? `${basePath}/${subfolder}/${imageName}` : `${basePath}/${imageName}`;
};

export const getImageUrl = (imageName, subfolder = '') => {
  return getImagePath(imageName, subfolder);
};

// Generate responsive image URLs for different screen sizes
export const generateResponsiveImageUrls = (imageName, subfolder = '') => {
  const basePath = getImagePath('', subfolder);
  const nameWithoutExt = imageName.replace(/\.[^/.]+$/, '');
  const ext = imageName.split('.').pop();
  
  return {
    small: `${basePath}/${nameWithoutExt}-small.${ext}`,
    medium: `${basePath}/${nameWithoutExt}-medium.${ext}`,
    large: `${basePath}/${nameWithoutExt}-large.${ext}`,
    original: `${basePath}/${imageName}`
  };
};

// Image optimization settings
export const imageOptimizationConfig = {
  sizes: {
    small: { width: 400, quality: 75 },
    medium: { width: 800, quality: 85 },
    large: { width: 1200, quality: 90 }
  },
  formats: ['webp', 'jpg', 'png'],
  lazyLoading: true,
  placeholder: 'blur'
};

// Extract image metadata from markdown
export const extractImageMetadata = (markdownContent) => {
  const imageRegex = /!\[([^\]]*)\]\(([^)]+)\)(?:\{([^}]*)\})?/g;
  const images = [];
  let match;
  
  while ((match = imageRegex.exec(markdownContent)) !== null) {
    const [fullMatch, altText, src, attributes] = match;
    const metadata = {};
    
    if (attributes) {
      // Parse attributes like {width=800 height=600 caption="Image caption"}
      const attrRegex = /(\w+)=(?:"([^"]*)"|(\w+))/g;
      let attrMatch;
      while ((attrMatch = attrRegex.exec(attributes)) !== null) {
        const [, key, quotedValue, unquotedValue] = attrMatch;
        metadata[key] = quotedValue || unquotedValue;
      }
    }
    
    images.push({
      fullMatch,
      altText,
      src,
      metadata,
      index: match.index
    });
  }
  
  return images;
};

// Generate image placeholder while loading
export const generateImagePlaceholder = (width = 800, height = 400, text = 'Loading...') => {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  
  // Create gradient background
  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, '#f3f4f6');
  gradient.addColorStop(1, '#e5e7eb');
  
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);
  
  // Add text
  ctx.fillStyle = '#9ca3af';
  ctx.font = '16px system-ui, sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, width / 2, height / 2);
  
  return canvas.toDataURL();
};

// Validate image format and size
export const validateImage = (file) => {
  const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif'];
  const maxSize = 5 * 1024 * 1024; // 5MB
  
  const errors = [];
  
  if (!allowedTypes.includes(file.type)) {
    errors.push('Invalid file type. Please use JPEG, PNG, WebP, or GIF.');
  }
  
  if (file.size > maxSize) {
    errors.push('File size too large. Please use images smaller than 5MB.');
  }
  
  return {
    valid: errors.length === 0,
    errors
  };
};

// Generate image alt text suggestions based on filename
export const generateAltTextSuggestions = (filename) => {
  const nameWithoutExt = filename.replace(/\.[^/.]+$/, '');
  const words = nameWithoutExt
    .split(/[-_\s]+/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
  
  return [
    words,
    `Image showing ${words.toLowerCase()}`,
    `Illustration of ${words.toLowerCase()}`,
    `Diagram depicting ${words.toLowerCase()}`
  ];
};

// Image CDN utilities (for future use)
export const getCDNUrl = (imagePath, transformations = {}) => {
  // This would integrate with a CDN like Cloudinary or AWS CloudFront
  // For now, return local path
  let url = imagePath;
  
  if (transformations.width || transformations.height) {
    // Add query parameters for potential server-side resizing
    const params = new URLSearchParams();
    if (transformations.width) params.set('w', transformations.width);
    if (transformations.height) params.set('h', transformations.height);
    if (transformations.quality) params.set('q', transformations.quality);
    if (transformations.format) params.set('f', transformations.format);
    
    url += `?${params.toString()}`;
  }
  
  return url;
};

export default {
  getImagePath,
  getImageUrl,
  generateResponsiveImageUrls,
  imageOptimizationConfig,
  extractImageMetadata,
  generateImagePlaceholder,
  validateImage,
  generateAltTextSuggestions,
  getCDNUrl
};
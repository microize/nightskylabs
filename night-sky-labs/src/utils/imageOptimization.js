/**
 * Image optimization utilities
 */

/**
 * Generate responsive image URLs for different screen sizes
 * @param {string} baseUrl - Base image URL
 * @param {Array} sizes - Array of width sizes [320, 640, 1024, 1280]
 * @returns {Object} Responsive image data
 */
export const generateResponsiveImages = (baseUrl, sizes = [320, 640, 1024, 1280]) => {
  if (!baseUrl) return null;

  // If it's a static asset, we can't generate different sizes
  // In production, you'd use a CDN service like Cloudinary or ImageKit
  return {
    src: baseUrl,
    srcSet: sizes.map(size => `${baseUrl} ${size}w`).join(', '),
    sizes: '(max-width: 320px) 320px, (max-width: 640px) 640px, (max-width: 1024px) 1024px, 1280px'
  };
};

/**
 * Preload critical images
 * @param {Array} imageUrls - Array of image URLs to preload
 */
export const preloadImages = (imageUrls) => {
  if (!Array.isArray(imageUrls)) return;

  imageUrls.forEach(url => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = url;
    document.head.appendChild(link);
  });
};

/**
 * Check if WebP is supported
 * @returns {Promise<boolean>} WebP support status
 */
export const checkWebPSupport = () => {
  return new Promise((resolve) => {
    const webP = new Image();
    webP.onload = () => resolve(webP.height === 2);
    webP.onerror = () => resolve(false);
    webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
  });
};

/**
 * Get optimized image format based on browser support
 * @param {string} originalUrl - Original image URL
 * @param {boolean} supportsWebP - Whether browser supports WebP
 * @returns {string} Optimized image URL
 */
export const getOptimizedImageUrl = (originalUrl, supportsWebP = false) => {
  if (!originalUrl) return '';

  // In production, you would use a CDN service to convert formats
  // For now, return the original URL
  return originalUrl;
};

/**
 * Calculate image aspect ratio
 * @param {number} width - Image width
 * @param {number} height - Image height
 * @returns {string} CSS aspect ratio value
 */
export const calculateAspectRatio = (width, height) => {
  if (!width || !height) return 'auto';
  return `${width} / ${height}`;
};

/**
 * Optimize image loading with progressive enhancement
 * @param {HTMLImageElement} img - Image element
 * @param {string} src - Image source
 * @param {string} lowQualitySrc - Low quality placeholder source
 */
export const progressiveImageLoad = (img, src, lowQualitySrc) => {
  if (lowQualitySrc) {
    img.src = lowQualitySrc;
    img.style.filter = 'blur(2px)';
  }

  const highQualityImg = new Image();
  highQualityImg.onload = () => {
    img.src = src;
    img.style.filter = 'none';
    img.style.transition = 'filter 0.3s ease-out';
  };
  highQualityImg.src = src;
};

/**
 * Compress image dimensions while maintaining aspect ratio
 * @param {number} originalWidth - Original width
 * @param {number} originalHeight - Original height  
 * @param {number} maxWidth - Maximum allowed width
 * @param {number} maxHeight - Maximum allowed height
 * @returns {Object} Compressed dimensions
 */
export const compressDimensions = (originalWidth, originalHeight, maxWidth, maxHeight) => {
  const widthRatio = maxWidth / originalWidth;
  const heightRatio = maxHeight / originalHeight;
  const ratio = Math.min(widthRatio, heightRatio);

  if (ratio >= 1) {
    return { width: originalWidth, height: originalHeight };
  }

  return {
    width: Math.floor(originalWidth * ratio),
    height: Math.floor(originalHeight * ratio)
  };
};

/**
 * Get image file size estimate in bytes
 * @param {string} url - Image URL
 * @returns {Promise<number>} File size in bytes
 */
export const getImageSize = async (url) => {
  try {
    const response = await fetch(url, { method: 'HEAD' });
    const contentLength = response.headers.get('content-length');
    return contentLength ? parseInt(contentLength, 10) : 0;
  } catch (error) {
    console.warn('Could not determine image size:', error);
    return 0;
  }
};

/**
 * Performance monitoring for images
 */
export class ImagePerformanceMonitor {
  constructor() {
    this.loadTimes = new Map();
    this.failedLoads = new Set();
  }

  startLoad(imageUrl) {
    this.loadTimes.set(imageUrl, performance.now());
  }

  endLoad(imageUrl) {
    const startTime = this.loadTimes.get(imageUrl);
    if (startTime) {
      const loadTime = performance.now() - startTime;
      console.log(`Image ${imageUrl} loaded in ${loadTime.toFixed(2)}ms`);
      this.loadTimes.delete(imageUrl);
    }
  }

  recordFailure(imageUrl) {
    this.failedLoads.add(imageUrl);
    console.warn(`Failed to load image: ${imageUrl}`);
  }

  getStats() {
    return {
      pendingLoads: this.loadTimes.size,
      failedLoads: this.failedLoads.size,
      failedUrls: Array.from(this.failedLoads)
    };
  }
}

// Global instance for image performance monitoring
export const imageMonitor = new ImagePerformanceMonitor();
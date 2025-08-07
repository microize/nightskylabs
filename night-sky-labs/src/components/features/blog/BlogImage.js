import React, { useState, useEffect } from 'react';
import { LuImage, LuX } from 'react-icons/lu';

const BlogImage = ({ 
  src, 
  alt, 
  caption, 
  title,
  className = 'w-full max-w-4xl mx-auto',
  loading = 'lazy',
  showPlaceholder = true 
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    // Handle relative paths for blog images
    let processedSrc = src;
    if (!src.startsWith('http') && !src.startsWith('/')) {
      processedSrc = `/images/blog/${src}`;
    }
    setImageSrc(processedSrc);
  }, [src]);

  const handleImageLoad = () => {
    setImageLoaded(true);
    setImageError(false);
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(false);
  };

  const PlaceholderContent = () => (
    <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center min-h-[200px] md:min-h-[300px]">
      {imageError ? (
        <div className="text-center p-6">
          <div className="relative">
            <LuImage className="mx-auto mb-2 text-gray-300" size={48} />
            <LuX className="absolute -top-1 -right-1 text-red-400 bg-white rounded-full" size={16} />
          </div>
          <p className="text-sm text-gray-500">Failed to load image</p>
          <p className="text-xs text-gray-400 mt-1">{alt}</p>
        </div>
      ) : (
        <div className="text-center p-6">
          <LuImage className="mx-auto mb-2 text-gray-400 animate-pulse" size={48} />
          <p className="text-sm text-gray-500">Loading image...</p>
        </div>
      )}
    </div>
  );

  const ImageContent = () => (
    <img
      src={imageSrc}
      alt={alt}
      title={title}
      className={`${className} rounded-lg shadow-sm transition-opacity duration-300 ${
        imageLoaded ? 'opacity-100' : 'opacity-0'
      }`}
      loading={loading}
      onLoad={handleImageLoad}
      onError={handleImageError}
      style={{ display: imageLoaded ? 'block' : 'none' }}
    />
  );

  if (caption) {
    return (
      <figure className="my-8 text-center">
        <div className="relative">
          {(!imageLoaded || imageError) && showPlaceholder && <PlaceholderContent />}
          <ImageContent />
        </div>
        <figcaption className="mt-3 text-sm font-thin text-gray-500 italic">
          {caption}
        </figcaption>
      </figure>
    );
  }

  return (
    <div className="my-8 text-center">
      <div className="relative">
        {(!imageLoaded || imageError) && showPlaceholder && <PlaceholderContent />}
        <ImageContent />
      </div>
    </div>
  );
};

// Hero image component for featured blog posts
export const BlogHeroImage = ({ src, alt, className = 'w-full h-64 md:h-80 object-cover' }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  let imageSrc = src;
  if (src && !src.startsWith('http') && !src.startsWith('/')) {
    imageSrc = `/images/blog/${src}`;
  }

  if (imageError || !src) {
    return (
      <div className={`${className} bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center`}>
        <LuImage size={64} className="text-gray-400" />
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden">
      {!imageLoaded && (
        <div className={`${className} bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center absolute inset-0`}>
          <LuImage size={64} className="text-gray-400 animate-pulse" />
        </div>
      )}
      <img
        src={imageSrc}
        alt={alt}
        className={`${className} transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={() => setImageLoaded(true)}
        onError={() => setImageError(true)}
        loading="eager"
      />
    </div>
  );
};

// Image gallery component for multiple images
export const BlogImageGallery = ({ images = [], columns = 2 }) => {
  const gridClass = columns === 3 ? 'grid-cols-1 md:grid-cols-3' : 'grid-cols-1 md:grid-cols-2';
  
  return (
    <div className={`grid ${gridClass} gap-4 my-8`}>
      {images.map((image, index) => (
        <BlogImage
          key={index}
          src={image.src}
          alt={image.alt}
          caption={image.caption}
          className="w-full h-48 object-cover"
        />
      ))}
    </div>
  );
};

export default BlogImage;
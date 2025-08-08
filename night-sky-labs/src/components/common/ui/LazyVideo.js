import React, { useState, useRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const LazyVideo = ({
  src,
  poster,
  className = '',
  autoPlay = false,
  muted = true,
  loop = false,
  controls = false,
  preload = 'none',
  onLoad,
  onError,
  ...props
}) => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef(null);
  
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '100px 0px', // Load videos 100px before they come into view
  });

  useEffect(() => {
    if (inView && videoRef.current && autoPlay) {
      // Only attempt autoplay when in view
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Auto-play was prevented, which is fine
          console.log('Video autoplay prevented');
        });
      }
    }
  }, [inView, autoPlay]);

  const handleLoadedData = () => {
    setVideoLoaded(true);
    if (onLoad) onLoad();
  };

  const handleError = () => {
    setVideoError(true);
    if (onError) onError();
  };

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`} {...props}>
      {/* Loading placeholder */}
      {!videoLoaded && !videoError && inView && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
          <svg 
            className="w-12 h-12 text-gray-400" 
            fill="currentColor" 
            viewBox="0 0 20 20"
          >
            <path 
              fillRule="evenodd" 
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" 
              clipRule="evenodd" 
            />
          </svg>
        </div>
      )}

      {/* Error state */}
      {videoError && (
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
          <div className="text-center">
            <svg 
              className="w-12 h-12 text-gray-400 mx-auto mb-2" 
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path 
                fillRule="evenodd" 
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" 
                clipRule="evenodd" 
              />
            </svg>
            <span className="text-sm text-gray-500">Failed to load video</span>
          </div>
        </div>
      )}

      {/* Poster image placeholder (if no video loaded yet) */}
      {!inView && poster && (
        <img
          src={poster}
          alt="Video thumbnail"
          className="w-full h-full object-cover"
        />
      )}

      {/* Actual video */}
      {inView && (
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            videoLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          autoPlay={autoPlay}
          muted={muted}
          loop={loop}
          controls={controls}
          preload={preload}
          onLoadedData={handleLoadedData}
          onError={handleError}
          playsInline // Better mobile support
        >
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
};

export default LazyVideo;
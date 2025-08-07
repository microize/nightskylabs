import React from 'react';

const LoadingSpinner = ({ size = 'md', color = 'black', className = '' }) => {
  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'w-4 h-4 border-2';
      case 'lg':
        return 'w-12 h-12 border-4';
      case 'xl':
        return 'w-16 h-16 border-4';
      default:
        return 'w-8 h-8 border-2';
    }
  };

  const getColorClasses = () => {
    switch (color) {
      case 'white':
        return 'border-white border-t-transparent';
      case 'gray':
        return 'border-gray-300 border-t-transparent';
      default:
        return 'border-black border-t-transparent';
    }
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div 
        className={`${getSizeClasses()} ${getColorClasses()} rounded-full animate-spin`}
        role="status"
        aria-label="Loading"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default LoadingSpinner;
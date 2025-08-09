import React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const Pagination = ({ 
  currentPage = 1, 
  totalPages = 1, 
  onPageChange,
  showInfo = true,
  maxVisiblePages = 5
}) => {
  if (totalPages <= 1) return null;

  // Calculate visible page numbers
  const getVisiblePages = () => {
    const pages = [];
    const halfVisible = Math.floor(maxVisiblePages / 2);
    
    let startPage = Math.max(1, currentPage - halfVisible);
    let endPage = Math.min(totalPages, currentPage + halfVisible);
    
    // Adjust if we're near the beginning or end
    if (endPage - startPage + 1 < maxVisiblePages) {
      if (startPage === 1) {
        endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
      } else {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
      }
    }
    
    // Add first page and ellipsis if needed
    if (startPage > 1) {
      pages.push(1);
      if (startPage > 2) {
        pages.push('ellipsis-start');
      }
    }
    
    // Add visible pages
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    
    // Add ellipsis and last page if needed
    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pages.push('ellipsis-end');
      }
      pages.push(totalPages);
    }
    
    return pages;
  };

  const visiblePages = getVisiblePages();

  const handlePageClick = (page) => {
    if (page !== currentPage && page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      {/* Page Info */}
      {showInfo && (
        <div className="text-sm font-thin text-gray-600">
          Page {currentPage} of {totalPages}
        </div>
      )}

      {/* Pagination Controls */}
      <nav className="flex items-center space-x-2" aria-label="Pagination">
        {/* Previous Button */}
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className={`flex items-center px-3 py-2 rounded-lg text-sm font-thin transition-all duration-200 ${
            currentPage === 1
              ? 'text-gray-300 cursor-not-allowed'
              : 'text-gray-600 hover:text-[#998664] hover:bg-gray-50'
          }`}
          aria-label="Previous page"
        >
          <ChevronLeftIcon className="w-4 h-4 mr-1" />
          <span className="hidden sm:inline">Previous</span>
        </button>

        {/* Page Numbers */}
        <div className="flex items-center space-x-1">
          {visiblePages.map((page, index) => {
            if (typeof page === 'string' && page.startsWith('ellipsis')) {
              return (
                <span 
                  key={page} 
                  className="px-2 py-2 text-gray-400"
                  aria-hidden="true"
                >
                  ...
                </span>
              );
            }

            return (
              <button
                key={page}
                onClick={() => handlePageClick(page)}
                className={`min-w-[2.5rem] h-10 flex items-center justify-center rounded-lg text-sm font-thin transition-all duration-200 ${
                  page === currentPage
                    ? 'bg-[#998664] text-white shadow-md'
                    : 'text-gray-600 hover:text-[#998664] hover:bg-gray-50'
                }`}
                aria-label={`Go to page ${page}`}
                aria-current={page === currentPage ? 'page' : undefined}
              >
                {page}
              </button>
            );
          })}
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={`flex items-center px-3 py-2 rounded-lg text-sm font-thin transition-all duration-200 ${
            currentPage === totalPages
              ? 'text-gray-300 cursor-not-allowed'
              : 'text-gray-600 hover:text-[#998664] hover:bg-gray-50'
          }`}
          aria-label="Next page"
        >
          <span className="hidden sm:inline">Next</span>
          <ChevronRightIcon className="w-4 h-4 ml-1" />
        </button>
      </nav>

      {/* Mobile-friendly page selector */}
      <div className="sm:hidden">
        <select
          value={currentPage}
          onChange={(e) => handlePageClick(parseInt(e.target.value))}
          className="px-3 py-2 border border-gray-200 rounded-lg text-sm font-thin bg-white focus:outline-none focus:ring-2 focus:ring-[#998664] focus:ring-opacity-20"
          aria-label="Select page"
        >
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <option key={page} value={page}>
              Page {page}
            </option>
          ))}
        </select>
      </div>

      {/* Jump to page (for large pagination) */}
      {totalPages > 10 && (
        <div className="hidden md:flex items-center space-x-2 text-sm">
          <span className="font-thin text-gray-600">Go to page:</span>
          <input
            type="number"
            min={1}
            max={totalPages}
            placeholder={currentPage.toString()}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                const page = parseInt(e.target.value);
                if (page >= 1 && page <= totalPages) {
                  handlePageClick(page);
                  e.target.value = '';
                }
              }
            }}
            className="w-16 px-2 py-1 border border-gray-200 rounded text-center text-sm font-thin focus:outline-none focus:ring-2 focus:ring-[#998664] focus:ring-opacity-20"
          />
        </div>
      )}
    </div>
  );
};

export default Pagination;
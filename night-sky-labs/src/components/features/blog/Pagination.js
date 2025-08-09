import React from 'react';
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu';

const Pagination = ({ 
  currentPage, 
  totalPages, 
  onPageChange, 
  showPageNumbers = true,
  maxPageNumbers = 5 
}) => {
  if (totalPages <= 1) return null;

  const getPageNumbers = () => {
    const pages = [];
    const halfMax = Math.floor(maxPageNumbers / 2);
    let startPage = Math.max(1, currentPage - halfMax);
    let endPage = Math.min(totalPages, startPage + maxPageNumbers - 1);

    if (endPage - startPage + 1 < maxPageNumbers) {
      startPage = Math.max(1, endPage - maxPageNumbers + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="flex items-center justify-center space-x-2 mt-12">
      {/* Previous Button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`flex items-center px-3 py-2 rounded-lg text-sm font-thin transition-colors ${
          currentPage === 1
            ? 'text-gray-400 cursor-not-allowed'
            : 'text-gray-700 hover:text-[#998664] hover:bg-[#998664] hover:bg-opacity-20'
        }`}
      >
        <LuChevronLeft className="h-4 w-4 mr-1" />
        Previous
      </button>

      {/* Page Numbers */}
      {showPageNumbers && (
        <div className="flex items-center space-x-1">
          {/* First page if not visible */}
          {pageNumbers[0] > 1 && (
            <>
              <button
                onClick={() => onPageChange(1)}
                className="px-3 py-2 rounded-lg text-sm font-thin text-gray-700 hover:text-[#998664] hover:bg-[#998664] hover:bg-opacity-20"
              >
                1
              </button>
              {pageNumbers[0] > 2 && (
                <span className="px-2 text-gray-400">...</span>
              )}
            </>
          )}

          {/* Page numbers */}
          {pageNumbers.map((page) => (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={`px-3 py-2 rounded-lg text-sm font-thin transition-colors ${
                page === currentPage
                  ? 'bg-[#998664] text-white'
                  : 'text-gray-700 hover:text-[#998664] hover:bg-[#998664] hover:bg-opacity-20'
              }`}
            >
              {page}
            </button>
          ))}

          {/* Last page if not visible */}
          {pageNumbers[pageNumbers.length - 1] < totalPages && (
            <>
              {pageNumbers[pageNumbers.length - 1] < totalPages - 1 && (
                <span className="px-2 text-gray-400">...</span>
              )}
              <button
                onClick={() => onPageChange(totalPages)}
                className="px-3 py-2 rounded-lg text-sm font-thin text-gray-700 hover:text-[#998664] hover:bg-[#998664] hover:bg-opacity-20"
              >
                {totalPages}
              </button>
            </>
          )}
        </div>
      )}

      {/* Next Button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`flex items-center px-3 py-2 rounded-lg text-sm font-thin transition-colors ${
          currentPage === totalPages
            ? 'text-gray-400 cursor-not-allowed'
            : 'text-gray-700 hover:text-[#998664] hover:bg-[#998664] hover:bg-opacity-20'
        }`}
      >
        Next
        <LuChevronRight className="h-4 w-4 ml-1" />
      </button>
    </div>
  );
};

export default Pagination;
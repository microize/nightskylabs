import React from 'react';

const CategoryFilter = ({ categories, selectedCategory, onCategoryChange }) => {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-4 py-2 rounded-full text-sm font-thin transition-colors ${
            selectedCategory === category
              ? 'bg-[#998664] text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-[#998664] hover:bg-opacity-20 hover:text-[#998664]'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
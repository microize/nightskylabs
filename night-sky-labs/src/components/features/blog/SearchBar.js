import React from 'react';
import { LuSearch } from 'react-icons/lu';

const SearchBar = ({ searchTerm, onSearchChange, placeholder = "Search articles..." }) => {
  return (
    <div className="relative max-w-md mx-auto">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <LuSearch className="h-5 w-5 text-gray-400" />
      </div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder={placeholder}
        className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg text-sm font-thin placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#998664] focus:border-[#998664]"
      />
    </div>
  );
};

export default SearchBar;
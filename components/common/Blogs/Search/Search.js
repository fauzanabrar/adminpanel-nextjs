import React from 'react';
import { SearchIcon } from '@heroicons/react/outline';

export const Search = ({ placeholder, ref, onClick, onChange }) => {
  return (
    <div className="relative mr-4 flex flex-row-reverse items-center w-64">
      <input
        ref={ref}
        type="text"
        placeholder={placeholder}
        className="pl-4 pr-12 py-2 w-96 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none text-sm text-gray-600 placeholder-gray-500"
        onChange={onChange}
      />
      <div className="absolute top-1/2 transform -translate-y-1/2 text-gray-400 pr-4">
        <SearchIcon className="h-5 w-5 cursor-pointer" onClick={onClick} />
      </div>
    </div>
  );
}

export default Search;

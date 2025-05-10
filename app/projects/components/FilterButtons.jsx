import React from 'react';

const FilterButtons = ({ categories, activeFilter, onFilterChange }) => (
  <div className="mb-8 flex flex-wrap justify-center gap-2">
    {categories.map(category => (
      <button
        key={category}
        className={`px-4 py-2 rounded-full capitalize ${
          activeFilter === category
            ? 'bg-blue-600 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        } transition-colors`}
        onClick={() => onFilterChange(category)}
      >
        {category}
      </button>
    ))}
  </div>
);

export default FilterButtons;
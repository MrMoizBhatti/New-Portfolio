import React from 'react';

const SpecializationTags = ({ tags }) => (
  <div className="flex flex-wrap gap-2">
    {tags.map((tag, index) => (
      <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
        {tag}
      </span>
    ))}
  </div>
);

export default SpecializationTags;

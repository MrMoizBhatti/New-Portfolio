import React from 'react';

const EducationList = ({ education }) => (
  <ul className="space-y-1 text-sm text-gray-600">
    {education.map((edu, index) => (
      <li key={index}>{edu}</li>
    ))}
  </ul>
);

export default EducationList;

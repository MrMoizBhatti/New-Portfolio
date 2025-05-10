// ResumePreview.jsx
import React from 'react';
import Image from 'next/image';

const ResumePreview = ({ imageUrl, altText }) => (
  <div className="mb-6 relative aspect-[1/1.414] w-full max-w-2xl mx-auto">
    <Image
      src={imageUrl}            // "/images/Cvpic.jpg"
      alt={altText}
      fill
      className="object-contain rounded-lg border border-gray-200 shadow-sm"
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
      quality={90}
      priority
    />
  </div>
);

export default ResumePreview;

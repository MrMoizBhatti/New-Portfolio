import React from 'react';

const Section = ({ 
  id, 
  title, 
  subtitle, 
  children, 
  className = '',
  backgroundClass = 'bg-white'
}) => {
  return (
    <section 
      id={id} 
      className={`py-20 ${backgroundClass} ${className}`}
    >
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
            {title}
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-blue-600"></span>
          </h2>
          {subtitle && (
            <p className="text-gray-600 max-w-2xl mx-auto mt-6">{subtitle}</p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
};

export default Section;
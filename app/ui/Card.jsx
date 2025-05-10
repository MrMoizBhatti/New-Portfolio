import React from 'react';

const Card = ({ 
  className = '', 
  children, 
  onClick, 
  hover = true 
}) => {
  const hoverClasses = hover ? 'transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg' : '';
  
  return (
    <div 
      className={`bg-white rounded-lg shadow-md overflow-hidden ${hoverClasses} ${className}`}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {children}
    </div>
  );
};

const CardImage = ({ src, alt, className = '' }) => (
  <div className={`w-full overflow-hidden ${className}`}>
    <img src={src} alt={alt} className="w-full h-full object-cover" />
  </div>
);

const CardBody = ({ className = '', children }) => (
  <div className={`p-5 ${className}`}>
    {children}
  </div>
);

const CardFooter = ({ className = '', children }) => (
  <div className={`px-5 py-4 bg-gray-50 ${className}`}>
    {children}
  </div>
);

export { CardImage, CardBody, CardFooter };
export default Card;
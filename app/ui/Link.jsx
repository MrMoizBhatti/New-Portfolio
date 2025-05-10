import React from 'react';

const Link = ({ href, children, className, ...rest }) => {
  const handleClick = (e) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        window.scrollTo({
          top: element.getBoundingClientRect().top + window.pageYOffset - 80,
          behavior: 'smooth',
        });
      }
      // Update URL without page reload
      window.history.pushState(null, '', href);
    }
    
    if (rest.onClick) {
      rest.onClick(e);
    }
  };

  return (
    <a 
      href={href} 
      className={className} 
      onClick={handleClick} 
      {...rest}
    >
      {children}
    </a>
  );
};

export default Link;
"use client";
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLink = ({ href, label, active, onClick }) => (
  <Link
    href={href}
    className={`relative px-3 py-2 transition-colors duration-200 hover:text-blue-600 ${active ? 'text-blue-600 font-medium' : 'text-gray-700'
      }`}
    onClick={onClick}
  >
    {label}
    {active && (
      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform transition-transform duration-200"></span>
    )}
  </Link>
);

const Navbar = () => {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Only detect sections if we're on the home page
      if (pathname === '/') {
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.scrollY + 100;

        sections.forEach((section) => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          const sectionId = section.getAttribute('id') || '';

          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            setActiveSection(sectionId);
          }
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  // Set active section based on route for non-home pages
  useEffect(() => {
    if (pathname !== '/') {
      setActiveSection(pathname.substring(1)); // removes the leading slash
    }
  }, [pathname]);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  // Handle body scroll lock when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const navLinks = [
    { href: '/', label: 'Home', id: 'home' },
    { href: '/about', label: 'About', id: 'about' },
    { href: '/research', label: 'Research', id: 'research' },
    { href: '/projects', label: 'Projects', id: 'projects' },
    { href: '/blog', label: 'Blog', id: 'blog' },
    { href: '/contact', label: 'Contact', id: 'contact' },
    { href: '/publications', label: 'Publications', id: 'publics' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-white/95 py-3'
        }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold flex items-center">
          <span className="text-blue-600">AI</span>
          <span className="text-gray-800">Researcher</span>
          <ChevronRight className="ml-1 h-5 w-5" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              href={link.href}
              label={link.label}
              active={activeSection === link.id}
            />
          ))}
          <Link
            href="/resume"
            className="ml-4 px-4 py-2 bg-blue-600 text-white rounded-md transition-colors duration-200 hover:bg-blue-700"
          >
            Resume
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 hover:text-blue-600 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation - Professional Dropdown Style */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-lg overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <nav className="flex flex-col py-3 border-t border-gray-100">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-6 py-3 ${activeSection === link.id
                  ? 'text-blue-600 bg-blue-50 border-l-4 border-blue-600'
                  : 'text-gray-700 border-l-4 border-transparent'
                }`}
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}
          <div className="px-6 py-4">
            <Link
              href="/resume"
              className="block w-full px-4 py-2 bg-blue-600 text-white rounded-md text-center transition-colors duration-200 hover:bg-blue-700"
              onClick={closeMenu}
            >
              Resume
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
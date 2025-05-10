import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Footer navigation links (consistent with Navbar)
  const footerLinks = [
    { href: '/', label: 'Home', id: 'home' },
    { href: '/about', label: 'About', id: 'about' },
    { href: '/research', label: 'Research', id: 'research' },
    { href: '/projects', label: 'Projects', id: 'projects' },
    { href: '/blog', label: 'Blog', id: 'blog' },
    { href: '/contact', label: 'Contact', id: 'contact' },
  ];

  // Social media links
  const socialLinks = [
    { 
      href: "https://github.com", 
      icon: <Github size={20} />, 
      label: "GitHub" 
    },
    { 
      href: "https://linkedin.com", 
      icon: <Linkedin size={20} />, 
      label: "LinkedIn" 
    },
    { 
      href: "https://twitter.com", 
      icon: <Twitter size={20} />, 
      label: "Twitter" 
    },
    { 
      href: "mailto:contact@example.com", 
      icon: <Mail size={20} />, 
      label: "Email" 
    },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              <span className="text-white">AI</span>
              <span className="text-blue-400">Researcher</span>
            </h3>
            <p className="text-gray-300 mb-4">
              Exploring the frontiers of artificial intelligence through
              research, innovation, and practical applications.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.id}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <address className="not-italic">
              <p className="text-gray-300 mb-2">Department of Computer Science</p>
              <p className="text-gray-300 mb-2">University of Technology</p>
              <p className="text-gray-300 mb-2">1234 Research Avenue</p>
              <a 
                href="mailto:contact@example.com" 
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                contact@example.com
              </a>
            </address>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; {currentYear} AI Researcher. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
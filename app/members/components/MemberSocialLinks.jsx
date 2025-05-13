import React from 'react';
import { Linkedin, Github, Twitter, Globe } from 'lucide-react';

const MemberSocialLinks = ({ socialLinks }) => (
  <div className="flex space-x-4">
    {socialLinks.linkedin && (
      <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="text-gray-600 hover:text-blue-600 transition-colors">
        <Linkedin size={20} />
      </a>
    )}
    {socialLinks.github && (
      <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="text-gray-600 hover:text-gray-900 transition-colors">
        <Github size={20} />
      </a>
    )}
    {socialLinks.twitter && (
      <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter Profile" className="text-gray-600 hover:text-blue-400 transition-colors">
        <Twitter size={20} />
      </a>
    )}
    {socialLinks.website && (
      <a href={socialLinks.website} target="_blank" rel="noopener noreferrer" aria-label="Personal Website" className="text-gray-600 hover:text-purple-600 transition-colors">
        <Globe size={20} />
      </a>
    )}
  </div>
);

export default MemberSocialLinks;

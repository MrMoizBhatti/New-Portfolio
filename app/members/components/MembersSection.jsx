import React from 'react';
import Section from '@/app/ui/Section';
import { Linkedin, Github, Twitter, Globe } from 'lucide-react';
import membersData from '@/app/utils/membersData';

const MembersSection = () => {
  return (
    <Section 
      id="members" 
      title="Research Team" 
      subtitle="Meet our dedicated team of researchers pushing the boundaries of artificial intelligence."
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
        {membersData.map((member) => (
          <div key={member.id} className="group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
            <div className="relative">
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-64 object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 w-full">
                  <div className="flex justify-center space-x-4">
                    {member.socialLinks.linkedin && (
                      <a 
                        href={member.socialLinks.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-blue-300 transition-colors"
                        aria-label="LinkedIn Profile"
                      >
                        <Linkedin size={20} />
                      </a>
                    )}
                    {member.socialLinks.github && (
                      <a 
                        href={member.socialLinks.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-blue-300 transition-colors"
                        aria-label="GitHub Profile"
                      >
                        <Github size={20} />
                      </a>
                    )}
                    {member.socialLinks.twitter && (
                      <a 
                        href={member.socialLinks.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-blue-300 transition-colors"
                        aria-label="Twitter Profile"
                      >
                        <Twitter size={20} />
                      </a>
                    )}
                    {member.socialLinks.website && (
                      <a 
                        href={member.socialLinks.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-blue-300 transition-colors"
                        aria-label="Personal Website"
                      >
                        <Globe size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <div className="mb-3">
                <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium">{member.role}</p>
              </div>
              
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">{member.bio}</p>
              
              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 text-sm mb-2">Specialization</h4>
                <div className="flex flex-wrap gap-2">
                  {member.specialization.map((spec, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 text-sm mb-2">Education</h4>
                <ul className="space-y-1 text-xs text-gray-600">
                  {member.education.map((edu, index) => (
                    <li key={index}>{edu}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default MembersSection;
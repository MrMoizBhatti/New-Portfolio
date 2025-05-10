import React from 'react';
import Section from '@/app/ui/Section';
import { BookOpen, Building, Award, Users } from 'lucide-react';
import SkillBar from './SkillBar';

const AboutSection = () => {
  // Technical skills with proficiency levels (0-100)
  const technicalSkills = [
    { name: 'Python', level: 95 },
    { name: 'TensorFlow/PyTorch', level: 90 },
    { name: 'Computer Vision', level: 85 },
    { name: 'Natural Language Processing', level: 80 },
    { name: 'Deep Learning', level: 92 },
    { name: 'Data Analysis', level: 88 },
    { name: 'Machine Learning', level: 95 },
    { name: 'R', level: 75 },
  ];

  // Soft skills
  const softSkills = [
    'Research Design',
    'Scientific Writing',
    'Public Speaking',
    'Teamwork',
    'Project Management',
    'Critical Thinking',
    'Problem Solving',
    'Leadership',
  ];

  return (
    <Section 
      id="about" 
      title="About Me" 
      subtitle="Dedicated to advancing the frontiers of artificial intelligence through innovative research."
      backgroundClass="bg-gray-50"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left column: Bio and education */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Biography</h3>
            <p className="text-gray-600 mb-4">
              I am an Assistant Professor at the University of Technology's Department of Computer Science, where I lead the Advanced AI Research Lab. My research focuses on developing novel algorithms for computer vision and natural language processing.
            </p>
            <p className="text-gray-600 mb-4">
              Prior to joining academia, I spent 4 years at DeepMind working on reinforcement learning algorithms. I hold a Ph.D. in Computer Science from Stanford University and completed my postdoctoral research at MIT.
            </p>
            
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Education</h3>
              <div className="space-y-4">
                <div className="flex">
                  <div className="mr-4 text-blue-600">
                    <BookOpen size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold">Ph.D. in Computer Science</h4>
                    <p className="text-gray-600">Stanford University, 2015-2019</p>
                    <p className="text-gray-500 text-sm">Focus: Deep Learning & Computer Vision</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4 text-blue-600">
                    <BookOpen size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold">M.S. in Computer Science</h4>
                    <p className="text-gray-600">MIT, 2013-2015</p>
                    <p className="text-gray-500 text-sm">Focus: Machine Learning</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4 text-blue-600">
                    <BookOpen size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold">B.S. in Computer Science</h4>
                    <p className="text-gray-600">UC Berkeley, 2009-2013</p>
                    <p className="text-gray-500 text-sm">Minor in Mathematics</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Middle & Right columns: Experience and skills */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow p-6 mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Experience</h3>
            <div className="space-y-6">
              <div className="flex">
                <div className="mr-4 text-blue-600">
                  <Building size={24} />
                </div>
                <div>
                  <h4 className="font-semibold">Assistant Professor</h4>
                  <p className="text-gray-600">University of Technology, 2021-Present</p>
                  <p className="text-gray-500">
                    Leading the Advanced AI Research Lab, teaching graduate courses on deep learning, 
                    and supervising 5 Ph.D. students.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-4 text-blue-600">
                  <Building size={24} />
                </div>
                <div>
                  <h4 className="font-semibold">Research Scientist</h4>
                  <p className="text-gray-600">DeepMind, 2019-2021</p>
                  <p className="text-gray-500">
                    Developed reinforcement learning algorithms for complex decision-making tasks, 
                    resulting in 3 publications at NeurIPS and ICML.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-4 text-blue-600">
                  <Building size={24} />
                </div>
                <div>
                  <h4 className="font-semibold">Postdoctoral Researcher</h4>
                  <p className="text-gray-600">MIT, 2019-2020</p>
                  <p className="text-gray-500">
                    Conducted research on computer vision and collaborated with the robotics lab on 
                    vision-based manipulation.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Technical Skills</h3>
              <div className="space-y-4">
                {technicalSkills.map((skill) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Soft Skills</h3>
              <div className="grid grid-cols-2 gap-3">
                {softSkills.map((skill) => (
                  <div key={skill} className="flex items-center">
                    <div className="text-blue-600 mr-2">
                      <Users size={16} />
                    </div>
                    <span className="text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Awards & Honors</h3>
                <div className="space-y-3">
                  <div className="flex">
                    <div className="text-blue-600 mr-2">
                      <Award size={18} />
                    </div>
                    <div>
                      <p className="font-medium">Best Paper Award, CVPR 2022</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="text-blue-600 mr-2">
                      <Award size={18} />
                    </div>
                    <div>
                      <p className="font-medium">Faculty Research Award, 2021</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="text-blue-600 mr-2">
                      <Award size={18} />
                    </div>
                    <div>
                      <p className="font-medium">Outstanding Dissertation Award, 2019</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;
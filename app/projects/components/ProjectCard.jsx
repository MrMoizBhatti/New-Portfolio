import React from 'react';
import Card, { CardImage, CardBody, CardFooter } from '@/app/ui/Card';
import { Github, ExternalLink } from 'lucide-react';

const ProjectCard = ({ project }) => (
  <Card className="flex flex-col h-full">
    <CardImage src={project.image} alt={project.title} className="h-48" />
    <CardBody className="flex-grow">
      <div className="mb-3">
        <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
          {project.category}
        </span>
      </div>
      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
      <p className="text-gray-600 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-3">
        {project.technologies.map((tech, idx) => (
          <span key={idx} className="inline-block px-2 py-1 text-xs bg-gray-200 text-gray-700 rounded">
            {tech}
          </span>
        ))}
      </div>
    </CardBody>
    <CardFooter className="flex justify-between">
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-gray-700 hover:text-blue-600 transition-colors"
        aria-label="GitHub Repository"
      >
        <Github size={18} className="mr-1" />
        Code
      </a>
      {project.demo && (
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          aria-label="Live Demo"
        >
          Demo <ExternalLink size={18} className="ml-1" />
        </a>
      )}
    </CardFooter>
  </Card>
);

export default ProjectCard;
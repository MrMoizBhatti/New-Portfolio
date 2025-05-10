"use client";
import React, { useState } from 'react';
import Section from '@/app/ui/Section';
import FilterButtons from './FilterButtons';
import ProjectCard from './ProjectCard';
import { projectsData } from '@/app/utils/projectsData';

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = ['all', ...Array.from(new Set(projectsData.map(item => item.category)))];
  const filteredProjects =
    activeFilter === 'all'
      ? projectsData
      : projectsData.filter(item => item.category === activeFilter);

  return (
    <Section
      id="projects"
      title="Projects"
      subtitle="A showcase of my practical applications of AI research."
      backgroundClass="bg-gray-50"
    >
      <FilterButtons
        categories={categories}
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
};

export default ProjectsSection;
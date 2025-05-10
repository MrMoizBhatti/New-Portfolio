"use client";
import React, { useState } from 'react';
import Section from '@/app/ui/Section';
import Card, {  CardBody, CardFooter } from '@/app/ui/Card'; 
import { ExternalLink, Filter } from 'lucide-react';
import { researchData } from '@/app/utils/researchData'; // Adjust the import path as necessary

const ResearchSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = ['all', ...Array.from(new Set(researchData.map(item => item.category)))];
  const filteredPublications =
    activeFilter === 'all'
      ? researchData
      : researchData.filter(item => item.category === activeFilter);

  return (
    <Section
      id="research"
      title="Research & Publications"
      subtitle="My academic contributions in the field of artificial intelligence."
    >
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {categories.map(category => (
          <button
            key={category}
            className={`px-4 py-2 rounded-full capitalize ${
              activeFilter === category
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            } transition-colors`}
            onClick={() => setActiveFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPublications.map(publication => (
          <Card key={publication.id} className="flex flex-col h-full">
            <CardBody className="flex-grow flex flex-col">
              <div className="mb-3">
                <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                  {publication.category}
                </span>
                <span className="inline-block ml-2 text-sm text-gray-500">
                  {publication.date}
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{publication.title}</h3>
              <p className="text-gray-600 mb-4 flex-grow">{publication.abstract}</p>
              {publication.coauthors && (
                <div className="text-sm text-gray-500 mb-2">
                  <span className="font-medium">Co-authors:</span> {publication.coauthors}
                </div>
              )}
              {publication.journal && (
                <div className="text-sm text-gray-500">
                  <span className="font-medium">Published in:</span> {publication.journal}
                </div>
              )}
            </CardBody>
            <CardFooter className="flex justify-between">
              <div className="text-sm font-medium text-gray-600">
                Citations: {publication.citations}
              </div>
              <a
                href={publication.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
              >
                View Paper <ExternalLink size={16} className="ml-1" />
              </a>
            </CardFooter>
          </Card>
        ))}
      </div>

      {filteredPublications.length === 0 && (
        <div className="text-center py-12">
          <Filter className="mx-auto text-gray-400 mb-4" size={48} />
          <p className="text-gray-500 text-lg">No publications found in this category.</p>
          <button
            className="mt-4 text-blue-600 hover:underline"
            onClick={() => setActiveFilter('all')}
          >
            Clear filters
          </button>
        </div>
      )}
    </Section>
  );
};

export default ResearchSection;

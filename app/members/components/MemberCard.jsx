import React from 'react';
import Card, { CardImage, CardBody } from '@/app/ui/Card'; // Adjust the import path as necessary
import MemberSocialLinks from './MemberSocialLinks';
import SpecializationTags from './SpecializationTags';
import EducationList from './EducationList';

const MemberCard = ({ member }) => (
  <Card className="flex flex-col md:flex-row">
    <CardImage 
      src={member.image}
      alt={member.name}
      className="w-full md:w-1/3 h-64 md:h-auto"
    />
    <CardBody className="flex-1">
      <div className="mb-4">
        <h3 className="text-2xl font-bold text-gray-800">{member.name}</h3>
        <p className="text-blue-600 font-medium">{member.role}</p>
      </div>

      <p className="text-gray-600 mb-4">{member.bio}</p>

      <div className="mb-4">
        <h4 className="font-semibold text-gray-800 mb-2">Specialization</h4>
        <SpecializationTags tags={member.specialization} />
      </div>

      <div className="mb-4">
        <h4 className="font-semibold text-gray-800 mb-2">Education</h4>
        <EducationList education={member.education} />
      </div>

      <MemberSocialLinks socialLinks={member.socialLinks} />
    </CardBody>
  </Card>
);

export default MemberCard;

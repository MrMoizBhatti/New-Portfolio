+ 'use client';
import React from 'react';
import Button from '@/app/ui/Button';
import { FileDown, Eye } from 'lucide-react';

const ResumeActions = ({ resumeUrl }) => (
  <div className="flex flex-col sm:flex-row justify-center gap-4">
    <a
      href={resumeUrl}
      download="AI-Researcher-CV.pdf"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Button
        variant="primary"
        size="lg"
        icon={<FileDown className="w-5 h-5" />}
      >
        Download CV (PDF)
      </Button>
    </a>

    <Button
      variant="outline"
      size="lg"
      icon={<Eye className="w-5 h-5" />}
      onClick={() =>
        window.open(resumeUrl, '_blank', 'noopener,noreferrer')
      }
      aria-label="View CV online"
    >
      View Online
    </Button>
  </div>
);

export default ResumeActions;

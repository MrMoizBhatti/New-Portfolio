// app/resume/ResumeSection.client.jsx
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Section from '@/app/ui/Section';
import Button from '@/app/ui/Button';
import { FileDown, Eye } from 'lucide-react';

const ResumeSection = () => {
  const resumeImage = '/images/Cvpic.jpg';     // your preview JPG
  const resumePdf   = '/documents/CV.pdf';     // ideally put your PDF under public/documents/

  const [downloading, setDownloading] = useState(false);

  const handleDownload = async () => {
    setDownloading(true);
    try {
      const res = await fetch(resumePdf);
      if (!res.ok) throw new Error('Network error');
      const blob = await res.blob();
      const url  = URL.createObjectURL(blob);
      const a    = document.createElement('a');
      a.href     = url;
      a.download = 'AI-Researcher-CV.pdf';
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error(err);
    } finally {
      setDownloading(false);
    }
  };

  return (
    <Section
      id="resume"
      title="Resume"
      subtitle="Download my CV or view it online."
      className="py-16"
      backgroundClass="bg-blue-50"
    >
      <div className="max-w-2xl mx-auto text-center">
        <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
          {/* Preview */}
          <div className="mb-6 relative aspect-[1/1.414] w-full max-w-2xl mx-auto">
            <Image
              src={resumeImage}
              alt="Resume preview"
              fill
              className="object-contain rounded-lg border border-gray-200 shadow-sm"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
              quality={90}
              priority
            />
          </div>

          <p className="text-gray-600 mb-8">
            My resume details my education, research experience,
            publications, technical skills, and professional achievements.
            Download a copy for your reference or view it online.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              variant="primary"
              size="lg"
              icon={<FileDown className="w-5 h-5" />}
              onClick={handleDownload}
              disabled={downloading}
              aria-label="Download CV as PDF"
            >
              {downloading ? 'Downloading…' : 'Download CV (PDF)'}
            </Button>

            <Button
              variant="outline"
              size="lg"
              icon={<Eye className="w-5 h-5" />}
              onClick={() =>
                window.open(resumePdf, '_blank', 'noopener,noreferrer')
              }
              aria-label="View CV online"
            >
              View Online
            </Button>
          </div>
        </div>

        <p className="text-gray-600">Last updated: June 2025</p>
      </div>
    </Section>
  );
};

export default ResumeSection;

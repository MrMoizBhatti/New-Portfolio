import React from 'react';
import Section from '@/app/ui/Section';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';

const ContactSection = () => (
  <Section id="contact" title="Contact Me" subtitle="Have a question or want to collaborate? Feel free to reach out." backgroundClass="bg-gray-50">
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
      <div className="lg:col-span-2">
        <ContactInfo />
      </div>
      <div className="lg:col-span-3">
        <ContactForm />
      </div>
    </div>
  </Section>
);

export default ContactSection;
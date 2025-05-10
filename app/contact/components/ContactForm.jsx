"use client";
import React, { useState } from 'react';
import Button from '@/app/ui/Button';
import { Send } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    let valid = true;
    const newErrors = { name: '', email: '', message: '' };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'; valid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'; valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'; valid = false;
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'; valid = false;
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters'; valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 p-4 rounded-md text-center">
        <div className="text-green-600 flex justify-center mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h4 className="text-lg font-semibold text-green-800">Message Sent!</h4>
        <p className="text-green-700 mt-1">Thank you for your message. I'll get back to you soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Name & Email fields */}
        {['name', 'email'].map(field => (
          <div key={field}>
            <label htmlFor={field} className="block text-gray-700 mb-2 capitalize">
              {field === 'name' ? 'Your Name' : 'Email Address'} <span className="text-red-500">*</span>
            </label>
            <input
              type={field === 'email' ? 'email' : 'text'}
              id={field}
              name={field}
              value={formData[field]}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors[field] ? 'border-red-500' : 'border-gray-300'}`}
              placeholder={field === 'name' ? 'John Doe' : 'john@example.com'}
            />
            {errors[field] && <p className="text-red-500 text-sm mt-1">{errors[field]}</p>}
          </div>
        ))}
      </div>
      <div className="mb-6">
        <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Research Collaboration"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="message" className="block text-gray-700 mb-2">Your Message <span className="text-red-500">*</span></label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
          placeholder="I'm interested in discussing a potential collaboration on a computer vision project..."
        ></textarea>
        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
      </div>
      <Button type="submit" variant="primary" size="lg" className="w-full md:w-auto" icon={<Send size={18} />} disabled={submitting}>
        {submitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
};

export default ContactForm;
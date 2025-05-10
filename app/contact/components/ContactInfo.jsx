import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactInfo = () => (
  <div className="bg-white rounded-lg shadow p-6 h-full">
    <h3 className="text-2xl font-bold text-gray-800 mb-6">Get In Touch</h3>
    <div className="space-y-6">
      <ContactInfoItem
        icon={<Mail size={20} />}
        label="Email"
        children={<a href="mailto:alex.johnson@example.edu" className="text-gray-600 hover:text-blue-600 transition-colors">alex.johnson@example.edu</a>}
      />
      <ContactInfoItem
        icon={<Phone size={20} />}
        label="Phone"
        children={<p className="text-gray-600">+1 (555) 123-4567</p>}
      />
      <ContactInfoItem
        icon={<MapPin size={20} />}
        label="Office"
        children={
          <p className="text-gray-600">
            Department of Computer Science<br />
            University of Technology<br />
            1234 Research Avenue<br />
            Building 5, Room 3.45
          </p>
        }
      />
    </div>
    <div className="mt-8">
      <h4 className="font-semibold text-gray-800 mb-3">Office Hours</h4>
      <div className="bg-gray-50 p-3 rounded">
        <p className="text-gray-600 mb-1">Monday & Wednesday: 2:00 PM - 4:00 PM</p>
        <p className="text-gray-600">or by appointment</p>
      </div>
    </div>
  </div>
);

const ContactInfoItem = ({ icon, label, children }) => (
  <div className="flex items-start">
    <div className="bg-blue-100 p-3 rounded-full text-blue-600 mr-4">
      {icon}
    </div>
    <div>
      <h4 className="font-semibold text-gray-800">{label}</h4>
      {children}
    </div>
  </div>
);

export default ContactInfo;
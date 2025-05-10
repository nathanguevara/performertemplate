import React from 'react';
import { Mail, MapPin, Calendar } from 'lucide-react';
import { comedianInfo } from '../../data/comedianData';

const ContactInfo: React.FC = () => {
  return (
    <div>
      <h3 className="text-2xl font-bold mb-6 text-white">Contact Information</h3>
      
      <div className="space-y-6">
        <div className="flex items-start">
          <div className="w-10 h-10 rounded-full bg-pink-600/20 flex items-center justify-center mr-4">
            <Mail size={20} className="text-pink-500" />
          </div>
          <div>
            <h4 className="text-lg font-medium text-white mb-1">Email</h4>
            <a 
              href={`mailto:${comedianInfo.email}`}
              className="text-gray-300 hover:text-pink-500 transition-colors duration-300"
            >
              {comedianInfo.email}
            </a>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="w-10 h-10 rounded-full bg-pink-600/20 flex items-center justify-center mr-4">
            <MapPin size={20} className="text-pink-500" />
          </div>
          <div>
            <h4 className="text-lg font-medium text-white mb-1">Based In</h4>
            <p className="text-gray-300">
              New York City, NY
            </p>
            <p className="text-gray-400 text-sm mt-1">
              Available for shows nationwide and international tours
            </p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="w-10 h-10 rounded-full bg-pink-600/20 flex items-center justify-center mr-4">
            <Calendar size={20} className="text-pink-500" />
          </div>
          <div>
            <h4 className="text-lg font-medium text-white mb-1">Booking Inquiries</h4>
            <p className="text-gray-300">
              For booking requests, please use the contact form with subject "Booking Inquiry" or email directly.
            </p>
          </div>
        </div>
      </div>
      
      <div className="mt-10">
        <h4 className="text-lg font-medium text-white mb-3">Connect on Social Media</h4>
        <div className="flex flex-wrap gap-4">
          {comedianInfo.socialLinks.map((link) => (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gray-800 rounded-full text-gray-300 hover:bg-pink-600 hover:text-white transition-colors duration-300"
            >
              {link.platform}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
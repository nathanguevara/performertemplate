import React from 'react';
import { comedianInfo } from '../../data/comedianData';

const Bio: React.FC = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">About Me</h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                {comedianInfo.bio}
              </p>
              <div className="border-l-4 border-pink-500 pl-4 py-2">
                <p className="text-xl text-gray-200 italic">
                  "{comedianInfo.press[0].quote}"
                </p>
                <p className="text-gray-400 mt-2">
                  — {comedianInfo.press[0].source}, {comedianInfo.press[0].year}
                </p>
              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-pink-500 to-purple-600 blur-lg opacity-30 rounded-lg transform -rotate-3"></div>
                <img
                  src={comedianInfo.profileImage}
                  alt={comedianInfo.name}
                  className="relative w-full h-auto rounded-lg object-cover shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bio;
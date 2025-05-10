import React from 'react';
import { comedianInfo } from '../../data/comedianData';

const Press: React.FC = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">What Critics Are Saying</h2>
          <div className="w-20 h-1 bg-pink-500 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {comedianInfo.press.map((item, index) => (
            <div 
              key={index} 
              className="relative bg-gray-900 p-8 rounded-lg border border-gray-800 hover:border-pink-500 transition-colors duration-300"
            >
              <div className="text-5xl text-pink-500 absolute top-4 left-4 opacity-20">"</div>
              <p className="text-lg text-gray-300 mb-6 relative z-10 italic">
                "{item.quote}"
              </p>
              <div className="flex items-center text-gray-400">
                <div>
                  <p className="font-medium text-white">{item.source}</p>
                  <p className="text-sm">{item.year}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Press;
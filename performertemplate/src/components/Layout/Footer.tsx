import React from 'react';
import { Instagram, Twitter, Youtube, BookText as TikTok, Mail } from 'lucide-react';
import { comedianInfo } from '../../data/comedianData';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const getSocialIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'instagram':
        return <Instagram size={20} />;
      case 'x':
      case 'twitter':
        return <Twitter size={20} />;
      case 'youtube':
        return <Youtube size={20} />;
      case 'tiktok':
        return <TikTok size={20} />;
      default:
        return null;
    }
  };

  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">{comedianInfo.name}</h3>
            <p className="mb-4 text-gray-400">{comedianInfo.tagline}</p>
            <a 
              href={`mailto:${comedianInfo.email}`}
              className="flex items-center text-gray-400 hover:text-pink-500 transition-colors duration-300"
            >
              <Mail size={16} className="mr-2" />
              {comedianInfo.email}
            </a>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <div className="flex flex-wrap gap-4">
              {comedianInfo.socialLinks.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-400 hover:text-pink-500 transition-colors duration-300"
                  aria-label={`Visit ${comedianInfo.name} on ${link.platform}`}
                >
                  {getSocialIcon(link.platform)}
                  <span className="ml-2">{link.platform}</span>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Subscribe</h3>
            <p className="mb-4 text-gray-400">Get updates on new shows and content.</p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-pink-500 text-white"
                required
              />
              <button
                type="submit"
                className="px-4 py-2 bg-pink-600 text-white rounded hover:bg-pink-700 transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500">
          <p>&copy; {currentYear} {comedianInfo.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
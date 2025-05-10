import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { upcomingShows } from '../../data/comedianData';

const formatDate = (dateString: string): string => {
  const options: Intl.DateTimeFormatOptions = { 
    weekday: 'short', 
    month: 'short', 
    day: 'numeric', 
    year: 'numeric' 
  };
  return new Date(dateString).toLocaleDateString('en-US', options);
};

const FeaturedShows: React.FC = () => {
  // Only show the next 3 upcoming shows sorted by date
  const featuredShows = [...upcomingShows]
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(0, 3);

  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Upcoming Shows</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Catch me live at these upcoming venues. Get your tickets before they sell out!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {featuredShows.map((show) => (
            <div 
              key={show.id}
              className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden hover:shadow-[0_0_25px_rgba(236,72,153,0.3)] transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex items-center text-pink-500 mb-3">
                  <Calendar size={18} className="mr-2" />
                  <span className="font-medium">{formatDate(show.date)}</span>
                </div>
                
                <h3 className="text-xl font-bold mb-2 text-white">{show.venue}</h3>
                
                <div className="flex items-center text-gray-400 mb-4">
                  <MapPin size={16} className="mr-2" />
                  <span>{show.location}</span>
                </div>
                
                {show.sold_out ? (
                  <span className="inline-block px-4 py-2 bg-gray-700 text-gray-300 rounded-full text-sm font-medium">
                    Sold Out
                  </span>
                ) : (
                  <a
                    href={show.ticketLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition-colors duration-300 text-sm font-medium"
                  >
                    Get Tickets
                    <ExternalLink size={14} className="ml-1" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            to="/shows"
            className="inline-flex items-center px-6 py-3 border border-pink-500 text-pink-500 rounded-full hover:bg-pink-500 hover:text-white transition-colors duration-300"
          >
            View All Shows
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedShows;
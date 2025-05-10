import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import { upcomingShows } from '../../data/comedianData';

interface ShowsListProps {
  limit?: number;
}

const formatDate = (dateString: string): string => {
  const options: Intl.DateTimeFormatOptions = { 
    weekday: 'long', 
    month: 'long', 
    day: 'numeric', 
    year: 'numeric' 
  };
  return new Date(dateString).toLocaleDateString('en-US', options);
};

const ShowsList: React.FC<ShowsListProps> = ({ limit }) => {
  // Sort shows by date (ascending)
  const sortedShows = [...upcomingShows].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );
  
  // Apply limit if provided
  const displayedShows = limit ? sortedShows.slice(0, limit) : sortedShows;

  return (
    <div className="max-w-5xl mx-auto">
      {displayedShows.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-lg text-gray-400">No upcoming shows scheduled at this time. Check back soon!</p>
        </div>
      ) : (
        <div className="divide-y divide-gray-800">
          {displayedShows.map((show) => (
            <div 
              key={show.id}
              className="py-8 flex flex-col md:flex-row md:items-center justify-between transition-transform duration-300 hover:translate-x-2"
            >
              <div className="mb-4 md:mb-0">
                <div className="flex items-center text-pink-500 mb-2">
                  <Calendar size={18} className="mr-2" />
                  <span className="font-medium">{formatDate(show.date)}</span>
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold mb-2 text-white">{show.venue}</h3>
                
                <div className="flex items-center text-gray-400">
                  <MapPin size={16} className="mr-2" />
                  <span>{show.location}</span>
                </div>
              </div>
              
              <div className="md:ml-4">
                {show.sold_out ? (
                  <span className="inline-block px-6 py-3 bg-gray-700 text-gray-300 rounded-full font-medium">
                    Sold Out
                  </span>
                ) : (
                  <a
                    href={show.ticketLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition-colors duration-300 font-medium"
                  >
                    Get Tickets
                    <ExternalLink size={16} className="ml-2" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ShowsList;
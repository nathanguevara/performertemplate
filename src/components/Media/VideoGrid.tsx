import React, { useState } from 'react';
import { Play } from 'lucide-react';
import { videoClips } from '../../data/comedianData';

const VideoGrid: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const openVideo = (videoId: string) => {
    setActiveVideo(videoId);
    document.body.style.overflow = 'hidden';
  };

  const closeVideo = () => {
    setActiveVideo(null);
    document.body.style.overflow = 'auto';
  };

  const formatDate = (dateString: string): string => {
    const options: Intl.DateTimeFormatOptions = { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {videoClips.map((clip) => (
          <div 
            key={clip.id}
            className="group bg-gray-900 overflow-hidden rounded-lg border border-gray-800 hover:border-pink-500 transition-all duration-300"
          >
            <div className="relative cursor-pointer" onClick={() => openVideo(clip.id)}>
              <div className="aspect-video overflow-hidden">
                <img 
                  src={clip.thumbnailUrl}
                  alt={clip.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-16 h-16 rounded-full bg-pink-600 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <Play size={30} fill="white" />
                </div>
              </div>
            </div>
            
            <div className="p-5">
              <h3 className="text-xl font-bold mb-2 text-white group-hover:text-pink-500 transition-colors duration-300">
                {clip.title}
              </h3>
              
              <p className="text-gray-400 text-sm mb-3">
                {formatDate(clip.date)}
              </p>
              
              <p className="text-gray-300">
                {clip.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeVideo}
        >
          <div 
            className="relative max-w-4xl w-full bg-gray-900 rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-pink-600 transition-colors duration-300"
              onClick={closeVideo}
            >
              &times;
            </button>
            
            <div className="aspect-video">
              <iframe
                src={videoClips.find(clip => clip.id === activeVideo)?.videoUrl || ''}
                title="Video Player"
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-white">
                {videoClips.find(clip => clip.id === activeVideo)?.title}
              </h3>
              <p className="text-gray-300">
                {videoClips.find(clip => clip.id === activeVideo)?.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoGrid;
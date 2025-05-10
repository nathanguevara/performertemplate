import React, { useEffect } from 'react';
import Layout from '../components/Layout/Layout';
import VideoGrid from '../components/Media/VideoGrid';

const MediaPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="py-32 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Media & Clips</h1>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Watch highlights from my latest shows, TV appearances, and podcast episodes.
              </p>
            </div>
            
            <VideoGrid />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MediaPage;
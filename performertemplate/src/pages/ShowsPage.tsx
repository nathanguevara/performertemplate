import React, { useEffect } from 'react';
import Layout from '../components/Layout/Layout';
import ShowsList from '../components/Shows/ShowsList';

const ShowsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="py-32 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Upcoming Shows</h1>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Check out where I'll be performing next and grab your tickets. I'm constantly adding new dates, so check back regularly!
              </p>
            </div>
            
            <ShowsList />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ShowsPage;
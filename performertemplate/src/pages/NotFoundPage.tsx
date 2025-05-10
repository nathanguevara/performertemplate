import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout/Layout';

const NotFoundPage: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-[80vh] flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-6xl md:text-8xl font-bold text-pink-600 mb-6">404</h1>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Page Not Found</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-lg mx-auto">
            Looks like you've wandered off-stage. This page doesn't exist, but don't worry — the show must go on!
          </p>
          <Link 
            to="/" 
            className="inline-flex items-center px-6 py-3 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition-colors duration-300 font-medium"
          >
            Back to Homepage
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
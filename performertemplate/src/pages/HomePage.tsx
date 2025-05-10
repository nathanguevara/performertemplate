import React from 'react';
import Layout from '../components/Layout/Layout';
import Hero from '../components/Home/Hero';
import Bio from '../components/Home/Bio';
import FeaturedShows from '../components/Home/FeaturedShows';
import Press from '../components/Home/Press';
import Newsletter from '../components/Home/Newsletter';

const HomePage: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <Bio />
      <FeaturedShows />
      <Press />
      <Newsletter />
    </Layout>
  );
};

export default HomePage;
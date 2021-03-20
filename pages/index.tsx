import React, { ReactNode } from 'react';
import Hero from '../components/Hero/Hero';
import Layout from '../components/Layout/Layout';

function Home(): ReactNode {
  return (
    <Layout title="НПП Реставрационный центр">
      <Hero />
    </Layout>
  );
}

export default Home;

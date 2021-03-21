import React, { ReactNode } from 'react';
import Hero from '../components/Hero/Hero';
import Layout from '../components/Layout/Layout';
import Header from '../components/Header/Header';

function Home(): ReactNode {
  return (
    <Layout title="НПП Реставрационный центр">
      <Header />
      <Hero />
    </Layout>
  );
}

export default Home;

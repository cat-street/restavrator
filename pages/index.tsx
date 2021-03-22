import React, { ReactNode } from 'react';
import Hero from '../components/Hero/Hero';
import Layout from '../components/Layout/Layout';
import Header from '../components/Header/Header';
import Featured from '../components/Featured/Featured';

function Home(): ReactNode {
  return (
    <Layout title="НПП Реставрационный центр">
      <Header />
      <Hero />
      <Featured />
    </Layout>
  );
}

export default Home;

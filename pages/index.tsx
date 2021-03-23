import React, { ReactElement } from 'react';
import Hero from '../components/Hero/Hero';
import Layout from '../components/Layout/Layout';
import Header from '../components/Header/Header';
import Featured from '../components/Featured/Featured';
import Experience from '../components/Experience/Experience';

function Home(): ReactElement {
  return (
    <Layout title="НПП Реставрационный центр">
      <Header />
      <Hero />
      <Featured />
      <Experience />
    </Layout>
  );
}

export default Home;

import React, { ReactElement } from 'react';
import Hero from '../components/MainPage/Hero/Hero';
import Layout from '../components/Layout/Layout';
import Header from '../components/Header/Header';
import Featured from '../components/MainPage/Featured/Featured';
import Experience from '../components/MainPage/Experience/Experience';
import MainGallery from '../components/MainPage/MainGallery/MainGallery';
import About from '../components/About/About';

function Home(): ReactElement {
  return (
    <Layout title="НПП Реставрационный центр">
      <Header />
      <Hero />
      <Featured />
      <Experience />
      <MainGallery />
      <About />
    </Layout>
  );
}

export default Home;

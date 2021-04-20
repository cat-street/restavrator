import React, { ReactElement } from 'react';
import Hero from '../components/MainPage/Hero/Hero';
import Layout from '../components/Layout/Layout';
import Header from '../components/Header/Header';
import Featured from '../components/MainPage/Featured/Featured';
import Experience from '../components/MainPage/Experience/Experience';
import MainGallery from '../components/MainPage/MainGallery/MainGallery';
import About from '../components/About/About';
import Footer from '../components/Footer/Footer';

function Home(): ReactElement {
  return (
    <Layout title="НПП Реставрационный центр">
      <Header />
      <Hero />
      <Featured />
      <Experience />
      <MainGallery />
      <About />
      <Footer />
    </Layout>
  );
}

export default Home;

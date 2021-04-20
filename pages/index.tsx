import { ReactElement } from 'react';
import Hero from '../components/MainPage/Hero/Hero';
import Layout from '../components/Layout/Layout';
import Header from '../components/Header/Header';
import Featured from '../components/MainPage/Featured/Featured';
import Experience from '../components/MainPage/Experience/Experience';
import MainGallery from '../components/MainPage/MainGallery/MainGallery';
import AboutSection from '../components/AboutSection/AboutSection';
import Footer from '../components/Footer/Footer';

function Home(): ReactElement {
  return (
    <Layout title="НПП Реставрационный центр">
      <Header transparent />
      <Hero />
      <Featured />
      <Experience />
      <MainGallery />
      <AboutSection />
      <Footer />
    </Layout>
  );
}

export default Home;

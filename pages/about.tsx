import { ReactElement } from 'react';

import Layout from '../components/Layout/Layout';
import Header from '../components/Header/Header';
import AboutPage from '../components/AboutPage/AboutPage';
import AboutSection from '../components/AboutSection/AboutSection';
import Footer from '../components/Footer/Footer';

function About(): ReactElement {
  return (
    <Layout title="НПП Реставрационный центр - о компании">
      <Header />
      <AboutPage />
      <AboutSection />
      <Footer />
    </Layout>
  );
}

export default About;

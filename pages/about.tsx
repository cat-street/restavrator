import { ReactElement } from 'react';

import Layout from '../components/Layout/Layout';
import Header from '../components/Header/Header';
import AboutPage from '../components/AboutPage/AboutPage';
import AboutSection from '../components/AboutSection/AboutSection';
import Footer from '../components/Footer/Footer';

function About(): ReactElement {
  return (
    <Layout title="О компании - НПП Реставрационный центр">
      <Header />
      <AboutPage />
      <AboutSection />
      <Footer />
    </Layout>
  );
}

export default About;

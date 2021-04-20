import { ReactElement } from 'react';

import Layout from '../components/Layout/Layout';
import Header from '../components/Header/Header';
import AboutSection from '../components/AboutSection/AboutSection';
import Footer from '../components/Footer/Footer';
import ContactPage from '../components/ContactPage/ContactPage';

function Contact(): ReactElement {
  return (
    <Layout title="НПП Реставрационный центр - контакты">
      <Header />
      <ContactPage />
      <AboutSection />
      <Footer />
    </Layout>
  );
}

export default Contact;

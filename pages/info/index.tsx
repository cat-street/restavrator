import { ReactElement } from 'react';

import Layout from '../../components/Layout/Layout';
import Header from '../../components/Header/Header';
import AboutSection from '../../components/AboutSection/AboutSection';
import Footer from '../../components/Footer/Footer';
import InfoPage from '../../components/InfoPage/InfoPage';

function Info(): ReactElement {
  return (
    <Layout title="Информация - НПП Реставрационный центр">
      <Header />
      <InfoPage />
      <AboutSection />
      <Footer />
    </Layout>
  );
}

export default Info;

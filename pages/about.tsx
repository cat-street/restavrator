import { ReactElement } from 'react';

import Layout from '../components/Layout/Layout';
import AboutPage from '../components/AboutPage/AboutPage';

function About(): ReactElement {
  return (
    <Layout title="О компании - НПП Реставрационный центр">
      <AboutPage />
    </Layout>
  );
}

export default About;

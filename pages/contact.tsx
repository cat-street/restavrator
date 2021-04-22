import { ReactElement } from 'react';

import Layout from '../components/Layout/Layout';
import ContactPage from '../components/ContactPage/ContactPage';

function Contact(): ReactElement {
  return (
    <Layout title="Контакты - НПП Реставрационный центр">
      <ContactPage />
    </Layout>
  );
}

export default Contact;

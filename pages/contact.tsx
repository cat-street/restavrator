import Layout from '../components/Layout/Layout';
import Contacts from '../components/Contacts/Contacts';

function ContactPage(): JSX.Element {
  return (
    <Layout title="Контакты - НПП Реставрационный центр">
      <Contacts />
    </Layout>
  );
}

export default ContactPage;

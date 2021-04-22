import { ReactElement } from 'react';

import Layout from '../../components/Layout/Layout';
import InfoPage from '../../components/InfoPage/InfoPage';

function Info(): ReactElement {
  return (
    <Layout title="Информация - НПП Реставрационный центр">
      <InfoPage />
    </Layout>
  );
}

export default Info;

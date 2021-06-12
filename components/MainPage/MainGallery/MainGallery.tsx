import mainGallery from 'data/mainGallery.json';

import Gallery from 'components/Gallery/Gallery';
import SectionTitle from 'components/common/SectionTitle/SectionTitle';

import styles from './MainGallery.module.scss';

const MainGallery = (): JSX.Element => (
  <section className={styles['main-gallery']}>
    <SectionTitle title="Галерея" subtitle="Наши объекты" />
    <Gallery gallery={mainGallery.items} type="rectangle" />
  </section>
);

export default MainGallery;

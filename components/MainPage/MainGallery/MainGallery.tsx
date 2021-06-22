import mainGallery from 'data/mainGallery.json';

import Gallery from 'components/Gallery/Gallery';
import SectionTitle from 'components/SectionTitle/SectionTitle';

import styles from './MainGallery.module.scss';

const MainGallery = (): JSX.Element => (
  <section className={styles['main-gallery']}>
    <SectionTitle title="Галерея" subtitle="Наши объекты" />
    <Gallery gallery={mainGallery.items} />
  </section>
);

export default MainGallery;

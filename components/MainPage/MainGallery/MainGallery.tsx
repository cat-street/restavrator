import React, { FC } from 'react';
import Gallery from '../../Gallery/Gallery';
import SectionTitle from '../../SectionTitle/SectionTitle';

import mainGallery from '../../../data/mainGallery.json';
import styles from './MainGallery.module.scss';

const MainGallery: FC = () => (
  <section className={styles['main-gallery']}>
    <SectionTitle title="Галерея" subtitle="Наши объекты" />
    <Gallery type="main" gallery={mainGallery.items} />
  </section>
);

export default MainGallery;

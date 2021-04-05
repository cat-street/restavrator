import React, { FC } from 'react';
import Gallery from '../../Gallery/Gallery';
import SectionTitle from '../../SectionTitle/SectionTitle';

import styles from './MainGallery.module.scss';

const gallery = [
  {
    id: '12345678A',
    url: '/images/projects/sample/kazah_01.jpg',
    text: 'ВДНХ, Павильон "Казахстан"',
  },
  {
    id: '12345678B',
    url: '/images/projects/sample/bnik2_01.jpg',
    text: 'Городская усадьба, 1-я пол. XIX в. - Главный дом',
  },
  {
    id: '12345678C',
    url: '/images/projects/sample/bnik1_01.jpg',
    text: 'Городская усадьба, 1-я пол. XIX в. - Флигель',
  },
];

const MainGallery: FC = () => (
  <section className={styles['main-gallery']}>
    <SectionTitle title="Галерея" subtitle="Наши объекты" />
    <Gallery type="main" gallery={gallery} />
  </section>
);

export default MainGallery;

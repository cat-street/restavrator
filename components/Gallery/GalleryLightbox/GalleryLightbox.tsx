import React, { FC } from 'react';
import Image from 'next/image';

import styles from './GalleryLightbox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// type Props = {};

const GalleryLightbox: FC = () => (
  <div className={styles.lightbox}>
    <FontAwesomeIcon
      icon={['fas', 'caret-left']}
      className={`${styles.lightbox__icon} ${styles.lightbox__icon_left}`}
    />
    <FontAwesomeIcon
      icon={['fas', 'caret-right']}
      className={`${styles.lightbox__icon} ${styles.lightbox__icon_right}`}
    />
    <figure className={styles['lightbox__image-container']}>
      <FontAwesomeIcon
        icon={['fas', 'times']}
        className={`${styles.lightbox__icon} ${styles.lightbox__icon_close}`}
      />
      <img
        src="/images/projects/sample/kazah_01.jpg"
        alt="Городская усадьба, пример проектных работ"
        className={styles.lightbox__image}
      />
      <figcaption className={styles.lightbox__text}>
        Городская усадьба, пример проектных работ
      </figcaption>
    </figure>
  </div>
);

export default GalleryLightbox;

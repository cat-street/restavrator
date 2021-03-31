import React, { FC } from 'react';
import Image from 'next/image';

import styles from './GalleryLightbox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Props = {
  gallery: { url: string; text: string }[];
  imageIndex: number;
  onClose: () => void;
  setImage: (index: number) => void;
};

const GalleryLightbox: FC<Props> = ({
  gallery,
  imageIndex,
  onClose,
  setImage,
}: Props) => (
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
      <button type="button" onClick={onClose}>
        <FontAwesomeIcon
          icon={['fas', 'times']}
          className={`${styles.lightbox__icon} ${styles.lightbox__icon_close}`}
        />
      </button>
      <img
        src={gallery[imageIndex].url}
        alt={gallery[imageIndex].text}
        className={styles.lightbox__image}
      />
      <figcaption className={styles.lightbox__text}>
        {gallery[imageIndex].text}
      </figcaption>
    </figure>
  </div>
);

export default GalleryLightbox;

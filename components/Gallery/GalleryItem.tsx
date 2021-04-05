import React, { FC } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Gallery.module.scss';

type Props = {
  url: string;
  text: string;
  onClick: () => void;
};

const GalleryItem: FC<Props> = ({ url, text, onClick }: Props) => (
  <li>
    <div className={styles['gallery__image-container']}>
      <Image
        src={url}
        alt={text}
        className={styles.gallery__image}
        objectFit="cover"
        layout="fill"
      />
      <button
        type="button"
        className={styles.gallery__overlay}
        onClick={onClick}
      >
        <FontAwesomeIcon
          icon={['fas', 'search']}
          className={styles['gallery__overlay-icon']}
        />
      </button>
    </div>
    <p className={styles.gallery__text}>{text}</p>
  </li>
);

export default GalleryItem;

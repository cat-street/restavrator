import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import React, { FC } from 'react';

import styles from './Gallery.module.scss';

type Props = {
  type: string;
};

const Gallery: FC<Props> = ({ type }: Props) => (
  <ul className={styles.gallery}>
    <li className={styles.gallery__item}>
      <div className={styles['gallery__image-container']}>
        <Image
          src="/images/projects/sample/kazah_01.jpg"
          alt="Городская усадьба, пример проектных работ"
          className={styles.gallery__image}
          objectFit="cover"
          layout="fill"
        />
        <div className={styles.gallery__overlay}>
          <FontAwesomeIcon
            icon={['fas', 'search']}
            className={styles['gallery__overlay-icon']}
          />
        </div>
      </div>
      <p className={styles.gallery__text}>
        ВДНХ, Павильон &quot;Казахстан&quot;
      </p>
    </li>
  </ul>
);

export default Gallery;

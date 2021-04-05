import React, { FC, SyntheticEvent, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Gallery.module.scss';

type Props = {
  gallery: { id: string; url: string; text: string }[];
  imageIndex: number;
  onClose: () => void;
  setImage: (index: number) => void;
};

const GalleryLightbox: FC<Props> = ({
  gallery,
  imageIndex,
  onClose,
  setImage,
}: Props) => {
  const handleClose = (evt: SyntheticEvent) => {
    if (evt.target === evt.currentTarget) {
      onClose();
    }
  };

  const handleEscClose = (evt: KeyboardEvent) => {
    if (evt.key === 'Escape') {
      onClose();
    }
  };

  const handleArrowClick = (forward: boolean) => {
    if (forward) {
      if (imageIndex < gallery.length - 1) setImage(imageIndex + 1);
      return;
    }
    if (imageIndex > 0) setImage(imageIndex - 1);
  };

  useEffect(() => {
    document.addEventListener('keydown', handleEscClose);
    return () => {
      document.removeEventListener('keydown', handleEscClose);
    };
  }, []);

  return (
    <div
      className={styles.lightbox}
      onClick={handleClose}
      onKeyDown={handleClose}
      role="presentation"
    >
      <button
        type="button"
        onClick={() => handleArrowClick(false)}
        className={`${styles.lightbox__button} ${styles.lightbox__button_left}`}
      >
        <FontAwesomeIcon
          icon={['fas', 'caret-left']}
          className={`${styles.lightbox__icon} ${styles.lightbox__icon_left}`}
        />
      </button>
      <button
        type="button"
        onClick={() => handleArrowClick(true)}
        className={`${styles.lightbox__button} ${styles.lightbox__button_right}`}
      >
        <FontAwesomeIcon
          icon={['fas', 'caret-right']}
          className={`${styles.lightbox__icon} ${styles.lightbox__icon_right}`}
        />
      </button>
      <figure className={styles['lightbox__image-container']}>
        <button
          type="button"
          onClick={onClose}
          className={`${styles.lightbox__button} ${styles.lightbox__button_close}`}
        >
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
};

export default GalleryLightbox;

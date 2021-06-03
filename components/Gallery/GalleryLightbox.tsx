import { SyntheticEvent, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CSSTransition from 'react-transition-group/CSSTransition';

import { GalleryImage } from 'types';

import styles from './Gallery.module.scss';

type Props = {
  showModal: boolean;
  gallery: GalleryImage[];
  imageIndex: number;
  onClose: () => void;
  setImage: (index: number) => void;
};

const GalleryLightbox = ({
  showModal,
  gallery,
  imageIndex,
  onClose,
  setImage,
}: Props): JSX.Element => {
  const leftButton = useRef<HTMLButtonElement>(null);
  const rightButton = useRef<HTMLButtonElement>(null);

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

  const handleRightClick = () => {
    if (imageIndex < gallery.length - 1) setImage(imageIndex + 1);
  };

  const handleLeftClick = () => {
    if (imageIndex > 0) setImage(imageIndex - 1);
  };

  useEffect(() => {
    document.addEventListener('keydown', handleEscClose);
    return () => {
      document.removeEventListener('keydown', handleEscClose);
    };
  }, []);

  return (
    <CSSTransition
      in={showModal}
      timeout={200}
      mountOnEnter
      unmountOnExit
      classNames={{
        enter: styles.hidden,
        enterActive: styles.visible,
        exitActive: styles.hidden,
      }}
    >
      <div
        className={styles.lightbox}
        onClick={handleClose}
        onKeyDown={handleClose}
        role="presentation"
      >
        <button
          type="button"
          ref={leftButton}
          onClick={handleLeftClick}
          className={`${styles.lightbox__button} ${styles.lightbox__button_left}`}
          disabled={imageIndex === 0}
        >
          <FontAwesomeIcon
            icon={['fas', 'caret-left']}
            className={`${styles.lightbox__icon} ${styles.lightbox__icon_left}`}
          />
        </button>
        <button
          type="button"
          ref={rightButton}
          onClick={handleRightClick}
          className={`${styles.lightbox__button} ${styles.lightbox__button_right}`}
          disabled={imageIndex === gallery.length - 1}
        >
          <FontAwesomeIcon
            icon={['fas', 'caret-right']}
            className={`${styles.lightbox__icon} ${styles.lightbox__icon_right}`}
          />
        </button>
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
        <figure className={styles['lightbox__image-container']}>
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
    </CSSTransition>
  );
};

export default GalleryLightbox;

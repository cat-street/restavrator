import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Gallery.module.scss';

type Props = {
  thumb: string,
  text?: string;
  onClick: () => void;
};

const GalleryItem = ({
  thumb, text, onClick,
}: Props): JSX.Element => (
  <li>
    <div className={styles['gallery__image-container']}>
      <img src={thumb} alt={text} className={styles.gallery__image} />
      <button
        type="button"
        className={styles.gallery__overlay}
        onClick={onClick}
        aria-label="zoom image"
      >
        <FontAwesomeIcon
          icon={['fas', 'search']}
          className={styles['gallery__overlay-icon']}
        />
      </button>
    </div>
    {text && <p className={styles.gallery__text}>{text}</p>}
  </li>
);

GalleryItem.defaultProps = {
  text: undefined,
};

export default GalleryItem;

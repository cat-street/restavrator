import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Gallery.module.scss';

type Props = {
  url: string;
  text?: string;
  type: string;
  onClick: () => void;
};

const GalleryItem = ({
  url, text, type, onClick,
}: Props): JSX.Element => (
  <li>
    <div className={styles['gallery__image-container']}>
      <Image
        src={url}
        alt={text}
        className={styles.gallery__image}
        layout="intrinsic"
        width="600"
        height={type === 'square' ? 600 : 395}
        quality="60"
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
    {text && <p className={styles.gallery__text}>{text}</p>}
  </li>
);

GalleryItem.defaultProps = {
  text: undefined,
};

export default GalleryItem;

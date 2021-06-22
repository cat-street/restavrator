import Link from 'next/link';

import Button from 'components/Button/Button';

import { FeaturedArrayItem } from 'types';

import styles from './Featured.module.scss';

type Props = {
  item: FeaturedArrayItem;
};

const FeaturedItem = ({ item }: Props): JSX.Element => (
  <li className={styles.featured__item}>
    <Link href={item.url}>
      <a href={item.url} className={styles['featured__image-container']}>
        <img src={item.cover} alt={item.alt} className={styles.featured__image} />
      </a>
    </Link>

    <div className={styles.featured__text}>
      <Link href={item.url}>
        <Button buttonStyles={['button_style_regular', 'button_size_regular']}>
          {item.title}
        </Button>
      </Link>
      {item.description && (
        <p className={styles.featured__description}>{item.description}</p>
      )}
    </div>
  </li>
);

export default FeaturedItem;

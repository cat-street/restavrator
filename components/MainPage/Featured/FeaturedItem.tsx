import Image from 'next/image';
import Link from 'next/link';

import Button from 'components/Button/Button';

import styles from './Featured.module.scss';

type Props = {
  item: {
    cover: string;
    title: string;
    url: string;
    alt: string;
    description: string;
  };
};

const FeaturedItem = ({ item }: Props): JSX.Element => (
  <li className={styles.featured__item}>
    <div className={styles['featured__image-container']}>
      <Image
        src={item.cover}
        alt={item.alt}
        className={styles.featured__image}
        layout="fill"
        objectFit="cover"
      />
    </div>
    <div className={styles.featured__text}>
      <Link href={item.url}>
        <Button buttonStyles={['button_style_regular', 'button_size_regular']}>
          {item.title}
        </Button>
      </Link>
      <p className={styles.featured__description}>{item.description}</p>
    </div>
  </li>
);

export default FeaturedItem;

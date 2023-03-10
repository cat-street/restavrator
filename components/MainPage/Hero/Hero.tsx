import Link from 'next/link';

import Button from 'components/Button/Button';

import styles from './Hero.module.scss';

const Hero = (): JSX.Element => (
  <div className={styles.hero}>
    <div className={styles.hero__text}>
      <h1 className={styles.hero__title}>
        Реставрация объектов культурного наследия
      </h1>
      <p className={styles.hero__subtitle}>Исследования. Проекты. Надзор.</p>
      <p className={styles.hero__age}>Мы работаем с 1991 года</p>
      <Link href="/about">
        <Button buttonStyles={['button_style_outline', 'button_size_small']}>
          О компании
        </Button>
      </Link>
    </div>
  </div>
);

export default Hero;

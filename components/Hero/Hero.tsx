import React from 'react';
import styles from './Hero.module.scss';

function Hero(): JSX.Element {
  return (
    <div className={styles.hero}>
      <div className={styles.hero__text}>
        <h1 className={styles.hero__title}>
          Реставрация объектов культурного наследия
        </h1>
        <p className={styles.hero__subtitle}>Исследования. Проекты. Надзор.</p>
        <p className={styles.hero__age}>Мы работаем с 1991 года</p>
      </div>
    </div>
  );
}

export default Hero;

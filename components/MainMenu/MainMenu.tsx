import React from 'react';
import styles from './MainMenu.module.scss';

function MainMenu(): JSX.Element {
  return (
    <nav className={styles['main-menu']}>
      <ul className={styles['main-menu__list']}>
        <li className={styles['main-menu__item']}>Главная</li>
        <li className={styles['main-menu__item']}>О компании</li>
        <li className={styles['main-menu__item']}>Работы ▼</li>
        <li className={styles['main-menu__item']}>Информация</li>
        <li className={styles['main-menu__item']}>Контакты</li>
      </ul>
    </nav>
  );
}

export default MainMenu;

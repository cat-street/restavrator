import React from 'react';
import ActiveLink from '../ActiveLink/ActiveLink';
import styles from './MainMenu.module.scss';

function MainMenu(): JSX.Element {
  return (
    <nav className={styles['main-menu']}>
      <ul className={styles['main-menu__list']}>
        <li className={styles['main-menu__item']}>
          <ActiveLink
            href="/"
            activeClassName={styles['main-menu__link_active']}
          >
            <button type="button" className={styles['main-menu__link']}>
              Главная
            </button>
          </ActiveLink>
        </li>
        <li className={styles['main-menu__item']}>
          <ActiveLink
            href="/about"
            activeClassName={styles['main-menu__link_active']}
          >
            <button type="button" className={styles['main-menu__link']}>
              О компании
            </button>
          </ActiveLink>
        </li>
        <li className={styles['main-menu__item']}>
          <button type="button" className={styles['main-menu__link']}>
            Работы ▼
          </button>
        </li>
        <li className={styles['main-menu__item']}>
          <ActiveLink
            href="/info"
            activeClassName={styles['main-menu__link_active']}
          >
            <button type="button" className={styles['main-menu__link']}>
              Информация
            </button>
          </ActiveLink>
        </li>
        <li className={styles['main-menu__item']}>
          <ActiveLink
            href="/contact"
            activeClassName={styles['main-menu__link_active']}
          >
            <button type="button" className={styles['main-menu__link']}>
              Контакты
            </button>
          </ActiveLink>
        </li>
      </ul>
    </nav>
  );
}

export default MainMenu;

import { FC } from 'react';

import styles from './MainMenu.module.scss';
import mainMenu from '../../data/mainMenu.json';
import MainMenuItem from './MainMenuItem';

const MainMenu: FC = () => (
  <nav className={styles['main-menu']}>
    <ul className={styles['main-menu__list']}>
      {mainMenu.items.map((el) => (
        <MainMenuItem key={el.name} item={el} />
      ))}
    </ul>
  </nav>
);

export default MainMenu;

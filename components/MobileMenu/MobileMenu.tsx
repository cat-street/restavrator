import mainMenu from 'data/mainMenu.json';

import MobileMenuItem from './MobileMenuItem';

import styles from './MobileMenu.module.scss';

const MobileMenu = (): JSX.Element => (
  <nav className={styles['mobile-menu']}>
    <ul className={styles['mobile-menu__list']}>
      {mainMenu.items.map((el) => (
        <MobileMenuItem key={el.name} item={el} />
      ))}
    </ul>
  </nav>
);

export default MobileMenu;

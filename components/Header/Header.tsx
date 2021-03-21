import React from 'react';
import MainMenu from '../MainMenu/MainMenu';
import styles from './Header.module.scss';

function Header(): JSX.Element {
  return (
    <div className={styles.header}>
      <div className={styles.header__logo}>НПП Реставрационный центр</div>
      <MainMenu />
    </div>
  );
}

export default Header;

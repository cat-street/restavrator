import Link from 'next/link';
import React from 'react';
import MainMenu from '../MainMenu/MainMenu';
import styles from './Header.module.scss';

function Header(): JSX.Element {
  return (
    <div className={styles.header}>
      <Link href="/">
        <a href="/" className={styles.header__logo}>НПП Реставрационный центр</a>
      </Link>
      <MainMenu />
    </div>
  );
}

export default Header;

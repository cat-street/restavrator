import Link from 'next/link';
import React, { FC, useRef, useEffect } from 'react';

import ContentContainer from '../ContentContainer/ContentContainer';
import MainMenu from '../MainMenu/MainMenu';
import styles from './Header.module.scss';

const Header: FC = () => {
  const header = useRef<HTMLHeadingElement>(null);

  const fillHeader = () => {
    if (header.current) {
      if (window.scrollY > 56) {
        header.current.classList.add(styles.header_dark);
      } else if (window.scrollY < 56) {
        header.current.classList.remove(styles.header_dark);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', fillHeader);
    return () => window.removeEventListener('scroll', fillHeader);
  }, [fillHeader]);

  return (
    <header className={styles.header} ref={header}>
      <ContentContainer>
        <div className={styles.header__content}>
          <Link href="/">
            <button type="button" className={styles.header__logo} tabIndex={-1}>
              НПП Реставрационный центр
            </button>
          </Link>
          <MainMenu />
        </div>
      </ContentContainer>
    </header>
  );
};

export default Header;

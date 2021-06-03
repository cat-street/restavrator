import { useRef, useEffect } from 'react';
import Link from 'next/link';

import ContentContainer from 'components/ContentContainer/ContentContainer';
import MainMenu from 'components/MainMenu/MainMenu';

import styles from './Header.module.scss';

type Props = {
  transparent: boolean;
};

const Header = ({ transparent }: Props): JSX.Element => {
  const header = useRef<HTMLHeadingElement>(null);

  const fillHeader = () => {
    if (header.current) {
      if (window.scrollY > 56) {
        header.current.classList.add(styles.header_thin);
      } else if (window.scrollY < 56) {
        header.current.classList.remove(styles.header_thin);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', fillHeader);
    return () => window.removeEventListener('scroll', fillHeader);
  }, [fillHeader]);

  return (
    <header
      className={`${styles.header} ${transparent ? styles.header_transparent : null}`}
      ref={header}
    >
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

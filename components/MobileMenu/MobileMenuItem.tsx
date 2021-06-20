import { useState } from 'react';
import Link from 'next/link';

import { MenuItem } from 'types';

// import SubMenu from './SubMenu';

import styles from './MobileMenu.module.scss';

type Props = {
  item: MenuItem;
};

const MobileMenuItem = ({ item }: Props): JSX.Element => {
  const [subMenuVisible, setSubMenuVisible] = useState(false);

  const showSubMenu = () => {
    setSubMenuVisible(!subMenuVisible);
  };

  return (
    <li className={styles['mobile-menu__item']}>
      {item.link ? (
        <Link href={item.link}>
          <a href={item.link} className={styles['mobile-menu__link']}>
            {item.name}
          </a>
        </Link>
      ) : (
        <button
          type="button"
          onClick={showSubMenu}
          className={`${styles['mobile-menu__link']} ${
            styles['mobile-menu__button']
          } ${subMenuVisible && styles['mobile-menu__button_active']} `}
        >
          {item.name}
        </button>
      )}
      {/* {item.sub && <SubMenu items={item.sub} visible={subMenuVisible} />} */}
    </li>
  );
};

export default MobileMenuItem;

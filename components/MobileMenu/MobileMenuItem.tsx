import { useState } from 'react';
import Link from 'next/link';

import { MenuItem } from 'types';

import MobileSubMenu from './MobileSubMenu';

import styles from './MobileMenu.module.scss';

type Props = {
  item: MenuItem;
  onClick: () => void;
};

const MobileMenuItem = ({ item, onClick }: Props): JSX.Element => {
  const [subMenuVisible, setSubMenuVisible] = useState(false);

  const showSubMenu = () => {
    setSubMenuVisible(!subMenuVisible);
  };

  return (
    <li className={styles['mobile-menu__item']}>
      {item.link ? (
        <Link href={item.link}>
          <a
            href={item.link}
            className={styles['mobile-menu__link']}
            onClick={onClick}
          >
            {item.name}
          </a>
        </Link>
      ) : (
        <button
          type="button"
          onClick={showSubMenu}
          className={`${styles['mobile-menu__link']} ${
            styles['mobile-menu__button-item']
          } ${subMenuVisible && styles['mobile-menu__button_active']} `}
        >
          {item.name}
        </button>
      )}
      {item.sub && (
        <MobileSubMenu
          items={item.sub}
          visible={subMenuVisible}
          onClick={onClick}
        />
      )}
    </li>
  );
};

export default MobileMenuItem;

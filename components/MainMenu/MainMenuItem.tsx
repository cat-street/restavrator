import { useState } from 'react';

import { MenuItem } from 'types';

import ActiveLink from 'components/ActiveLink/ActiveLink';
import SubMenu from './SubMenu';

import styles from './MainMenu.module.scss';

type Props = {
  item: MenuItem;
};

const MainMenuItem = ({ item }: Props): JSX.Element => {
  const [subMenuVisible, setSubMenuVisible] = useState(false);

  const showSubMenu = () => {
    setSubMenuVisible(true);
  };

  const hideSubMenu = () => {
    setSubMenuVisible(false);
  };

  return (
    <li
      className={styles['main-menu__item']}
      onMouseOver={showSubMenu}
      onFocus={showSubMenu}
      onMouseOut={hideSubMenu}
      onBlur={hideSubMenu}
    >
      {item.link ? (
        <ActiveLink
          href={item.link}
          activeClassName={styles['main-menu__link_active']}
        >
          <a href={item.link} className={styles['main-menu__link']}>
            {item.name}
          </a>
        </ActiveLink>
      ) : (
        <button type="button" className={styles['main-menu__link']}>
          {item.name}
        </button>
      )}
      {item.sub && <SubMenu items={item.sub} visible={subMenuVisible} />}
    </li>
  );
};

export default MainMenuItem;

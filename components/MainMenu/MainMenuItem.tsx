import { FC, useState } from 'react';

import ActiveLink from '../ActiveLink/ActiveLink';
import styles from './MainMenu.module.scss';
import { MenuItem } from '../../types';
import SubMenu from './SubMenu';

type Props = {
  item: MenuItem;
};

const MainMenuItem: FC<Props> = ({ item }: Props) => {
  const [subMenuVisible, setSubMenuVisible] = useState(false);

  const showSubMenu = () => {
    setSubMenuVisible(true);
  };

  const hideSubMenu = () => {
    setSubMenuVisible(false);
  };

  const itemButton = (
    <button
      type="button"
      className={styles['main-menu__link']}
      onMouseOver={showSubMenu}
      onFocus={showSubMenu}
      onMouseOut={hideSubMenu}
      onBlur={hideSubMenu}
    >
      {item.name}
    </button>
  );

  return (
    <li className={styles['main-menu__item']}>
      {item.link ? (
        <ActiveLink
          href={item.link}
          activeClassName={styles['main-menu__link_active']}
        >
          {itemButton}
        </ActiveLink>
      ) : (
        itemButton
      )}
      {item.sub && (
        <SubMenu
          items={item.sub}
          visible={subMenuVisible}
          hideMenu={hideSubMenu}
          showMenu={showSubMenu}
        />
      )}
    </li>
  );
};

export default MainMenuItem;

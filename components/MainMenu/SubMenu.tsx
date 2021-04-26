import { FC } from 'react';

import styles from './MainMenu.module.scss';
import { MenuItem } from '../../types';
import SubMenuItem from './SubMenuItem';

type Props = {
  items: MenuItem[];
  visible: boolean;
  hideMenu: () => void;
  showMenu: () => void;
};

const SubMenu: FC<Props> = ({
  items, visible, hideMenu, showMenu,
}: Props) => (
  <ul
    className={`${styles['sub-menu']} ${visible && styles['sub-menu_visible']}`}
    onMouseEnter={showMenu}
    onMouseLeave={hideMenu}
  >
    {items.map((el) => (
      <SubMenuItem key={el.name} item={el} />
    ))}
  </ul>
);

export default SubMenu;

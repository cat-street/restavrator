import { MenuItem } from 'types';

import styles from './MobileMenu.module.scss';
import MobileSubMenuItem from './MobileSubMenuItem';

type Props = {
  items: MenuItem[];
  visible: boolean;
  onClick: () => void;
};

const MobileSubMenu = ({ items, visible, onClick }: Props): JSX.Element => (
  <ul
    className={`${styles['mobile-sub-menu']} ${
      visible && styles['mobile-sub-menu_visible']
    }`}
  >
    {items.map((el) => (
      <MobileSubMenuItem key={el.name} item={el} onClick={onClick} />
    ))}
  </ul>
);

export default MobileSubMenu;

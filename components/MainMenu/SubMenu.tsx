import styles from './MainMenu.module.scss';
import { MenuItem } from '../../types';
import SubMenuItem from './SubMenuItem';

type Props = {
  items: MenuItem[];
  visible: boolean;
};

const SubMenu = ({ items, visible }: Props): JSX.Element => (
  <ul
    className={`${styles['sub-menu']} ${visible && styles['sub-menu_visible']}`}
  >
    {items.map((el) => (
      <SubMenuItem key={el.name} item={el} />
    ))}
  </ul>
);

export default SubMenu;

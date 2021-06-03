import Link from 'next/link';

import { MenuItem } from 'types';

import styles from './MainMenu.module.scss';

type Props = {
  item: MenuItem;
};

const SubMenuItem = ({ item }: Props): JSX.Element => (
  <li className={styles['sub-menu__item']}>
    <Link href={item.link as string}>
      <button
        type="button"
        className={`${styles['sub-menu__link']} ${styles['sub-menu__link_accent']}`}
      >
        {item.name}
      </button>
    </Link>
    {item.sub && (
      <ul>
        {item.sub.map((el) => (
          <li key={el.name}>
            <Link href={el.link as string}>
              <button type="button" className={styles['sub-menu__link']}>
                {el.name}
              </button>
            </Link>
          </li>
        ))}
      </ul>
    )}
  </li>
);

export default SubMenuItem;

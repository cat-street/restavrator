import { FC } from 'react';
import Link from 'next/link';

import styles from './MainMenu.module.scss';
import { MenuItem } from '../../types';

type Props = {
  item: MenuItem;
};

const SubMenuItem: FC<Props> = ({ item }: Props) => (
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
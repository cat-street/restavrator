import Link from 'next/link';

import { MenuItem } from 'types';

import styles from './MainMenu.module.scss';

type Props = {
  item: MenuItem;
};

const SubMenuItem = ({ item }: Props): JSX.Element => (
  <li className={styles['sub-menu__item']}>
    {item.link && (
      <Link href={item.link}>
        <a
          href={item.link}
          className={`${styles['sub-menu__link']} ${styles['sub-menu__link_accent']}`}
        >
          {item.name}
        </a>
      </Link>
    )}

    {item.sub && (
      <ul>
        {item.sub.map((el) => (
          <li key={el.name}>
            {el.link && (
              <Link href={el.link}>
                <a href={el.link} className={styles['sub-menu__link']}>
                  {el.name}
                </a>
              </Link>
            )}
          </li>
        ))}
      </ul>
    )}
  </li>
);

export default SubMenuItem;

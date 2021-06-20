import Link from 'next/link';

import { MenuItem } from 'types';

import styles from './MobileMenu.module.scss';

type Props = {
  item: MenuItem;
  onClick: () => void;
};

const MobileSubMenuItem = ({ item, onClick }: Props): JSX.Element => (
  <li className={styles['mobile-sub-menu__item']}>
    {item.link && (
      <Link href={item.link}>
        <a
          href={item.link}
          onClick={onClick}
          className={`${styles['mobile-sub-menu__link']} ${styles['mobile-sub-menu__link_accent']}`}
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
                <a href={el.link} className={styles['mobile-sub-menu__link']}>
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

export default MobileSubMenuItem;

import { FC } from 'react';

import ActiveLink from '../ActiveLink/ActiveLink';
import styles from './MainMenu.module.scss';

type Props = {
  name: string;
  link: string | null;
};

const MainMenuItem: FC<Props> = ({ name, link }: Props) => (
  <li className={styles['main-menu__item']}>
    {link ? (
      <ActiveLink
        href={link}
        activeClassName={styles['main-menu__link_active']}
      >
        <button type="button" className={styles['main-menu__link']}>
          {name}
        </button>
      </ActiveLink>
    ) : (
      <button type="button" className={styles['main-menu__link']}>
        {name}
      </button>
    )}
  </li>
);

export default MainMenuItem;

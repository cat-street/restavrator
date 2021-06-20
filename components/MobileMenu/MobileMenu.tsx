import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import mainMenu from 'data/mainMenu.json';

import MobileMenuItem from './MobileMenuItem';

import styles from './MobileMenu.module.scss';

const MobileMenu = (): JSX.Element => {
  const [menuVisible, setMenuVisible] = useState(true);

  const showMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <>
      {menuVisible && (
        <nav className={styles['mobile-menu']}>
          <button
            onClick={showMenu}
            type="button"
            className={styles['mobile-menu__close']}
          >
            <FontAwesomeIcon
              icon={['fas', 'times']}
              className={styles['mobile-menu__close-icon']}
            />
          </button>
          <ul className={styles['mobile-menu__list']}>
            {mainMenu.items.map((el) => (
              <MobileMenuItem key={el.name} item={el} onClick={showMenu} />
            ))}
          </ul>
        </nav>
      )}
    </>
  );
};

export default MobileMenu;

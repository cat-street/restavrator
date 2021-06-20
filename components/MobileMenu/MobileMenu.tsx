import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CSSTransition from 'react-transition-group/CSSTransition';

import mainMenu from 'data/mainMenu.json';

import MobileMenuItem from './MobileMenuItem';

import styles from './MobileMenu.module.scss';

const MobileMenu = (): JSX.Element => {
  const [menuVisible, setMenuVisible] = useState(false);

  const showMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <>
      <CSSTransition
        in={menuVisible}
        timeout={200}
        mountOnEnter
        unmountOnExit
        classNames={{
          enter: styles.hidden,
          enterActive: styles.visible,
          exitActive: styles.hidden,
        }}
      >
        <nav className={styles['mobile-menu']}>
          <button
            onClick={showMenu}
            type="button"
            className={styles['mobile-menu__button']}
          >
            <FontAwesomeIcon
              icon={['fas', 'times']}
              className={styles['mobile-menu__button-icon']}
            />
          </button>
          <ul className={styles['mobile-menu__list']}>
            {mainMenu.items.map((el) => (
              <MobileMenuItem key={el.name} item={el} onClick={showMenu} />
            ))}
          </ul>
        </nav>
      </CSSTransition>

      {!menuVisible && (
        <button
          onClick={showMenu}
          type="button"
          className={styles['mobile-menu__button']}
        >
          <FontAwesomeIcon
            icon={['fas', 'bars']}
            className={styles['mobile-menu__button-icon']}
          />
        </button>
      )}
    </>
  );
};

export default MobileMenu;

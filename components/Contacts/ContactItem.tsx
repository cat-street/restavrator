import { PropsWithChildren } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import styles from './Contacts.module.scss';

type Props = PropsWithChildren<{
  title: string;
  icon: IconProp;
}>;

const ContactItem = ({ title, icon, children }: Props): JSX.Element => (
  <li className={styles['contacts__list-item']}>
    <FontAwesomeIcon icon={icon} className={styles.contacts__icon} />
    <div>
      <h4 className={styles['contacts__item-title']}>{title}</h4>
      <p className={styles['contacts__item-text']}>{children}</p>
    </div>
  </li>
);

export default ContactItem;

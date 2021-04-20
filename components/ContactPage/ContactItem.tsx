import { FC, PropsWithChildren } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import styles from './ContactPage.module.scss';

type Props = PropsWithChildren<{
  title: string;
  icon: IconProp;
}>;

const ContactItem: FC<Props> = ({ title, icon, children }: Props) => (
  <li className={styles['contact__list-item']}>
    <FontAwesomeIcon icon={icon} className={styles.contact__icon} />
    <div>
      <h4 className={styles['contact__item-title']}>{title}</h4>
      <p className={styles['contact__item-text']}>{children}</p>
    </div>
  </li>
);

export default ContactItem;

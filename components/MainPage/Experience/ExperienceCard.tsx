import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import styles from './Experience.module.scss';

type Props = {
  title: string;
  description: string;
  icon: IconProp;
};

const ExperienceCard: FC<Props> = ({ title, description, icon }: Props) => (
  <li className={styles.experience__card}>
    <div className={styles['experience__icon-container']}>
      <FontAwesomeIcon icon={icon} className={styles.experience__icon} />
    </div>
    <h4 className={styles['experience__card-title']}>{title}</h4>
    <p className={styles['experience__card-text']}>{description}</p>
  </li>
);

export default ExperienceCard;

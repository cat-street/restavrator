import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './SectionTitle.module.scss';

type Props = {
  title: string;
  subtitle: string;
};

const SectionTitle: FC<Props> = ({ title, subtitle = '' }: Props) => (
  <header className={styles.header}>
    <h2 className={styles.header__title}>{title}</h2>
    <h3 className={styles.header__subtitle}>{subtitle}</h3>
    <FontAwesomeIcon
      icon={['fas', 'landmark']}
      className={styles.header__landmark}
    />
  </header>
);

export default SectionTitle;

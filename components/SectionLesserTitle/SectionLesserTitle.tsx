import { ReactNode } from 'react';

import styles from './SectionLesserTitle.module.scss';

type Props = {
  children: ReactNode;
};

const SectionLesserTitle = ({ children }: Props): JSX.Element => (
  <h2 className={styles['lesser-title']}>{children}</h2>
);

export default SectionLesserTitle;

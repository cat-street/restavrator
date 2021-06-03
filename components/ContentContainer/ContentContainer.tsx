import { ReactNode } from 'react';

import styles from './ContentContainer.module.scss';

type Props = {
  children: ReactNode,
};

const ContentContainer = ({ children }: Props): JSX.Element => (
  <div className={styles['content-container']}>{children}</div>
);

export default ContentContainer;

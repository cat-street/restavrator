import React, { ReactNode } from 'react';
import styles from './ContentContainer.module.scss';

function ContentContainer({ children }: { children: ReactNode }): JSX.Element {
  return (
    <div className={styles['content-container']}>{children}</div>
  );
}

export default ContentContainer;

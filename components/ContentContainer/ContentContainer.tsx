import React, { FC, ReactNode } from 'react';
import styles from './ContentContainer.module.scss';

type Props = {
  children: ReactNode,
};

const ContentContainer: FC<Props> = ({ children }: Props) => (
  <div className={styles['content-container']}>{children}</div>
);

export default ContentContainer;

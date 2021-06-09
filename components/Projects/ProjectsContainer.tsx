import { ReactNode } from 'react';

import styles from './Projects.module.scss';

type Props = {
  children: ReactNode;
};

const ProjectsContainer = ({ children }: Props): JSX.Element => (
  <div className={styles['projects-container']}>{children}</div>
);

export default ProjectsContainer;

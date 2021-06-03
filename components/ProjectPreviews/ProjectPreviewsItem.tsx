import Image from 'next/image';

import { Project } from '../../types';
import styles from './ProjectPreviews.module.scss';

type Props = {
  project: Project;
};

const ProjectPreviewsItem = ({ project }: Props): JSX.Element => (
  <li className={styles.previews__item}>
    <div className={styles['previews__image-container']}>
      <Image
        src={project.cover}
        alt={project.title}
        className={styles.previews__image}
        objectFit="contain"
        layout="fill"
      />
    </div>
  </li>
);

export default ProjectPreviewsItem;

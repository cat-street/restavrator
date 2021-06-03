import Image from 'next/image';
import Link from 'next/link';

import { Project } from 'types';

import styles from './ProjectPreviews.module.scss';

type Props = {
  project: Project;
  category: 'books' | 'projects' | 'research';
};

const ProjectPreviewsItem = ({ project, category }: Props): JSX.Element => (
  <li className={styles.previews__item}>
    <div className={styles['previews__image-container']}>
      <Link href={`/${category}/${project.id}`}>
        <a href={`/${category}/${project.id}`}>
          <Image
            src={project.cover}
            alt={project.title}
            className={styles.previews__image}
            objectFit="contain"
            layout="fill"
          />
        </a>
      </Link>
    </div>
    <Link href={`/${category}/${project.id}`}>{project.title}</Link>
  </li>
);

export default ProjectPreviewsItem;

import Link from 'next/link';

import { Project } from 'types';

import styles from './ProjectPreviews.module.scss';

type Props = {
  project: Project;
  category: 'books' | 'projects' | 'research';
  subCategory: 'diploma' | 'sample' | undefined;
};

const ProjectPreviewsItem = ({
  project,
  category,
  subCategory,
}: Props): JSX.Element => (
  <li className={styles.previews__item}>
    <Link
      href={`/${category}/${subCategory ? `${subCategory}/` : ''}${project.id}`}
    >
      <a
        href={`/${category}/${subCategory ? `${subCategory}/` : ''}${
          project.id
        }`}
        className={styles['previews__image-container']}
      >
        <img src={project.cover} alt={project.title} className={styles.previews__image} />
      </a>
    </Link>
    <Link href={`/${category}/${project.id}`}>
      <a href={`/${category}/${project.id}`} className={styles.previews__title}>
        {project.title}
      </a>
    </Link>
  </li>
);

export default ProjectPreviewsItem;

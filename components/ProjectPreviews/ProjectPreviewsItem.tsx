import Image from 'next/image';
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
        <Image
          src={project.cover}
          alt={project.title}
          className={styles.previews__image}
          layout="intrinsic"
          width="600"
          height={category === 'books' ? 600 : 400}
        />
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

import { Project } from 'types';

import ProjectPreviewsItem from './ProjectPreviewsItem';

import styles from './ProjectPreviews.module.scss';

type Props = {
  projects: Project[];
  category: 'books' | 'projects' | 'research';
};

const ProjectPreviews = ({ projects, category }: Props): JSX.Element => (
  <ul className={`${styles.previews} ${styles[`previews_type_${category}`]}`}>
    {projects.map((el) => (
      <ProjectPreviewsItem key={el.id} project={el} category={category} />
    ))}
  </ul>
);

export default ProjectPreviews;

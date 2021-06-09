import { useMemo } from 'react';

import { Project } from 'types';

import ProjectPreviewsItem from './ProjectPreviewsItem';

import styles from './ProjectPreviews.module.scss';

type Props = {
  projects: Project[];
  category: 'books' | 'projects' | 'research';
};

const ProjectPreviews = ({ projects, category }: Props): JSX.Element => {
  const reversedProjects = useMemo(
    () => projects.reduceRight((red: Project[], el) => red.concat(el), []),
    [projects],
  );

  return (
    <ul className={`${styles.previews} ${styles[`previews_type_${category}`]}`}>
      {reversedProjects.map((el) => (
        <ProjectPreviewsItem key={el.id} project={el} category={category} />
      ))}
    </ul>
  );
};

export default ProjectPreviews;

import { Project } from '../../types';
import styles from './ProjectPreviews.module.scss';
import ProjectPreviewsItem from './ProjectPreviewsItem';

type Props = {
  projects: Project[];
};

const ProjectPreviews = ({ projects }: Props): JSX.Element => (
  <ul className={styles.previews}>
    {projects.map((el) => (
      <ProjectPreviewsItem key={el.id} project={el} />
    ))}
  </ul>
);

export default ProjectPreviews;

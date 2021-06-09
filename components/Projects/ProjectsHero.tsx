import styles from './Projects.module.scss';

type Props = {
  type: string;
};

const ProjectsHero = ({ type }: Props): JSX.Element => (
  <div className={`${styles.hero} ${styles[`hero_type_${type}`]}`} />
);

export default ProjectsHero;

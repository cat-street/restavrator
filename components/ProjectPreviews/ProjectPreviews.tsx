import { useMemo } from 'react';

import { Project } from 'types';

import ContentContainer from 'components/ContentContainer/ContentContainer';
import SectionLesserTitle from 'components/SectionLesserTitle/SectionLesserTitle';
import ProjectPreviewsItem from './ProjectPreviewsItem';

import styles from './ProjectPreviews.module.scss';

type Props = {
  title: string;
  projects: Project[];
  category: 'books' | 'projects' | 'research';
  subCategory?: 'diploma' | 'sample';
};

const ProjectPreviews = ({
  title, projects, category, subCategory,
}: Props): JSX.Element => {
  const reversedProjects = useMemo(
    () => projects.reduceRight((red: Project[], el) => red.concat(el), []),
    [projects],
  );

  return (
    <section className={styles.previews}>
      <ContentContainer>
        <SectionLesserTitle>{title}</SectionLesserTitle>
        <ul
          className={`${styles.previews__list} ${
            styles[`previews_type_${category}`]
          }`}
        >
          {reversedProjects.map((el) => (
            <ProjectPreviewsItem
              key={el.id}
              project={el}
              category={category}
              subCategory={subCategory}
            />
          ))}
        </ul>
      </ContentContainer>
    </section>
  );
};

ProjectPreviews.defaultProps = {
  subCategory: undefined,
};

export default ProjectPreviews;

import Link from 'next/link';

import ContentContainer from 'components/ContentContainer/ContentContainer';
import SectionLesserTitle from 'components/SectionLesserTitle/SectionLesserTitle';
import Gallery from 'components/Gallery/Gallery';
import Button from 'components/Button/Button';

import { Project } from 'types';

import styles from './Book.module.scss';

type Props = {
  project: Project;
};

const Book = ({ project }: Props): JSX.Element => (
  <section className={styles['project-page']}>
    <ContentContainer>
      <SectionLesserTitle>{project.title}</SectionLesserTitle>
      <p className={styles['project-page__description']}>{project.description}</p>
      <Gallery gallery={project.images} type="square" />
      <div className={styles['project-page__back-container']}>
        <Link href="/projects">
          <Button buttonStyles={['button_style_regular', 'button_size_small']}>
            Назад
          </Button>
        </Link>
      </div>
    </ContentContainer>
  </section>
);

export default Book;

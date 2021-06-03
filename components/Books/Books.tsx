import ContentContainer from 'components/ContentContainer/ContentContainer';
import SectionLesserTitle from 'components/SectionLesserTitle/SectionLesserTitle';
import ProjectPreviews from 'components/ProjectPreviews/ProjectPreviews';

import books from 'data/books.json';

import styles from './Books.module.scss';

const Books = (): JSX.Element => (
  <section className={styles.books}>
    <ContentContainer>
      <SectionLesserTitle>Публикации</SectionLesserTitle>
      <ProjectPreviews projects={books.items} category="books" />
    </ContentContainer>
  </section>
);

export default Books;

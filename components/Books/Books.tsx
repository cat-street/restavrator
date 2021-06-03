import ContentContainer from '../ContentContainer/ContentContainer';
import SectionLesserTitle from '../SectionLesserTitle/SectionLesserTitle';

import books from '../../data/books.json';
import styles from './Books.module.scss';
import ProjectPreviews from '../ProjectPreviews/ProjectPreviews';

const Books = (): JSX.Element => (
  <section className={styles.books}>
    <ContentContainer>
      <SectionLesserTitle>Публикации</SectionLesserTitle>
      <ProjectPreviews projects={books.items} />
    </ContentContainer>
  </section>
);

export default Books;

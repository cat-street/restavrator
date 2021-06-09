import ContentContainer from 'components/ContentContainer/ContentContainer';
import Gallery from 'components/Gallery/Gallery';
import SectionLesserTitle from 'components/SectionLesserTitle/SectionLesserTitle';

import { Project } from 'types';

import styles from './BookPage.module.scss';

type Props = {
  book: Project;
};

const BookPage = ({ book }: Props): JSX.Element => (
  <section className={styles['book-page']}>
    <ContentContainer>
      <SectionLesserTitle>{book.title}</SectionLesserTitle>
      <p className={styles['book-page__description']}>{book.description}</p>
      <Gallery gallery={book.images} type="square" />
    </ContentContainer>
  </section>
);

export default BookPage;

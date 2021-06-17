import Link from 'next/link';

import ContentContainer from 'components/ContentContainer/ContentContainer';
import SectionLesserTitle from 'components/SectionLesserTitle/SectionLesserTitle';
import Gallery from 'components/Gallery/Gallery';
import Button from 'components/Button/Button';

import { Project } from 'types';

import styles from './Book.module.scss';

type Props = {
  item: Project;
};

const Book = ({ item }: Props): JSX.Element => (
  <section className={styles['book-page']}>
    <ContentContainer>
      <SectionLesserTitle>{item.title}</SectionLesserTitle>
      <p className={styles['book-page__description']}>{item.description}</p>
      <Gallery gallery={item.images} type="square" />
      <div className={styles['book-page__back-container']}>
        <Link href="/books">
          <Button buttonStyles={['button_style_regular', 'button_size_small']}>
            Назад
          </Button>
        </Link>
      </div>
    </ContentContainer>
  </section>
);

export default Book;

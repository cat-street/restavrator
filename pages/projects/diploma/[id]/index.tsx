import { useRouter } from 'next/router';

import Book from 'components/Book/Book';
import Layout from 'components/Layout/Layout';

import books from 'data/books.json';

const BookPage = (): JSX.Element => {
  const router = useRouter();
  const id = router.query.id as string | undefined;
  const currentBook = books.items.find((el) => el.id === id);

  return (
    <Layout title={`${currentBook?.title} - НПП Реставрационный центр`}>
      {currentBook && <Book book={currentBook} />}
    </Layout>
  );
};

export default BookPage;

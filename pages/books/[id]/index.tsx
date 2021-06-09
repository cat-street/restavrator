import { useRouter } from 'next/router';

import BookPage from 'components/BookPage/BookPage';
import Layout from 'components/Layout/Layout';

import books from 'data/books.json';

const index = (): JSX.Element => {
  const router = useRouter();
  const id = router.query.id as string | undefined;
  const currentBook = books.items.find((el) => el.id === id);

  return (
    <Layout title={`${currentBook?.title} - НПП Реставрационный центр`}>
      {currentBook && <BookPage book={currentBook} />}
    </Layout>
  );
};

export default index;

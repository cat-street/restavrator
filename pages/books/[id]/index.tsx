import { useRouter } from 'next/router';

import books from 'data/books.json';
import ProjectPage from 'components/ProjectPage/ProjectPage';

const BookPage = (): JSX.Element => {
  const router = useRouter();
  const id = router.query.id as string | undefined;

  return (
    <ProjectPage items={books.items} id={id} type="book" />
  );
};

export default BookPage;

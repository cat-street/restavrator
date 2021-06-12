import Layout from 'components/Layout/Layout';
import ProjectPreviews from 'components/ProjectPreviews/ProjectPreviews';

import books from 'data/books.json';

function BooksPage(): JSX.Element {
  return (
    <Layout title="Публикации - НПП Реставрационный центр">
      <ProjectPreviews title="Публикации" category="books" projects={books.items} />
    </Layout>
  );
}

export default BooksPage;

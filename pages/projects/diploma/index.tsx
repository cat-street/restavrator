import Layout from 'components/Layout/Layout';
import ProjectPreviews from 'components/ProjectPreviews/ProjectPreviews';

import books from 'data/books.json';

function DiplomaProjectsPage(): JSX.Element {
  return (
    <Layout title="Дипломированные проекты - НПП Реставрационный центр">
      <ProjectPreviews title="Дипломированные проекты" category="projects" projects={books.items} />
    </Layout>
  );
}

export default DiplomaProjectsPage;

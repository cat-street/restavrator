import Layout from 'components/Layout/Layout';
import ProjectPreviews from 'components/ProjectPreviews/ProjectPreviews';

import diplomaProjects from 'data/projectsDiploma.json';

function DiplomaProjectsPage(): JSX.Element {
  return (
    <Layout title="Дипломированные проекты - НПП Реставрационный центр">
      <ProjectPreviews
        title="Дипломированные проекты"
        category="projects"
        subCategory="diploma"
        projects={diplomaProjects.items}
      />
    </Layout>
  );
}

export default DiplomaProjectsPage;

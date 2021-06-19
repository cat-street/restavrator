import Layout from 'components/Layout/Layout';
import ProjectPreviews from 'components/ProjectPreviews/ProjectPreviews';

import sampleProjects from 'data/projectsSample.json';

function SampleProjectsPage(): JSX.Element {
  return (
    <Layout title="Примеры проектов - НПП Реставрационный центр">
      <ProjectPreviews
        title="Примеры проектов"
        category="projects"
        subCategory="sample"
        projects={sampleProjects.items}
      />
    </Layout>
  );
}

export default SampleProjectsPage;

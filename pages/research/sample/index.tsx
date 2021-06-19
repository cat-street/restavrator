import Layout from 'components/Layout/Layout';
import ProjectPreviews from 'components/ProjectPreviews/ProjectPreviews';

import sampleResearch from 'data/researchSample.json';

function ResearchProjectsPage(): JSX.Element {
  return (
    <Layout title="Примеры исследований - НПП Реставрационный центр">
      <ProjectPreviews
        title="Примеры исследований"
        category="research"
        subCategory="sample"
        projects={sampleResearch.items}
      />
    </Layout>
  );
}

export default ResearchProjectsPage;

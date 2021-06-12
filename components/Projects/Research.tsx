import ContentContainer from 'components/common/ContentContainer/ContentContainer';
import Featured from 'components/Featured/Featured';

import featuredResearch from 'data/featuredResearch.json';

import ProjectsContainer from './ProjectsContainer';
import ProjectsHero from './ProjectsHero';
import ResearchDescription from './ResearchDescription';

const Research = (): JSX.Element => (
  <ProjectsContainer>
    <ProjectsHero type="research" />
    <ContentContainer>
      <ResearchDescription />
    </ContentContainer>
    <Featured data={featuredResearch.items} />
  </ProjectsContainer>
);

export default Research;

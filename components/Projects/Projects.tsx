import ContentContainer from 'components/common/ContentContainer/ContentContainer';
import Featured from 'components/Featured/Featured';

import featuredProjects from 'data/featuredProjects.json';

import ProjectsContainer from './ProjectsContainer';
import ProjectsHero from './ProjectsHero';
import ProjectsDescription from './ProjectsDescription';

const Projects = (): JSX.Element => (
  <ProjectsContainer>
    <ProjectsHero type="projects" />
    <ContentContainer>
      <ProjectsDescription />
    </ContentContainer>
    <Featured data={featuredProjects.items} />
  </ProjectsContainer>
);

export default Projects;

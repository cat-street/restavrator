import ContentContainer from 'components/ContentContainer/ContentContainer';
import Featured from 'components/Featured/Featured';
import ProjectsHero from 'components/ProjectsHero/ProjectsHero';

import featuredProjects from 'data/featuredProjects.json';

import ProjectsContainer from './ProjectsContainer';
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

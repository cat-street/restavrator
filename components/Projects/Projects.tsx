import ContentContainer from 'components/ContentContainer/ContentContainer';
import ProjectsHero from 'components/ProjectsHero/ProjectsHero';
import ProjectsContainer from './ProjectsContainer';
import ProjectsDescription from './ProjectsDescription';

const Projects = (): JSX.Element => (
  <ProjectsContainer>
    <ProjectsHero type="projects" />
    <ContentContainer>
      <ProjectsDescription />
    </ContentContainer>
  </ProjectsContainer>
);

export default Projects;

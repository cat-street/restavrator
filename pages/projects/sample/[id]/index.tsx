import { useRouter } from 'next/router';

import sampleProjects from 'data/projectsSample.json';
import ProjectPage from 'components/ProjectPage/ProjectPage';

const SampleProjectsPage = (): JSX.Element => {
  const router = useRouter();
  const id = router.query.id as string | undefined;

  return (
    <ProjectPage items={sampleProjects.items} id={id} type="project" />
  );
};

export default SampleProjectsPage;

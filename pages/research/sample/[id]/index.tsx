import { useRouter } from 'next/router';

import sampleResearch from 'data/researchSample.json';
import ProjectPage from 'components/ProjectPage/ProjectPage';

const SampleResearchPage = (): JSX.Element => {
  const router = useRouter();
  const id = router.query.id as string | undefined;

  return (
    <ProjectPage items={sampleResearch.items} id={id} type="project" />
  );
};

export default SampleResearchPage;

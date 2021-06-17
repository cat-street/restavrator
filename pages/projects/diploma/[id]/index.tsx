import { useRouter } from 'next/router';

import diplomaProjects from 'data/projectsDiploma.json';
import ProjectPage from 'components/ProjectPage/ProjectPage';

const DiplomaPage = (): JSX.Element => {
  const router = useRouter();
  const id = router.query.id as string | undefined;

  return (
    <ProjectPage items={diplomaProjects.items} id={id} type="project" />
  );
};

export default DiplomaPage;

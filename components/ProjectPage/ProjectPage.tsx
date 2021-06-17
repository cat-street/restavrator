import Layout from 'components/Layout/Layout';
import Book from 'components/Book/Book';
import SingleProject from 'components/SingleProject/SingleProject';

import { DescriptionProject, Project } from 'types';

type Props = {
  id: string | undefined;
  items: Project[] | DescriptionProject[];
  type: 'book' | 'project';
};

const ProjectPage = ({ id, items, type }: Props): JSX.Element => {
  const currentItem = items.find((el) => el.id === id);

  return (
    <>
      {currentItem && (
        <Layout title={`${currentItem.title} - НПП Реставрационный центр`}>
          {type === 'book' && <Book item={currentItem} />}
          {type === 'project' && <SingleProject item={currentItem as DescriptionProject} />}
        </Layout>
      )}
    </>
  );
};

export default ProjectPage;

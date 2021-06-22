import parse from 'html-react-parser';

import ContentContainer from 'components/ContentContainer/ContentContainer';
import SectionLesserTitle from 'components/SectionLesserTitle/SectionLesserTitle';
import Gallery from 'components/Gallery/Gallery';

import { DescriptionProject } from 'types';

import styles from './SingleProject.module.scss';

type Props = {
  item: DescriptionProject;
};

const SingleProject = ({ item }: Props): JSX.Element => (
  <section className={styles.project}>
    <ContentContainer>
      <SectionLesserTitle>{item.title}</SectionLesserTitle>
      <div className={styles.project__info}>
        <p><strong>Адрес: </strong> {item.address}</p>
        {item.register && (<p><strong>Название в реестре: </strong> {item.register}</p>)}
        <p className={styles.project__type}>{item.type}</p>
      </div>
      <div className={styles.project__description}>
        {parse(item.description)}
      </div>
      <Gallery gallery={item.images} />
    </ContentContainer>
  </section>
);

export default SingleProject;

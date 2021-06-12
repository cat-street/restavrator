import ContentContainer from 'components/common/ContentContainer/ContentContainer';

import { FeaturedArrayItem } from 'types';

import FeaturedItem from './FeaturedItem';
import styles from './Featured.module.scss';

type Props = {
  data: FeaturedArrayItem[];
};

const Featured = ({ data }: Props): JSX.Element => (
  <section className={styles.featured}>
    <ContentContainer>
      <ul className={styles.featured__list}>
        {data.map((el) => (
          <FeaturedItem key={el.id} item={el} />
        ))}
      </ul>
    </ContentContainer>
  </section>
);

export default Featured;

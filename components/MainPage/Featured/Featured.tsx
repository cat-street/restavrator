import ContentContainer from '../../ContentContainer/ContentContainer';

import featuredData from '../../../data/featured.json';

import styles from './Featured.module.scss';
import FeaturedItem from './FeaturedItem';

const Featured = (): JSX.Element => (
  <section className={styles.featured}>
    <ContentContainer>
      <ul className={styles.featured__list}>
        {featuredData.items.map((el) => (
          <FeaturedItem key={el.id} item={el} />
        ))}
      </ul>
    </ContentContainer>
  </section>
);

export default Featured;

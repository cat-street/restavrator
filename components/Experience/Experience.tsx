// import Link from 'next/link';
import React, { FC } from 'react';

import ContentContainer from '../ContentContainer/ContentContainer';
import styles from './Experience.module.scss';
import ExperienceCard from '../ExperienceCard/ExperienceCard';

const Experience: FC = () => (
  <section className={styles.experience}>
    <ContentContainer>
      <h2 className={styles.experience__title}>Многолетний опыт</h2>
      <h3 className={styles.experience__subtitle}>
        по сохранению объектов культурного наследия
      </h3>
      <ul className={styles.experience__cards}>
        <ExperienceCard
          title="Качество"
          description="Наши работы отвечают высочайшим стандартам архитектурного
          проектирования"
          icon={['far', 'thumbs-up']}
        />
        <ExperienceCard
          title="Опыт"
          description="Наши специалисты обладают огромным опытом работы в реставрации"
          icon={['far', 'thumbs-up']}
        />
      </ul>
    </ContentContainer>
  </section>
);

export default Experience;

// import Link from 'next/link';
import React, { FC } from 'react';

import ContentContainer from '../../ContentContainer/ContentContainer';
import styles from './Experience.module.scss';
import ExperienceCard from '../ExperienceCard/ExperienceCard';
import SectionTitle from '../../SectionTitle/SectionTitle';

const Experience: FC = () => (
  <section className={styles.experience}>
    <ContentContainer>
      <SectionTitle
        title="Многолетний опыт"
        subtitle="по сохранению объектов культурного наследия"
      />
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
          icon={['fas', 'graduation-cap']}
        />
        <ExperienceCard
          title="Доступность"
          description="Мы не включаем в стоимость наших работ неоправданные расходы"
          icon={['fas', 'ruble-sign']}
        />
        <ExperienceCard
          title="Гарантия"
          description="Мы оказываем поддержку клиентам в процессе и после проведения производственных работ"
          icon={['far', 'handshake']}
        />
      </ul>
    </ContentContainer>
  </section>
);

export default Experience;
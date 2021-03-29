// import Link from 'next/link';
import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
      <FontAwesomeIcon
        icon={['fas', 'landmark']}
        className={styles.experience__landmark}
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

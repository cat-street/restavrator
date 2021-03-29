// import Link from 'next/link';
import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ContentContainer from '../ContentContainer/ContentContainer';
import styles from './Experience.module.scss';

const Experience: FC = () => (
  <section className={styles.experience}>
    <ContentContainer>
      <h2 className={styles.experience__title}>Многолетний опыт</h2>
      <h3 className={styles.experience__subtitle}>
        по сохранению объектов культурного наследия
      </h3>
      <ul className={styles.experience__cards}>
        <li className={styles.experience__card}>
          <div className={styles['experience__icon-container']}>
            <FontAwesomeIcon icon={['far', 'thumbs-up']} />
          </div>
          <h4 className={styles['experience__card-title']}>Качество</h4>
          <p className={styles['experience__card-text']}>
            Наши работы отвечают высочайшим стандартам архитектурного
            проектирования.
          </p>
        </li>
      </ul>
    </ContentContainer>
  </section>
);

export default Experience;

import React, { FC } from 'react';
import ContentContainer from '../ContentContainer/ContentContainer';

import styles from './About.module.scss';

const About: FC = () => (
  <section className={styles.about}>
    <ContentContainer>
      <div className={styles.about__container}>
        <div className={styles.about__column}>
          <h2>О компании</h2>
          <p>
            Мы разрабатываем проекты реставрации, реконструкции, приспособления
            под современное использование и проводим исследования для объектов
            культурного наследия регионального и федерального значения.
          </p>
        </div>
        <div className={styles.about__column}>
          <h2>Как нас найти</h2>
          <p>
            ddd
          </p>
        </div>
        <div className={`${styles.about__column} ${styles.about__map}`}>
          <script
            type="text/javascript"
            charSet="utf-8"
            async
            src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3AhzHt4u-0nsSHnXVJCBAhUNTSlATc4nFl&amp;width=100%&amp;height=240&amp;lang=ru_RU&amp;scroll=true"
          />
        </div>
      </div>
    </ContentContainer>
  </section>
);

export default About;

import React, { FC } from 'react';
import ContentContainer from '../ContentContainer/ContentContainer';
import YaMaps from '../YaMaps/YaMaps';

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
          <ul>
            <li>
              Адрес:
              {' '}
              <a
                href="https://yandex.ru/maps/-/CCQ6rXsA-C"
                target="_blank"
                rel="noreferrer noopener"
              >
                Москва, ул. Авиамоторная, д.8А, стр.5
              </a>
            </li>
            <li>
              Телефон:
              {' '}
              <a href="tel:+74957644232">+7 (495) 764-42-32</a>
            </li>
            <li>
              Телефон:
              {' '}
              <a href="tel:+79161238862">+7-916-123-88-62</a>
            </li>
            <li>
              Телефон:
              {' '}
              <a href="tel:+79857644232">+7-985-764-42-32</a>
            </li>
            <li>
              Email:
              {' '}
              <a href="resproekt@yandex.ru">resproekt@yandex.ru</a>
            </li>
          </ul>
        </div>
        <div className={`${styles.about__column} ${styles.about__map}`}>
          <YaMaps width="100%" height="240px" />
        </div>
      </div>
    </ContentContainer>
  </section>
);

export default About;

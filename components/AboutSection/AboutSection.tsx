import ContentContainer from 'components/ContentContainer/ContentContainer';
import YaMaps from 'components/YaMaps/YaMaps';

import styles from './AboutSection.module.scss';

const AboutSection = (): JSX.Element => (
  <section className={styles.about}>
    <ContentContainer>
      <div className={styles.about__container}>
        <div className={styles.about__column}>
          <h2 className={styles.about__heading}>О компании</h2>
          <p className={styles.about__text}>
            Мы разрабатываем проекты реставрации, реконструкции, приспособления
            под современное использование и проводим исследования для объектов
            культурного наследия регионального и федерального значения.
          </p>
        </div>
        <div className={styles.about__column}>
          <h2 className={styles.about__heading}>Как нас найти</h2>
          <ul className={styles.about__links}>
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
              <a
                href="mailto:resproekt@yandex.ru"
                target="_blank"
                rel="noreferrer noopener"
              >
                resproekt@yandex.ru
              </a>
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

export default AboutSection;

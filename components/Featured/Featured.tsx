// import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

import ContentContainer from '../ContentContainer/ContentContainer';
import styles from './Featured.module.scss';
import Button from '../Button/Button';

function Featured(): JSX.Element {
  return (
    <section className={styles.featured}>
      <ContentContainer>
        <ul className={styles.featured__list}>
          <li className={styles.featured__item}>
            <div className={styles['featured__image-container']}>
              <Image
                src="/images/projects/sample/bnik2_01.jpg"
                alt="Городская усадьба, пример проектных работ"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className={styles.featured__text}>
              <Button
                buttonStyles={['button_style_regular', 'button_size_regular']}
              >
                Проектные работы
              </Button>
              <p className={styles.featured__description}>
                Полный цикл научно-исследовательских, научно-изыскательских и
                проектных работ, направленных на сохранение объектов культурного
                наследия
              </p>
            </div>
          </li>
          <li className={styles.featured__item}>
            <div className={styles['featured__image-container']}>
              <Image
                src="/images/projects/iki/kusk_03.jpg"
                alt="Павильон усадьбы Кусково, пример исследований"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className={styles.featured__text}>
              <Button
                buttonStyles={['button_style_regular', 'button_size_regular']}
              >
                Исследования
              </Button>
              <p className={styles.featured__description}>
                Архивные, библиографические, натурные и иные исследования,
                проводимые по историко-градостроительному и
                историко-архитектурному направлениям
              </p>
            </div>
          </li>
          <li className={styles.featured__item}>
            <div className={styles['featured__image-container']}>
              <Image
                src="/images/books/mos4_01.jpg"
                alt="Обложка альманаха Москва, которая есть"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className={styles.featured__text}>
              <Button
                buttonStyles={['button_style_regular', 'button_size_regular']}
              >
                Публикации
              </Button>
              <p className={styles.featured__description}>
                Проекты &quot;НПП Реставрационный центр&quot;, вошедшие в
                альманах Департамента культурного наследия г. Москвы
                &quot;Москва, которая есть&quot;
              </p>
            </div>
          </li>
        </ul>
      </ContentContainer>
    </section>
  );
}

export default Featured;

import Link from 'next/link';

import ContentContainer from 'components/ContentContainer/ContentContainer';
import SectionLesserTitle from 'components/SectionLesserTitle/SectionLesserTitle';

import styles from './Info.module.scss';

const Info = (): JSX.Element => (
  <section className={styles.info}>
    <ContentContainer>
      <SectionLesserTitle>Информация</SectionLesserTitle>
      <ul className={styles.info__list}>
        <li>
          <Link href="/info/definitions">Термины и определения</Link>
        </li>
        <li>
          <Link href="/info/steps">
            Последовательность разработки научно-проектной документации
          </Link>
        </li>
        <li>
          <Link href="/info/contents">
            Состав и содержание научно-проектной документации
          </Link>
        </li>
        <li>
          <Link href="/info/order">
            Порядок проведения историко-культурных исследований
          </Link>
        </li>
      </ul>
    </ContentContainer>
  </section>
);

export default Info;

import ContentContainer from '../ContentContainer/ContentContainer';
import SectionTitle from '../SectionTitle/SectionTitle';
import YaMaps from '../YaMaps/YaMaps';

import styles from './Contacts.module.scss';
import ContactItem from './ContactItem';

const Contacts = (): JSX.Element => (
  <section className={styles.contacts}>
    <ContentContainer>
      <div className={styles.contacts__container}>
        <SectionTitle
          title="Контактная информация"
          subtitle='ООО "НПП Реставрационный центр"'
        />
        <div className={styles.contacts__columns}>
          <ul className={styles.contacts__list}>
            <ContactItem title="Адрес" icon={['far', 'building']}>
              <p className={styles['contacts__item-text']}>
                <a
                  href="https://yandex.ru/maps/-/CCQ6rXsA-C"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Москва, ул. Авиамоторная, д. 8А, стр. 5
                </a>
                <br />
                3-й этаж (территория МТУСИ)
              </p>
            </ContactItem>
            <ContactItem title="Юридический адрес" icon={['far', 'building']}>
              <p className={styles['contacts__item-text']}>
                111024, г. Москва, ул. Авиамоторная, д. 8А стр. 5
                <br />
                этаж 3 пом. I часть ком. №15
              </p>
            </ContactItem>
          </ul>
          <ul className={styles.contacts__list}>
            <ContactItem title="E-mail" icon={['far', 'envelope']}>
              <p className={styles['contacts__item-text']}>
                <a
                  href="mailto:resproekt@yandex.ru"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  resproekt@yandex.ru
                </a>
              </p>
            </ContactItem>
            <ContactItem title="Телефоны" icon={['fas', 'mobile-alt']}>
              <p className={styles['contacts__item-text']}>
                <ul>
                  <li>
                    <a href="tel:+74957644232">+7 (495) 764-42-32</a>
                  </li>
                  <li>
                    <a href="tel:+79161238862">+7-916-123-88-62</a>
                  </li>
                  <li>
                    <a href="tel:+79857644232">+7-985-764-42-32</a>
                  </li>
                </ul>
              </p>
            </ContactItem>
          </ul>
        </div>
        <YaMaps width="100%" height="480" />
      </div>
    </ContentContainer>
  </section>
);

export default Contacts;

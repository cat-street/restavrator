import ContentContainer from 'components/ContentContainer/ContentContainer';
import SectionTitle from 'components/SectionTitle/SectionTitle';
import YaMaps from 'components/YaMaps/YaMaps';
import ContactItem from './ContactItem';

import styles from './Contacts.module.scss';

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
              <a
                href="https://yandex.ru/maps/-/CCQ6rXsA-C"
                target="_blank"
                rel="noreferrer noopener"
              >
                Москва, ул. Авиамоторная, д. 8А, стр. 5
              </a>
              <br />
              3-й этаж (территория МТУСИ)
            </ContactItem>
            <ContactItem title="Юридический адрес" icon={['far', 'building']}>
              111024, г. Москва, ул. Авиамоторная, д. 8А стр. 5
              <br />
              этаж 3 пом. I часть ком. №15
            </ContactItem>
          </ul>
          <ul className={styles.contacts__list}>
            <ContactItem title="E-mail" icon={['far', 'envelope']}>
              <a
                href="mailto:resproekt@yandex.ru"
                target="_blank"
                rel="noreferrer noopener"
              >
                resproekt@yandex.ru
              </a>
            </ContactItem>
            <ContactItem title="Телефоны" icon={['fas', 'mobile-alt']}>
              <ul>
                <li>
                  <a href="tel:+74957644232">+7 (495) 764-42-32</a>
                </li>
                <li>
                  <a href="tel:+79857644232">+7-985-764-42-32</a>
                </li>
              </ul>
            </ContactItem>
          </ul>
        </div>
        <div className={styles.contacts__map}>
          <YaMaps width="100%" height="100%" />
        </div>
      </div>
    </ContentContainer>
  </section>
);

export default Contacts;

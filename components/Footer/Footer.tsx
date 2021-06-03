import styles from './Footer.module.scss';

const date = new Date().getFullYear();

const Footer = (): JSX.Element => (
  <section className={styles.footer}>
    <p className={styles.footer__copyright}>
      &copy; 1991-
      {date} ООО &quot;НПП Реставрационный центр&quot;
    </p>
  </section>
);

export default Footer;

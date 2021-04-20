import { FC, useMemo } from 'react';

import styles from './Footer.module.scss';

const Footer: FC = () => {
  const getYear = useMemo(() => {
    const date = new Date();
    return date.getFullYear();
  }, []);

  return (
    <section className={styles.footer}>
      <p className={styles.footer__copyright}>
        &copy; 1993-
        {getYear}
        {' '}
        ООО &quot;НПП Реставрационный центр&quot;
      </p>
    </section>
  );
};

export default Footer;

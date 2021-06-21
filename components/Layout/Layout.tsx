import { PropsWithChildren } from 'react';
import Head from 'next/head';

import Header from 'components/Header/Header';
import AboutSection from 'components/AboutSection/AboutSection';
import Footer from 'components/Footer/Footer';

type Props = PropsWithChildren<{
  title?: string;
  transparentHeader?: boolean;
}>;

const Layout = ({
  title,
  transparentHeader = false,
  children,
}: Props): JSX.Element => (
  <>
    <Head>
      <title>{title}</title>
      <meta property="og:site_name" content="Restavrator.org" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="НПП Реставрационный центр" />
      <meta
        name="description"
        property="og:description"
        content="НПП Реставрационный центр - реставрация объектов культурного наследия. Исследования, проекты, надзор."
      />
      <meta property="og:url" content="https://restavrator.org" />
      <meta name="image" property="og:image" content="/rc_og.png" />
      <meta name="author" content="Andrey Kudryavtsev <catlogic@ya.ru>" />
      <meta
        name="keywords"
        content="архитектура, реставрация, реконструкция, памятник, памятники, реставрационный центр, исследования, историко-культурные, историко-архитектурные, проект, проекты, проектные работы, проектирование, обмеры, археология, строительство, объект, объекты, воссоздание, реновация, научные, культурное наследие, новое строительство, дизайн-проект, перепланировка, авторский надзор, генпроектировщик, заказчик, согласование, москомнаследие, мосгорнаследие, предмет охраны, перепланировка, экспертиза"
      />

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="theme-color" content="#ffffff" />
    </Head>

    <Header transparent={transparentHeader} />
    {children}
    <AboutSection />
    <Footer />
  </>
);

export default Layout;

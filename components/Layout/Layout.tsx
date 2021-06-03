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

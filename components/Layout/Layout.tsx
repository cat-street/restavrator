import React, { PropsWithChildren } from 'react';
import Head from 'next/head';

type Props = PropsWithChildren<{
  title?: string;
}>;

function Layout({ title, children }: Props): JSX.Element {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </>
  );
}

export default Layout;

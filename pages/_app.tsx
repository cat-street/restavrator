import React, { ReactNode } from 'react';
import type { AppProps } from 'next/app';
import '../styles/variables.scss';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps): ReactNode {
  return <Component {...pageProps} />;
}

export default MyApp;

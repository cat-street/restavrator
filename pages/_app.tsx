import React, { ReactElement } from 'react';
import type { AppProps } from 'next/app';
// import { library } from '@fortawesome/fontawesome-svg-core';
import '../styles/variables.scss';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return <Component {...pageProps} />;
}

export default MyApp;

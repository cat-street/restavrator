import React, { ReactElement } from 'react';
import type { AppProps } from 'next/app';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import '../styles/variables.scss';
import '../styles/globals.scss';

library.add(faThumbsUp);

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return <Component {...pageProps} />;
}

export default MyApp;

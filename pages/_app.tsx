import React, { ReactElement } from 'react';
import type { AppProps } from 'next/app';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faThumbsUp, faHandshake } from '@fortawesome/free-regular-svg-icons';
import {
  faLandmark,
  faGraduationCap,
  faRubleSign,
  faSearch,
  faTimes,
  faCaretLeft,
  faCaretRight,
} from '@fortawesome/free-solid-svg-icons';
import '../styles/variables.scss';
import '../styles/globals.scss';

library.add(
  faThumbsUp,
  faHandshake,
  faLandmark,
  faGraduationCap,
  faRubleSign,
  faSearch,
  faTimes,
  faCaretLeft,
  faCaretRight,
);

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return <Component {...pageProps} />;
}

export default MyApp;

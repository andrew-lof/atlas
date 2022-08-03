import '../faust.config';
import { FaustProvider } from '@faustjs/next';
import 'normalize.css/normalize.css';
import React from 'react';
import { client } from '../client';
import '../styles/index.css'

function MyApp({ Component, pageProps }) {
  return (
      <FaustProvider client={client} pageProps={pageProps}>
        <Component {...pageProps} />
      </FaustProvider>
    )
}

export default MyApp
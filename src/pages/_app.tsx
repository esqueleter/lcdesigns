import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css';
import '../styles/fonts.css';
import '../styles/animations.css';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../styles/theme';
import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';

import client from './api/apolloClient';
import { useEffect, useState } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const [showing, setShowing] = useState(false);
  useEffect(() => {
    setShowing(true);
  }, []);

  if (!showing) {
    return null;
  }

  if (typeof window === 'undefined') {
    return <></>;
  } else {
    return (
      <>
        <ApolloProvider client={client}>
          <ChakraProvider theme={theme}>
            <Component {...pageProps} />
          </ChakraProvider>
        </ApolloProvider>
      </>
    );
  }
}

export default MyApp;

import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css';
import '../styles/fonts.css';
import '../styles/animations.css';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../styles/theme';
import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';

import client from './api/apolloClient';

function MyApp({ Component, pageProps }: AppProps) {
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

export default MyApp;

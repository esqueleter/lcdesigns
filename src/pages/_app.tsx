import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css';
import '../styles/fonts.css';
import '../styles/animations.css';
import { SSRProvider } from 'react-bootstrap';
import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ChakraProvider>
        <SSRProvider>
          <Component {...pageProps} />
        </SSRProvider>
      </ChakraProvider>
    </>
  );
}

export default MyApp;

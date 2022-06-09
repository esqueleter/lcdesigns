import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css';
import '../styles/fonts.css';
import '../styles/animations.css';
import { SSRProvider } from 'react-bootstrap';
import type { AppProps } from 'next/app';
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <SSRProvider>
        <Component {...pageProps} />
      </SSRProvider>
    </>
  );
}

export default MyApp;

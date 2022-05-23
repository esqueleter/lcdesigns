import "bootstrap/dist/css/bootstrap.css"
import '../styles/globals.css'
import Navigation from '../components/Navigation'
import { SSRProvider } from 'react-bootstrap'
import type { AppProps } from 'next/app'


function MyApp({ Component, pageProps }: AppProps) {
  return (
  <>
    <SSRProvider>
      <Navigation/>
      <Component {...pageProps} />
    </SSRProvider>
  </>
 )
}

export default MyApp

import '../styles/globals.css'
import "bootstrap/dist/css/bootstrap.css"
import Navigation from '../components/Navigation'
import type { AppProps } from 'next/app'


function MyApp({ Component, pageProps }: AppProps) {
  return (
  <>
    <Navigation/>
    <Component {...pageProps} />
  </>
 )
}

export default MyApp

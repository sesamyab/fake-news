import type { AppProps } from 'next/app'
// font awesome
import "@fortawesome/fontawesome-svg-core/styles.css"; 
import { config } from "@fortawesome/fontawesome-svg-core";
import { UserProvider } from '@auth0/nextjs-auth0';

import '../styles/fonts.css'
import '../styles/globals.css'


config.autoAddCss = false; 

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  )
}

export default MyApp

import '../public/styles/globals.css'
import 'tailwindcss/tailwind.css'

import { appWithTranslation } from 'next-i18next'
import { AppProps } from 'next/app'
import { useEffect } from 'react'
import TagManager from 'react-gtm-module'
import { ParallaxProvider } from 'react-scroll-parallax'

import Layout from '../src/components/Layout/Layout'
import { ModalContextProvider } from '../src/components/mainPage/ServiceModal/ServiceModal.context'

function MyApp({ Component, pageProps }: AppProps) {

  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-PFRDBBC' })
  }, [])

  return (
    <ParallaxProvider>
      <ModalContextProvider>
        <Layout>
          <Component {...pageProps}/>
        </Layout>
      </ModalContextProvider>
    </ParallaxProvider>
  )
}

export default appWithTranslation(MyApp)

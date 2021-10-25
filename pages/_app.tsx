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

  if (typeof window === 'object') {
    document.addEventListener('contextmenu', function(e) {
      e.preventDefault()
    })
    document.onkeydown = function(e) {
      if(e.keyCode === 123) {
        return false
      }
      if(e.ctrlKey && e.shiftKey && e.keyCode === 'I'.charCodeAt(0)) {
        return false
      }
      if(e.ctrlKey && e.shiftKey && e.keyCode === 'C'.charCodeAt(0)) {
        return false
      }
      if(e.ctrlKey && e.shiftKey && e.keyCode === 'J'.charCodeAt(0)) {
        return false
      }
      if(e.ctrlKey && e.keyCode === 'U'.charCodeAt(0)) {
        return false
      }
    }
  }

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

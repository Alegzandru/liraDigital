import '../public/styles/globals.css'
import { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css'
import Layout from '../src/components/Layout/Layout'
import { ModalContextProvider } from '../src/components/mainPage/ServiceModal/ServiceModal.context'

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <ModalContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ModalContextProvider>
  )
}

export default MyApp

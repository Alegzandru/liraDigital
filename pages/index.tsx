import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'

import About from '../src/components/mainPage/About/About'
import Benefits from '../src/components/mainPage/Benefits/Benefits'
import Clients from '../src/components/mainPage/Clients/Clients'
import Hero from '../src/components/mainPage/Hero/Hero'
import Services from '../src/components/mainPage/Services/Services'

const MainPage = () =>
  (
    <div>
      <Head>
        <title>Lira Digital Agency</title>
        <link rel="shortcut icon" href="/liraFavicon.svg"/>
      </Head>
      <Hero/>
      <About/>
      <Benefits/>
      <Services/>
      <Clients/>
    </div>
  )

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale as string, ['common', 'mainPage'])),
  },
})


export default MainPage

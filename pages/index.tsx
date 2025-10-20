import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useRouter } from 'next/router'

import { HeadWithMeta } from '../src/components/Layout/HeadWithMeta'
import About from '../src/components/mainPage/About/About'
import Benefits from '../src/components/mainPage/Benefits/Benefits'
import Clients from '../src/components/mainPage/Clients/Clients'
import Hero from '../src/components/mainPage/Hero/Hero'
import Services from '../src/components/mainPage/Services/Services'
import { META } from '../src/constants/meta'
import { Locale } from '../src/types/locale'

const MainPage = () => {
  const router = useRouter()
  const locale = router.locale as Locale

  return (
    <div>
      <HeadWithMeta
        title={META.index[locale].title}
        description={META.index[locale].description}
        index={true}
        img={''}
      />
      <Hero />
      <About />
      <Clients />
      <Benefits />
      <Services />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale as string, [
      'common',
      'mainPage',
      'services',
    ])),
  },
})

export default MainPage

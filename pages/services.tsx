import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useRouter } from 'next/router'

import { HeadWithMeta } from '../src/components/Layout/HeadWithMeta'
import AllServices from '../src/components/servicesPage/AllServices/AllServices'
import { META } from '../src/constants/meta'
import { Locale } from '../src/types/locale'

const Services = () => {
  const router = useRouter()
  const locale = router.locale as Locale

  return(
    <div>
      <HeadWithMeta
        title={META.services[locale].title}
        description={META.services[locale].description}
        index={true}
        img={''}
      />
      <AllServices/>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async ({locale}) => ({
  props: {
    ...(await serverSideTranslations(locale as string, ['common', 'services'])),
  },
})

export default Services

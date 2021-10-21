import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useRouter } from 'next/router'

import Contacts from '../src/components/contacts/Contacts'
import { HeadWithMeta } from '../src/components/Layout/HeadWithMeta'
import { META } from '../src/constants/meta'

const ContactsPage = () =>{
  const router = useRouter()
  const locale = router.locale as string

  return(
    <div>
      <HeadWithMeta
        title={META.contacts[locale].title}
        description={META.contacts[locale].description}
        index={true}
        img={''}
      />
      <Contacts/>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async ({locale}) => ({
  props: {
    ...(await serverSideTranslations(locale as string, ['common', 'contacts'])),
  },
})

export default ContactsPage

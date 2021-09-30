import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import Contacts from '../src/components/Contacts/Contacts'
// ceva aici ne to

const ContactsPage = () =>
  (
    <div>
      <Head>
        <title>Contacts | Lira Digital Agency</title>
        <link rel="shortcut icon" href="/liraFavicon.svg"/>
      </Head>
      <Contacts/>
    </div>
  )

export const getStaticProps: GetStaticProps = async ({locale}) => ({
  props: {
    ...(await serverSideTranslations(locale as string, ['common', 'contacts'])),
  },
})

export default ContactsPage

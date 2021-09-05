import Head from 'next/head'
import Contacts from '../src/components/contacts/Contacts'

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

export default ContactsPage

import Error from '../src/components/error'
import Head from 'next/head'

const MainPage = () =>
  (
    <div>
      <Head>
        <title>Lira Digital Agency</title>
        <link rel="shortcut icon" href="/liraFavicon.svg"/>
      </Head>
      <Error></Error>
    </div>
  )

export default MainPage

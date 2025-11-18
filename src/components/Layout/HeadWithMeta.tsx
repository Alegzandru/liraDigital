import Head from 'next/head'
import { useRouter } from 'next/router'
import { MDHOST } from '../../constants/common'

type Props = {
  title: string
  description: string
  img: string
  index?: boolean
}

export const HeadWithMeta = ({
  title,
  description,
  img,
  index = true,
}: Props) => {
  const router = useRouter()

  const baseUrl = MDHOST
  const currentUrl = baseUrl + router.asPath

  return (
    <Head>
      {/* Title */}
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Index / noindex */}
      <meta name="robots" content={index ? 'index, follow' : 'noindex'} />

      {/* Canonical */}
      <link rel="canonical" href={currentUrl} />

      {/* Hreflang tags */}
      <link rel="alternate" href={`${baseUrl}/`} hrefLang="ro" />
      <link rel="alternate" href={`${baseUrl}/en`} hrefLang="en" />
      <link rel="alternate" href={`${baseUrl}/`} hrefLang="x-default" />

      {/* OpenGraph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={img} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:site_name" content="Lira Digital Agency" />

      {/* Twitter */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={img} />

      {/* Favicon */}
      <link rel="shortcut icon" href="/liraFavicon.svg" />

      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
  )
}

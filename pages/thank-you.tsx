import { useRouter } from 'next/router'
import { HeadWithMeta } from '../src/components/Layout/HeadWithMeta'
import ThankYou from '../src/components/thankYou/ThankYou'
import { META } from '../src/constants/meta'
import { Locale } from '../src/types/locale'

const ThankYouPage = () => {

  const router = useRouter()
  const locale = router.locale as Locale

  return(
    <div>
      <HeadWithMeta
        title={META.thankyou[locale].title}
        description={''}
        index={false}
        img={''}
      />
      <ThankYou/>
    </div>
  )
}

export default ThankYouPage

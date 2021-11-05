import { useRouter } from 'next/router'
import { HeadWithMeta } from '../src/components/Layout/HeadWithMeta'
import ThankYou from '../src/components/thankYou/ThankYou'
import { META } from '../src/constants/meta'

const ThankYouPage = () => {

  const router = useRouter()
  const locale = router.locale as string

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

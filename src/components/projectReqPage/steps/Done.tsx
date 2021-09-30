import { useEffect, useRef } from 'react'
import lottie from 'lottie-web'
import { useTranslation } from 'react-i18next'

const Done = () => {
  const lottieRef = useRef<HTMLDivElement>(null)

  const {t} = useTranslation('project-request')

  useEffect(() => {
    (
      async () => {
        const lottieJson = await import('../../../../public/briefEnd.json')

        lottie.loadAnimation({
          container: lottieRef.current as HTMLDivElement,
          animationData: lottieJson,
          renderer: 'svg',
          loop: true,
          autoplay: true,
        })

      }
    )()
  }, [])

  return(
    <div className="w-full mx-auto">
      <h1 className="md:mt-20 font-Poppins font-bold text-ui-white text-sm-h1-poppins md:text-md-h1-poppins lg:text-lg-h1-poppins mb-4 w-full text-center">
        {t('Thank you!')}
      </h1>
      <div ref={lottieRef} className="w-300px mx-auto"/>
    </div>
  )
}

export default Done

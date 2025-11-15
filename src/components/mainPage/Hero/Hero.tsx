import classNames from 'classnames'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { HERO_WORDS, LANGUAGES } from '../../../constants/common'

import styles from './Hero.module.scss'

const Hero = () => {
  const lottieRef = useRef<HTMLDivElement>(null)
  const wordRef = useRef<HTMLDivElement>(null)

  const [wordIndex, setWordIndex] = useState(0)
  const [isSafari, setIsSafari] = useState(true)

  const { t } = useTranslation('mainPage')

  const router = useRouter()
  const isRo = router.locale !== LANGUAGES.en.slug

  useEffect(() => {
    if (navigator.userAgent) {
      setIsSafari(/^((?!chrome|android).)*safari/i.test(navigator.userAgent))
    }
    ;(async () => {
      ;(await import('../../../../public/webgl/min.script.js')).default()
    })()
    ;(async () => {
      const lottie = (await import('lottie-web')).default
      const lottieJson = await import('../../../../public/hero/arrowDown.json')

      lottie.loadAnimation({
        container: lottieRef.current as HTMLDivElement,
        animationData: lottieJson,
        renderer: 'svg',
        loop: true,
        autoplay: true,
      })
    })()

    const wordSpan = wordRef.current as HTMLSpanElement

    wordSpan.onanimationend = () => {
      wordSpan.classList.remove('animate-show-text')
    }

    const interval = setInterval(
      () =>
        setWordIndex((lastIndex) => {
          wordSpan.classList.add('animate-show-text')

          if (lastIndex === 3) {
            return 0
          }

          return lastIndex + 1
        }),
      3000,
    )

    return () => {
      clearInterval(interval)
    }
  }, [])

  const scrollDown = () => {
    const pageHeight = window.innerHeight
    window.scrollBy(0, pageHeight)
  }

  return (
    <div>
      <canvas
        id="webGLCanvas"
        className={classNames(
          'h-screen w-full touch-action',
          styles.hero_canvas,
        )}
      />
      <div
        className={classNames(
          'h-screen w-full flex flex-col justify-center items-center px-container-sm md:px-container-md lg:px-container-lg bg-ui-black90',
          styles.hero,
          isSafari ? '' : styles.hero_shadow,
        )}
      >
        <div className="">
          <h1 className="font-TangoSans font-bold text-ui-white text-md-h2-tangosans md:text-md-h1-tangosans lg:text-lg-h1-tangosans max-w-900px text-center relative">
            <div>
              {t("We craft your brand's")}{' '}
              <span
                ref={wordRef}
                className={classNames(
                  styles.hero_activeWord,
                  'animate-show-text',
                )}
              >
                {t(HERO_WORDS[wordIndex])}
              </span>
            </div>
            <div>{isRo ? ' brandului tău' : ''}</div>
          </h1>
        </div>
        <div
          className={classNames(
            styles.hero_mouseContainer,
            'relative z-30 flex flex-col justify-center items-center',
          )}
          onClick={() => scrollDown()}
        >
          <div className="text-ui-white text-sm-h5-poppins md:text-md-h5-poppins lg:text-lg-h5-poppins font-Poppins font-medium">
            {t('Click to scroll')}
          </div>
          <div
            className={classNames(
              'hover:-mt-2 transition-all',
              styles.hero_mouse,
            )}
            ref={lottieRef}
          />
        </div>
      </div>
    </div>
  )
}

export default Hero

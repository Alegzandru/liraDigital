import styles from './Hero.module.scss'
import classNames from 'classnames'
import lottie from 'lottie-web'
import { useEffect, useRef } from 'react'

const Hero = () => {
  const lottieRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    (
      async () => {
        const lottieJson = await import('../../../../public/hero/mouse.json')

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

  const scrollDown = () => {
    const pageHeight = window.innerHeight
    window.scrollBy(0, pageHeight)
  }

  return(
    <div className={classNames('h-screen w-full bg-ui-dark flex flex-row justify-center items-center px-container-sm md:px-container-md lg:px-container-lg',
      styles.hero_bg)}
    >
      <h1 className="font-TangoSans font-bold text-ui-white text-sm-h1-tangosans md:text-md-h1-tangosans lg:text-lg-h1-tangosans max-w-792px text-center">
      We craft your brand&apos;s <span className={styles.hero_activeWord}>voice</span>
      </h1>
      <div className={classNames('hover:-mt-2 transition-all', styles.hero_mouse)} ref={lottieRef} onClick={() => scrollDown()}/>
    </div>
  )
}

export default Hero

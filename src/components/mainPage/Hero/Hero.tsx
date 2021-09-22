import classNames from 'classnames'
import { gsap } from 'gsap'
import lottie from 'lottie-web'
import Script from 'next/script'
import { useEffect, useRef, useState } from 'react'

import styles from './Hero.module.scss'

const Hero = () => {
  const lottieRef = useRef<HTMLDivElement>(null)
  const headRef = useRef<HTMLHeadElement>(null)

  const [word, setWord] = useState(0)

  const words = ['voice', 'vibe', 'vibrance']

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


  useEffect(() => {
    gsap.from('.animate2', { y: '100%', ease: 'Power4.easeOut', duration: 0.5})
    if(word < 2 ){
      setTimeout(() => {
        setWord(word + 1)
      }, 3000)
    } else if(word === 2){
      setTimeout(() => {
        setWord(0)
      }, 3000)
    }
  }, [word])

  const scrollDown = () => {
    const pageHeight = window.innerHeight
    window.scrollBy(0, pageHeight)
  }

  return(
    <div>
      <head ref={headRef}></head>
      <Script type="text/javascript" src="/webgl/dat.gui.min.js"></Script>
      <Script type="text/javascript" src="/webgl/ga.js"></Script>
      <Script async={true} src="https://www.google-analytics.com/analytics.js"></Script>
      <Script src="/webgl/script.js"></Script>
      <canvas className="h-screen w-full">
      </canvas>
      <div className={classNames('h-screen w-full flex flex-col justify-center items-center px-container-sm md:px-container-md lg:px-container-lg bg-ui-black90', styles.hero)}>
        <div className="h-14 md:h-166px lg:h-212px overflow-hidden">
          <h1 className="font-TangoSans font-bold text-ui-white text-sm-h1-tangosans md:text-md-h1-tangosans lg:text-lg-h1-tangosans max-w-792px text-center relative h-14 md:h-166px lg:h-212px">
            We craft your brand&apos;s <span className="opacity-0">{words[word]}</span>
          </h1>
          <h1
            className={classNames('font-TangoSans font-bold text-ui-white text-sm-h1-tangosans md:text-md-h1-tangosans lg:text-lg-h1-tangosans max-w-792px text-center',
              'relative h-14 md:h-166px lg:h-212px -mt-14 md:-mt-166px lg:-mt-212px animate2')}
          >
            <span className="opacity-0">We craft your brand&apos;s</span> <span className={classNames(styles.hero_activeWord, 'animateText')}>{words[word]}</span>
          </h1>
        </div>
        <div className={classNames('hover:-mt-2 transition-all', styles.hero_mouse)} ref={lottieRef} onClick={() => scrollDown()}/>
      </div>
    </div>
  )
}

export default Hero

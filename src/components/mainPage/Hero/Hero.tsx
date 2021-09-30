import classNames from 'classnames'
import lottie from 'lottie-web'
import { useEffect, useRef, useState } from 'react'

import styles from './Hero.module.scss'

const Hero = () => {
  const lottieRef = useRef<HTMLDivElement>(null)
  const wordRef = useRef<HTMLSpanElement>(null)

  const [wordIndex, setWordIndex] = useState(0)

  const words = ['voice', 'vibe', 'vibrance']

  useEffect(() => {
    (async () => {
      (await import('../../../../public/webgl/min.script.js')).default()
    })();

    (async () => {
      const lottieJson = await import('../../../../public/hero/mouse.json')

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

    const interval = setInterval(() => setWordIndex((lastIndex) => {
      wordSpan.classList.add('animate-show-text')

      if (lastIndex === 2) {
        return 0
      }

      return lastIndex + 1
    }), 3000)

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
      <canvas id="webGLCanvas" className={classNames('h-screen w-full touch-action', styles.hero_canvas)} />
      <div className={classNames('h-screen w-full flex flex-col justify-center items-center px-container-sm md:px-container-md lg:px-container-lg bg-ui-black90', styles.hero)}>
        <div className="h-14 md:h-166px lg:h-212px overflow-hidden">
          <h1 className="font-TangoSans font-bold text-ui-white text-sm-h1-tangosans md:text-md-h1-tangosans lg:text-lg-h1-tangosans max-w-792px text-center relative h-14 md:h-166px lg:h-212px">
            We craft your brand&apos;s <span ref={wordRef} className={classNames(styles.hero_activeWord, 'animate-show-text')}>{words[wordIndex]}</span>
          </h1>
        </div>
        <div className={classNames('hover:-mt-2 transition-all relative z-30', styles.hero_mouse)} ref={lottieRef} onClick={() => scrollDown()} />
      </div>
    </div>
  )
}

export default Hero

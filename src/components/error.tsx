import classNames from 'classnames'
import Image from 'next/image'
import lottie from 'lottie-web'
import { useEffect, useRef } from 'react'

import logo from '../../public/logoLira.svg'
import animation from '../../public/404Animation.json'
import styles from './error.module.scss'

const Error: React.FC = () => {

  const lottieRef = useRef<HTMLDivElement>(null)

  useEffect(() =>{
    if(lottieRef.current){
      lottie.loadAnimation({
        container: lottieRef.current,
        animationData: animation,
        renderer: 'svg', // "canvas", "html"
        loop: true, // boolean
        autoplay: true, // boolean
      })
    }
  }
  , [lottieRef] )

  return(
    <div className={classNames(
      'min-h-screen bg-ui-dark bg404 px-container-sm lg:px-container-lg xl:px-container-xl flex flex-col-reverse lg:flex-row',
      'justify-end lg:justify-between items-center overflow-hidden pb-100px lg:pb-0'
    )}>
      <div className="w-full md:w-568px flex flex-col justify-start items-center lg:items-start">
        <div className={classNames('mb-100px hidden lg:block', styles.logo)}>
          <Image src={logo} alt="Logo Lira Digital"></Image>
        </div>
        <h1 className={classNames(
          'tracking-wide text-ui-white font-bold w-full text-smallest-h1 sm:text-sm-h1 md:text-md-h1 lg:text-lg-h1 font-TangoSans mb-8 text-center lg:text-left',
          styles.h1
        )}>
        Site is under construction...
        </h1>
        <p className={classNames(
          'w-300px font-normal text-ui-grey font-Poppins text-smallest-p sm:text-lg-p mb-10 md:mb-14 lg:mb-20 text-center lg:text-left',
          styles.p
        )}>
        Because we are crafting your brands&#39;s voice!
        </p>
        <button className={classNames(
          'outline-none text-smallest-button md:text-lg-button px-12 py-4 rounded-sm font-Poppins font-bold text-ui-white gradientButton transform hover:scale-105 transition duration-300',
          styles.button
        )}>
        Get in touch
        </button>
      </div>
      <div className="w-full max-w-528px max-h-528px lg:max-w-720px lg:max-h-720px flex flex-row justify-center items-start">
        <div ref={lottieRef} id="react-logo" className="max-w-528px max-h-528px lg:max-w-720px lg:max-h-720px w-full"/>
      </div>
      <div className={classNames('mb-4 block lg:hidden mt-8', styles.logo)}>
        <Image src={logo} alt="Logo Lira Digital"></Image>
      </div>
    </div>
  )
}

export default Error

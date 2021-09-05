import classNames from 'classnames'
import { useState } from 'react'
import styles from './Benefits.module.scss'
import { benefits } from '../../../constants/benefits'

const Benefits = () => {
  const [fade, setFade] = useState(false)
  const [slide, setSlide] = useState(0)

  const changeSlide = (direction: 'left' | 'right') => {
    if(direction === 'left'){
      setFade(true)
      setTimeout(() =>
        setSlide(slide === 0 ? benefits.length - 1 : slide-1)
      , 300)
      setTimeout(() =>
        setFade(false)
      , 1200)
    } else{
      setFade(true)
      setTimeout(() =>
        setSlide(slide === benefits.length - 1 ? 0 : slide+1)
      , 300)
      setTimeout(() =>
        setFade(false)
      , 1200)
    }
  }

  return(
    <div className="pt-12 pb-24 md:py-40 w-full bg-ui-black100 flex flex-col justify-center items-center px-container-sm md:px-container-md lg:px-container-lg">
      <h2 className={classNames('font-TangoSans font-bold w-full text-center mb-14 text-ui-white md:text-ui-black80 text-sm-h2-tangosans' ,
        styles.benefits_parallaxText)}>
        Our advantages
      </h2>
      <div className="w-full bg-ui-black80 py-10 px-6 flex flex-col md:flex-row-reverse justify-between items-center relative z-10">
        <div className={classNames('md:hidden flex flex-row justify-start items-center', styles.benefits_digits)}>
          <div className={classNames('text-sm-digits md:text-md-digits lg:text-lg-digits font-TangoSans font-bold', styles.benefits_digits)}>0</div>
          <div className={classNames('text-sm-digits md:text-md-digits lg:text-lg-digits font-TangoSans font-bold', styles.benefits_digits, fade ? styles.benefits_cardDigit : '')}>
            {slide+1}
          </div>
        </div>

        <div className={classNames('hidden md:block text-sm-digits md:text-md-digits lg:text-lg-digits font-TangoSans font-bold', styles.benefits_digits, fade ? styles.benefits_cardDigit : '')}>
          {slide+1}
        </div>
        <div className={classNames('hidden md:block text-sm-digits md:text-md-digits lg:text-lg-digits font-TangoSans font-bold', styles.benefits_digits)}>0</div>

        <div
          className={classNames('pt-8 w-full px-6 md:pl-14 lg:pl-18', fade ? styles.benefits_cardText : '')}
          onAnimationEnd={() => setFade(false)}
        >
          <h3 className="font-Poppins text-sm-h3-poppins md:text-md-h2-poppins lg:text-lg-h2-poppins text-ui-white mb-2 font-bold">
            {benefits[slide].headline}
          </h3>
          <p className="text-ui-grey text-sm-p md:text-md-p lg:text-lg-p font-Poppins mb-8 md:mb-12 lg:mb-18">
            {benefits[slide].text}
          </p>
          <div className="flex flex-row justify-start items-center">
            <svg xmlns="http://www.w3.org/2000/svg" onClick={() => !fade ? changeSlide('left') : ''}
              className="h-16 w-16 text-ui-white hover:text-ui-peach transition duration-300 mr-4 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" onClick={() => !fade ? changeSlide('right') : ''}
              className="h-16 w-16 text-ui-white hover:text-ui-peach transition duration-300 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Benefits

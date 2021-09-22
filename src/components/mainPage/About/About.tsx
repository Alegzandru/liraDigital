import { useEffect, useRef, useState } from 'react'
import styles from './About.module.scss'
import { gsap } from 'gsap'
import classNames from 'classnames'
import { SIZES } from '../../../constants/common'

const About = () => {
  const textRef = useRef(null)
  const [animate, setAnimate] = useState(false)
  const [show, setShow] = useState(false)
  const [mobile, setMobile] = useState(true)

  useEffect(() => {
    const onScrollHandler = () => {
      if(window.pageYOffset > 500){
        setAnimate(true)
      }
    }

    const onResizeHandler = () => {
      if(window.innerWidth < SIZES.md){
        setMobile(true)
      } else{
        setMobile(false)
      }
    }

    onScrollHandler()
    window.addEventListener('scroll', onScrollHandler)

    onResizeHandler()
    window.addEventListener('resize', onResizeHandler)

    return () => {
      window.removeEventListener('scroll', onScrollHandler)
      window.removeEventListener('resize', onResizeHandler)
    }
  }, [])

  useEffect(() => {
    if(animate){
      gsap.from('.animate1', { y: '100%', ease: 'power4.out', skewY: 10, stagger: {amount: 0.8}, opacity: 0, duration: 1.8 })
      setShow(true)
    }
  }, [animate])

  return(
    <div className="h-screen w-full bg-ui-black100 flex flex-row justify-center items-center px-container-sm md:px-container-md lg:px-container-lg">
      <h2 className={classNames(`font-Poppins text-ui-white text-sm-h2-poppins md:text-md-h2-poppins lg:text-lg-h2-poppins font-bold text-center ${show ? '' : 'opacity-0'}`)}>
        {
          mobile ?
            <div>
              <div className="animate1" ref={textRef}>A <span className={styles.about_activePhrase}>creative digital agency</span> that</div>
              <div className="animate1" ref={textRef}>provides the full range</div>
              <div className="animate1" ref={textRef}>of digital marketing services</div>
              <div className="animate1" ref={textRef}>based on bold ideas</div>
              <div className="animate1" ref={textRef}>and experienced techniques</div>
              <div className="animate1" ref={textRef}>Scroll down to find more reasons to choose us</div>
            </div>
            :
            <div>
              <div className="animate1" ref={textRef}>A <span className={styles.about_activePhrase}>creative digital agency</span> that provides</div>
              <div className="animate1" ref={textRef}>the full range of digital marketing</div>
              <div className="animate1" ref={textRef}>services based on bold ideas</div>
              <div className="animate1" ref={textRef}>and experienced techniques</div>
              <div className="animate1" ref={textRef}>Scroll down to find more reasons to choose us</div>
            </div>
        }
      </h2>
    </div>
  )
}

export default About

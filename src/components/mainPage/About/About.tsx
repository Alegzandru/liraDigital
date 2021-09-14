import { useEffect, useRef, useState } from 'react'
import styles from './About.module.scss'
import { gsap } from 'gsap'
import classNames from 'classnames'

const About = () => {
  const textRef = useRef(null)
  const [animate, setAnimate] = useState(false)
  const [show, setShow] = useState(false)

  useEffect(() => {
    if(!animate){
      const onScrollHandler = () => {
        setAnimate(window.pageYOffset > 700)
      }

      onScrollHandler()
      window.addEventListener('scroll', onScrollHandler)

      return () => window.removeEventListener('scroll', onScrollHandler)
    }
  })

  useEffect(() => {
    if(animate){
      gsap.from('.animate1', { y: '100%', ease: 'power4.out', skewY: 10, stagger: {amount: 0.8}, opacity: 0, duration: 1.8 })
      setShow(true)
    }
  }, [animate])

  return(
    <div className="h-screen w-full bg-ui-black100 flex flex-row justify-center items-center px-container-sm md:px-container-md lg:px-container-lg">
      <h2 className={classNames(`font-Poppins text-ui-white text-sm-h2-poppins md:text-md-h2-poppins lg:text-lg-h2-poppins font-bold text-center ${show ? '' : 'opacity-0'}`)}>
        <div className="animate1" ref={textRef}>We work <span className={styles.about_activePhrase}>together and toward.</span></div>
        <div className="animate1" ref={textRef}>For today, tomorrow, and beyond.</div>
        <div className="animate1" ref={textRef}>With intention and meaning.</div>
        <div className="animate1" ref={textRef}>To bring ideas to life.</div>
      </h2>
    </div>
  )
}

export default About

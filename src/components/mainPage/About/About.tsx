import classNames from 'classnames'
import { gsap } from 'gsap'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { SIZES } from '../../../constants/common'
import styles from './About.module.scss'

const About = () => {
  const [animate, setAnimate] = useState(false)
  const [show, setShow] = useState(false)
  const [mobile, setMobile] = useState(true)

  useEffect(() => {
    const onScrollHandler = () => {
      if (window.pageYOffset > 500) {
        setAnimate(true)
      }
    }

    const onResizeHandler = () => {
      if (window.innerWidth < SIZES.md) {
        setMobile(true)
      } else {
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
    if (animate) {
      gsap.from('.animate1', {
        y: '100%',
        ease: 'Power4.easeOut',
        skewY: 10,
        stagger: { amount: 0.4 },
        opacity: 0,
        duration: 1.8,
      })
      setShow(true)
    }
  }, [animate])

  const { t } = useTranslation('mainPage')

  return (
    <div className="py-120px md:py-166px lg:py-240px w-full bg-ui-black100 flex flex-row justify-center items-center px-container-sm md:px-container-md lg:px-container-lg">
      <h2
        className={classNames(
          `font-Poppins text-ui-white text-sm-h2-poppins md:text-md-h2-poppins lg:text-lg-h2-poppins font-bold text-center ${
            show ? '' : 'opacity-0'
          }`,
        )}
      >
        {mobile ? (
          <div>
            <div className="h-7 overflow-hidden">
              <div className="animate1">
                {t('Lira Means')}{' '}
                <span className={styles.about_activePhrase}>
                  {t('marketing')}
                </span>
              </div>
            </div>
            <div className="h-7 overflow-hidden">
              <div className="animate1">
                <span className={styles.about_activePhrase}>
                  {t('digital')}
                </span>{' '}
                <span className="animate1">{t('thought as system')}</span>
              </div>
            </div>
            <div className="h-7 overflow-hidden">
              <div className="animate1">{t('we offer')}</div>
            </div>
            <div className="h-7 overflow-hidden">
              <div className="animate1">{t('campaign that works')}</div>
            </div>
            <div className="h-7 overflow-hidden">
              <div className="animate1">
                <span className={styles.about_activePhrase}>
                  {t('toghether')}
                </span>
                {'.'}
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="h-42px lg:h-58px overflow-hidden">
              <div className="animate1">
                {t('Lira Means')}{' '}
                <span className={styles.about_activePhrase}>
                  {t('digital marketing')}
                </span>
              </div>
            </div>
            <div className="h-42px lg:h-58px overflow-hidden">
              <div className="animate1">{t('thought as system')}</div>
            </div>
            <div className="h-42px lg:h-58px overflow-hidden">
              <div className="animate1">{t('we offer')}</div>
            </div>
            <div className="h-42px lg:h-58px overflow-hidden">
              <div className="animate1">{t('campaign that works')}</div>
            </div>
            <div className="h-42px lg:h-58px overflow-hidden">
              <div className="animate1">
                <span className={styles.about_activePhrase}>
                  {t('toghether')}
                </span>
                {'.'}
              </div>
            </div>
          </div>
        )}
      </h2>
    </div>
  )
}

export default About

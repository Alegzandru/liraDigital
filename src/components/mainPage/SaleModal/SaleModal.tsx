import classNames from 'classnames'
import styles from './SaleModal.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { MouseEventHandler, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

const SaleModal = ({show, close}: {show: boolean; close: MouseEventHandler<HTMLButtonElement> | undefined}) => {
  const [showDelayed, setShowDelayed] = useState(false)
  const [showMiniPopup, setShowMiniPopup] = useState(false)
  const [down, setDown] = useState(false)

  const {t} = useTranslation('common')

  useEffect(() => {
    setTimeout(() => {
      setShowDelayed(show)
    }, show ? 0 : 450)
  }, [show])

  useEffect(() => {
    setTimeout(() => {
      setShowMiniPopup(show)
    }, show ? 500 : 0)
  }, [show])

  const goDown = () => setDown(true)
  const goUp = () => setDown(false)

  return(
    showDelayed ?
      <div className={classNames('fixed top-0 h-screen w-full z-40', show ? styles.saleModal_fadeUp : styles.saleModal_fadeDown)}>
        <div className="h-full w-full bg-ui-black100 opacity-40"/>
        <div className={classNames('-mt-screenH h-full w-full flex flex-row justify-center items-end md:items-center md:px-8')}>
          <div className={classNames('bg-ui-popupBg px-6 md:pl-12 lg:pl-16 rounded-t-3xl md:rounded-2xl flex flex-col justify-end md:flex-row md:justify-between lg:justify-start items-center',
            ' md:w-full lg:w-auto relative h-4/5 md:h-512px lg:h-620px', styles.saleModal_popup, down ? styles.saleModal_goDown : styles.saleModal_goUp)}>

            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/popup/piggyBank2.png"
              alt="100$ Sale on first month"
              className="md:hidden w-238px mb-5"
            />

            <button
              className={classNames('bg-ui-white md:bg-none rounded absolute top-8 right-8', styles.saleModal_closeButton)}
              onClick={goDown}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-ui-black90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className={classNames('md:w-424px lg:w-512px', styles.saleModal_modalText)}>
              <h5 className="font-Poppins text-sm-h5-poppins md:text-md-h5-poppins lg:text-lg-h5-poppins text-ui-darkGrey mb-4 md:mb-12 lg:mb-18 font-bold">
                {t('We see you are enjoying it 👀')}
              </h5>
              <h3 className="font-TangoSans md:font-Poppins text-sm-h2-tangosans md:text-md-h3-poppins lg:text-lg-h3-poppins text-ui-black100 font-bold mb-8 md:mb-14 lg:mb-22">
                {t('Do not miss the opportunity to get 100€ discount for your 1st month for our services')}
              </h3>
              <div className="flex flex-col md:flex-row justify-start items-center font-Poppins text-sm-button-md md:text-md-button-md lg:text-lg-button-md">
                <Link href="/project-request">
                  <a
                    className="w-full md:w-auto"
                  >
                    <button
                      className="w-full md:w-auto text-ui-white md:px-10 lg:px-18 py-4 md:py-5 bg-ui-pink rounded-md font-bold md:mr-8 mb-4 md:mb-0"
                      onClick={close}
                    >
                      {t('Complete the form')}
                    </button>
                  </a>
                </Link>
                <a
                  href="tel:+37360191000"
                  className="w-full md:w-auto"
                >
                  <button
                    className="text-ui-black100 font-bold py-4 w-full border-2 border-ui-pink rounded-md md:py-0 md:w-auto md:border-0 mb-14 md:mb-0 box-border"
                    onClick={close}
                  >
                    <span className="hidden md:block">{t('or')}</span> <span className="text-ui-pink md:underline">{t('Make a call')}</span>
                  </button>
                </a>
              </div>
            </div>

            <div className={classNames('hidden md:block md:w-348px lg:w-480px md:h-512px lg:h-620px top-0 right-0 md:absolute lg:relative', styles.saleModal_piggyBank)}>
              <Image
                src="/popup/piggyBank2.png"
                alt="100$ Sale on first month"
                layout="fill"
                objectFit="cover"
                quality="100"
              />
            </div>
          </div>

          {showMiniPopup &&
          <div className={classNames('w-full px-container-sm flex flex-row justify-center items-center', styles.saleModal_miniPopup)}>
            <div className={classNames('pt-16 pb-10 px-9 bg-ui-popupBg rounded-2xl relative max-w-576px w-full')}>
              <button
                className={classNames('bg-ui-white md:bg-none rounded absolute top-6 right-6', styles.saleModal_closeButton)}
                onClick={close}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-ui-black90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <h5 className="font-Poppins text-sm-h5-poppins md:text-md-h5-poppins lg:text-lg-h5-poppins text-ui-darkGrey mb-7 font-bold">
                {t('Are you sure?')}
              </h5>
              <h3 className="font-Poppins text-sm-h3-poppins md:text-md-h3-poppins lg:text-lg-h3-poppins text-ui-black100 font-bold mb-10 md:mb-16">
                {t('You will no longer have the chance to get a discount')}
              </h3>
              <div className="flex flex-row justify-between items-center">
                <button
                  className="text-ui-error bg-ui-quitButton font-bold py-5 w-full border-2 border-ui-error rounded-md mr-3"
                  onClick={close}
                >
                  {t('Yes, quit')}
                </button>
                <button
                  className="text-ui-white bg-ui-peach font-bold py-5 w-full rounded-md"
                  onClick={goUp}
                >
                  {t('Get back')}
                </button>
              </div>
            </div>
          </div>
          }
        </div>
      </div>
      :
      null
  )
}

export default SaleModal

import classNames from 'classnames'
import Link from 'next/link'
import { useContext } from 'react'
import { useTranslation } from 'react-i18next'

import { SERVICES } from '../../../../constants/services'
import { ModalContext } from '../../ServiceModal/ServiceModal.context'
import styles from './WhatWeDo.module.scss'

interface CardProps {
  text: string
  index: number
  mixBlend: string
}

const Card = ({text, index}: CardProps) => (
  <div className={classNames('h-200px bg-ui-cardBg rounded overflow-hidden group transform hover:scale-95 transition duration-300',)}>
    <div className={classNames('w-full h-full transform group-hover:scale-110 transition duration-300', styles.whatwedo_card)}>
      {/* eslint-disable-next-line @next/next/no-img-element*/}
      <img
        src={`/services/card${index}.webp`}
        alt={text}
        className={classNames('w-full h-full', text === 'Google Ads & YouTube Ads' ? 'filter brightness-75' : '')}
      />
    </div>
    <div className={classNames('-mt-200px w-full h-full flex flex-col justify-end items-start p-6 text-ui-white font-Poppins font-bold text-lg-h5-poppins')}>
      {text}
    </div>
  </div>
)

const WhatWeDo = () => {
  const {
    actions: { showModal },
  } = useContext(ModalContext)

  const {t} = useTranslation('mainPage')

  return(
    <div className="w-full pt-30 md:pt-190px lg:pt-250px pb-250px md:pb-320px">
      <h2 className="font-TangoSans font-bold text-sm-h2-tangosans md:text-md-h2-tangosans lg:text-lg-h2-tangosans text-ui-white w-full text-center mb-8 md:mb-10 lg:mb-12">
        {t('What we do')}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        {SERVICES.map((service, index) =>
          (<div key={index} onClick={() => showModal(service)} className="cursor-pointer">
            <Card
              text={service.title}
              index={index+1}
              mixBlend={service.mixBlend}
            />
          </div>)
        )}
      </div>
      <div className="w-full flex flex-row justify-center items-center">
        <div className="group rounded overflow-hidden">
          <Link href="/project-request">
            <a>
              <button className={classNames('relative z-10 mx-auto h-14 mf:h-16 px-20 text-ui-white text-sm-button-md md:text-lg-button-md font-bold font-Poppins', styles.whatwedo_gradientBorder)}>
                {t('Learn more')}
              </button>
            </a>
          </Link>
          <div className={classNames('w-full h-16 -mt-16 relative z-0 opacity-0 group-hover:opacity-100 transition duration-300', styles.whatwedo_gradientBg)}>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhatWeDo

import classNames from 'classnames'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'

import { SERVICES2 } from '../../../../constants/services'
import styles from './WhatWeDo.module.scss'


interface CardProps {
  text: string
  index: number
  mixBlend: string
  img: string
}

const Card = ({text, img, mixBlend}: CardProps) => {

  const {t} = useTranslation('services')

  return(
    <div className={classNames('h-200px rounded overflow-hidden group transform hover:scale-95 transition duration-300',)}>
      <div className={classNames('w-full h-full transform group-hover:scale-110 transition duration-300 bg-ui-cardBg', styles.whatwedo_card)}>
        {/* eslint-disable-next-line @next/next/no-img-element*/}
        <img
          src={img}
          alt={text}
          className={classNames('w-full h-full object-cover', `mix-blend-${mixBlend}`, text === 'Facebook Ads & Sales Funnels' || text === 'Google Ads & YouTube Ads' ? 'filter brightness-50' : '')}
        />
      </div>
      <div className={classNames('-mt-200px group-hover:-mt-238px w-full h-full flex flex-col justify-end items-start',
        'p-6 group-hover:pb-2.5  text-ui-white font-Poppins font-bold text-lg-h5-poppins transition-all duration-300')}>
        {text}
      </div>
      <div className="text-ui-peach pl-6 font-Poppins text-md-button-md flex flex-row justify-start items-center">
        <div className="mr-2">
          {t('Learn more')}
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/ui/rightArrow3.svg"
          className="w-4 h-4"
          alt="Arrow"
        />
      </div>
    </div>
  )
}

const WhatWeDo = () => {

  const {t} = useTranslation('mainPage')

  return(
    <div className="w-full pt-30 md:pt-166px pb-30 md:pb-190px px-container-sm md:px-container-md lg:px-container-lg overflow-hidden">
      <h2 className="font-TangoSans font-bold text-sm-h2-tangosans md:text-md-h2-tangosans lg:text-lg-h2-tangosans text-ui-white w-full text-center mb-8 md:mb-10 lg:mb-12">
        {t('What we do')}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        {SERVICES2.map((service, index) =>
          (<div key={index}>
            <Link href={`/services#${service.section}`}>
              <a>
                <Card
                  text={service.name}
                  index={index+1}
                  mixBlend={service.mixBlend}
                  img={service.coverImg}
                />
              </a>
            </Link>
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

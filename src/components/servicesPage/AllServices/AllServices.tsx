import classNames from 'classnames'
import { useTranslation } from 'next-i18next'
import { useEffect, useState } from 'react'
import { SERVICES2 } from '../../../constants/services'

import Dropdown from '../Dropdown/Dropdown'
import styles from './AllServices.module.scss'

const AllServices = () => {
  const [hash, setHash] = useState('...')
  const {t} = useTranslation('services')

  useEffect(() => {
    if(window !== undefined && window.location.hash){
      const path = window.location.hash
      setHash(path)

      if (path && path.includes('#')) {
        setTimeout(() => {
          const id = path.replace('#', '')
          const el = window.document.getElementById(id)
          if(el && window.top){
            const r = el.getBoundingClientRect()
            window.top.scroll({
              top: scrollY + r.top - 100,
              behavior: 'smooth',
            })
          }
        }, 600)
      }

    } else{
      setHash('')
    }
  }, [])

  return(
    <div className="bg-ui-black100 w-full">
      <div className={classNames('w-full pt-32 pb-40 px-container-sm md:px-container-md lg:px-container-lg', styles.allServices_bg)}>
        <h3 className="text-sm-h3-tangosans md:text-md-h3-tangosans lg:text-lg-h3-tangosans font-TangoSans text-ui-white mb-6 lg:mb-10 w-full text-center">
          {t('The things we do')}
        </h3>
        <h1 className={classNames('font-bold text-sm-h1-tangosans-2 md:text-md-h1-tangosans lg:text-lg-h1-tangosans font-TangoSans text-ui-white mb-10 w-full text-center', styles.allServices_gradient)}>
          {t('Full service marketing')}
        </h1>
        <p className="max-w-792px mx-auto text-center text-sm-p2 md:text-md-p2 lg:text-lg-p2 font-Poppins text-ui-grey">
          {/* eslint-disable-next-line max-len*/}
          {t('We’ve spent years developing our team and tactics to meet the marketing needs of your business, whatever stage it’s in. We’re small enough to personalize your experience, and large enough to provide a wide array of marketing services tailored to your business goals.')}
        </p>
      </div>
      <div className="w-full bg-ui-black90 pt-14 pb-22 md:pt-20 md:pb-30 lg:pt-25 lg:pb-40 px-container-sm md:px-container-md lg:px-container-lg">
        <div className="h-px bg-ui-darkGrey w-full"></div>
        {
          hash === '...' ?
            <div className="py-12 text-ui-grey lg:text-lg-p md:text-md-p text-sm-p font-Poppins">
              {t('Loading ...')}
            </div>
            :
            SERVICES2.map((service, index) => (
              <section key={index} id={service.section}>
                <Dropdown
                  {...service}
                  currentSection={hash}
                  section={`#${service.section}`}
                />
              </section>
            ))
        }
      </div>
    </div>
  )
}

export default AllServices

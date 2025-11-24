import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ROHOST } from '../../constants/common'
import SocialIcons from '../../styles/SocialIcons'
import GoogleMap from './GoogleMap'

const Contacts = () => {
  const { t } = useTranslation('contacts')
  const [isRo, setIsRo] = useState(false)

  useEffect(() => {
    if (window.location.hostname === ROHOST) {
      setIsRo(true)
    }
  }, [])

  const addressText = isRo
    ? 'Alexandru Șerbanescu nr 87, biroul 121, București'
    : 'Chișinau, strada Puskin 60'
  const phoneText = isRo ? '+40 (746) 061 722' : '+373 (68) 356 821'
  const phoneLink = isRo ? 'tel:+40746061722' : 'tel:+37368356821'
  const addressLink = isRo
    ? 'https://goo.gl/maps/Tp5s8WkNSo2aQsdb7'
    : 'https://maps.app.goo.gl/K3R54BEiWixYxQWeA'
  const email = isRo ? 'office@liradigital.ro' : 'office@lira.md'

  return (
    <div className="pt-190px pb-100px md:pt-220px md:pb-40 lg:pt-256px lg:pb-36 w-full bg-ui-black90 px-container-sm md:px-container-md lg:px-container-lg">
      <h1 className="text-ui-peach font-TangoSans text-sm-h1-poppins md:text-md-h1-tangosans lg:text-lg-h1-tangosans mb-52px md:mb-11 lg:mb-15">
        {t('Say hello')}👋
      </h1>
      <div id="contacts-container" className="flex justify-between ">
        <div className="w-auto flex flex-col md:flex-row justify-start items-baseline">
          {/* MOBILE position */}
          <div className="flex md:hidden">
            <SocialIcons />
          </div>
          <div className="mb-8 mt-5 md:mr-18 md:mb-0">
            <div className="font-Poppins text-sm-p md:text-md-p lg:text-lg-p text-ui-grey mb-4">
              E-mail
            </div>
            <a
              className="font-Poppins font-medium text-sm-links-md md:text-md-links-md lg:text-lg-links-md text-ui-white hover:underline"
              href={`mailto:${email}`}
              target="blank"
            >
              {email}
            </a>
          </div>
          <div className="mb-8 md:mr-18 md:mb-0">
            <div className="font-Poppins text-sm-p md:text-md-p lg:text-lg-p text-ui-grey mb-4">
              {t('Phone')}
            </div>
            <a
              className="font-Poppins font-medium text-sm-links-md md:text-md-links-md lg:text-lg-links-md text-ui-white hover:underline"
              href={phoneLink}
              target="blank"
            >
              {phoneText}
            </a>
          </div>
          <div className="mb-8 md:mr-18 md:mb-0">
            <div className="font-Poppins text-sm-p md:text-md-p lg:text-lg-p text-ui-grey mb-4">
              {t('We`re here')}
            </div>
            <a
              className="font-Poppins font-medium text-sm-links-md md:text-md-links-md lg:text-lg-links-md text-ui-white hover:underline"
              href={addressLink}
              target="blank"
            >
              {t(addressText)}
            </a>
          </div>
        </div>
        <div>
          {/* DESKTOP position */}
          <div className="hidden md:flex h-full items-center">
            <SocialIcons />
          </div>
        </div>
      </div>
      <GoogleMap />
    </div>
  )
}

export default Contacts

import classNames from 'classnames'
import { Dot } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useContext, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ROHOST } from '../../constants/common'
import { ModalContext } from '../mainPage/ServiceModal/ServiceModal.context'

const Footer = () => {
  const { t } = useTranslation('common')
  const [isRo, setIsRo] = useState(false)

  useEffect(() => {
    if (window.location.hostname === ROHOST) {
      setIsRo(true)
    }
  }, [])

  const phoneText = isRo ? '+40 (746) 061 722' : '+373 (68) 356 821'
  const phoneLink = isRo ? 'tel:+40746061722' : 'tel:+37368356821'
  const email = isRo ? 'office@liradigital.ro' : 'office@lira.md'
  const facebookLink = 'https://www.facebook.com/LiraDigitalAgency/'
  const instagramLink = 'https://www.instagram.com/liradigital_agency/'
  const linkedinLink = 'https://www.linkedin.com/company/lira-digital-agency/'

  const {
    state: { show },
  } = useContext(ModalContext)

  return (
    <footer>
      <div
        className={classNames(
          'mx-auto py-32 md:py-36 w-full bg-ui-black px-container-sm md:px-container-md lg:px-container-lg',
          `${show ? 'filter brightness-50' : ''} transform-all duration-500`,
        )}
      >
        <div className="w-full lg:max-w-792px mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full">
            <h2 className="font-TangoSans font-bold text-ui-white text-sm-h2-tangosans md:text-md-h2-tangosans lg:text-lg-h2-tangosans">
              {t("Hello. Let's talk.")}
            </h2>
            <Link
              href="/project-request"
              className="px-1.5 py-1 flex flex-row justify-start items-center rounded group hover:bg-ui-peach hover:bg-opacity-20 transition-colors duration-300 mt-7 md:mt-0"
            >
              <div className="font-Poppins text-md-links-md lg:text-lg-links-md text-ui-peach font-medium mr-2 group-hover:mr-3 transition-all duration-300">
                {t('Project request')}
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-ui-peach group-hover:-mr-1 transition-all duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
          <div
            id="links"
            className="flex flex-col mt-12 font-Poppins font-medium text-sm-links-md md:text-md-links-md lg:text-lg-links-md text-ui-grey"
          >
            {/* Phone stays alone */}
            <div id="phone-link">
              <Link
                href={phoneLink}
                className="p-1 hover:text-ui-white hover:underline hover:bg-ui-black75 rounded transition-all duration-300"
              >
                {phoneText}
              </Link>
            </div>

            {/* Row: email on left / social icons on right (desktop) */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between md:mt-5">
              <div id="email-link" className="mt-4 md:mt-0">
                <Link
                  href={`mailto:${email}`}
                  className="p-1 hover:text-ui-white hover:underline hover:bg-ui-black75 rounded transition-all duration-300"
                >
                  {email}
                </Link>
              </div>

              <div
                id="social-links"
                className="flex gap-5 my-5 ml-3 md:ml-0 md:my-0 md:mr-12 text-sm-h2-poppins md:text-lg-h4-poppins"
              >
                <Link
                  href={facebookLink}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Image
                    src="/footer/Facebook.svg"
                    alt="Facebook"
                    width={0}
                    height={0}
                    className="h-6 w-auto"
                  />
                </Link>
                <Link
                  href={instagramLink}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Image
                    src="/footer/Instagram.svg"
                    alt="Instagram"
                    width={0}
                    height={0}
                    className="h-6 w-auto"
                  />
                </Link>
                <Link
                  href={linkedinLink}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Image
                    src="/footer/Linkedin.svg"
                    alt="Linkedin"
                    width={0}
                    height={0}
                    className="h-6 w-auto"
                  />
                </Link>
              </div>
            </div>

            {/* Mobile-only policy links */}
            <Link
              href="/cookie-policy"
              className="visible md:invisible mt-4 mb-2"
            >
              Cookie Policy
            </Link>
            <Link href="/privacy-policy" className="visible md:invisible">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-3 font-Poppins text-ui-darkGrey text-copyright py-4 w-full text-center bg-ui-black">
        <Link href="/cookie-policy" className="invisible md:visible">
          Cookie Policy
        </Link>
        <Dot className="w-3 h-3 text-ui-grey invisible md:visible" />
        <p className="w-full md:w-auto">
          All rights reserved 2025 © Lira Digital
        </p>
        <Dot className="w-3 h-3 text-ui-grey invisible md:visible" />
        <Link href="/privacy-policy" className="invisible md:visible">
          Privacy Policy
        </Link>
      </div>
    </footer>
  )
}

export default Footer

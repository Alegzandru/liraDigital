import classNames from 'classnames'
import Image from 'next/image'
import styles from './Header.module.scss'
import Link from 'next/link'
import { useContext, useEffect } from 'react'
import { ModalContext } from '../mainPage/ServiceModal/ServiceModal.context'
import ServiceModal from '../mainPage/ServiceModal/ServiceModal'
import { useRouter } from 'next/router'
import { routes, SIZES } from '../../constants/common'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

const Header = () => {
  const router = useRouter()

  const [top, setTop] = useState(true)
  const [mobileOpen, setMobileOpen] = useState(false)

  const {t} = useTranslation('common')

  const {
    state: { show },
  } = useContext(ModalContext)

  useEffect(() => {
    const onScrollHandler = () => {
      setTop(window.pageYOffset < 100)
    }

    const onResizeHandler = () => {
      if(window.innerWidth >= SIZES.md){
        setMobileOpen(true)
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
    const handleComplete = () => {
      if(window.innerWidth < SIZES.md) {
        setMobileOpen(false)
      }
    }

    router.events.on('routeChangeComplete', handleComplete)

    return () => {
      router.events.off('routeChangeComplete', handleComplete)
    }
  }, [router.locale])

  return(
    <div>
      <header className={classNames(`w-full md:h-18 rounded fixed ${show ? '-top-18' : 'top-0'} z-50 font-Poppins transition-all duration-500`,
        top ? mobileOpen ? styles.headerBgMobile : '' : styles.header)}>
        <div className="px-container-sm md:px-container-md lg:px-container-lg h-full flex flex-col md:flex-row justify-between items-center">
          <div className="w-full md:w-auto flex flex-row justify-between items-center h-16">
            <Link href="/">
              <a>
                <Image
                  src="/branding/logoLira.svg"
                  height={40}
                  width={102}
                  alt="Logo Lira Digital"
                />
              </a>
            </Link>
            <button className="md:hidden flex flex-row justify-between items-center" onClick={() => setMobileOpen(!mobileOpen)}>
              <div className={styles.header_hamburgerBox}>
                <div className={mobileOpen ? styles.header_hamburgerInner_active : styles.header_hamburgerInner}/>
              </div>
            </button>
          </div>
          <div className={classNames('w-full md:w-auto overflow-hidden', mobileOpen ? styles.header_expanding : styles.header_narrowing)}>
            <ul className={classNames('flex flex-col md:flex-row justify-start md:justify-end items-start md:items-center w-full md:w-auto pt-6 pb-12 md:py-0')}>
              {routes.map((route, index) =>
                (
                  <Link href={route.link} key={index}>
                    <a>
                      <li key={index} className={classNames(
                        'px-2 py-2.5 ml-6 lg:ml-10 rounded md:hover:bg-ui-black90 transition duration-300 group mb-6 md:mb-0',
                        router.pathname === route.link ? 'md:bg-ui-black90' : '')}
                      >
                        <div className={classNames(
                          'h-5 text-lg-links-sm font-medium text-ui-grey transition duration-300',
                          router.pathname === route.link ? 'text-ui-peach' : 'group-hover:text-ui-white')}
                        >
                          {t(route.name)}
                        </div>
                      </li>
                    </a>
                  </Link>
                )
              )}
            </ul>
          </div>
        </div>
      </header>
      <ServiceModal/>
    </div>
  )
}

export default Header

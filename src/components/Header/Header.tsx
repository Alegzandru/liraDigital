import classNames from 'classnames'
import Image from 'next/image'
import styles from './Header.module.scss'
import Link from 'next/link'
import { useContext, useEffect } from 'react'
import { ModalContext } from '../mainPage/ServiceModal/ServiceModal.context'
import ServiceModal from '../mainPage/ServiceModal/ServiceModal'
import { useRouter } from 'next/router'
import { routes } from '../../constants/common'
import { useState } from 'react'

const Header = () => {
  const router = useRouter()

  const [top, setTop] = useState(true)

  const {
    state: { show },
  } = useContext(ModalContext)

  useEffect(() => {
    const onScrollHandler = () => {
      setTop(window.pageYOffset < 100)
    }

    onScrollHandler()
    window.addEventListener('scroll', onScrollHandler)

    return () => window.removeEventListener('scroll', onScrollHandler)
  }, [])

  return(
    <div>
      <div className={classNames(`w-full h-16 md:h-18 rounded fixed ${show ? '-top-18' : 'top-0'} z-50 font-Poppins transition-all duration-500`, top ? '' : styles.header)}>
        <div className="px-container-sm md:px-container-md lg:px-container-lg h-full flex flex-row justify-between items-center">
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
          <ul className="hidden md:flex flex-row justify-end items-center">
            {routes.map((route, index) =>
              (
                <Link href={route.link} key={index}>
                  <a>
                    <li key={index} className={`${router.pathname === route.link ? 'bg-ui-black90' : ''} px-2 py-2.5 ml-6 lg:ml-10 rounded hover:bg-ui-black90 transition duration-300 group`}>
                      <div className={`${router.pathname === route.link ? 'text-ui-peach' : 'group-hover:text-ui-white'} h-5 text-lg-links-sm font-medium text-ui-grey transition duration-300`}>
                        {route.name}
                      </div>
                    </li>
                  </a>
                </Link>
              )
            )}
          </ul>
          <button className="md:hidden flex flex-row justify-between items-center">
            <Image
              src="/ui/hamburgerLira.svg"
              height={32}
              width={32}
              alt="Hamburger icon"
            />
          </button>
        </div>
      </div>
      <ServiceModal/>
    </div>
  )
}

export default Header

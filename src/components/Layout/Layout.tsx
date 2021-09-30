import classNames from 'classnames'
import { useRouter } from 'next/router'
import { PropsWithChildren, useContext, useEffect } from 'react'
import { LANGUAGES } from '../../constants/common'

import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import { ModalContext } from '../mainPage/ServiceModal/ServiceModal.context'
import {MONTSERRAT} from '../../constants/common'

type Props = PropsWithChildren<unknown>

const Layout = ({ children }: Props) =>{
  const {
    state: { show },
  } = useContext(ModalContext)

  const router = useRouter()
  const isRu = router.locale === LANGUAGES.ru

  useEffect(() => {
    const handleRouteChange = () => {
      if(isRu){
        const allElems = Array.from(document.querySelectorAll('*') as NodeListOf<HTMLElement>)
        allElems.forEach(function(userItem) {
          userItem.style.fontFamily = MONTSERRAT
        })
      }
    }

    handleRouteChange()

    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [])

  return(
    <div>
      <div>
        <Header />
        <main className={classNames('transform-all duration-500', show ? 'filter brightness-50' : '')}>
          {children}
        </main>
        <Footer/>
      </div>
    </div>
  )
}

export default Layout

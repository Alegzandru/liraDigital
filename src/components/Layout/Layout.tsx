import { PropsWithChildren, useContext } from 'react'

import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import { ModalContext } from '../mainPage/ServiceModal/ServiceModal.context'

type Props = PropsWithChildren<unknown>

const Layout = ({ children }: Props) =>{
  const {
    state: { show },
  } = useContext(ModalContext)

  return(
    <div>
      <div>
        <Header />
        <main className={`${show ? 'filter brightness-50' : ''} transform-all duration-500`}>
          {children}
        </main>
        <footer className={`${show ? 'filter brightness-50' : ''} transform-all duration-500`}>
          <Footer/>
        </footer>
      </div>
    </div>
  )
}

export default Layout

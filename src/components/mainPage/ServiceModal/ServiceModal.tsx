import classNames from 'classnames'
import { useState } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { ModalContext } from './ServiceModal.context'
import styles from './ServiceModal.module.scss'
import { SIZES } from '../../../constants/common'
import Image from 'next/image'
import { ClientList } from '../Clients/ClientList'

const ServiceModal = () => {
  const [maxPhotos, setMaxPhotos] = useState(2)

  const {
    state: { show, service },
    actions: { closeModal },
  } = useContext(ModalContext)

  const [showDelayed, setShowDelayed] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setShowDelayed(show)
    }, show ? 0 : 450)
  }, [show])

  useEffect(() => {
    const onResizeHandler = () => {
      if(window.innerWidth <= SIZES.md){
        setMaxPhotos(2)
      } else if(window.innerWidth <= SIZES.lg){
        setMaxPhotos(3)
      } else if(window.innerWidth <= SIZES.xl){
        setMaxPhotos(5)
      } else{
        setMaxPhotos(8)
      }
    }

    onResizeHandler()
    window.addEventListener('resize', onResizeHandler)
    return () => {
      window.removeEventListener('resize', onResizeHandler)
    }
  }, [])

  return(
    <div className={classNames(styles.serviceModal)}>
      {showDelayed &&
        <div className={classNames('fixed bg-ui-black80 top-0 z-40 inset-0 md:inset-8 lg:inset-x-16 lg:inset-y-10 mx-auto rounded overflow-y-auto',
          show ? styles.serviceModal_fadeUp : styles.serviceModal_fadeDown)}>
          <button
            className={classNames('bg-ui-black70 hover:bg-ui-pink hover:bg-opacity-20 rounded h-8 w-8',
              'fixed top-6 md:top-16 lg:top-22 right-8 md:right-16 lg:right-30 transition duration-300 flex flex-row justify-center items-center z-40')}
            onClick={() => closeModal()}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-ui-pink" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="w-full max-w-1200px relative mx-auto px-4 py-12 md:py-20 md:px-8 lg:px-0">
            <div className="relative mb-14 md:mb-8 lg:mb-16 w-full h-200px md:h-424px md:w-auto mx-auto">
              <Image
                src={service.photo}
                alt={service.title}
                layout="fill"
                objectFit="contain"
              />
            </div>
            <h2 className={classNames('font-Poppins font-bold text-sm-h2-poppins md:text-md-h2-poppins lg:text-lg-h2-poppins mb-6 md:mb-8 lg:mb-16', styles.serviceModal_headline)}>
              {service.title}
            </h2>
            <div className="text-sm-p md:text-md-p lg:text-lg-p text-ui-grey font-Poppins w-full">
              {service.texts && service.texts.map((text, index) =>
                (<div className="mb-8" key={index} dangerouslySetInnerHTML={{__html: text}}>
                </div>)
              )}
            </div>
          </div>
          {
            service.clients.length !== 0 &&
            <div className="w-full overflow-hidden py-18 md:py-28 lg:py-30 bg-ui-black90">
              <div className="w-full px-container-sm md:px-container-md lg:px-container-lg mb-7">
                <h4 className="w-full text-center text-ui-white font-Poppins font-bold text-md-h4-poppins lg:text-md-h3-poppins">
                  We worked with them on this
                </h4>
              </div>
              <div className={classNames(`flex flex-row ${service.clients.length > maxPhotos ? 'justify-start' : 'justify-center'} items-center`, service.clients.length > maxPhotos ? styles.serviceModal_scroller : '')}>
                {/* {service.clients.map(client)}
                {service.clients.length > maxPhotos ? service.clients.map(client) : ''} */}
                <ClientList clients={service.clients}/>
                {service.clients.length > maxPhotos ? <ClientList clients={service.clients}/> : ''}
              </div>
            </div>
          }
        </div>
      }
    </div>
  )
}

export default ServiceModal

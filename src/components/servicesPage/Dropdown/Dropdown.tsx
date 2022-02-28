import classNames from 'classnames'
import styles from './Dropdown.module.scss'
import ClosedArrows from './closedArrows'
import {useState} from 'react'
import OpenArrows from './openArrows'
import Image from 'next/image'
import { Content, SERVICE } from '../../../constants/services'
import { useTranslation } from 'next-i18next'

const returnElement = (type: string, texts: string[]) => {
  switch(type){
    case 'p' :
      return texts.map((text: string, index: number) =>
        (<p className="text-ui-grey font-Poppins mb-10" key={index}>
          {text}
        </p>)
      )
    case 'pbold' :
      return texts.map((text: string, index: number) =>
        (<p className="text-ui-grey font-Poppins font-bold mb-10" key={index}>
          {text}
        </p>)
      )
    case 'h1' :
      return texts.map((text: string, index: number) => (
        <p className="text-ui-peach font-Poppins font-bold mb-4" key={index}>
          {text}
        </p>
      ))
    case 'list' :
      return (
        <ul className="text-ui-grey font-Poppins list-disc list-inside pl-2">
          {texts.map((text: string, index: number) => (
            <li key={index} dangerouslySetInnerHTML={{__html: text}}>
            </li>
          ))}
        </ul>
      )
  }
}

const Dropdown = ({name, description, img, content, section, currentSection}: SERVICE) => {

  const {t} = useTranslation('services')
  const [open, setOpen] = useState(currentSection === section)

  return (
    <div className="w-full">
      <div
        className="w-full pl-4 pr-2 py-7 md:py-14 flex flex-row justify-between items-center group cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <div className="w-full font-Poppins">
          <h4 className={classNames(styles.dropdown_gradient, 'text-sm-h4-poppins md:text-lg-h4-poppins font-bold mb-4')}>
            {t(name)}
          </h4>
          <p className="font-medium text-ui-grey text-sm-links-md md:text-lg-links-md">
            {t(description)}
          </p>
        </div>
        <div className="h-12 w-12 md:h-15 md:w-15 rounded-md md:rounded-lg bg-ui-black80 group-hover:bg-ui-black70 transition-all duration-300 flex flex-col justify-center items-center">
          <div className="text-ui-darkGrey group-hover:text-ui-peach transition-all duration-300">
            {
              open ?
                <OpenArrows/>
                :
                <ClosedArrows/>
            }
          </div>
        </div>
      </div>
      <div className={classNames('w-full px-4 flex flex-col md:flex-row justify-between items-start pb-16', open ? styles.dropdown_open : styles.dropdown_closed)}>
        <div className="w-full h-256px md:w-480px md:h-516px relative mr-12 mb-10 md:mb-0">
          <Image
            src={img}
            layout="fill"
            objectFit="contain"
            alt="social media"
          />
        </div>
        <div className={classNames('w-full transition-all duration-300 text-sm-p2 md:text-md-p lg:text-lg-p2')}>
          {
            content.map((element: Content) => (
              returnElement(element.type, element.texts.map((text) => t(text)))
            ))
          }
        </div>
      </div>
      <div className="h-px bg-ui-darkGrey w-full"></div>
    </div>
  )
}

export default Dropdown

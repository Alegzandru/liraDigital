import classNames from 'classnames'
import Link from 'next/link'
import { useState } from 'react'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import { SIZES } from '../../../../constants/common'
import { WEBSITES } from '../../../../constants/projects'
import Card from './Card'
import styles from './Projects.module.scss'

const Projects = () => {
  const [imageSizes, setImageSizes] = useState({height: 200, width: 316})
  const [slide, setSlide] = useState(0)

  const {t} = useTranslation('mainPage')

  const changeSlide = (direction: 'left' | 'right') => {
    if(direction === 'left'){
      setSlide(slide === 0 ? WEBSITES.length - 1 : slide-1)
    } else{
      setSlide(slide === WEBSITES.length - 1 ? 0 : slide+1)
    }
  }

  useEffect(() => {
    const onResizeHandler = () => {
      setImageSizes(window.innerWidth >= SIZES.md ? {height: 332, width: 578} : {height: 200, width: 316})
    }

    onResizeHandler()
    window.addEventListener('resize', onResizeHandler)
    return () => {
      window.removeEventListener('resize', onResizeHandler)
    }
  }, [])

  return(
    <div className="w-full pb-18 md:pb-238px lg:pb-300px overflow-hidden">
      <h2 className={classNames('px-container-sm md:px-container-md lg:px-container-lg overflow-hidden w-full md:text-center',
        'lg:text-left font-TangoSans font-bold text-sm-h2-tangosans md:text-md-h2-tangosans lg:text-lg-h2-tangosans mb-4 md:mb-5 lg:mb-14',
        styles.projects_outlineText)}
      >
        {t('We crafted these')}
      </h2>
      <div className={classNames('w-full flex flex-row justify-start items-center h-240px md:h-372px overflow-x-scroll md:overflow-x-visible md:ml-container-md lg:ml-container-lg px-6 md:px-0',
        'md:ml-container-md lg:ml-container-lg', styles.projects_hideScrollbar)}>
        {
          WEBSITES.map((project, index) =>
            (<div key={index} className="h-full w-full">
              <Card
                height={imageSizes.height} width={imageSizes.width}
                link={project.link}
                img1={project.img1}
                img2={project.img2}
                name={project.name}
                shadow={project.shadow}
                border={project.border}
                staticSlide={index}
                dynamicSlide={slide}
              />
            </div>)
          )
        }
      </div>
      <div className="px-container-sm md:px-container-md lg:px-container-lg hidden md:flex h-240px md:h-372px -mt-240px md:-mt-372px w-full flex-row justify-between items-center mb-14 md:mb-20">
        <button
          className={classNames(`${slide !== 0 ? 'opacity-100' : 'opacity-0'} w-12 h-10 md:w-20 md:h-16 bg-ui-dark flex flex-row justify-center items-center rounded-r-lg`,
            'bg-opacity-40 hover:bg-opacity-100 transition duration-300 relative z-20 group', slide !== 0 ? styles.projects_movingButtonLeft : ''
          )}>
          <svg xmlns="http://www.w3.org/2000/svg" onClick={() => slide !== 0 ? changeSlide('left') : ''}
            className="h-10 w-10 md:h-16 md:w-16 text-ui-white group-hover:text-ui-peach transition duration-300 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
        </button>
        <button
          className={classNames(`${slide !== WEBSITES.length - 1 ? 'opacity-100' : 'opacity-0'} w-12 h-10 md:w-20 md:h-16 bg-ui-dark flex flex-row justify-center items-center rounded-l-lg`,
            'bg-opacity-40 hover:bg-opacity-100 transition duration-300 relative z-20 group', slide !== WEBSITES.length ? styles.projects_movingButtonRight : ''
          )}>
          <svg xmlns="http://www.w3.org/2000/svg" onClick={() => changeSlide('right')}
            className="h-10 w-10 md:h-16 md:w-16 text-ui-white group-hover:text-ui-peach transition duration-300 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>
      <div className="w-full text-center md:text-left px-container-sm md:px-container-md lg:px-container-lg overflow-hidden mt-14 md:mt-0">
        <button className={classNames(styles.projects_button, 'rounded')}>
          <div className={classNames('h-12 md:h-15 w-full relative z-0 transition duration-300 rounded', styles.projects_button_Bg)}>
          </div>
          <Link href="/projects">
            <a>
              <div className={classNames('h-12 md:h-15 flex flex-row justify-center items-center px-14 text-ui-white text-sm-button-md md:text-md-button-md lg:text-lg-button-md font-bold font-Poppins',
                '-mt-12 md:-mt-15 relative z-10')}>
                {t('See our work')}
              </div>
            </a>
          </Link>
        </button>
      </div>
    </div>
  )
}

export default Projects

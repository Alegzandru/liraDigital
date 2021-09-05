import classNames from 'classnames'
import { useState } from 'react'
import { useEffect } from 'react'
import { SIZES, SIZE_NAMES } from '../../../constants/common'
import { PROJECT_TYPES } from '../../../constants/projects'
import { getColSpan } from '../../../utils/grid'
import styles from './AllProjects.module.scss'
import Image from 'next/image'
import { getActiveProjects } from '../../../utils/projects'
import { ProjectType } from '../../../types'

const AllProjects = () => {
  const [screenSize, setScreenSize] = useState(SIZE_NAMES.sm)
  const [activeTypes, setActiveTypes] = useState(['All Projects'])

  const projectType = ({name}: ProjectType, index: number) => (
    <li
      key={index} className={`${activeTypes.includes(name) ? 'bg-ui-black80' : 'hover:bg-ui-black80'} px-2 py-2.5 mr-4 lg:ml-10 rounded transition duration-300 group cursor-pointer`}
      onClick={() => {
        if(activeTypes.includes(name) && name !== 'All Projects'){
          const newArray = activeTypes.filter((activeType) => activeType !== name)
          if(newArray.length === 0){
            setActiveTypes(['All Projects'])
          } else{
            setActiveTypes([...newArray])
          }
        } else if(!activeTypes.includes(name)){
          if(name === 'All Projects'){
            setActiveTypes(['All Projects'])
          } else if(activeTypes.includes('All Projects')){
            const newArray = activeTypes.filter((activeType) => activeType !== 'All Projects')
            setActiveTypes([...newArray, name])
          } else{
            setActiveTypes([...activeTypes, name])
          }
        }
      }}
    >
      <pre className={`${activeTypes.includes(name) ? 'text-ui-peach' : 'text-ui-grey group-hover:text-ui-white '} font-Poppins h-5 text-lg-links-sm font-medium transition duration-300`}>
        {name}
      </pre>
    </li>
  )

  useEffect(() => {
    const onResizeHandler = () => {
      if(window.innerWidth < SIZES.md){
        setScreenSize('sm')
      } else if(window.innerWidth < SIZES.lg){
        setScreenSize('md')
      } else {
        setScreenSize('lg')
      }
    }

    onResizeHandler()
    window.addEventListener('resize', onResizeHandler)
    return () => {
      window.removeEventListener('resize', onResizeHandler)
    }
  }, [])

  return(
    <div>
      <div className={classNames('flex flex-row justify-center items-center h-424px', styles.allprojects_upper)}>
        <h1 className="text-sm-h1-tangosans md:text-md-h1-tangosans lg:text-lg-h1-tangosans font-TangoSans font-bold text-center w-full text-ui-white">
        Our projects
        </h1>
      </div>
      <div className="w-full bg-ui-black90 px-container-sm md:px-container-md lg:px-container-lg pt-10 md:pt-12 pb-40">
        <div className="w-full pb-28">
          <ul className={classNames('w-full flex flex-row justify-start md:justify-center items-start flex-nowrap md:flex-wrap mb-4 md:mb-0 overflow-x-scroll',
            styles.allprojects_noScrollbar)}>
            {PROJECT_TYPES.map(projectType)}
          </ul>
          <div className="flex flex-row justify-end items-center md:hidden">
            <div className="text-ui-darkGrey text-sm-links-sm font-Poppins">
            Scroll for more
            </div>
            <svg xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-ui-darkGrey" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
        <div className="w-full grid grid-cols-6 gap-6 grid-flow-row">
          {getActiveProjects(activeTypes, PROJECT_TYPES).map((project: Record<string,string>, index: number) => (
            <div className={classNames('relative h-256px md:h-384px', getColSpan(index, screenSize))} key={index}>
              <div className="w-full h-full relative z-10">
                <Image
                  src="/projects/project3.png"
                  alt="Service 1"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className={classNames('h-full w-full flex flex-col justify-end items-start p-6 relative -mt-256px md:-mt-384px z-20 transition-all duration-300 ', styles.allprojects_cardHover)}>
                <h5 className="text-lg-h5-poppins font-Poppins font-bold text-ui-white mb-1">
                  {project.name}
                </h5>
                <div className="font-Poppins text-sm-p text-ui-peach">
                  Website design
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default AllProjects
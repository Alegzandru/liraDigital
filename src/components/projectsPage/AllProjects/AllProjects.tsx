import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { SIZE_NAMES, SIZES } from '../../../constants/common'
import { ProjectMinified, ProjectType } from '../../../types'
import { getColSpan } from '../../../utils/grid'
import { getActiveProjects } from '../../../utils/projects'
import styles from './AllProjects.module.scss'

const AllProjects = ({
  services,
  projects,
}: {
  services: ProjectType[]
  projects: ProjectMinified[]
}) => {
  const [screenSize, setScreenSize] = useState(SIZE_NAMES.sm)
  const [activeTypes, setActiveTypes] = useState(['All Projects'])

  const activeProjects = activeTypes.includes('All Projects')
    ? projects
    : getActiveProjects(projects, activeTypes)

  const { t } = useTranslation('projects')

  const projectType = ({ name }: ProjectType, index: number) => (
    <li
      key={index}
      className={classNames(
        'px-2 py-2.5 mr-4 lg:ml-10 rounded transition duration-300 group cursor-pointer',
        activeTypes.includes(name) ? 'bg-ui-black80' : 'hover:bg-ui-black80',
      )}
      onClick={() => {
        if (activeTypes.includes(name) && name !== 'All Projects') {
          const newArray = activeTypes.filter(
            (activeType) => activeType !== name,
          )
          if (newArray.length === 0) {
            setActiveTypes(['All Projects'])
          } else {
            setActiveTypes([...newArray])
          }
        } else if (!activeTypes.includes(name)) {
          if (name === 'All Projects') {
            setActiveTypes(['All Projects'])
          } else if (activeTypes.includes('All Projects')) {
            setActiveTypes([name])
          } else {
            setActiveTypes([...activeTypes, name])
          }
        }
      }}
    >
      <pre
        className={classNames(
          'font-Poppins h-5 text-sm-links-md md:text-lg-links-md font-medium transition duration-300',
          activeTypes.includes(name)
            ? 'text-ui-peach'
            : 'text-ui-grey group-hover:text-ui-white',
        )}
      >
        {name}
      </pre>
    </li>
  )

  useEffect(() => {
    const onResizeHandler = () => {
      if (window.innerWidth < SIZES.md) {
        setScreenSize('sm')
      } else if (window.innerWidth < SIZES.lg) {
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

  return (
    <div>
      <div
        className={classNames(
          'bg-ui-black100 flex flex-row justify-center items-center h-424px',
          styles.allprojects_upper,
        )}
      >
        <h1 className="text-sm-h1-tangosans md:text-md-h1-tangosans lg:text-lg-h1-tangosans font-TangoSans font-bold text-center w-full text-ui-white">
          {t('Our projects')}
        </h1>
      </div>
      <div className="w-full bg-ui-black90 px-container-sm md:px-container-md lg:px-container-lg pt-10 md:pt-12 pb-40">
        <div className="w-full pb-28">
          <ul
            className={classNames(
              'w-full flex flex-row justify-start md:justify-center items-start flex-nowrap md:flex-wrap mb-4 md:mb-0 overflow-x-scroll',
              styles.allprojects_noScrollbar,
            )}
          >
            {services.map(projectType)}
          </ul>
          <div className="flex flex-row justify-end items-center md:hidden">
            <div className="text-ui-darkGrey text-sm-links-sm font-Poppins">
              {t('Scroll for more')}
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-ui-darkGrey"
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
          </div>
        </div>
        <div className="w-full grid grid-cols-6 gap-6 grid-flow-row">
          {activeProjects
            .sort((a, b) => {
              if (a.order > b.order) {
                return 1
              }
              if (a.order < b.order) {
                return -1
              }
              return 0
            })
            .map((project: ProjectMinified, index: number) => (
              <div
                className={classNames(
                  'rounded overflow-hidden relative h-256px md:h-384px',
                  getColSpan(index, screenSize),
                )}
                key={index}
              >
                <div className="w-full h-full relative z-10">
                  <Image
                    src={project.main_photo}
                    alt={project.name}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                {project.name === 'Custom' ? (
                  <div
                    className={classNames(
                      'h-full w-full flex flex-col px-4 py-6 relative -mt-256px md:-mt-384px z-20 transition-all duration-300 ',
                      styles.allprojects_cardHover,
                      project.name === 'Custom'
                        ? 'justify-center items-center'
                        : 'justify-end items-start',
                    )}
                  >
                    <h3 className="text-lg-h5-poppins md:text-md-h3-poppins lg:text-lg-h4-poppins font-Poppins font-bold text-ui-white mb-4 text-center">
                      {t('Here could be your project!')}
                    </h3>
                    <Link
                      href="/project-request"
                      className="px-1.5 py-1 flex flex-row justify-start items-center rounded group hover:bg-ui-peach hover:bg-opacity-20 transition-colors duration-300"
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
                ) : (
                  <Link
                    href={
                      project.name === 'Custom'
                        ? project.slug
                        : `/project/${project.slug}`
                    }
                  >
                    <div
                      className={classNames(
                        'h-full w-full flex flex-col p-6 relative -mt-256px md:-mt-384px z-20 transition-all duration-300 ',
                        styles.allprojects_cardHover,
                        project.name === 'Custom'
                          ? 'justify-center items-center'
                          : 'justify-end items-start',
                      )}
                    >
                      <h5 className="text-lg-h5-poppins font-Poppins font-bold text-ui-white mb-1">
                        {project.name}
                      </h5>
                      <div className="font-Poppins text-sm-p text-ui-peach">
                        {project.services.map((service, index2) => (
                          <span key={index2}>
                            {service.name}
                            {project.services.length === 0
                              ? ''
                              : index2 === project.services.length - 1
                                ? ''
                                : ', '}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                )}
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default AllProjects

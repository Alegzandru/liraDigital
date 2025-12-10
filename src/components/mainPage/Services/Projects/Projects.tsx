import classNames from 'classnames'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { SIZES } from '../../../../constants/common'
import { WEBSITES } from '../../../../constants/projects'
import Card from './Card'
import styles from './Projects.module.scss'

const Projects = () => {
  const [imageSizes, setImageSizes] = useState({ height: 200, width: 316 })
  const scrollRef = useRef<HTMLDivElement | null>(null)
  const [isAtStart, setIsAtStart] = useState(true)
  const [isAtEnd, setIsAtEnd] = useState(false)

  const { t } = useTranslation('mainPage')

  // Handle scroll position to enable/disable arrows
  const handleScroll = () => {
    if (!scrollRef.current) {
      return
    }

    const el = scrollRef.current

    const atStart = el.scrollLeft <= 5
    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 5

    setIsAtStart(atStart)
    setIsAtEnd(atEnd)
  }

  useEffect(() => {
    if (!scrollRef.current) {
      return
    }

    const el = scrollRef.current
    el.addEventListener('scroll', handleScroll)

    // initial check
    handleScroll()

    return () => el.removeEventListener('scroll', handleScroll)
  }, [])

  // Scroll with arrows
  const scrollByAmount = (direction: 'left' | 'right') => {
    if (!scrollRef.current) {
      return
    }
    const amount = direction === 'left' ? -400 : 400
    scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' })
  }

  useEffect(() => {
    const onResizeHandler = () => {
      setImageSizes(
        window.innerWidth >= SIZES.md
          ? { height: 332, width: 578 }
          : { height: 200, width: 316 },
      )
    }

    onResizeHandler()
    window.addEventListener('resize', onResizeHandler)
    return () => window.removeEventListener('resize', onResizeHandler)
  }, [])

  return (
    <div className="w-full pb-18 md:pb-166px lg:pb-238px overflow-hidden">
      <h2
        className={classNames(
          'px-container-sm md:px-container-md lg:px-container-lg overflow-hidden w-full md:text-center',
          'lg:text-left font-TangoSans font-bold text-sm-h2-tangosans md:text-md-h2-tangosans lg:text-lg-h2-tangosans mb-4 md:mb-5 lg:mb-14',
          styles.projects_outlineText,
        )}
      >
        {t('We crafted these')}
      </h2>

      {/* --- ARROWS FLOATING OVER THE SCROLL AREA --- */}
      <div className="relative w-full md:block">
        {/* Left Arrow */}
        {!isAtStart && (
          <button
            onClick={() => scrollByAmount('left')}
            className="absolute left-6 top-1/3 -translate-y-1/2 hover:bg-opacity-100 p-2 md:p-3 rounded-r-lg group transition z-20"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="md:h-20 md:w-20 text-ui-white group-hover:text-ui-peach transition"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>
          </button>
        )}

        {/* Right Arrow */}
        {!isAtEnd && (
          <button
            onClick={() => scrollByAmount('right')}
            className="absolute right-6 top-1/3 -translate-y-1/2 p-2 md:p-3 rounded-l-lg group transition z-20"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="md:h-20 md:w-20 text-ui-white group-hover:text-ui-peach transition"
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
          </button>
        )}

        {/* SCROLL CONTAINER */}
        <div
          ref={scrollRef}
          className={classNames(
            'w-full flex flex-row justify-start items-center h-240px md:h-384px px-6 md:px-container-md lg:px-container-lg space-x-6 overflow-x-scroll scroll-smooth',
            styles.projects_hideScrollbar,
          )}
        >
          {WEBSITES.map((project, index) => (
            <div key={index} className="h-full shrink-0">
              <Card
                height={imageSizes.height}
                width={imageSizes.width}
                link={project.link}
                img1={project.img1}
                img2={project.img2}
                name={project.name}
                shadow={project.shadow}
                border={project.border}
              />
            </div>
          ))}
        </div>
      </div>

      {/* BUTTON BELOW */}
      <div className="w-full text-center md:text-left px-container-sm md:px-container-md lg:px-container-lg mt-14">
        <button className={classNames(styles.projects_button, 'rounded')}>
          <div
            className={classNames(
              'h-12 md:h-15 w-full relative z-0 transition duration-300 rounded',
              styles.projects_button_Bg,
            )}
          ></div>
          <Link href="/projects">
            <div
              className={classNames(
                'h-12 md:h-15 flex flex-row justify-center items-center px-14 text-ui-white text-sm-button-md md:text-md-button-md lg:text-lg-button-md font-bold font-Poppins',
                '-mt-12 md:-mt-15 relative z-10',
              )}
            >
              {t('See our work')}
            </div>
          </Link>
        </button>
      </div>
    </div>
  )
}

export default Projects

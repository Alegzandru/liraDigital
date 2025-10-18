import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { SIZES } from '../../../../constants/common'
import styles from './Projects.module.scss'

type Props = {
  height: number
  width: number
  link: string
  img1: string
  img2: string
  name: string
  shadow: string
  border: string
  staticSlide: number
  dynamicSlide: number
}

const generateMargin = ({
  dynamicSlide,
  staticSlide,
}: {
  dynamicSlide: number
  staticSlide: number
}) => {
  switch (dynamicSlide) {
    case 0:
      return 'ml-0'
    case 1:
      if (staticSlide === 0) {
        return ''
      } else if (staticSlide === 1) {
        return styles.projects_move_11
      } else if (staticSlide === 2) {
        return styles.projects_move_12
      }
    case 2:
      if (staticSlide === 0) {
        return ''
      } else if (staticSlide === 1) {
        return styles.projects_move_21
      } else if (staticSlide === 2) {
        return styles.projects_move_22
      }
  }
}

const Card = ({
  height,
  width,
  link,
  img1,
  img2,
  name,
  shadow,
  border,
  dynamicSlide,
  staticSlide,
}: Props) => {
  const [mobile, setMobile] = useState(false)

  useEffect(() => {
    const onResizeHandler = () => {
      setMobile(window.innerWidth < SIZES.md)
    }

    onResizeHandler()
    window.addEventListener('resize', onResizeHandler)
    return () => {
      window.removeEventListener('resize', onResizeHandler)
    }
  }, [])

  return (
    <div
      className={classNames(
        `${generateMargin({
          dynamicSlide,
          staticSlide,
        })} mr-6 h-full transition-all duration-300`,
      )}
    >
      <Link href={`/project/${link}`}>
        <div
          className={classNames(
            'w-316px md:w-578px rounded-xl relative',
            styles.projects_container,
          )}
          style={{
            boxShadow: mobile ? '' : shadow,
            border: `5px solid ${border}`,
            height,
          }}
        >
          <div className={styles.projects_container_photo1}>
            <Image
              src={img1}
              alt={`${name} Website`}
              height={height}
              width={width}
              objectFit="cover"
            />
          </div>
          <div className={styles.projects_container_photo2}>
            <Image
              src={img2}
              alt={`${name} Website`}
              height={height}
              width={width}
              objectFit="cover"
            />
          </div>
        </div>
      </Link>
      <div
        className={`${
          dynamicSlide > staticSlide ? 'hidden' : 'block'
        } text-ui-white font-Poppins mt-4 text-sm-p md:text-md-p lg:text-lg-p ml-8`}
      >
        {name}
      </div>
    </div>
  )
}

export default Card

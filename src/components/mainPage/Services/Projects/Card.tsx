import classNames from 'classnames'
import Image from 'next/image'
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
const Card = ({height, width, link, img1, img2, name, shadow, border, dynamicSlide, staticSlide}: Props) => (
  <div className={classNames(`${dynamicSlide >= staticSlide && staticSlide !== 0? '-ml-316px md:-ml-568px' : 'ml-0'} mr-6 h-full transition-all duration-300`)}>
    <a href={link} target="blank" className="h-full">
      <div
        className={classNames('w-316px h-full md:w-578px rounded-xl relative', styles.projects_container)}
        style={{
          boxShadow: shadow,
          border: `5px solid ${border}`,
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
    </a>
    <div className={`${dynamicSlide > staticSlide ? 'hidden' : 'block'} text-ui-white font-Poppins mt-4 text-sm-p md:text-md-p lg:text-lg-p ml-8`}>
      {name}
    </div>
  </div>
)

export default Card

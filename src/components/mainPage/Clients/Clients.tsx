import classNames from 'classnames'
import Image from 'next/image'
import { CLIENTS } from '../../../constants/clients'
import styles from './Clients.module.scss'

type ClientProps = {
  src: string
  name: string
  link: string
}

export const client = ({ src, name, link }: ClientProps) => (
  <div className="mr-8 md:mr-12">
    <a href={link} className="filter grayscale hover:grayscale-0 transition-all duration-300">
      <Image
        src={src}
        alt={name}
        width={200}
        height={150}
        objectFit="contain"
      />
    </a>
  </div>
)

const Clients = () => (
  <div className="w-full overflow-hidden py-14 md:py-28 lg:py-30 bg-ui-black100">
    <div className="w-full px-container-sm md:px-container-md lg:px-container-lg mb-12 md:mb-18 lg:mb-20">
      <h3 className="w-full text-center text-ui-white font-TangoSans font-bold text-sm-h3-tangosans md:text-md-h3-tangosans lg:text-lg-h3-tangosans mb-5">
        Our beloved clients
      </h3>
      <h5 className={classNames('w-full text-center font-Poppins font-bold text-sm-h5-poppins md:text-md-h5-poppins lg:text-lg-h5-poppins', styles.clients_h5)}>
        We don’t work for people. We work with people.
      </h5>
    </div>
    <div className={classNames('flex flex-row justify-start items-center', styles.clients_scroller)}>
      {CLIENTS.map(client)}
      {CLIENTS.map(client)}
    </div>
  </div>
)

export default Clients

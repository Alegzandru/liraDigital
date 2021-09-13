import classNames from 'classnames'
import WhatWeDo from './WhatWeDo/WhatWeDo'
import styles from './Services.module.scss'
import Projects from './Projects/Projects'

const Services = () => (
  <div className={classNames('bg-ui-black80 px-container-sm md:px-container-md lg:px-container-lg overflow-hidden', styles.services_bg)}>
    <div>
      <WhatWeDo/>
      <Projects/>
    </div>
  </div>
)

export default Services

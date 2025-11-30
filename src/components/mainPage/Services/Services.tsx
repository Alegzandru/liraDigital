import classNames from 'classnames'
import Projects from './Projects/Projects'
import styles from './Services.module.scss'
import WhatWeDo from './WhatWeDo/WhatWeDo'

const Services = () => (
  <div className={classNames('bg-ui-black80', styles.services_bg)}>
    <div>
      <WhatWeDo />
      <Projects />
    </div>
  </div>
)

export default Services

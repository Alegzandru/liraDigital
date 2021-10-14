import classNames from 'classnames'
import WhatWeDo from './WhatWeDo/WhatWeDo'
import styles from './Services.module.scss'
import Projects from './Projects/Projects'

const Services = () => (
  <div className={classNames('bg-ui-black80', styles.services_bg)}>
    <div>
      <WhatWeDo/>
      <Projects/>
    </div>
  </div>
)

export default Services

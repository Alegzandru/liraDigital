import classNames from 'classnames'
import Done from '../projectReqPage/steps/Done'
import styles from '../projectReqPage/ProjectReq.module.scss'

const ThankYou = () => (
  <div className={classNames('pt-32 md:pt-40 pb-36 md:pb-40 lg:pb-200px w-full bg-ui-black90 px-container-sm md:px-container-md lg:px-container-lg', styles.projectReq_bg)}>
    <div className="max-w-1000px mx-auto">
      <div className="w-full md:h-384px">
        <Done/>
      </div>
    </div>
  </div>
)

export default ThankYou

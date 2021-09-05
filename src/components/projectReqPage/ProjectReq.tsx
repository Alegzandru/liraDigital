import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { ProjectReqInputs } from '../../types'
import Step1 from './steps/Step1'
import styles from './ProjectReq.module.scss'
import classNames from 'classnames'
import Step2 from './steps/Step2'
import Step3 from './steps/Step3'
import Step4 from './steps/Step4'

const ProjectReq = () => {
  const [step, setStep] = useState(0)

  const { register, handleSubmit, watch, formState: { errors } } = useForm<ProjectReqInputs>()

  const onSubmit: SubmitHandler<ProjectReqInputs> = () => {
    if(step !== 3) {
      setStep(step+1)
    }
  }

  const showStep = () => {
    switch(step){
      case 0 : return <Step1 register={register} watch={watch} errors={errors}/>
      case 1 : return <Step2 register={register} watch={watch} errors={errors}/>
      case 2 : return <Step3 register={register} errors={errors}/>
      case 3 : return <Step4 register={register} errors={errors}/>
      default : return 'Default return'
    }
  }
  return(
    <div className="pt-32 md:pt-40 pb-36 md:pb-40 lg:pb-200px w-full bg-ui-black100 px-container-sm md:px-container-md lg:px-container-lg">
      <div className="flex flex-row justify-start items-center w-full">
        <div className={`${step >= 0 ? 'bg-ui-peach' : 'bg-ui-black70'} w-1/4 h-1`}/>
        <div className={`${step >= 1 ? 'bg-ui-peach' : 'bg-ui-black70'} w-1/4 h-1`}/>
        <div className={`${step >= 2 ? 'bg-ui-peach' : 'bg-ui-black70'} w-1/4 h-1`}/>
        <div className={`${step >= 3 ? 'bg-ui-peach' : 'bg-ui-black70'} w-1/4 h-1`}/>
      </div>
      <div className="font-Poppins text-ui-darkGrey text-md-p mt-4 mb-10 md:mb-18">
        {`0${step+1}/04`}
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {showStep()}
        <div className="flex flex-row justify-between items-end mt-14 lg:mt-20">
          <div onClick={() => step !== 0 ? setStep(step-1) : null} className={`${step !== 0 ? '' : 'opacity-0'} flex flex-row justify-between items-center px-1 hover:bg-ui-black80 rounded h-7 cursor-pointer`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-ui-peach mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            <div className="text-ui-peach font-Poppins font-bold text-sm-button-md md:text-md-button-md lg:text-lg-button-md">
              Back
            </div>
          </div>
          {
            step === 3 ?
              <button className={classNames(styles.projectReq_button)}>
                <div className={classNames('h-12 md:h-15 w-full relative z-0 transition duration-300 rounded', styles.projectReq_button_Bg)}>
                </div>
                <div className={classNames('h-12 md:h-15 flex flex-row justify-center items-center px-14 text-ui-white text-sm-button-md md:text-md-button-md lg:text-lg-button-md font-bold font-Poppins',
                  '-mt-12 md:-mt-15 relative z-10')}>
                  Send Request
                </div>
              </button>
              :
              <button className={classNames('rounded h-52px group overflow-hidden', styles.projectReq_hoverButtonBg)}>
                <div className={classNames(styles.projectReq_mainButtonBg, 'relative z-0 h-full w-full group-hover:opacity-0 transition-opacity duration-300')}/>
                <div className={classNames('h-full pl-12 pr-6 -mt-52px w-full flex flex-row justify-between items-center relative z-10')}>
                  <div className="font-Poppins text-ui-white text-sm-button-md md:text-md-button-md lg:text-lg-button-md font-bold mr-4 transition-all duration-300">
                    Next step
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-ui-white group-hover:ml-2 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </button>
          }
        </div>
      </form>
    </div>
  )
}

export default ProjectReq

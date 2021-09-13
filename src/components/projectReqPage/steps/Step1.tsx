import { DeepMap, FieldError, RegisterOptions, UseFormRegister, UseFormWatch } from 'react-hook-form'
import { ProjectReqInputs } from '../../../types'
import ChoiceContainer from './ChoiceContainer'

const choices: string[] = [
  'Social Media Content & Trend analysis', 'Brand / Corporate Identity', 'Google Ads & YouTube Ads',
  'Facebook Ads & Sales Funnels', '360° Digital Marketing', 'UI/UX & Product Design',
]

type Props = {
  register: UseFormRegister<ProjectReqInputs>
  watch: UseFormWatch<ProjectReqInputs>
  errors: DeepMap<ProjectReqInputs, FieldError>
}& RegisterOptions

const Step1 = ({register, watch, errors}: Props) => {
  const errorBlock = errors && errors['services'] && <p className="text-ui-error text-sm-p mt-4 font-Poppins font-medium">*{(errors['services'] as any).message}</p>

  return(
    <div className="w-full mx-auto">
      <h1 className="font-Poppins font-bold text-ui-white text-sm-h1-poppins md:text-md-h1-poppins lg:text-lg-h1-poppins mb-4">
        Nice to meet you!
      </h1>
      <p className="font-Poppins font-medium text-ui-darkGrey text-sm-p md:text-md-p lg:text-lg-p mb-8">
        What can we help you with? Multiple selections are possible.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {choices.map((choice: string, index) =>
          (<div key={index}>
            <ChoiceContainer register={register} text={choice} name={'services'} checkboxValue={watch('services')}/>
          </div>))}
      </div>
      {errorBlock}
    </div>
  )
}

export default Step1

import { DeepMap, FieldError, RegisterOptions, UseFormRegister, UseFormWatch } from 'react-hook-form'
import { ProjectReqInputs } from '../../../types'
import ChoiceContainer from './ChoiceContainer'

const choices: string[] = [
  '500 $ - 1500 $', '1500 $ - 3000 $', '3000 $ - 5000 $',
]

type Props = {
  register: UseFormRegister<ProjectReqInputs>
  watch: UseFormWatch<ProjectReqInputs>
  errors: DeepMap<ProjectReqInputs, FieldError>
}& RegisterOptions

const Step2 = ({register, errors, watch}: Props) => {
  const errorBlock = errors && errors['budget'] && <p className="text-ui-error text-sm-p mt-4 font-Poppins font-medium">*{(errors['budget'] as any).message}</p>

  return(
    <div className="w-full mx-auto md:pt-15">
      <h1 className="font-Poppins font-bold text-ui-white text-sm-h1-poppins md:text-md-h1-poppins lg:text-lg-h1-poppins mb-6 md:mb-12 lg:mb-20">
      What is your budget?
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {choices.map((choice: string, index) =>
          (<div key={index}>
            <ChoiceContainer asRadio={true} radioValue={watch('budget')} register={register} text={choice} name={'budget'}/>
          </div>))}
      </div>
      {errorBlock}
    </div>
  )
}

export default Step2

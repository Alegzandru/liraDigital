import { DeepMap, FieldError, RegisterOptions, UseFormRegister, UseFormWatch } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { ProjectReqInputs } from '../../../types'
import { ErrorBlock } from '../../../utils/general'
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

  const {t} = useTranslation('project-request')

  return(
    <div className="w-full mx-auto md:pt-15">
      <h1 className="font-Poppins font-bold text-ui-white text-sm-h1-poppins md:text-md-h1-poppins lg:text-lg-h1-poppins mb-6 md:mb-12 lg:mb-20">
        {t('What is your budget?')}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {choices.map((choice: string, index) =>
          (<div key={index}>
            <ChoiceContainer asRadio={true} radioValue={watch('budget')} register={register} text={choice} name={'budget'}/>
          </div>))}
      </div>
      <ErrorBlock errors={errors} name="budget"/>
    </div>
  )
}

export default Step2

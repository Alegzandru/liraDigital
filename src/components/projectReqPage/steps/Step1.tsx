import { DeepMap, FieldError, RegisterOptions, UseFormRegister, UseFormWatch } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { ProjectReqInputs } from '../../../types'
import { ErrorBlock } from '../../../utils/general'
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
  const {t} = useTranslation('project-request')

  return(
    <div className="w-full mx-auto">
      <h1 className="font-Poppins font-bold text-ui-white text-sm-h1-poppins md:text-md-h1-poppins lg:text-lg-h1-poppins mb-4">
        {t('Nice to meet you!')}
      </h1>
      <p className="font-Poppins font-medium text-ui-darkGrey text-sm-p md:text-md-p lg:text-lg-p mb-8">
        {t('What can we help you with? Multiple selections are possible.')}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {choices.map((choice: string, index) =>
          (<div key={index}>
            <ChoiceContainer register={register} text={choice} name={'services'} checkboxValue={watch('services')}/>
          </div>))}
      </div>
      <ErrorBlock errors={errors} name={'services'}/>
    </div>
  )
}

export default Step1

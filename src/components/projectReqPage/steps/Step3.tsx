import classNames from 'classnames'
import { FieldErrors, RegisterOptions, UseFormRegister } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { VALIDATIONS } from '../../../constants/validations'
import { ProjectReqInputs } from '../../../types'
import { ErrorBlock } from '../../../utils/general'

type Props = {
  register: UseFormRegister<ProjectReqInputs>
  errors: FieldErrors<ProjectReqInputs>
}& RegisterOptions

const Step3 = ({register, errors}: Props) => {

  const {t} = useTranslation('project-request')

  const hasError = errors && errors['description']

  return(
    <div className="w-full mx-auto">
      <h1 className="font-Poppins font-bold text-ui-white text-sm-h1-poppins md:text-md-h1-poppins lg:text-lg-h1-poppins mb-20">
        {t('Tell us about your project')}
      </h1>
      <textarea
        placeholder={t('Ideas, goals, requirements or just whatever')}
        className={classNames('bg-ui-black90 border border-ui-darkGrey p-4 min-h-220px w-full transition-all duration-300',
          'rounded font-Poppins text-ui-white text-sm-p md:text-md-p lg:text-lg-p outline-none',
          hasError? 'border-ui-error placeholder-ui-error' : 'hover:border-ui-grey focus:border-ui-peach focus:placeholder-ui-white')}
        {...register('description', {...VALIDATIONS.description})}
      />
      <ErrorBlock errors={errors} name="description"/>
    </div>
  )
}

export default Step3

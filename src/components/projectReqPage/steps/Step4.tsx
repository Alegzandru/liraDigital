import classNames from 'classnames'
import { FieldErrors, RegisterOptions, UseFormRegister } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { VALIDATIONS } from '../../../constants/validations'
import { ProjectReqInputs } from '../../../types'
import { ErrorBlock } from '../../../utils/general'

type Props = {
  register: UseFormRegister<ProjectReqInputs>
  errors: FieldErrors<ProjectReqInputs>
} & RegisterOptions

const Step4 = ({register, errors}: Props) => {

  const {t} = useTranslation('project-request')

  const hasError = (name: keyof ProjectReqInputs) => errors && errors[name]

  return(
    <div className="w-full mx-auto">
      <h1 className="font-Poppins font-bold text-ui-white text-sm-h1-poppins md:text-md-h1-poppins lg:text-lg-h1-poppins mb-6 md:mb-12 lg:mb-20">
        {t('How can we reach you')}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-16">
        <div>
          <input
            type="text"
            placeholder={t('Full name')}
            className={classNames(
              'bg-ui-black90 border border-ui-darkGrey p-4 w-full rounded font-Poppins text-ui-grey text-sm-p md:text-md-p lg:text-lg-p outline-none transition-all duration-300',
              hasError('name') ? 'border-ui-error placeholder-ui-error' : 'hover:border-ui-grey focus:border-ui-peach focus:text-ui-white'
            )}
            {...register('name',  {...VALIDATIONS.name})}
          />
          <ErrorBlock errors={errors} name="name"/>
        </div>
        <div>
          <input
            type="text"
            placeholder={t('E-mail')}
            className={classNames(
              'bg-ui-black90 border border-ui-darkGrey p-4 w-full rounded font-Poppins text-ui-grey text-sm-p md:text-md-p lg:text-lg-p outline-none transition-all duration-300',
              hasError('email') ? 'border-ui-error placeholder-ui-error' : 'hover:border-ui-grey focus:border-ui-peach focus:text-ui-white'
            )}
            {...register('email', {...VALIDATIONS.email})}
          />
          <ErrorBlock errors={errors} name="email"/>
        </div>
        <div>
          <input
            type="text"
            placeholder={t('Company')}
            className={classNames(
              'bg-ui-black90 border border-ui-darkGrey p-4 w-full rounded font-Poppins text-ui-grey text-sm-p md:text-md-p lg:text-lg-p outline-none transition-all duration-300',
              hasError('company') ? 'border-ui-error placeholder-ui-error' : 'hover:border-ui-grey focus:border-ui-peach focus:text-ui-white'
            )}
            {...register('company', {...VALIDATIONS.company})}
          />
          <ErrorBlock errors={errors} name="company"/>
        </div>
        <div>
          <input
            type="text"
            placeholder={t('Phone number')}
            className={classNames(
              'bg-ui-black90 border border-ui-darkGrey p-4 w-full rounded font-Poppins text-ui-grey text-sm-p md:text-md-p lg:text-lg-p outline-none transition-all duration-300',
              hasError('phone') ? 'border-ui-error placeholder-ui-error' : 'hover:border-ui-grey focus:border-ui-peach focus:text-ui-white'
            )}
            {...register('phone', {...VALIDATIONS.phone})}
          />
          <ErrorBlock errors={errors} name="phone"/>
        </div>
      </div>
    </div>
  )
}
export default Step4

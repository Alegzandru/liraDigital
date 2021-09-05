import classNames from 'classnames'
import { DeepMap, FieldError, RegisterOptions, UseFormRegister } from 'react-hook-form'
import { VALIDATIONS } from '../../../constants/validations'
import { ProjectReqInputs } from '../../../types'

type Props = {
  register: UseFormRegister<ProjectReqInputs>
  errors: DeepMap<ProjectReqInputs, FieldError>
}& RegisterOptions

const Step4 = ({register, errors}: Props) => {
  const hasError = (name: string) => errors && errors[name]

  const errorBlockName = errors && errors['name'] && <p className="text-ui-error text-sm-p mt-4 font-Poppins font-medium">*{(errors['name'] as any).message}</p>
  const errorBlockEmail = errors && errors['email'] && <p className="text-ui-error text-sm-p mt-4 font-Poppins font-medium">*{(errors['email'] as any).message}</p>
  const errorBlockCompany = errors && errors['company'] && <p className="text-ui-error text-sm-p mt-4 font-Poppins font-medium">*{(errors['company'] as any).message}</p>
  const errorBlockField = errors && errors['field'] && <p className="text-ui-error text-sm-p mt-4 font-Poppins font-medium">*{(errors['field'] as any).message}</p>

  return(
    <div className="w-full lg:max-w-1000px mx-auto">
      <h1 className="font-Poppins font-bold text-ui-white text-sm-h1-poppins md:text-md-h1-poppins lg:text-lg-h1-poppins mb-6 md:mb-12 lg:mb-20">
      How can we reach you
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-16">
        <div>
          <input
            type="text"
            placeholder="Full name"
            className={classNames(
              'bg-ui-black90 border border-ui-darkGrey p-4 w-full rounded font-Poppins text-ui-grey text-sm-p md:text-md-p lg:text-lg-p outline-none transition-all duration-300',
              hasError('name') ? 'border-ui-error placeholder-ui-error' : 'hover:border-ui-grey focus:border-ui-peach focus:text-ui-white'
            )}
            {...register('name',  {...VALIDATIONS.name})}
          />
          {errorBlockName}
        </div>
        <div>
          <input
            type="text"
            placeholder="E-mail"
            className={classNames(
              'bg-ui-black90 border border-ui-darkGrey p-4 w-full rounded font-Poppins text-ui-grey text-sm-p md:text-md-p lg:text-lg-p outline-none transition-all duration-300',
              hasError('email') ? 'border-ui-error placeholder-ui-error' : 'hover:border-ui-grey focus:border-ui-peach focus:text-ui-white'
            )}
            {...register('email', {...VALIDATIONS.email})}
          />
          {errorBlockEmail}
        </div>
        <div>
          <input
            type="text"
            placeholder="Company"
            className={classNames(
              'bg-ui-black90 border border-ui-darkGrey p-4 w-full rounded font-Poppins text-ui-grey text-sm-p md:text-md-p lg:text-lg-p outline-none transition-all duration-300',
              hasError('company') ? 'border-ui-error placeholder-ui-error' : 'hover:border-ui-grey focus:border-ui-peach focus:text-ui-white'
            )}
            {...register('company', {...VALIDATIONS.company})}
          />
          {errorBlockCompany}
        </div>
        <div>
          <input
            type="text"
            placeholder="Field of activity"
            className={classNames(
              'bg-ui-black90 border border-ui-darkGrey p-4 w-full rounded font-Poppins text-ui-grey text-sm-p md:text-md-p lg:text-lg-p outline-none transition-all duration-300',
              hasError('field') ? 'border-ui-error placeholder-ui-error' : 'hover:border-ui-grey focus:border-ui-peach focus:text-ui-white'
            )}
            {...register('field', {...VALIDATIONS.field})}
          />
          {errorBlockField}
        </div>
      </div>
    </div>
  )
}
export default Step4

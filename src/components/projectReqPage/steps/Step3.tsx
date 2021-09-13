import classNames from 'classnames'
import { DeepMap, FieldError, RegisterOptions, UseFormRegister } from 'react-hook-form'
import { VALIDATIONS } from '../../../constants/validations'
import { ProjectReqInputs } from '../../../types'

type Props = {
  register: UseFormRegister<ProjectReqInputs>
  errors: DeepMap<ProjectReqInputs, FieldError>
}& RegisterOptions

const Step3 = ({register, errors}: Props) => {
  const hasError = errors && errors['description']
  const errorBlock = hasError && <p className="text-ui-error text-sm-p mt-4 font-Poppins font-medium">*{(errors['description'] as any).message}</p>

  return(
    <div className="w-full mx-auto">
      <h1 className="font-Poppins font-bold text-ui-white text-sm-h1-poppins md:text-md-h1-poppins lg:text-lg-h1-poppins mb-20">
      Tell us about your project
      </h1>
      <textarea
        placeholder="Ideas, goals, requirements or just whatever"
        className={classNames('bg-ui-black90 border border-ui-darkGrey p-4 min-h-220px w-full transition-all duration-300',
          'rounded font-Poppins text-ui-white text-sm-p md:text-md-p lg:text-lg-p outline-none',
          hasError? 'border-ui-error placeholder-ui-error' : 'hover:border-ui-grey focus:border-ui-peach focus:placeholder-ui-white')}
        {...register('description', {...VALIDATIONS.description})}
      />
      {errorBlock}
    </div>
  )
}

export default Step3

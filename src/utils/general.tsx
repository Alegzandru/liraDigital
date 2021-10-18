import { DeepMap, FieldError } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { ProjectReqInputs } from '../types'

export const ErrorBlock = ({errors, name}: {errors: DeepMap<ProjectReqInputs, FieldError>; name: string}) => {
  const {t} = useTranslation('project-request')

  if(errors && errors[name]){
    return(
      <div className="text-ui-error text-sm-p mt-4 font-Poppins font-medium">
      *{t((errors[name] as any).message)}
      </div>
    )
  } else{
    return <p></p>
  }
}

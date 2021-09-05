import classNames from 'classnames'
import { RegisterOptions, UseFormRegister } from 'react-hook-form'
import { VALIDATIONS } from '../../../constants/validations'
import { ProjectReqInputs } from '../../../types'

type Props = {
  text: string
  name: keyof ProjectReqInputs
  register: UseFormRegister<ProjectReqInputs>
  asRadio?: boolean
  radioValue?: string
  checkboxValue?: string[]
}& RegisterOptions

const ChoiceContainer = ({text, name, asRadio, radioValue, checkboxValue, register}: Props) => {

  const isActive = () => asRadio && radioValue === text || checkboxValue && checkboxValue.includes(text)

  return(
    <label
      className={classNames('w-full h-20 md:h-28 flex flex-row justify-between items-center px-4 md:px-6 lg:pl-10 lg:pr-6 rounded group',
        'border hover:border-4 hover:border-ui-black70 hover:bg-ui-black80 transition-all duration-300 cursor-pointer',
        isActive() ? 'border-ui-darkGrey' : 'border-ui-black70')}
    >
      <div className={`font-Poppins ${isActive() ? 'text-ui-white' : 'text-ui-grey'} text-sm-links-sm md:text-md-links-sm lg:text-lg-links-sm transition-colors duration-300`}>
        {text}
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" className={`min-h-8 min-w-8 h-8 w-8 text-ui-peach ml-2.5 group-hover:text-ui-grey transition duration-300 ${isActive() ? '' : 'opacity-0'}`}
        fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      {
        asRadio ?
          <input
            hidden={true}
            type={'radio'}
            value={text}
            {...register(name, {...VALIDATIONS[name]})}
          />
          :
          <input
            hidden={true}
            type={'checkbox'}
            value={text}
            defaultChecked={false}
            {...register(name, {...VALIDATIONS[name]})}
          />
      }
    </label>
  )
}

export default ChoiceContainer

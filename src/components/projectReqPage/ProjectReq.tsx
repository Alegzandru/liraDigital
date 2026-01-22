import classNames from 'classnames'
import { useRouter } from 'next/router'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { VALIDATIONS } from '../../constants/validations'
import { ProjectReqInputs } from '../../types'
import { ErrorBlock } from '../../utils/general'
import styles from './ProjectReq.module.scss'
import ChoiceContainer from './steps/ChoiceContainer'

const ProjectReq = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ProjectReqInputs>()

  const { t } = useTranslation('project-request')

  const router = useRouter()

  const services = [
    'Social Media Content & Trend analysis',
    'Brand / Corporate Identity',
    'Google Ads & YouTube Ads',
    'Facebook Ads & Sales Funnels',
    '360° Digital Marketing',
    'UI/UX & Product Design',
  ]

  const industries = [
    t('industries.e-commerce'),
    t('industries.healthcare'),
    t('industries.hospitality'),
    t('industries.services'),
    t('industries.it'),
    t('industries.other'),
  ]

  // const budgets = ['500 $ - 1500 $', '1500 $ - 3000 $', '3000 $ - 5000 $']

  const hasError = (name: keyof ProjectReqInputs) => errors && errors[name]

  const sendReqButton = () => (
    <button className="w-full md:w-auto h-auto">
      <div
        className={classNames(
          'h-12 md:h-15 w-full relative z-0 transition duration-300 rounded',
          styles.projectReq_button_Bg,
        )}
      ></div>
      <div
        className={classNames(
          'h-12 md:h-15 flex flex-row justify-center items-center md:px-14 text-ui-white text-smallest-p md:text-md-h4-poppins lg:text-lg-p-error font-bold font-Poppin',
          '-mt-12 md:-mt-15 relative z-10',
        )}
      >
        {t('Send Request')}
      </div>
    </button>
  )

  const sendMailBrief = async (data: Record<string, string | string[]>) => {
    try {
      await fetch('/api/sendMail', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          data,
        }),
      })
    } catch (error) {
      return 0
    }
  }

  const onSubmit: SubmitHandler<ProjectReqInputs> = async (data) => {
    await sendMailBrief(data)
    router.push('thank-you')
  }

  return (
    <div
      className={classNames(
        'pt-32 md:pt-40 pb-36 md:pb-40 lg:pb-200px w-full bg-ui-black90 px-container-sm md:px-container-md lg:px-container-lg',
        styles.projectReq_bg,
      )}
    >
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-1000px mx-auto">
        {/* Services Section */}
        <div className="mb-10 md:mb-14 lg:mb-20">
          <h1
            className={classNames(
              'font-Poppins font-bold text-ui-white text-sm-h1-poppins md:text-md-h1-poppins lg:text-lg-h1-poppins mb-4',
              styles.projectReq_title,
            )}
          >
            {t('Nice to meet you!')}
          </h1>
          <h4 className="font-Poppins font-medium text-ui-grey text-sm-h4-poppins md:text-md-h4-poppins lg:text-lg-h4-poppins mb-8">
            {t('subheadline')}
          </h4>
        </div>
        <div className="mb-20 md:mb-28 lg:mb-36">
          <h3
            id="services-section"
            className="font-Poppins font-bold text-ui-white text-sm-h3-poppins md:text-md-h3-poppins lg:text-lg-h3-poppins mb-8"
          >
            {t('What can we help you with? Multiple selections are possible.')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6">
            {services.map((service: string, index) => (
              <div key={index}>
                <ChoiceContainer
                  errors={errors}
                  register={register}
                  text={service}
                  name={'services'}
                  checkboxValue={watch('services')}
                />
              </div>
            ))}
          </div>
          <div className="col-span-full mb-6">
            <textarea
              placeholder={t('other')}
              className={classNames(
                'bg-ui-black90 border border-ui-black70 p-4 h-28 min-h-120px w-full transition-all duration-300 resize-none',
                'rounded font-Poppins text-ui-white text-sm-p md:text-md-p lg:text-lg-p outline-none',
                hasError('other')
                  ? 'border-ui-error'
                  : 'hover:border-ui-darkGrey focus:border-ui-peach focus:placeholder-ui-white',
              )}
              {...register('other')}
            />
          </div>
          <ErrorBlock errors={errors} name={'services'} />
        </div>

        {/* Budget Section
        <div className="mb-20 md:mb-28 lg:mb-36">
          <h2 className="font-Poppins font-bold text-ui-white text-sm-h2-poppins md:text-md-h2-poppins lg:text-lg-h2-poppins mb-6 md:mb-12 lg:mb-20">
            {t('What is your budget?')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {budgets.map((budget: string, index) => (
              <div key={index}>
                <ChoiceContainer
                  errors={errors}
                  asRadio={true}
                  radioValue={watch('budget')}
                  register={register}
                  text={budget}
                  name={'budget'}
                />
              </div>
            ))}
          </div>
          <ErrorBlock errors={errors} name="budget" />
        </div> */}

        {/* About Your Business / Brand Section */}
        <div className="mb-20 md:mb-28 lg:mb-36">
          <h3
            id="business-section"
            className="font-Poppins font-bold text-ui-white text-sm-h3-poppins md:text-md-h3-poppins lg:text-lg-h3-poppins mb-8"
          >
            {t('About Your Business / Brand')}
          </h3>

          {/* Company or Brand Name */}
          <div className="mb-8">
            <input
              type="text"
              placeholder={t('Company or Brand Name')}
              className={classNames(
                'bg-ui-black90 border border-ui-darkGrey p-4 w-full rounded font-Poppins text-ui-grey text-sm-p md:text-md-p lg:text-lg-p outline-none transition-all duration-300',
                hasError('brandName')
                  ? 'border-ui-error placeholder-ui-error'
                  : 'hover:border-ui-grey focus:border-ui-peach focus:text-ui-white',
              )}
              {...register('brandName', { ...VALIDATIONS.brandName })}
            />
            <ErrorBlock errors={errors} name="brandName" />
          </div>

          {/* Industry / Business Type */}
          <div className="mb-8">
            <h3 className="font-Poppins font-medium text-ui-white text-sm-p md:text-md-p lg:text-lg-p mb-4">
              {t('Industry / Business Type')}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {industries.map((industry: string, index) => (
                <div key={index}>
                  <ChoiceContainer
                    errors={errors}
                    asRadio={true}
                    radioValue={watch('industry')}
                    register={register}
                    text={industry}
                    name={'industry'}
                  />
                </div>
              ))}
            </div>
            <ErrorBlock errors={errors} name="industry" />
          </div>

          {/* Website or Social Media Links */}
          <div>
            <h3 className="font-Poppins font-medium text-ui-white text-sm-p md:text-md-p lg:text-lg-p mb-4">
              {t('Social Links')}
            </h3>
            <input
              type="text"
              placeholder={t('Social Links placeholder')}
              className={classNames(
                'bg-ui-black90 border border-ui-darkGrey p-4 w-full rounded font-Poppins text-ui-grey text-sm-p md:text-md-p lg:text-lg-p outline-none transition-all duration-300',
                hasError('website')
                  ? 'border-ui-error placeholder-ui-error'
                  : 'hover:border-ui-grey focus:border-ui-peach focus:text-ui-white',
              )}
              {...register('website')}
            />
            <ErrorBlock errors={errors} name="website" />
          </div>
        </div>

        {/* Description Section */}
        <div className="mb-20 md:mb-28 lg:mb-36">
          <h3
            id="project-section"
            className="font-Poppins font-bold text-ui-white text-sm-h3-poppins md:text-md-h3-poppins lg:text-lg-h3-poppins mb-8"
          >
            {t('Tell us about your project')}
          </h3>
          <textarea
            placeholder={t('Ideas, goals, requirements or just whatever')}
            className={classNames(
              'bg-ui-black90 border border-ui-darkGrey p-4 min-h-220px w-full transition-all duration-300 resize-none',
              'rounded font-Poppins text-ui-white text-sm-p md:text-md-p lg:text-lg-p outline-none',
              hasError('description')
                ? 'border-ui-error placeholder-ui-error'
                : 'hover:border-ui-grey focus:border-ui-peach focus:placeholder-ui-white',
            )}
            {...register('description', { ...VALIDATIONS.description })}
          />
          <ErrorBlock errors={errors} name="description" />
        </div>

        {/* Contact Information Section */}
        <div className="mb-20 md:mb-28 lg:mb-32">
          <h3
            id="contact-section"
            className="font-Poppins font-bold text-ui-white text-sm-h3-poppins md:text-md-h3-poppins lg:text-lg-h3-poppins mb-8"
          >
            {t('How can we reach you')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-16">
            <div>
              <input
                type="text"
                placeholder={t('Full name')}
                className={classNames(
                  'bg-ui-black90 border border-ui-darkGrey p-4 w-full rounded font-Poppins text-ui-grey text-sm-p md:text-md-p lg:text-lg-p outline-none transition-all duration-300',
                  hasError('name')
                    ? 'border-ui-error placeholder-ui-error'
                    : 'hover:border-ui-grey focus:border-ui-peach focus:text-ui-white',
                )}
                {...register('name', { ...VALIDATIONS.name })}
              />
              <ErrorBlock errors={errors} name="name" />
            </div>

            {/* <div>
              <input
                type="text"
                placeholder={t('Company')}
                className={classNames(
                  'bg-ui-black90 border border-ui-darkGrey p-4 w-full rounded font-Poppins text-ui-grey text-sm-p md:text-md-p lg:text-lg-p outline-none transition-all duration-300',
                  hasError('company')
                    ? 'border-ui-error placeholder-ui-error'
                    : 'hover:border-ui-grey focus:border-ui-peach focus:text-ui-white',
                )}
                {...register('company', { ...VALIDATIONS.company })}
              />
              <ErrorBlock errors={errors} name="company" />
            </div> */}
            <div>
              <input
                type="text"
                placeholder={t('Phone number')}
                className={classNames(
                  'bg-ui-black90 border border-ui-darkGrey p-4 w-full rounded font-Poppins text-ui-grey text-sm-p md:text-md-p lg:text-lg-p outline-none transition-all duration-300',
                  hasError('phone')
                    ? 'border-ui-error placeholder-ui-error'
                    : 'hover:border-ui-grey focus:border-ui-peach focus:text-ui-white',
                )}
                {...register('phone', { ...VALIDATIONS.phone })}
              />
              <ErrorBlock errors={errors} name="phone" />
            </div>

            <div className="md:col-span-2">
              <input
                type="text"
                placeholder={t('E-mail')}
                className={classNames(
                  'bg-ui-black90 border border-ui-darkGrey p-4 w-full rounded font-Poppins text-ui-grey text-sm-p md:text-md-p lg:text-lg-p outline-none transition-all duration-300 ',
                  hasError('email')
                    ? 'border-ui-error placeholder-ui-error'
                    : 'hover:border-ui-grey focus:border-ui-peach focus:text-ui-white',
                )}
                {...register('email', { ...VALIDATIONS.email })}
              />
              <ErrorBlock errors={errors} name="email" />
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-center">{sendReqButton()}</div>
      </form>
    </div>
  )
}

export default ProjectReq

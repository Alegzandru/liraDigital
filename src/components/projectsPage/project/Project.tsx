import classNames from 'classnames'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'
import { LANGUAGES } from '../../../constants/common'
import { Project } from '../../../types'
import styles from './Project.module.scss'

const process = (processStr: string, index: number) => (
  processStr &&
  <div className="h-20 flex flex-row justify-start items-center">
    <div className="font-Poppins font-bold p-4 rounded bg-ui-black70 text-md-h4-poppins lg:text-md-h3-poppins">
      <div className={styles.project_gradientText}>
          0{index}
      </div>
    </div>
    <div className="ml-4">
      {processStr}
    </div>
  </div>
)

const result = (resultStr: string) => (
  resultStr &&
    <div className="h-20 flex flex-row justify-start items-center">
      <div className="p-4 w-8 h-8 relative">
        <Image
          layout="fill"
          objectFit="contain"
          src="/projects/check.svg"
          alt="Achievement"
        />
      </div>
      <div className="ml-4">
        {resultStr}
      </div>
    </div>
)

const ProjectComponent = ({
  name,
  name_ro,
  link,
  customer,
  initial_data,
  initial_data_ro,
  aims,
  aims_ro,
  description,
  description_ro,
  photo1_heading,
  photo1_heading_ro,
  photo1_subheading,
  photo1_subheading_ro,
  process1,
  process1_ro,
  process2,
  process2_ro,
  process3,
  process3_ro,
  photo3_heading,
  photo3_heading_ro,
  result1,
  result1_ro,
  result2,
  result2_ro,
  result3,
  result3_ro,
  photo1,
  photo2,
  photo3,
  before_photo,
  after_photo,
  main_photo,
  services,
  tools,
  platforms,
}: Project) => {

  const {t} = useTranslation('projectPage')

  const router = useRouter()
  const isRo = router.locale === LANGUAGES.ro.slug

  return(
    <div>
      <div className="pt-190px md:pt-200px pb-120px md:pb-40 w-full bg-ui-black90 px-container-sm md:px-container-md lg:px-container-lg">
        <h1 className="text-ui-white font-TangoSans text-sm-h1-poppins md:text-md-h1-tangosans lg:text-lg-h1-tangosans mb-10">
          {isRo ? name_ro : name}
        </h1>
        <a
          target="blank"
          href={link}
        >
          <button className="px-1.5 py-1 flex flex-row justify-start items-center rounded group hover:bg-ui-peach hover:bg-opacity-20 transition-colors duration-300 mt-7 md:mt-0 mb-16">
            <div className="font-Poppins text-md-links-md lg:text-lg-links-md text-ui-peach font-medium mr-2 group-hover:mr-3 transition-all duration-300">
              {t('Visit Website')}
            </div>
            <Image
              src="/ui/rightArrow.svg"
              height={20}
              width={60}
              alt="Arrow"
            />
          </button>
        </a>
        {
          main_photo !== '/error' &&
        <div className="w-full relative mb-9 md:mb-28 lg:mb-18">
          {/* eslint-disable-next-line @next/next/no-img-element*/}
          <img
            src={main_photo}
            alt="Mr kebab Project"
            className="rounded-md w-full"
          />
        </div>
        }
        <div className="flex flex-col md:flex-row justify-between items-start">
          {
            customer &&
          <div className="mb-14 md:mb-0">
            <h5 className="font-Poppins text-ui-darkGrey text-sm-h5-poppins md:text-md-h5-poppins lg:text-lg-h5-poppins font-bold py-1 px-2 mb-3">
              {t('Customer')}
            </h5>
            <h4 className="font-Poppins text-ui-white text-sm-h4-poppins md:text-md-h4-poppins lg:text-lg-h4-poppins font-bold py-1 px-2">
              {customer}
            </h4>
          </div>
          }

          <div className="flex flex-col md:flex-row justify-start items-start">
            {
              services && services.length !== 0 &&
            <div className="lg:min-w-384px md:mr-6 mb-14 md:mb-0">
              <h5 className="font-Poppins text-ui-darkGrey text-sm-h5-poppins md:text-md-h5-poppins lg:text-lg-h5-poppins font-bold py-1 px-2 mb-3">
                {t('Services provided')}
              </h5>
              <ul className="font-medium font-Poppins text-sm-links-md md:text-md-links-md lg:text-lg-links-md text-ui-grey">
                {services && services.map((service, index) =>
                  (<li className="list-item py-1 list-disc list-inside px-2" key={index}>
                    {service.name}
                  </li>)
                )}
              </ul>
            </div>
            }

            {
              tools && tools.length !== 0 &&
            <div className="lg:min-w-384px">
              <h5 className="font-Poppins text-ui-darkGrey text-sm-h5-poppins md:text-md-h5-poppins lg:text-lg-h5-poppins font-bold py-1 px-2 mb-3">
                {t('Tools')}
              </h5>
              <ul className="font-medium font-Poppins text-sm-links-md md:text-md-links-md lg:text-lg-links-md text-ui-grey">
                {tools && tools.map((tool, index) =>
                  (<li className="list-item py-1 list-disc list-inside px-2" key={index}>
                    {tool.name}
                  </li>)
                )}
              </ul>
            </div>
            }
          </div>
        </div>
      </div>

      {
        (initial_data || aims || description) &&
      <div className="pt-20 pb-100px md:pt-120px md:pb-32 w-full bg-ui-black80 px-container-sm md:px-container-md lg:px-container-lg flex flex-col-reverse md:flex-row justify-between items-start">
        <div className="w-full md:min-w-384px md:mr-6 lg:mr-30">
          {
            initial_data &&
            <div className="mb-11 md:mb-18">
              <h3 className="font-Poppins font-bold text-ui-peach text-sm-h3-poppins md:text-md-h3-poppins lg:text-lg-h3-poppins px-2 py-1">
                {t('Initial data')} :
              </h3>
              <ul
                className="font-Poppins text-sm-p md:text-md-p lg:text-lg-p text-ui-grey mb-2"
                dangerouslySetInnerHTML={{__html:
                  initial_data && isRo ?
                    initial_data_ro
                      .replace(/\#-/g,'<li style="padding-left: 8px; list-style-type: disc; list-style-position: inside;">')
                      .replace(/\-#/g,'</li>')
                    :
                    initial_data
                      .replace(/\#-/g,'<li style="padding-left: 8px; list-style-type: disc; list-style-position: inside;">')
                      .replace(/\-#/g,'</li>'),
                }}
              />
            </div>
          }
          {
            aims &&
            <div>
              <h3 className="font-Poppins font-bold text-ui-peach text-sm-h3-poppins md:text-md-h3-poppins lg:text-lg-h3-poppins px-2 py-1">
                {t('Aims')} :
              </h3>
              <ul
                className="font-Poppins text-sm-p md:text-md-p lg:text-lg-p text-ui-grey mb-2"
                dangerouslySetInnerHTML={{__html:
                  aims && isRo ?
                    aims_ro
                      .replace(/\#-/g,'<li style="padding-left: 8px; list-style-type: disc; list-style-position: inside;">')
                      .replace(/\-#/g,'</li>')
                    :
                    aims
                      .replace(/\#-/g,'<li style="padding-left: 8px; list-style-type: disc; list-style-position: inside;">')
                      .replace(/\-#/g,'</li>'),
                }}
              >
              </ul>
            </div>
          }
        </div>
        <div
          className="font-Poppins font-medium text-ui-white text-sm-p-spaced md:text-md-p-spaced lg:text-lg-p-spaced mb-22 md:mb-0"
          dangerouslySetInnerHTML={{__html: isRo ? description_ro : description}}
        >
        </div>
      </div>
      }

      {
        (photo1 !== '/error' || photo1_heading || photo1_subheading) &&
      <div className="pt-20 md:pt-30 lg:pt-40 pb-100px md:pb-32 w-full bg-ui-black80 px-container-sm md:px-container-md lg:px-container-lg flex flex-col md:flex-row justify-between items-start">
        {
          photo1 !== '/error' &&
          /* eslint-disable-next-line @next/next/no-img-element*/
          <img src={photo1} className="w-auto md:max-w-450px mdAdaptive:max-w-none lg:min-w-690px md:mr-5 lg:mr-16 mb-15 md:mb-0 rounded-lg" alt="Mr Kebab adaptive design"></img>
        }
        <div>
          <h3 className="font-Poppins font-bold text-ui-peach text-sm-h3-poppins md:text-md-h3-poppins lg:text-lg-h3-poppins px-2 py-1 mb-2">
            {isRo ? photo1_heading_ro : photo1_heading}
          </h3>
          <div className="font-Poppins text-sm-p md:text-md-p lg:text-lg-p text-ui-grey px-2">
            {isRo ? photo1_subheading_ro : photo1_subheading}
          </div>
        </div>
      </div>
      }

      {
        platforms && platforms.length !== 0 &&
        <div className="pt-20 md:pt-30 pb-100px md:pb-32 w-full bg-ui-black75 px-container-sm md:px-container-md lg:px-container-lg">
          <h3 className="font-Poppins font-bold text-ui-white text-sm-h3-poppins md:text-md-h3-poppins lg:text-lg-h3-poppins mb-8 md:mb-10 lg:mb-8">
            {t('Platforms we worked with')} :
          </h3>
          <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 text-sm-links-sm md:text-md-links-sm lg:text-lg-links-sm text-ui-grey">
            {platforms && platforms.map((platform, index) =>
              (<div className="rounded-lg bg-ui-black90 h-20 p-6 flex flex-row justify-start items-center" key={index}>
                <Image
                  height={32}
                  width={32}
                  src={platform.image.url}
                  alt={platform.name}
                />
                <div className="ml-4">
                  {platform.name}
                </div>
              </div>)
            )}
          </div>
        </div>
      }

      {
        photo2 !== '/error' &&
      <div className="pt-20 md:pt-30 pb-100px md:pb-32 w-full bg-ui-black80 px-container-sm md:px-container-md lg:px-container-lg">
        {/* eslint-disable-next-line @next/next/no-img-element*/}
        <img
          src={photo2}
          className="w-full rounded-lg"
          alt="Photo 1"
        />
      </div>
      }

      {
        (process1 || process2 || process3) &&
      <div className="pt-20 md:pt-30 pb-100px md:pb-32 w-full bg-ui-black75 px-container-sm md:px-container-md lg:px-container-lg">
        <h3 className="font-Poppins font-bold text-ui-white text-sm-h3-poppins md:text-md-h3-poppins lg:text-lg-h3-poppins mb-8 md:mb-10 lg:mb-8">
          {t('What has been done')} :
        </h3>
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 text-sm-p2 lg:text-lg-p2 text-ui-grey">
          {process(isRo ? process1_ro : process1, 1)}
          {process(isRo ? process2_ro : process2, 2)}
          {process(isRo ? process3_ro : process3, 3)}
        </div>
      </div>
      }

      {
        (photo3_heading || photo3 !== '/error') &&
      <div className="pt-20 md:pt-30 pb-100px md:pb-32 w-full bg-ui-black80 px-container-sm md:px-container-md lg:px-container-lg">
        <h3 className="font-Poppins font-bold text-ui-white text-sm-h3-poppins md:text-md-h3-poppins lg:text-lg-h3-poppins mb-8">
          {isRo ? photo3_heading_ro : photo3_heading}
        </h3>
        {/* eslint-disable-next-line @next/next/no-img-element*/}
        <img
          src={photo3}
          className="w-full rounded-lg"
          alt="Photo 3"
        />
      </div>
      }

      {
        (result1 || result2 || result3) &&
      <div className="pt-20 md:pt-30 pb-100px md:pb-32 w-full bg-ui-black75 px-container-sm md:px-container-md lg:px-container-lg">
        <h3 className="font-Poppins font-bold text-ui-white text-sm-h3-poppins md:text-md-h3-poppins lg:text-lg-h3-poppins mb-8 md:mb-10 lg:mb-8">
          {t('Result we have achieved')} :
        </h3>
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 text-sm-p2 lg:text-lg-p2 text-ui-grey">
          {result(isRo ? result1_ro : result1)}
          {result(isRo ? result2_ro : result2)}
          {result(isRo ? result3_ro : result3)}
        </div>
      </div>
      }

      {(before_photo !== '/error' && after_photo !== '/error') && <div className="pt-20 md:pt-30 pb-100px md:pb-32 w-full bg-ui-black80 md:px-container-md lg:px-container-lg">
        <div className={classNames('w-full flex flex-row justify-start items-start md:grid grid-cols-2 gap-6 overflow-x-scroll', styles.project_noScrollbar)}>
          <div className="ml-6 md:ml-0">
            <h3 className="font-Poppins font-bold text-ui-white text-sm-h3-poppins md:text-md-h3-poppins lg:text-lg-h3-poppins mb-8">
              {t('Before')} :
            </h3>
            <div className="w-300px h-300px md:w-full md:h-484px lg:h-516px relative">
              <Image
                src={before_photo || '/error'}
                className="w-full rounded-lg"
                alt="Before"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
          <div className="mr-6 md:mr-0">
            <h3 className="font-Poppins font-bold text-ui-white text-sm-h3-poppins md:text-md-h3-poppins lg:text-lg-h3-poppins mb-8">
              {t('After')} :
            </h3>
            <div className="w-300px h-300px md:w-full md:h-484px lg:h-516px relative">
              <Image
                src={after_photo || '/error'}
                className="w-full rounded-lg"
                alt="Before"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </div>
      }
    </div>
  )
}

export default ProjectComponent

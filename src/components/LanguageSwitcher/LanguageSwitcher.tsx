import { useRouter } from 'next/router'
import { LANGUAGES } from '../../constants/common'
import Link from 'next/link'
import { Locale } from '../../types/locale'

const LanguageSwitcher = () => {

  const router = useRouter()
  const locale = router.locale
  const allLang = Object.keys({...LANGUAGES})

  return(
    <div className="rounded overflow-hidden top-10 group font-Montserrat cursor-pointer">
      <div className="px-4 py-2.5 flex flex-row justify-start items-center text-ui-white bg-ui-black90 group-hover:bg-ui-black75 transition-all duration-300">
        <div className="font-medium text-sm-links-md mr-4">
          {LANGUAGES[locale as Locale].name}
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      <div className="max-h-0 group-hover:max-h-40 bg-ui-black75 transition-all duration-300">
        {allLang.filter((lang) => lang !== locale).map((language: string, index: number) =>
          (
            <Link href={router.asPath} locale={language} key={index}>
              <a>
                <div className="w-full font-medium text-sm-links-md px-4 py-2 text-ui-darkGrey" key={index}>
                  {LANGUAGES[language as Locale].name}
                </div>
              </a>
            </Link>
          )
        )}
      </div>
    </div>
  )
}

export default LanguageSwitcher

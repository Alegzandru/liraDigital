import { SizeType } from '../types'

export const API_URL = 'https://lira-digital-backend.herokuapp.com'
export const GOOGLE_MAPS_ID = '31731bd48a92f0fb'
export const GOOGLE_MAPS_KEY = 'AIzaSyDOw10hs_UOMVTqL0kP5O4imgj2ZCoGyjo'

export const MONTSERRAT = '"Montserrat", sans-serif'

export const HERO_WORDS = ['voice', 'vibe', 'vibrance']


export const SIZES = {
  sm : 340,
  md: 640,
  lg: 1280,
  xl: 1920,
}

export const SIZE_NAMES: SizeType= {
  sm: 'sm',
  md: 'md',
  lg: 'lg',
}

export const routes = [
  {
    name: 'About us',
    link: '/',
  },
  {
    name: 'Services',
    link: '/services',
  },
  {
    name: 'Our work',
    link: '/projects',
  },
  {
    name: 'Project request',
    link: '/project-request',
  },
  {
    name:'Contacts',
    link: '/contacts',
  },
]

export const validations = {
  step1 : ['services'],
  step2 : ['budget'],
  step3 : ['description'],
  step4 : ['name', 'email', 'company', 'phone'],
}

export const FONTS = {
  TangoSans: 'font-TangoSans',
  Poppins: 'font-Poppins',
  Montserrat: 'font-Montserrat',
}

export const LANGUAGES = {
  ro : {
    slug: 'ro',
    name: 'Română',
  },
  // ru : {
  //   slug: 'ru',
  //   name: 'Русский',
  // },
  en : {
    slug: 'en',
    name: 'English',
  },
}

// export const LANGUAGES = {
//   ro: 'Română',
//   en: 'English',
//   ru: 'Русский',
// }

export const ROHOST = 'www.liradigital.ro'

import { SizeType } from '../types'

export const API_URL = 'https://lira-digital-backend.herokuapp.com'

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

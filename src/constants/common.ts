import { SizeType } from '../types'

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
    name: 'Our works',
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
  step4 : ['name', 'email', 'company', 'field'],
}

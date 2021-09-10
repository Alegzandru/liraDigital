export type AnyAction = {
  type: string
  payload: Record<string, any>
}

export type Service = {
  photo: string
  title: string
  texts: string[]
  clients: {
    src: string
    name: string
    link: string
  }[]
}

export type SizeType = Record<string, 'sm' | 'md' | 'lg'>

export type ProjectType = {
  name: string
}

export type Project = {
  id: number
  name: string
  link: string
  customer: string
  initial_data: string
  aims: string
  description: string
  photo1_heading: string
  photo1_subheading: string
  process1: string
  process2: string
  process3: string
  photo3_heading: string
  result1: string
  result2: string
  result3: string
  photo1: string
  photo2: string
  photo3: string
  before_photo: string
  after_photo: string
  main_photo: string
  services: {name: string}[]
  tools: {name: string}[]
  platforms: {
    name: string
    image: {url: string}
  }[]
}

export type ProjectMinified = {
  name: string
  services: {name: string}[]
  main_photo: string
  slug: string
}

export type ProjectReqInputs = {
  services: string[]
  budget: string
  description: string
  name: string
  email: string
  company: string
  field: string
}


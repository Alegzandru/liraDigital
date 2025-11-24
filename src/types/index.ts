export type AnyAction = {
  type: string
  payload: Record<string, any>
}

export type Service = {
  photo: string
  mixBlend: string
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
  name_ro: string
  link: string
  customer: string
  customer_ro: string
  initial_data: string
  initial_data_ro: string
  aims: string
  aims_ro: string
  description: string
  description_ro: string
  photo1_heading: string
  photo1_heading_ro: string
  photo1_subheading: string
  photo1_subheading_ro: string
  process1: string
  process1_ro: string
  process2: string
  process2_ro: string
  process3: string
  process3_ro: string
  photo3_heading: string
  photo3_heading_ro: string
  result1: string
  result1_ro: string
  result2: string
  result2_ro: string
  result3: string
  result3_ro: string
  photo1: string
  photo2: string
  photo3: string
  before_photo: string
  after_photo: string
  main_photo: string
  services: { name: string }[]
  tools: { name: string }[]
  platforms: {
    name: string
    image: { url: string }
  }[]
  metatitle: string
  metadescription: string
  metatitle_ro: string
  metadescription_ro: string
}

export type ProjectMinified = {
  name: string
  services: { name: string }[]
  main_photo: string
  slug: string
  order: number
}

export type ProjectReqInputs = {
  services: string[]
  budget: string
  description: string
  name: string
  email: string
  company: string
  phone: string
}


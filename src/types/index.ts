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
  projects: Project[]
}

export type Project = {
  name: string
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

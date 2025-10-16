import { Project, ProjectMinified } from '../types'

export const uniq = (arr: Project[]) => arr.filter((v,i,a)=>a.findIndex((t)=>(t.name===v.name))===i)

export const getActiveProjects = (projects: ProjectMinified[], activeTypes: string[]) =>{
  const activeProjects = projects.filter((project: ProjectMinified) => project.services.some((r)=> activeTypes.includes(r.name)))
  return activeProjects
}

export const getAvailablePhoto = (project: Project, name: string) => {
  const photo = (project as Record<string, any>)[name]?.url ?? '/error'
  return photo
}


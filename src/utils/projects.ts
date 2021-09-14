import { Project, ProjectMinified } from '../types'

export const uniq = (arr: Project[]) => arr.filter((v,i,a)=>a.findIndex((t)=>(t.name===v.name))===i)

export const getActiveProjects = (projects: ProjectMinified[], activeTypes: string[]) =>{
  // const emptyProjectArray: Project[] = []
  // const activeTypesRaw = activeTypes.map((activeType) => allTypes.filter((type) => type.name === activeType)[0])
  // const activeProjectsRaw: Project[][] = activeTypesRaw.map((activeType) => activeType.projects.map((project) => project))
  // const activeProjectsUnfiltered= emptyProjectArray.concat.apply([], activeProjectsRaw)
  const activeProjects = projects.filter((project: ProjectMinified) => project.services.some((r)=> activeTypes.includes(r.name)))
  return activeProjects
}

export const getAvailablePhoto = (project: Project, name: string) => {
  // const photo = project[name] ?
  //   project[name].formats.large ?
  //     project[name].formats.large.url
  //     :
  //     project[name].formats.medium ?
  //       project[name].formats.medium.url
  //       :
  //       project[name].formats.small ?
  //         project[name].formats.small.url
  //         :
  //         '/error'
  //   : '/error'
  const photo = project[name] ? project[name].url : '/error'
  return photo
}

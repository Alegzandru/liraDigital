import { Project, ProjectType } from '../types'

export const uniq = (arr: Project[]) => arr.filter((v,i,a)=>a.findIndex((t)=>(t.name===v.name))===i)

export const getActiveProjects = (activeTypes: string[], allTypes: ProjectType[]) => {
  const emptyProjectArray: Project[] = []
  const activeTypesRaw = activeTypes.map((activeType) => allTypes.filter((type) => type.name === activeType)[0])
  const activeProjectsRaw: Project[][] = activeTypesRaw.map((activeType) => activeType.projects.map((project) => project))
  const activeProjectsUnfiltered= emptyProjectArray.concat.apply([], activeProjectsRaw)
  return uniq(activeProjectsUnfiltered)
}

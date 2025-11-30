import { Project, ProjectMinified } from '../types'

export const uniq = (arr: Project[]) => arr.filter((v, i, a) => a.findIndex((t) => (t.name === v.name)) === i)

export const getActiveProjects = (projects: ProjectMinified[], activeTypes: string[]) => {
  const activeProjects = projects.filter((project: ProjectMinified) => project.services.some((r) => activeTypes.includes(r.name)))
  return activeProjects
}

export const getAvailablePhoto = (project: Project, name: string) => {
  const photo = (project as Record<string, any>)[name]?.url ?? '/error'
  return photo
}

export const getMediaUrl = (project: any, field: string) => {
  const media = project[field]
  if (!media) {
    return '/error'
  }

  // Case 1: single object
  if (media.url) {
    return media.url
  }

  // Case 2: array of objects
  if (Array.isArray(media) && media[0]?.url) {
    return media[0].url
  }

  return '/error'
}

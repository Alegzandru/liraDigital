import { GetStaticProps } from 'next'
import Head from 'next/head'

import AllProjects from '../src/components/projectsPage/AllProjects/AllProjects'
import { API_URL } from '../src/constants/common'
import { ProjectMinified, ProjectType } from '../src/types'
import { getAvailablePhoto } from '../src/utils/projects'

const Projects = ({services, projects}: {services: ProjectType[]; projects: ProjectMinified[]}) =>
  (
    <div>
      <Head>
        <title>Projects | Lira Digital Agency</title>
        <link rel="shortcut icon" href="/liraFavicon.svg"/>
      </Head>
      <AllProjects services={services} projects={projects}/>
    </div>
  )

export const getStaticProps: GetStaticProps = async () => {
  const projectsRes = await fetch(`${API_URL}/projects`)
  const projectsUnfiltered = await projectsRes.json()
  const projects: ProjectMinified[] = projectsUnfiltered.map((project: any) => ({
    name: project.name,
    services: project.services,
    main_photo: getAvailablePhoto(project, 'main_photo'),
    slug: project.slug,
  }))

  const servicesRes = await fetch(`${API_URL}/services`)
  const servicesRaw = await servicesRes.json()
  const services: ProjectType[] = servicesRaw.map((service: any) => ({
    name: service.name,
  }))

  return {
    props: {
      projects,
      services: [
        {name: 'All Projects'},
        ...services,
      ],
      revalidate : 10,
    },
  }
}

export default Projects

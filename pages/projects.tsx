import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useRouter } from 'next/router'

import { HeadWithMeta } from '../src/components/Layout/HeadWithMeta'
import AllProjects from '../src/components/projectsPage/AllProjects/AllProjects'
import { API_URL } from '../src/constants/common'
import { META } from '../src/constants/meta'
import { ProjectMinified, ProjectType } from '../src/types'
import { getAvailablePhoto } from '../src/utils/projects'
import { Locale } from '../src/types/locale'

const Projects = ({services, projects}: {services: ProjectType[]; projects: ProjectMinified[]}) => {
  const router = useRouter()
  const locale = router.locale as Locale

  return(
    <div>
      <HeadWithMeta
        title={META.projects[locale].title}
        description={META.projects[locale].description}
        index={true}
        img={''}
      />
      <AllProjects services={services} projects={projects}/>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async ({locale}) => {
  const projectsRes = await fetch(`${API_URL}/projects`)
  const projectsUnfiltered = await projectsRes.json()
  const projects: ProjectMinified[] = projectsUnfiltered.map((project: any) => ({
    name: project.name,
    services: project.services,
    main_photo: getAvailablePhoto(project, 'main_photo'),
    slug: project.slug,
    order: project.order,
  }))

  const servicesRes = await fetch(`${API_URL}/services`)
  const servicesRaw = await servicesRes.json()
  const services: ProjectType[] = servicesRaw.map((service: any) => ({
    name: service.name,
  }))

  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['common', 'projects'])),
      projects: [
        {
          name: 'Custom',
          services: [...services],
          main_photo: '/projects/yourProject.png',
          slug: '/project-request',
          order: 100,
        }
        , ...projects],
      services: [
        {name: 'All Projects'},
        ...services,
      ],
      revalidate : 10,
    },
  }
}

export default Projects

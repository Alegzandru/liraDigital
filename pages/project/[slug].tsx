/* eslint-disable no-console */
import { GetStaticPaths, GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { HeadWithMeta } from '../../src/components/Layout/HeadWithMeta'
import ProjectComponent from '../../src/components/projectsPage/project/Project'
import { API_URL } from '../../src/constants/common'
import { Project } from '../../src/types'
import { getAvailablePhoto } from '../../src/utils/projects'

const DynamicProject = (project: Project) => {
  if (!project || !project.id) {
    return <div>Project not found</div>
  }

  return (
    <div>
      <HeadWithMeta
        title={project.metatitle || 'Project'}
        description={project.metadescription || ''}
        index={true}
        img=""
      />
      <ProjectComponent {...project} />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const slug = params?.slug

  try {
    const projectRes = await fetch(`${API_URL}/projects?slug_eq=${slug}`)

    if (!projectRes.ok) {
      throw new Error(`Failed to fetch project for slug: ${slug}`)
    }

    const project = await projectRes.json()

    if (!project?.length) {
      return { notFound: true }
    }

    const p = project[0]

    const props = {
      id: p.id,
      name: p.name,
      name_ro: p.name_ro,
      link: p.link,
      customer: p.customer,
      initial_data: p.initial_data,
      initial_data_ro: p.initial_data_ro,
      aims: p.aims,
      aims_ro: p.aims_ro,
      description: p.description,
      description_ro: p.description_ro,
      photo1_heading: p.photo1_heading,
      photo1_heading_ro: p.photo1_heading_ro,
      photo1_subheading: p.photo1_subheading,
      photo1_subheading_ro: p.photo1_subheading_ro,
      process1: p.process1,
      process1_ro: p.process1_ro,
      process2: p.process2,
      process2_ro: p.process2_ro,
      process3: p.process3,
      process3_ro: p.process3_ro,
      photo3_heading: p.photo3_heading,
      photo3_heading_ro: p.photo3_heading_ro,
      result1: p.result1,
      result1_ro: p.result1_ro,
      result2: p.result2,
      result2_ro: p.result2_ro,
      result3: p.result3,
      result3_ro: p.result3_ro,
      photo1: getAvailablePhoto(p, 'photo1'),
      photo2: getAvailablePhoto(p, 'photo2'),
      photo3: getAvailablePhoto(p, 'photo3'),
      before_photo: getAvailablePhoto(p, 'before_photo'),
      after_photo: getAvailablePhoto(p, 'after_photo'),
      main_photo: getAvailablePhoto(p, 'main_photo'),
      services: p.services,
      tools: p.tools,
      platforms: p.platforms,
      metatitle: p.metatitle,
      metadescription: p.metadescription,
    }

    return {
      props: {
        ...props,
        key: slug,
        ...(await serverSideTranslations(locale as string, [
          'common',
          'projectPage',
        ])),
      },
      revalidate: 10,
    }
  } catch (error) {
    console.error('❌ Error in getStaticProps:', error)
    console.error('❌ Slug:', slug)
    return {
      notFound: true, // avoids breaking the build
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const projectsRes = await fetch(`${API_URL}/projects`)
    if (!projectsRes.ok) {
      throw new Error('Failed to fetch project list')
    }

    const projects = await projectsRes.json()

    const pathsRo = projects.map((project: any) => ({
      params: { slug: project.slug },
      locale: 'ro',
    }))

    const pathsEn = projects.map((project: any) => ({
      params: { slug: project.slug },
      locale: 'en',
    }))

    return {
      paths: [...pathsRo, ...pathsEn],
      fallback: true,
    }
  } catch (error) {
    console.error('⚠️ Error in getStaticPaths:', error)
    return {
      paths: [], // safe fallback
      fallback: true,
    }
  }
}

export default DynamicProject

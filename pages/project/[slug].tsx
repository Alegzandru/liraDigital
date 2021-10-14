import { GetStaticPaths, GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import ProjectComponent from '../../src/components/projectsPage/project/Project'
import { API_URL } from '../../src/constants/common'
import { Project } from '../../src/types'
import { getAvailablePhoto } from '../../src/utils/projects'

const DynamicProject = (project: Project) => (
  <div>
    <Head>
      <title>{project.name} | Lira Digital Agency</title>
      <link rel="shortcut icon" href="/liraFavicon.svg"/>
    </Head>
    <ProjectComponent
      {...project}
    ></ProjectComponent>
  </div>)

export const getStaticProps: GetStaticProps = async ({params, locale}) => {
  const slug = params?.slug
  const projectRes = await fetch(`${API_URL}/projects?slug_eq=${slug}`)
  const project = await projectRes.json()

  const props = {
    id : project[0].id,
    name : project[0].name,
    name_ro : project[0].name_ro,
    link : project[0].link,
    customer : project[0].customer,
    initial_data : project[0].initial_data,
    initial_data_ro : project[0].initial_data_ro,
    aims : project[0].aims,
    aims_ro : project[0].aims_ro,
    description : project[0].description,
    description_ro : project[0].description_ro,
    photo1_heading : project[0].photo1_heading,
    photo1_heading_ro : project[0].photo1_heading_ro,
    photo1_subheading : project[0].photo1_subheading,
    photo1_subheading_ro : project[0].photo1_subheading_ro,
    process1 : project[0].process1,
    process1_ro : project[0].process1_ro,
    process2 : project[0].process2,
    process2_ro : project[0].process2_ro,
    process3 : project[0].process3,
    process3_ro : project[0].process3_ro,
    photo3_heading : project[0].photo3_heading,
    photo3_heading_ro : project[0].photo3_heading_ro,
    result1 : project[0].result1,
    result1_ro : project[0].result1_ro,
    result2 : project[0].result2,
    result2_ro : project[0].result2_ro,
    result3 : project[0].result3,
    result3_ro : project[0].result3_ro,
    photo1 : getAvailablePhoto(project[0], 'photo1'),
    photo2 : getAvailablePhoto(project[0], 'photo2'),
    photo3 : getAvailablePhoto(project[0], 'photo3'),
    before_photo : getAvailablePhoto(project[0], 'before_photo'),
    after_photo : getAvailablePhoto(project[0], 'after_photo'),
    main_photo : getAvailablePhoto(project[0], 'main_photo'),
    services : project[0].services,
    tools : project[0].tools,
    platforms : project[0].platforms,
  }

  return {
    props: {
      ...props,
      key: slug,
      ...(await serverSideTranslations(locale as string, ['common', 'projectPage'])),
    },
    revalidate : 10,
  }
}

export const getStaticPaths: GetStaticPaths = async () => {

  const projectsRes = await fetch(`${API_URL}/projects`)
  const projects = await projectsRes.json()

  const pathsRo = projects.map((project: any) => ({
    params : {
      slug : project.slug,
    },
    locale: 'ro',
  }))

  const pathsEn = projects.map((project: any) => ({
    params : {
      slug : project.slug,
    },
    locale: 'en',
  }))

  const paths = [...pathsRo, ...pathsEn]

  return {
    paths,
    fallback: true,
  }

}

export default DynamicProject

import { GetStaticPaths, GetStaticProps } from 'next'
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
      id={project.id}
      name={project.name}
      link={project.link}
      customer={project.customer}
      initial_data={project.initial_data}
      aims={project.aims}
      description={project.description}
      photo1_heading={project.photo1_heading}
      photo1_subheading={project.photo1_subheading}
      process1={project.process1}
      process2={project.process2}
      process3={project.process3}
      photo3_heading={project.photo3_heading}
      result1={project.result1}
      result2={project.result2}
      result3={project.result3}
      photo1={project.photo1}
      photo2={project.photo2}
      photo3={project.photo3}
      before_photo={project.before_photo}
      after_photo={project.after_photo}
      main_photo={project.main_photo}
      services={project.services}
      tools={project.tools}
      platforms={project.platforms}
    ></ProjectComponent>
  </div>)

export const getStaticProps: GetStaticProps = async ({params}) => {
  const slug = params?.slug
  const projectRes = await fetch(`${API_URL}/projects?slug_eq=${slug}`)
  const project = await projectRes.json()

  const id = project[0].id
  const name = project[0].name
  const link = project[0].link
  const customer = project[0].customer
  const initial_data = project[0].initial_data
  const aims = project[0].aims
  const description = project[0].description
  const photo1_heading = project[0].photo1_heading
  const photo1_subheading = project[0].photo1_subheading
  const process1 = project[0].process1
  const process2 = project[0].process2
  const process3 = project[0].process3
  const photo3_heading = project[0].photo3_heading
  const result1 = project[0].result1
  const result2 = project[0].result2
  const result3 = project[0].result3
  const photo1 = getAvailablePhoto(project[0], 'photo1')
  const photo2 = getAvailablePhoto(project[0], 'photo2')
  const photo3 = getAvailablePhoto(project[0], 'photo3')
  const before_photo = getAvailablePhoto(project[0], 'before_photo')
  const after_photo = getAvailablePhoto(project[0], 'after_photo')
  const main_photo = getAvailablePhoto(project[0], 'main_photo')
  const services = project[0].services
  const tools = project[0].tools
  const platforms = project[0].platforms

  return {
    props: {
      id,
      name,
      link,
      customer,
      initial_data,
      aims,
      description,
      photo1_heading,
      photo1_subheading,
      process1,
      process2,
      process3,
      photo3_heading,
      result1,
      result2,
      result3,
      photo1,
      photo2,
      photo3,
      before_photo,
      after_photo,
      main_photo,
      services,
      tools,
      platforms,
      key: slug,
    },
    revalidate : 10,
  }
}

export const getStaticPaths: GetStaticPaths = async () => {

  const projectsRes = await fetch(`${API_URL}/projects`)
  const projects = await projectsRes.json()

  const paths = projects.map((project: any) => ({
    params : {
      slug : project.slug,
    },
  }))

  return {
    paths,
    fallback: true,
  }

}

export default DynamicProject

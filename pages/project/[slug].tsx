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
      {...project}
    ></ProjectComponent>
  </div>)

export const getStaticProps: GetStaticProps = async ({params}) => {
  const slug = params?.slug
  const projectRes = await fetch(`${API_URL}/projects?slug_eq=${slug}`)
  const project = await projectRes.json()

  const props = {
    id : project[0].id,
    name : project[0].name,
    link : project[0].link,
    customer : project[0].customer,
    initial_data : project[0].initial_data,
    aims : project[0].aims,
    description : project[0].description,
    photo1_heading : project[0].photo1_heading,
    photo1_subheading : project[0].photo1_subheading,
    process1 : project[0].process1,
    process2 : project[0].process2,
    process3 : project[0].process3,
    photo3_heading : project[0].photo3_heading,
    result1 : project[0].result1,
    result2 : project[0].result2,
    result3 : project[0].result3,
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

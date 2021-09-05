import Head from 'next/head'
import AllProjects from '../src/components/projectsPage/AllProjects/AllProjects'

const Projects = () =>
  (
    <div>
      <Head>
        <title>Projects | Lira Digital Agency</title>
        <link rel="shortcut icon" href="/liraFavicon.svg"/>
      </Head>
      <AllProjects/>
    </div>
  )

export default Projects

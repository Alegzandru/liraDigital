import Head from 'next/head'
import ProjectReq from '../src/components/projectReqPage/ProjectReq'

const ProjectRequest = () =>
  (
    <div>
      <Head>
        <title>Project Request | Lira Digital Agency</title>
        <link rel="shortcut icon" href="/liraFavicon.svg"/>
      </Head>
      <ProjectReq/>
    </div>
  )

export default ProjectRequest

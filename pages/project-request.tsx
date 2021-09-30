import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
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

export const getStaticProps: GetStaticProps = async ({locale}) => ({
  props: {
    ...(await serverSideTranslations(locale as string, ['common', 'project-request'])),
  },
})

export default ProjectRequest

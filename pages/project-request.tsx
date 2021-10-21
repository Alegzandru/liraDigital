import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useRouter } from 'next/router'

import { HeadWithMeta } from '../src/components/Layout/HeadWithMeta'
import ProjectReq from '../src/components/projectReqPage/ProjectReq'
import { META } from '../src/constants/meta'

const ProjectRequest = () =>{
  const router = useRouter()
  const locale = router.locale as string

  return(
    <div>
      <HeadWithMeta
        title={META.projectReq[locale].title}
        description={META.projectReq[locale].description}
        index={true}
        img={''}
      />
      <ProjectReq/>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async ({locale}) => ({
  props: {
    ...(await serverSideTranslations(locale as string, ['common', 'project-request'])),
  },
})

export default ProjectRequest

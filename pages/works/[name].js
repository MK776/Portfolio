import Layout from '../../components/layout'
import { getAllWorkIds,  getWorkData} from '../../lib/works'
import Head from 'next/head'

export default function Work({ workData }) {
  return(
    <Layout>
      <Head>
        <title>{workData.title}</title>
      </Head>
      <article>
        <h1>{workData.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: workData.contentHtml }} />
      </article>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllWorkIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const workData =  await getWorkData(params.name)
  return {
    props: {
      workData
    }
  }
}
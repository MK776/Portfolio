import Link from 'next/link'
import {getSortedWorksData} from '../../lib/works'
import Layout from '../../components/layout'

export default ({allWorksData}) => {
  return(
    <Layout>
      <h1>Work Name</h1>
      <ul>
          {allWorksData.map(({name, title}) => (
            <li key={name}>
              <Link href="/works/[name]" as={`/works/${name}`}>
                <a>{title}</a>
              </Link>
            </li>
          ))}
      </ul>
    </Layout>
  )
}

export async function getStaticProps(){
  const allWorksData = getSortedWorksData()
  return {
    props: {
      allWorksData
    }
  }
}


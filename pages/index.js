import Link from 'next/link'

import Layout from '../components/layout'

const HomePage = () => {
  return(
    <Layout>
      <section>
        <h1>KOHEI MISHIMA</h1>
        <ul>
          <li>age: 25</li>
          <li>introduction</li>
        </ul>
      </section>
      <section>
        <Link href="/works">
          <a>Works</a>
        </Link>
        <Link href="/skills">
          <a>Skills</a>
        </Link>
      </section>
    </Layout>    
  )
}

export default HomePage
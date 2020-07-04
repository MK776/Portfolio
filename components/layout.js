import Head from 'next/head'
import Header from './header'

export const Layout = ({children}) => {
  return(
    <>
      <Head>
        <title>Portfolio</title>
      </Head>
      <Header/>
      <main>{children}</main>
    </>
  )
}

export default Layout

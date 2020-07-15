import Head from "next/head";
import Header from "./header";
import Footer from "./footer";

export const Layout = ({children}) => {
  return(
    <div className="p-5 sm:px-20 bg-white">
      <Head>
        <title>Portfolio</title>
      </Head>
      <Header/>
      <main  className="text-center my-10 text-gray-800">{children}</main>
      <hr className="my-5"/>
      <Footer/>
    </div>
  );
}


export default Layout;

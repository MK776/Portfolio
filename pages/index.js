import Link from "next/link";

import Layout from "../components/layout";

const HomePage = () => {
  return(
    <Layout>
      <section className="grid md:grid-cols-2 my-16">
        <div className="flex justify-center lg:justify-end">
          <img src="/myPicture.png" className=" h-48 sm:h-auto" />
        </div>
        <div className="sm:col-start-2 sm:col-end-3 mt-5 sm:flex sm:flex-wrap sm:content-center sm:justify-center flex-col">
          <h1　className="text-2xl text-gray-800 font-bold">KOHEI MISHIMA</h1>
          <p className="text-gray-600 leading-10 sm:tracking-wider truncate">
            お時間いただきありがとうございます。<br/>
            フロントエンドエンジニアを目指しております。<br/>
            実務経験はありませんが少しずつ学習中です。<br/>
            何かございましたらお気軽にご連絡ください。
          </p>
        </div>
      </section>
      <section className="grid grid-cols-4 gap-5">
        <Link href="/works">
          <a className="bg-gray-800 text-white rounded-sm p-2 col-start-2 col-end-3">Works</a>
        </Link>
        <Link href="/skills">
          <a className="bg-gray-800 text-white rounded-sm p-2 col-start-3 col-end-4">Skills</a>
        </Link>
      </section>
    </Layout>    
  );
}

export default HomePage;
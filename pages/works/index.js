import Link from "next/link";
import {getSortedWorksData} from "../../lib/works";
import Layout from "../../components/layout";

export default ({allWorksData}) => {
  return(
    <Layout>
      <ul className="md:grid md:grid-cols-2 gap-10">
          {allWorksData.map(({name, title, img}) => (
            <li key={name} className="px-10">
              <Link href="/works/[name]" as={`/works/${name}`}>
                <a className="font-bold"><img src={img} className="w-full"/>{title}</a>
              </Link>
            </li>
          ))}
      </ul>
    </Layout>
  );
}

export async function getStaticProps(){

  const allWorksData = getSortedWorksData();

  return {
    props: {
      allWorksData
    }
  };
}


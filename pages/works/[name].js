import Layout from "../../components/layout";
import { getAllWorkIds,  getWorkData} from "../../lib/works";

export default function Work({ workData }) {
  return(
    <Layout>
      <article className="grid grid-cols-1 px-5 lg:px-20">
        <img src={workData.img} className="w-full"/>
        <h1 className="font-bold my-8 text-2xl">{workData.title}</h1>
        <h2 className="mb-5">{workData.skills}</h2>
        <div className="text-gray-500 mb-5 text-center" dangerouslySetInnerHTML={{ __html: workData.contentHtml }} />
        {
          workData.title !== "ポートフォリオ"　&& 
          <a　className="mb-4 underline" href={workData.url}>デモ</a>
        }
        <a　className="mb-4 underline" href={workData.git}>ソース</a>
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {

  const paths = getAllWorkIds();

  return {
    paths,
    fallback: false
  };
};

export async function getStaticProps({ params }) {

  const workData =  await getWorkData(params.name);

  return {
    props: {
      workData
    }
  };
};
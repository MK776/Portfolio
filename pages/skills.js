import Layout from "../components/layout";

const Skills = () => {
  return(
    <Layout>
        <h1 className="text-2xl font-extrabold">Skills</h1>
        <hr className="mt-5"/>
        <div className="lg:grid lg:grid-cols-2">
          <div　className="grid grid-rows-4 gap-8 md:tracking-widest">
            <h2 className="flex self-center justify-center text-gray-500">フロントエンド</h2>
            <section>
              <h3 className="text-lg font-bold underline mb-3">React</h3>
              <p>Hooks,Functional Componentで書いている。<br/>脱create-react-appを目指している。<br/>Next.jsをSSRができるように使ってみている。<br/>Reduxは未学習でContexをつかっている。</p>
            </section>
            <section>
              <h3 className="text-lg font-bold underline mb-3">CSS</h3>
              <p>Tailwindcssを使ってみた。<br/>postcssを勉強しなければとおもっている。<br/>Sass,bootsstrapも少しわかる。<br/>アニメーションはあまりできない。</p>
            </section>
            <section>
              <h3 className="text-lg font-bold underline mb-3">Typescript</h3>
              <p>Reactのいろいろな型指定に悪戦苦闘中。<br/>ESの学習もできていると思う。</p>
            </section>
          </div>
          <div className="grid grid-rows-4 gap-8 md:tracking-widest">
            <h2 className="flex self-center justify-center text-gray-500">バックエンド</h2>
            <section>
              <h3 className="text-lg font-bold underline mb-3">Ruby</h3>
              <p>Railsチュートリアルをやった。<br/>教本をみながら簡単なwebアプリをつくった。</p>
            </section>
            <section>
              <h3 className="text-lg font-bold underline mb-3">PHP</h3>
              <p>WordPressでブログをつくった。<br/>プログラミングをはじめたきっかけ。<br/>教本を見ながら自作テーマをつくった。</p>
            </section>
            <section>
              <h3 className="text-lg font-bold underline mb-3">Java</h3>
              <p>無料のスクールに少し通った。<br/>ブラックジャックの簡単なゲームをつくった。</p>
            </section>
          </div>
          <div className="grid lg:col-start-1 lg:col-end-3 grid-rows-2 gap-3 md:tracking-widest">
            <h2 className="flex self-center justify-center text-gray-500">Others</h2>
            <p>Git,Heroku,AWS,Firebaseなども積極的に使用。<br/>webpackに苦戦中。<br/>プログラミング学習ができる程度の英語はわかる。</p>
          </div>
        </div>
    </Layout>
  );
}

export default Skills;
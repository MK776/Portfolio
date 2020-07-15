import fs from "fs"
import path from "path"
import matter from "gray-matter"
import remark from "remark";
import html from "remark-html";

const worksDirectory = path.join(process.cwd(), "works")

export function getSortedWorksData() {

  const fileNames = fs.readdirSync(worksDirectory);

  const allWorksData = fileNames.map(fileName => {
    const name = fileName.replace(/\.md$/, "");

    const fullPath = path.join(worksDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const matterResult = matter(fileContents);

    return {
      name,
      ...matterResult.data
    };
  });

  return allWorksData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  });
}

export function getAllWorkIds() {
  const fileNames = fs.readdirSync(worksDirectory);

  return fileNames.map(fileName => {
    return {
      params: {
        name: fileName.replace(/\.md$/, "")
      }
    };
  });
}

export async function getWorkData(name) {

  const fullPath = path.join(worksDirectory, `${name}.md`);

  const fileContents = fs.readFileSync(fullPath, "utf8");

  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);

  const contentHtml = processedContent.toString();

  return {
    name,
    contentHtml,
    ...matterResult.data
  };
}
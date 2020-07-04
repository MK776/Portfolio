import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'

const worksDirectory = path.join(process.cwd(), 'works')

export function getSortedWorksData() {
  // Get file names under /Works
  const fileNames = fs.readdirSync(worksDirectory)
  const allWorksData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const name = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(worksDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the Work metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      name,
      ...matterResult.data
    }
  })
  // Sort Works by date
  return allWorksData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getAllWorkIds() {
  const fileNames = fs.readdirSync(worksDirectory)

  return fileNames.map(fileName => {
    return {
      params: {
        name: fileName.replace(/\.md$/, '')
      }
    }
  })
}

export async function getWorkData(name) {
  const fullPath = path.join(worksDirectory, `${name}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the Work metadata section
  const matterResult = matter(fileContents)

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  // Combine the data with the id and contentHtml
  return {
    name,
    contentHtml,
    ...matterResult.data
  }
}
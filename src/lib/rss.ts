import { format } from "date-fns"
import { getAllFilesFrontmatter } from "./mdx"
import { writeFileSync } from "fs"


export async function getRssXml() {
   const frontmatters = await getAllFilesFrontmatter("blog")

   const blogUrl = `${process.env.SITE_URL}/blog`

   const itemXml = frontmatters
      .filter((fm) => !fm.slug.startsWith("id-"))
      .map(({ slug, title, description, publishedAt, lastUpdated }) => `
         <item>
            <title>${cdata(title)}</title>
            <description>${cdata(description)}</description>
            <link>${blogUrl}/${slug}</link>
            <guid>${blogUrl}/${slug}</guid>
            <pubDate>${format(
               new Date(lastUpdated ?? publishedAt),
               "yyyy-MM-dd"
            )}</pubDate>
         </item>
      `.trim())
   
   return `
      <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:blogChannel="${blogUrl}">
         <channel>
            <title>Tech Laup Wing Blog</title>
            <link>${blogUrl}</link>
            <description>The Tech Laup Wing Blog, tech, full-stack, and tutorials about front-end development.</description>
            <language>en</language>
            <ttl>40</ttl>
            ${itemXml.join('\n')}
         </channel>
      </rss>
   `
}

function cdata(s: string) {
   return `<![CDATA[${s}]]>`
}

export async function generateRss() {
   const xml = await getRssXml()
   writeFileSync("public/rss.xml", xml)
}
import { getAllFilesFrontmatter } from "@/lib/mdx"
import { generateRss } from "@/lib/rss"

const fetchFrontmatters = async () => {
   generateRss()
   const blogs = await getAllFilesFrontmatter("blog")
   return {
      blogs
   }
}

export default async function Home() {
   const test = await fetchFrontmatters()
   console.log(test)
   return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
         
      </main>
   )
}

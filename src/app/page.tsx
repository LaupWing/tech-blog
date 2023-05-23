import { Accent } from "@/components/Accent"
import { getAllFilesFrontmatter, getRecent } from "@/lib/mdx"
import { generateRss } from "@/lib/rss"

const fetchFrontmatters = async () => {
   generateRss()
   const blogs = await getAllFilesFrontmatter("blog")
   const projects = await getAllFilesFrontmatter("projects")
   const library = await getAllFilesFrontmatter("library")

   const recentBlogs = getRecent(blogs)
   const recentProjects = getRecent(projects)
   const recentLibrary = getRecent(library)

   return {
      recentBlogs,
      recentLibrary,
      recentProjects
   }
}

export default async function Home() {
   const {
      recentBlogs, 
      recentLibrary, 
      recentProjects} = await fetchFrontmatters()
   return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
         <article className="layout">
            <h2 className="text-2xl md:text-4xl 2xl:text-5xl">
               Hallo!
            </h2>
            <h1 className="mt-1 text-3xl md:text-5xl 2xl:text-6xl">
               My name is <Accent>Laup Wing </Accent>
            </h1>
         </article>
      </main>
   )
}

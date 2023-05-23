import { useLoaded } from "@/hooks/useLoaded"
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
   const {recentBlogs, recentLibrary, recentProjects} = await fetchFrontmatters()
   const isLoaded = useLoaded()
   console.log(isLoaded)
   return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
         <section>

         </section>
      </main>
   )
}

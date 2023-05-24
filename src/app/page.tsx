import { getAllFilesFrontmatter, getRecent } from "@/lib/mdx"
import { generateRss } from "@/lib/rss"
import HomeIntro from "./HomeIntro"
import HomeProjects from "./HomeProjects"

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
      <main>
         <HomeIntro />
         <HomeProjects />
      </main>
   )
}



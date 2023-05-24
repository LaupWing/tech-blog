import { Accent } from "@/components/Accent"
import { getAllFilesFrontmatter, getRecent } from "@/lib/mdx"

const fetchRecentBlogs = async () => {
   const blogs = await getAllFilesFrontmatter("blog")

   const recentBlogs = getRecent(blogs)

   await new Promise((resolve)=>{
      return setTimeout(() =>{
         resolve("")
      },10000)
   })


   return recentBlogs
}

const HomeBlogs = async () => {
   const recentBlogs = await fetchRecentBlogs()


   return (
      <section className="py-20">
         <article className="layout">
            <h2 id="projects" className="text-2xl md:text-4xl">
               <Accent>Recent Blog Posts</Accent>
            </h2>
         </article>
      </section>
   )
}
export default HomeBlogs

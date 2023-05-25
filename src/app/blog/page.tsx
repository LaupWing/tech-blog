import { IconCalendar, IconEye } from "@/components/Icons"
import { Accent } from "@/components/elements/Accent"
import { SortOption } from "@/components/elements/SortListBox"
import { getAllFilesFrontmatter } from "@/lib/mdx"
import BlogsContainer from "./BlogsContainer"

const fetchBlogs = async () => {
   const blogs = await getAllFilesFrontmatter("blog")

   return blogs
}

const sortOptions: Array<SortOption> = [
   {
      id: "date",
      name: "Sort by date",
      icon: IconCalendar
   },
   {
      id: "views",
      name: "Sort by views",
      icon: IconEye
   }
]

const Blog = async () => {
   const blogs = await fetchBlogs()
   
   return (
      <main>
         <section className="layout py-12">
            <h1 className="text-3xl md:text-5xl">
               <Accent>Blog</Accent>
            </h1>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
               Interesting tech findings.
            </p>
            <BlogsContainer 
               blogs={blogs}
            />
         </section>
      </main>
   )
}
export default Blog
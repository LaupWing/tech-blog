import { IconCalendar } from "@/components/Icons"
import { Accent } from "@/components/elements/Accent"
import { SortOption } from "@/components/elements/SortListBox"
import { getAllFilesFrontmatter } from "@/lib/mdx"

const fetchBlogs = async () => {
   const blogs = await getAllFilesFrontmatter("blog")

   return blogs
}

const sortOptions: Array<SortOption> = [
   {
      id: "date",
      name: "Sort by date",
      icon: IconCalendar
   }
]

const Blog = async () => {
   const blogs = await fetchBlogs()
   console.log(blogs)
   return (
      <main>
         <section className="layout py-12">
            <h1 className="text-3xl md:text-5xl">
               <Accent>Blog</Accent>
            </h1>
         </section>
      </main>
   )
}
export default Blog
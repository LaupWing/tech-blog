import { Accent } from "@/components/elements/Accent"
import { getAllFilesFrontmatter } from "@/lib/mdx"

const fetchBlogs = async () => {
   const blogs = await getAllFilesFrontmatter("blog")

   return blogs
}

// const sortOptions: 

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
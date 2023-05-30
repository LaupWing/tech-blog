import { Accent } from "@/components/elements/Accent"
import { getAllFilesFrontmatter } from "@/lib/mdx"
import PostsSection from "./PostsSection"

const fetchBlogs = async () => {
   const blogs = await getAllFilesFrontmatter("blog")

   return blogs
}

const Blog = async () => {
   const posts = await fetchBlogs()
   
   return (
      <main>
         <section className="layout py-12">
            <h1 className="text-3xl md:text-5xl">
               <Accent>Blog</Accent>
            </h1>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
               Interesting tech findings.
            </p>
            <PostsSection 
               posts={posts}
            />
         </section>
      </main>
   )
}
export default Blog
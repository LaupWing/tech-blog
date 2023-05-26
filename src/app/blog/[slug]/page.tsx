import { CloudinaryImage } from "@/components/images"
import { getFileBySlug, getFiles } from "@/lib/mdx"
import { BlogFrontmatter } from "@/types/frontmatters"
import { format } from "date-fns"

const fetchPost = async (slug: string) => {
   const post = await getFileBySlug("blog", slug)
   return post as {
      code: string
      frontmatter: BlogFrontmatter
   }
} 

interface PageProps {
   params: {
      slug: string
   }
}

const SingleBlogPage = async (props: PageProps) => {
   const post = await fetchPost(props.params.slug)
   const {
      frontmatter,
      code
   } = post

   return (
      <main>
         <section className="layout">
            <div className="pb-4">
               <CloudinaryImage
                  publicId="samples/bike"
                  alt="Bike"
                  width={1200}
                  height={(1200 * 2) /5}
                  aspect={{
                     height: 2,
                     width: 5
                  }}
               />
               <h1 className="mt-4">{frontmatter.title}</h1>
               <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                  Writton on{" "}
                  {format(new Date(frontmatter.publishedAt), "MMMM dd, yyyy")} by
                  Laup Wing
               </p>
            </div>
         </section>
      </main>
   )
}

export default SingleBlogPage

export const dynamicParams = false

export async function generateStaticParams() {
   const posts = await getFiles("blog")
   
   return posts.map((p) => ({
      slug: p.replace(/\.mdx/, "")
   }))
}
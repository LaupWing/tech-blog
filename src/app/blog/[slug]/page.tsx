import { IconHistory } from "@/components/Icons"
import { CloudinaryImage } from "@/components/images"
import { UnstyledLink } from "@/components/links"
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

   const COMMIT_HISTORY_LINK = `https://github.com/LaupWing/tech-blog/commits/main/src/contents/blog/${frontmatter.slug}.mdx`

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
               {frontmatter.lastUpdated && (
                  <div className="mt-2 flex flex-wrap gap-2 text-sm text-gray-700 dark:text-gray-200">
                     <p>
                        Last updated{" "}
                        {format(new Date(frontmatter.lastUpdated), "MMMM dd, yyyy")}
                        .
                     </p>
                     <UnstyledLink
                        href={COMMIT_HISTORY_LINK}
                        className="inline-flex items-center gap-1 rounded-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-accent-light focus:outline-none focus-visible:ring focus-visible:ring-accent-dark"
                     >
                        <IconHistory className="text-lg" />
                        <span>See changes</span>
                     </UnstyledLink>
                  </div>
               )}
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
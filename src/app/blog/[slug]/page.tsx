
import { getFileBySlug, getFiles } from "@/lib/mdx"
import { BlogFrontmatter } from "@/types/frontmatters"

import { TableContents } from "@/components/sections/TableContents"
import Content from "./Content"
import { LikeButton } from "@/components/buttons"
import useContentMeta from "@/hooks/useContentMeta"

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
            

            <hr className="dark:border-gray-600" />
            <section className="lg:grid lg:grid-cols-[auto,250px] lg:gap-8">
               <article className="mdx projects prose mx-auto w-full transition-colors dark:prose-invert">
                  <Content
                     code={code}
                     slug={frontmatter.slug}
                  />
               </article>
               <aside className="py-4">
                  <div className="sticky top-36">
                     <TableContents 
                        slug={frontmatter.slug}
                     />
                     <div className="flex items-center justify-center py-8">
                        <LikeButton />
                     </div>
                  </div>
               </aside>
            </section>
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
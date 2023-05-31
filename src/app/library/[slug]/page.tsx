import { getFileBySlug, getFiles } from "@/lib/mdx"
import { LibraryFrontmatter } from "@/types/frontmatters"

export const dynamicParams = false

export async function generateStaticParams() {
   const posts = await getFiles("library")
   
   return posts.map((p) => ({
      slug: p.replace(/\.mdx/, "")
   }))
}

const fetchPost = async (slug: string) => {
   const post = await getFileBySlug("library", slug)
   return post as {
      code: string
      frontmatter: LibraryFrontmatter
   }
} 

interface PageProps {
   params: {
      slug: string
   }
}

const SingleLibraryPage = async (props: PageProps) => {
   const post = await fetchPost(props.params.slug)
   return (
      <section className="layout">
         
      </section>
   )
}
export default SingleLibraryPage
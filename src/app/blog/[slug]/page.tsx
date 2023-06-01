
import { getFileBySlug, getFiles } from "@/lib/mdx"
import { BlogFrontmatter } from "@/types/frontmatters"
import ContentSection from "./ContentSection"
import { Metadata } from "next"
import { defaultMeta } from "@/config"

export const dynamicParams = false

export async function generateStaticParams() {
   const posts = await getFiles("blog")
   
   return posts.map((p) => ({
      slug: p.replace(/\.mdx/, "")
   }))
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
   const post = await fetchPost(props.params.slug)
   const { frontmatter } = post
   return {
      title: `${frontmatter.title} | ${defaultMeta.siteName}`,
      description: frontmatter.description,
   }
}

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
         <ContentSection 
            code={code}
            frontmatter={frontmatter}
         />
      </main>
   )
}

export default SingleBlogPage
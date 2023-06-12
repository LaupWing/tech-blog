import { getFileBySlug, getFiles } from "@/lib/mdx"
import { LibraryFrontmatter } from "@/types/frontmatters"
import ContentSection from "../../components/library/ContentSection.client"
import { Metadata } from "next"
import seo from "@/lib/seo"

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

export async function generateMetadata(props: PageProps): Promise<Metadata> {
   const post = await fetchPost(props.params.slug)
   const { frontmatter } = post

   const OG_BANNER_LINK = `https://res.cloudinary.com/laupwing/image/upload/f_auto,c_fill,ar_4:5,w_1200/samples/sheep.jpg`
   
   return {
      ...seo({
         isBlog: true,
         banner: OG_BANNER_LINK,
         templateTitle: frontmatter.title,
         title: frontmatter.title,
         description: frontmatter.description
      })
   }
}

interface PageProps {
   params: {
      slug: string
   }
}

const SingleLibraryPage = async (props: PageProps) => {
   const post = await fetchPost(props.params.slug)
   const {
      frontmatter,
      code
   } = post
   return (
      <section className="layout">
         <ContentSection
            code={code}
            frontmatter={frontmatter}
         />
      </section>
   )
}
export default SingleLibraryPage
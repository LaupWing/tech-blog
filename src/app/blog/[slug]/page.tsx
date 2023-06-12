
import { getFileBySlug, getFiles } from "@/lib/mdx"
import { BlogFrontmatter } from "@/types/frontmatters"
import ContentSection from "../../components/slug/ContentSection"
import { Metadata } from "next"
import { defaultMeta } from "@/config"
import { openGraph } from "@/lib/helpers"

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

   const OG_BANNER_LINK = `https://res.cloudinary.com/laupwing/image/upload/f_auto,c_fill,ar_4:5,w_1200/samples/sheep.jpg`
   const image = openGraph({
      isBlog: true,
      banner: OG_BANNER_LINK,
      siteName: `${frontmatter.title} | ${defaultMeta.siteName}`,
      description: frontmatter.description,
      templateTitle: frontmatter.title
   })
   
   return {
      title: `${frontmatter.title} | ${defaultMeta.siteName}`,
      description: frontmatter.description,
      twitter: {
         card: "summary_large_image",
         site: "@laupwing",
         title: frontmatter.title,
         description: frontmatter.description,
         images: [image]
      },
      openGraph: {
         title: `${frontmatter.title} | ${defaultMeta.siteName}`,
         publishedTime: new Date(frontmatter.lastUpdated ?? frontmatter.publishedAt).toISOString(),
         type: "article",
         authors: ["Laup Wing"],
         description: frontmatter.description,
         url: process.env.SITE_URL,
         images: [
            {
               url: image,
               width: 1200,
               height: 600
            }
         ],
      }
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
import { getFiles } from "@/lib/mdx"

const SingleBlogPage = () => {
   return (
      <div>SingleBlogPage</div>
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
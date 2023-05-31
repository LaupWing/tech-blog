import { getFiles } from "@/lib/mdx"

export const dynamicParams = false

export async function generateStaticParams() {
   const posts = await getFiles("library")
   
   return posts.map((p) => ({
      slug: p.replace(/\.mdx/, "")
   }))
}

const SingleLibraryPage = () => {
   return (
      <section className="layout">
         
      </section>
   )
}
export default SingleLibraryPage
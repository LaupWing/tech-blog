import { CloudinaryImage } from "@/components/images"
import { getAllFilesFrontmatter, getFiles } from "@/lib/mdx"

const fetchProject = async () => {
   const project = await getAllFilesFrontmatter("projects")

   return project
}

const SingleProjectPage = async () => {
   const project = await fetchProject()
   
   return (
      <section className="layout">
         <CloudinaryImage
            publicId="samples/bike"
            alt="Bike"
            width={1440}
            height={792}
         />
      </section>
   )
}
export default SingleProjectPage

export const dynamicParams = false

export async function generateStaticParams() {
   const posts = await getFiles("projects")
   
   return posts.map((p) => ({
      slug: p.replace(/\.mdx/, "")
   }))
}
import { CloudinaryImage } from "@/components/images"
import { getFileBySlug, getFiles } from "@/lib/mdx"
import { BlogFrontmatter, ProjectFrontmatter } from "@/types/frontmatters"

const fetchProject = async (slug: string) => {
   const project = await getFileBySlug("projects", slug)

   return project as {
      code: string
      frontmatter: BlogFrontmatter
   }
}

interface PageProps {
   params: {
      slug: string
   }
}

const SingleProjectPage = async (props: PageProps) => {
   const project = await fetchProject(props.params.slug)
   
   return (
      <section className="layout">
         <CloudinaryImage
            publicId="samples/bike"
            alt="Bike"
            width={1440}
            height={792}
         />
         <h1 className="mt-4">{project.}</h1>
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
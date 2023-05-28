import { IconEye, IconGithub } from "@/components/Icons"
import { CloudinaryImage } from "@/components/images"
import { CustomLink } from "@/components/links/CustomLink"
import { getFileBySlug, getFiles } from "@/lib/mdx"
import { BlogFrontmatter, ProjectFrontmatter } from "@/types/frontmatters"

const fetchProject = async (slug: string) => {
   const post = await getFileBySlug("projects", slug)

   return post as {
      code: string
      frontmatter: ProjectFrontmatter
   }
}

interface PageProps {
   params: {
      slug: string
   }
}

const SingleProjectPage = async (props: PageProps) => {
   const { frontmatter, code } = await fetchProject(props.params.slug)
   
   return (
      <section className="layout">
         <CloudinaryImage
            publicId="samples/bike"
            alt="Bike"
            width={1440}
            height={792}
         />
         <h1 className="mt-4">{frontmatter.title}</h1>
         <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
            {frontmatter.description}
         </p>
         <div className="mt-2 flex flex-wrap items-center justify-start gap-3 text-sm font-medium text-gray-600 dark:text-gray-300">
            <div className="flex items-center gap-1">
               <IconEye className="inline-block text-base" />
               --- views
            </div>
            {(frontmatter.github || frontmatter.link) && " - "}
            {frontmatter.github && (
               <div className="inline-flex items-center gap-2">
                  <IconGithub className="text-lg text-gray-800 dark:text-light" />
                  <CustomLink
                     href={frontmatter.github}
                     className="mt-1"
                  >
                     Repository
                  </CustomLink>
               </div>
            )}
         </div>
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
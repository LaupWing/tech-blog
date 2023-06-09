import { IconEye, IconGithub, IconLink } from "@/components/Icons"
import { CloudinaryImage } from "@/components/images"
import { CustomLink } from "@/components/links/CustomLink"
import Content from "./Content"
import { TableContents } from "@/components/sections/TableContents"
import { getFileBySlug, getFiles } from "@/lib/mdx"
import { ProjectFrontmatter } from "@/types/frontmatters"

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
            {frontmatter.link && (
               <div className="inline-flex items-center gap-2">
                  <IconLink className="text-lg text-gray-800 dark:text-light" />
                  <CustomLink
                     href={frontmatter.link}
                     className="mt-1"
                  >
                     Open Live Site
                  </CustomLink>
               </div>
            )}
            
         </div>
         <hr className="mt-4 dark:border-gray-600" />
         <section className="lg:grid lg:grid-cols-[auto,250px] lg:gap-8">
            <article className="mdx projects prose mx-auto w-full transition-colors dark:prose-invert">
               <Content
                  code={code}
               />
            </article>
            <aside className="py-4">
               <div className="sticky top-36">
                  <TableContents
                     slug={frontmatter.slug}
                  />
               </div>
            </aside>
         </section>
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
import { Accent } from "@/components/Accent"
import { ProjectCard } from "@/components/cards"
import { getAllFilesFrontmatter, getRecent } from "@/lib/mdx"

const fetchRecentProjects = async () => {
   const projects = await getAllFilesFrontmatter("projects")

   const recentProjects = getRecent(projects)

   return recentProjects
}

const HomeProjects = async () => {
   const recentProjects = await fetchRecentProjects()

   return (
      <section className="py-20">
         <article className="layout">
            <h2 id="projects" className="text-2xl md:text-4xl">
               <Accent>Recent Projects</Accent>
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
               My most recent awesome projects.
            </p>
            <ul className="mt-2 text-gray-600 dark:text-gray-300">
               {recentProjects.map((project, i) => (
                  <ProjectCard 
                     key={project.slug}
                     project={project}
                  />
               ))}
            </ul>
         </article>
      </section>
   )
}
export default HomeProjects
import { Accent } from "@/components/Accent"

const HomeProjects = () => {
   return (
      <section className="py-20">
         <article className="layout">
            <h2 id="projects" className="text-2xl md:text-4xl">
               <Accent>Recent Projects</Accent>
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
               My most recent awesome projects.
            </p>
         </article>
      </section>
   )
}
export default HomeProjects
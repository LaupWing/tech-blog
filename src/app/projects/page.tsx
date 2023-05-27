import { Accent } from "@/components/elements/Accent"

const Projects = () => {
   return (
      <section className="layout py-12">
         <h1 className="text-3xl md:text-5xl">
            <Accent>Projects</Accent>
         </h1>
         <p className="mt-2 text-gray-600 dark:text-gray-300">
            My favorite projects.
         </p>
      </section>
   )
}
export default Projects
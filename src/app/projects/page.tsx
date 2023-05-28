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
         <ul className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3"></ul>
      </section>
   )
}
export default Projects
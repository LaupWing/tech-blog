import { Accent } from "@/components/elements/Accent"
import { getAllFilesFrontmatter } from "@/lib/mdx"

const fetchLibrary = async () => {
   const library = await getAllFilesFrontmatter("library")

   return library
}

const Library = async () => {
   const library = await fetchLibrary()

   return (
      <section className="layout py-12">
         <h1 className="text-3xl md:text-5xl">
            <Accent>Library</Accent>
         </h1>
      </section>
   )
}
export default Library
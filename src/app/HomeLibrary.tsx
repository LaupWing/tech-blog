import { Accent } from "@/components/elements/Accent"
import { LibraryCard } from "@/components/cards"
import { getAllFilesFrontmatter, getRecent } from "@/lib/mdx"

const fetchRecentLibrary = async () => {
   const library = await getAllFilesFrontmatter("library")

   const recentLibrary = getRecent(library)

   return recentLibrary
}

const HomeLibrary = async () => {
   const recentLibrary = await fetchRecentLibrary()

   return (
      <section className="py-20">
         <article className="layout">
            <h2 className="text-2xl md:text-4xl" id="library">
               <Accent>Libary of Code Snippets</Accent>
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
               List of code snippets. What is documented is never lost.
            </p>
            <ul className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
               {recentLibrary.map((snippet, i) => (
                  <LibraryCard 
                     key={snippet.slug}
                     snippet={snippet}
                  />
               ))}
            </ul>
         </article>
      </section>
   )
}
export default HomeLibrary
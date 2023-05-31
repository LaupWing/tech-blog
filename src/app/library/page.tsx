import { getAllFilesFrontmatter } from "@/lib/mdx"

const fetchLibrary = async () => {
   const library = await getAllFilesFrontmatter("library")

   return library
}

const Library = async () => {
   const library = await fetchLibrary()

   return (
      <div>Library</div>
   )
}
export default Library
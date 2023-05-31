"use client"
import { LibraryFrontmatter } from "@/types/frontmatters"
import { ChangeEvent, FC, useState } from "react"

interface PostsSectionProps {
   posts: Array<LibraryFrontmatter>
}

const PostsSection:FC<PostsSectionProps> = ({
   posts
}) => {
   const [search, setSearch] = useState<string>("")
   const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value)
   }

   return (
      <>
         <input 
            type="text" 
            className="w-full rounded-md dark:bg-dark border border-gray-300 dark:border-gray-600 focus:border-accent-dark focus:outline-none focus:ring-0 dark:focus:border-accent-light mt-4"
            placeholder="Search..."
            value={search}
            onChange={handleSearch}
         />
      </>
   )
}
export default PostsSection
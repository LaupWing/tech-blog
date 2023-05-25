"use client"
import { getTags } from "@/lib/mdx-client"
import { FrontmatterWithTags } from "@/types/frontmatters"
import { FC } from "react"

interface BlogsContainerProps {
   blogs: Array<FrontmatterWithTags>
}

const BlogsContainer:FC<BlogsContainerProps> = ({
   blogs
}) => {
   const tags = getTags(blogs)

   return (
      <>
         <input 
            type="text" 
            className="w-full rounded-md dark:bg-dark border border-gray-300 dark:border-gray-600 focus:border-accent-dark focus:outline-none focus:ring-0 dark:focus:border-accent-light mt-4"
            placeholder="Search..."
         />
      </>
   )
}
export default BlogsContainer
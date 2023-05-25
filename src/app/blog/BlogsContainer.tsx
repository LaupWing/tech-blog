"use client"
import { FC } from "react"

interface BlogsContainerProps {

}

const BlogsContainer:FC = () => {

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
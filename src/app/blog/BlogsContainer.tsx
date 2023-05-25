"use client"
import { Tag } from "@/components/elements"
import { getTags } from "@/lib/mdx-client"
import { BlogFrontmatter, FrontmatterWithTags, InjectedMeta } from "@/types/frontmatters"
import { ChangeEvent, FC, useState } from "react"

interface BlogsContainerProps {
   blogs: Array<BlogFrontmatter>
}

const BlogsContainer:FC<BlogsContainerProps> = ({
   blogs
}) => {
   const tags = getTags(blogs)
   const [search, setSearch] = useState<string>("")
   const [filteredBlogs, setFilteredBlogs] = useState<Array<BlogFrontmatter & InjectedMeta>>(blogs)

   const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value)
   }

   const filteredTags = getTags(filteredBlogs)

   return (
      <>
         <input 
            type="text" 
            className="w-full rounded-md dark:bg-dark border border-gray-300 dark:border-gray-600 focus:border-accent-dark focus:outline-none focus:ring-0 dark:focus:border-accent-light mt-4"
            placeholder="Search..."
            value={search}
            onChange={handleSearch}
         />
         <div className="mt-2 flex flex-wrap items-baseline justify-start gap-2 text-sm text-gray-600 dark:text-gray-300">
            <span className="font-medium">Choose topic:</span>
            {tags.map((tag) => (
               <Tag
                  key={tag}
               >
                  {tag}
               </Tag>
            ))}
         </div>
      </>
   )
}
export default BlogsContainer
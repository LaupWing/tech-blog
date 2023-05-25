"use client"
import { IconCalendar, IconEye } from "@/components/Icons"
import { Tag } from "@/components/elements"
import { SortListBox, SortOption } from "@/components/elements/SortListBox"
import { getFromSessionStorage } from "@/lib/helpers"
import { getTags } from "@/lib/mdx-client"
import { BlogFrontmatter, FrontmatterWithTags, InjectedMeta } from "@/types/frontmatters"
import { ChangeEvent, FC, useState } from "react"

interface BlogsContainerProps {
   blogs: Array<BlogFrontmatter>
}

const sortOptions: Array<SortOption> = [
   {
      id: "date",
      name: "Sort by date",
      icon: IconCalendar
   },
   {
      id: "views",
      name: "Sort by views",
      icon: IconEye
   }
]

const BlogsContainer:FC<BlogsContainerProps> = ({
   blogs
}) => {
   const [sortOrder, setSortOrder] = useState<SortOption>(
      () => sortOptions[Number(getFromSessionStorage("blog-sort")) || 0]
   )
   const tags = getTags(blogs)
   const [search, setSearch] = useState<string>("")
   const [filteredBlogs, setFilteredBlogs] = useState<Array<BlogFrontmatter & InjectedMeta>>(
      () => [...blogs]
   )
   
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
         <div className="relative z-10 mt-6 flex flex-col items-end gap-4 text-gray-600 dark:text-gray-300 md:flex-row md:items-center md:justify-between">
            <SortListBox 
               className="ml-auto"
               selected={sortOrder}
               setSelected={setSortOrder}
               options={sortOptions}
            />
         </div>
      </>
   )
}
export default BlogsContainer
"use client"
import { Tag } from "@/components/elements"
import { getTags } from "@/lib/mdx-client"
import { InjectedMeta, LibraryFrontmatter } from "@/types/frontmatters"
import { ChangeEvent, FC, useEffect, useState } from "react"

interface PostsSectionProps {
   posts: Array<LibraryFrontmatter>
}

const PostsSection:FC<PostsSectionProps> = ({
   posts
}) => {
   const [search, setSearch] = useState<string>("")
   const [filteredPosts, setFilteredPosts] = useState<Array<LibraryFrontmatter & InjectedMeta>>(
      () => [...posts]
   )

   useEffect(() => {
      const result = posts.filter((post) =>
         post.title.toLowerCase().includes(search.toLowerCase()) ||
         post.description.toLowerCase().includes(search.toLowerCase()) ||
         search.toLowerCase()
            .split(" ")
            .every((tag) => post.tags.includes(tag))
      )
      setFilteredPosts(result)
   }, [search])

   const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value)
   }
   const tags = getTags(posts)
   const toggleTag = (tag: string) => {
      if(search.includes(tag)){
         setSearch((s) =>
            s
               .split(" ")
               .filter((t) => t !== tag)
               .join(" ")
         )
      } else {
         setSearch((s) => (s !== "" ? `${s.trim()} ${tag}` : tag))
      }
   }
   const filteredTags = getTags(filteredPosts)

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
                  onClick={() => toggleTag(tag)}
                  disabled={!filteredTags.includes(tag)}
               >
                  {tag}
               </Tag>
            ))}
         </div>
      </>
   )
}
export default PostsSection
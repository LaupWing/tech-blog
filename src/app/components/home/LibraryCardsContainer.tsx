"use client"
import { LibraryCard } from "@/components/cards/LibraryCard.client"
import useInjectContentMeta from "@/hooks/useInjectContentMeta"
import { LibraryFrontmatter } from "@/types/frontmatters"
import { FC } from "react"

interface LibraryCardsContainerProps {
   posts: LibraryFrontmatter[]
}

const LibraryCardsContainer:FC<LibraryCardsContainerProps> = ({
   posts
}) => {
   const populatedBlogs = useInjectContentMeta(posts)

   return (
      <>
         {populatedBlogs.map(post => (
            <LibraryCard
               key={post.slug}
               snippet={post as LibraryFrontmatter}
            />
         ))}
      </>
   )
}
export default LibraryCardsContainer
"use client"
import { BlogCard } from "@/components/cards/BlogCard.client"
import useInjectContentMeta from "@/hooks/useInjectContentMeta"
import { BlogFrontmatter } from "@/types/frontmatters"
import { FC } from "react"

interface BlogCardsContainerProps {
   posts: BlogFrontmatter[]
}

const BlogCardsContainer:FC<BlogCardsContainerProps> = ({
   posts
}) => {
   const populatedBlogs = useInjectContentMeta(posts)

   return (
      <>
         {populatedBlogs.map(post => (
            <BlogCard
               key={post.slug}
               post={post as BlogFrontmatter}
            />
         ))}
      </>
   )
}
export default BlogCardsContainer
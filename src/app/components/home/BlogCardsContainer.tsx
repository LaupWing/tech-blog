"use client"
import { BlogFrontmatter } from "@/types/frontmatters"
import { FC, useState } from "react"

interface BlogCardsContainerProps {
   posts: BlogFrontmatter[]
}

const BlogCardsContainer:FC<BlogCardsContainerProps> = ({
   posts
}) => {
   const [loaded, setLoaded] = useState(false)
   console.log(posts)

   return (
      <div>BlogCardContainer</div>
   )
}
export default BlogCardsContainer
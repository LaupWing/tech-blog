import { BlogFrontmatter, InjectedMeta } from "@/types/frontmatters"
import { ComponentPropsWithoutRef, FC } from "react"

interface BlogCardProps extends ComponentPropsWithoutRef<"li"> {
   post: BlogFrontmatter & InjectedMeta
   checkTagged?: (tag: string) => boolean
}

export const BlogCard:FC<BlogCardProps> = () => {
   return (
      <div>BlogCard</div>
   )
}
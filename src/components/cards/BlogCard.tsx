import { BlogFrontmatter, InjectedMeta } from "@/types/frontmatters"
import clsx from "clsx"
import { ComponentPropsWithoutRef, FC } from "react"
import { UnstyledLink } from "../links"
import { CloudinaryImage } from "../images"

interface BlogCardProps extends ComponentPropsWithoutRef<"li"> {
   post: BlogFrontmatter & InjectedMeta
   checkTagged?: (tag: string) => boolean
}

export const BlogCard:FC<BlogCardProps> = ({
   post,
   className,
   checkTagged,
   onClick
}) => {
   return (
      <li className={clsx("w-full rounded-md border border-gray-300 bg-primary dark:border-gray-600 scale-100 hover:scale-[1.02] active:scale-[0.97] motion-safe:transform-gpu transition duration-100 motion-reduce:hover:scale-100 animate-shadow", className)}>
         <UnstyledLink
            className="block h-full rounded-md focus-within:outline-none focus-visible:ring focus-visible:ring-contrast"
            href={`/blog/${post.slug}`}
         >
            <CloudinaryImage 
               noStyle
               className=""
               publicId="samples/bike"
               alt="Bike"
               width={1200}
               height={(1200 * 2) /5}
               aspect={{
                  height: 2,
                  width: 5
               }}
            />
         </UnstyledLink>
      </li>
   )
}
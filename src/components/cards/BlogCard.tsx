import { BlogFrontmatter, InjectedMeta } from "@/types/frontmatters"
import clsx from "clsx"
import { ComponentPropsWithoutRef, FC } from "react"
import { UnstyledLink } from "../links"
import { CloudinaryImage } from "../images"
import { Tag } from "../elements"
import { Accent } from "../Accent"

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
      <li 
         className={clsx(
            "w-full rounded-md border border-gray-300 bg-primary dark:border-gray-600 scale-100 hover:scale-[1.02] active:scale-[0.97] motion-safe:transform-gpu transition duration-100 motion-reduce:hover:scale-100 animate-shadow",
            className
         )}
         onClick={onClick}
      >
         <UnstyledLink
            className="block h-full rounded-md focus-within:outline-none focus-visible:ring focus-visible:ring-contrast"
            href={`/blog/${post.slug}`}
         >
            <div className="relative">
               <CloudinaryImage 
                  noStyle
                  className="rounded-t-md overflow-hidden pointer-events-none"
                  publicId="samples/bike"
                  alt="Bike"
                  width={1200}
                  height={(1200 * 2) /5}
                  aspect={{
                     height: 2,
                     width: 5
                  }}
               />
               <div className="absolute bottom-0 px-4 w-full py-2 mt-2 flex flex-wrap justify-end gap-x-2 gap-y-1 text-sm text-black dark:text-gray-100">
                  {post.tags.split(",").map((tag) => (
                     <Tag className="bg-opacity-80 dark:!bg-opacity-60">
                        {checkTagged?.(tag) 
                           ? <Accent>{tag}</Accent>
                           : tag
                        }
                     </Tag>
                  ))}
               </div>
            </div>
         </UnstyledLink>
      </li>
   )
}
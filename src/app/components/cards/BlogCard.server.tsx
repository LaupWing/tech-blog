import { BlogFrontmatter, InjectedMeta } from "@/types/frontmatters"
import clsx from "clsx"
import { ComponentPropsWithoutRef, FC, Suspense } from "react"
import { UnstyledLink } from "@/components/links"
import { CloudinaryImage } from "@/components/images"
import { Tag } from "@/components/elements"
import { Accent } from "@/components/elements/Accent"
import { IconClock, IconEye } from "@/components/Icons"
import { format } from "date-fns"

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
            "w-full rounded-md border border-gray-300 bg-light dark:bg-dark dark:border-gray-600 scale-100 hover:scale-[1.02] active:scale-[0.97] motion-safe:transform-gpu transition duration-100 motion-reduce:hover:scale-100 animate-shadow",
            className
         )}
         onClick={onClick}
      >
         <UnstyledLink
            className="block h-full rounded-md focus-within:outline-none focus-visible:ring focus-visible:ring-accent-light"
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
                     <Tag 
                        className="bg-opacity-80 dark:!bg-opacity-60"
                        key={tag}
                     >
                        {checkTagged?.(tag) 
                           ? <Accent>{tag}</Accent>
                           : tag
                        }
                     </Tag>
                  ))}
               </div>
            </div>
            <div className="p-4">
               <h4 className="text-gray-800 dark:text-gray-100">{post.title}</h4>
               <div className="mt-2 flex items-center justify-start gap-2 text-sm font-medium text-gray-600 dark:text-gray-300">
                  <div className="flex items-center gap-1">
                     <IconClock className="inline-block text-base" />
                     <Accent>{post.readingTime.text}</Accent>
                  </div>
                  <div className="flex items-center gap-1">
                     <IconEye className="inline-block text-base" />
                     <Suspense fallback={<Accent className="animate-pulse">--- views</Accent>}>
                        <Views 
                           slug={post.slug}
                        />
                     </Suspense>
                  </div>
               </div>
               <p className="mb-2 mt-4 text-sm text-gray-600 dark:text-gray-300">
                  <span className="font-bold text-gray-800 dark:text-gray-100">
                     {format(
                        new Date(post.lastUpdated ?? post.publishedAt),
                        "MMM dd, yyyy"
                     )}
                  </span>
               </p>
               <p className="text-sm text-gray-700 dark:text-gray-300">
                  {post.description}
               </p>
            </div>
         </UnstyledLink>
      </li>
   )
}

{/* @ts-expect-error Server Component */}
const Views:FC<{
   slug: string
}> = async ({
   slug
})=> {
   const res = await fetch(`http://localhost:3000/api/content/${slug}`)
   const data = await res.json()
   
   return (
      <Accent>{data.contentViews ?? "---"} views</Accent>
   )
}
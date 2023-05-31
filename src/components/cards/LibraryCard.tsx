import { ComponentPropsWithoutRef, FC, Suspense } from "react"
import { InjectedMeta, LibraryFrontmatter } from "@/types/frontmatters"
import clsx from "clsx"
import { UnstyledLink } from "../links"
import { Accent } from "../elements/Accent"
import { TechIcons, TechListType } from "../TechIcons"
import { ChadIcon } from "../ChadIcon"

interface LibraryCardProps extends ComponentPropsWithoutRef<"li"> {
   snippet: LibraryFrontmatter & InjectedMeta
}

export const LibraryCard:FC<LibraryCardProps> = ({
   className,
   snippet
}) => {
   
   return (
      <li
         className={clsx("h-full rounded-md border bg-light dark:border-gray-600 dark:bg-dark scale-100 hover:scale-[1.04] active:scale-[0.97] motion-safe:transform-gpu transition duration-100 motion-reduce:hover:scale-100 animate-shadow", className)}
      >
         <UnstyledLink
            href={`/library/${snippet.slug}`}         
            className="block h-full rounded-md focus:outline-none focus-visible:ring focus-visible:ring-accent-light"
         >
            <div className="p-4">
               <h4 className="text-gray-800 dark:text-gray-100">{snippet.title}</h4>
               <div className="mt-1 flex items-center justify-start gap-3 text-sm font-medium text-gray-600 dark:text-gray-300">
                  <Suspense fallback={
                     <div className="flex items-center gap-1 animate-pulse">
                        <ChadIcon className="inline-block text-base w-5" />
                        <Accent>--- likes</Accent>
                     </div>
                  }>
                     <Likes slug={snippet.slug} />
                  </Suspense>
                  <span>•</span>
                  <TechIcons techs={snippet.tags.split(",") as Array<TechListType>} />
               </div>

               <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
                  {snippet.description}
               </p>
            </div>
         </UnstyledLink>
      </li>
   )
}

{/* @ts-expect-error Server Component */}
const Likes:FC<{
   slug: string
}> = async ({
   slug
})=> {
   const res = await fetch(`http://localhost:3000/api/content/${slug}`)
   const data = await res.json()
   return (
      <div className="flex items-center gap-1">
         <ChadIcon className="inline-block text-base w-5" />
         <Accent>{data.contentLikes} likes</Accent>
      </div>
   )
}
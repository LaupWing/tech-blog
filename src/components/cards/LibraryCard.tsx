import { ComponentPropsWithoutRef, FC } from "react"
import { InjectedMeta, LibraryFrontmatter } from "@/types/frontmatters"
import clsx from "clsx"
import { UnstyledLink } from "../links"
import { IconHeart } from "../Icons"
import { Accent } from "../elements"

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
                  <div>
                     <IconHeart className="inline-block text-base" />
                     <Accent> --- likes</Accent>
                  </div>
               </div>
            </div>
         </UnstyledLink>
      </li>
   )
}
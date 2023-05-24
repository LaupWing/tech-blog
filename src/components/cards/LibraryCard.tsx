import { ComponentPropsWithoutRef, FC } from "react"
import { InjectedMeta, LibraryFrontmatter } from "@/types/frontmatters"

interface LibraryCardProps extends ComponentPropsWithoutRef<"li"> {
   snippet: LibraryFrontmatter & InjectedMeta
}

export const LibraryCard:FC<LibraryCardProps> = ({
   className,
   snippet
}) => {
   
   return (
      <li
         className="h-full rounded-md border bg-white dark:border-gray-600"
      >
         
      </li>
   )
}
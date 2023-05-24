import { ComponentPropsWithoutRef, FC } from "react"
import { InjectedMeta, LibraryFrontmatter } from "@/types/frontmatters"

interface LibraryCardProps extends ComponentPropsWithoutRef<"li"> {
   snippet: LibraryFrontmatter & InjectedMeta
}

export const LibraryCard:FC<LibraryCardProps> = () => {
   return (
      <div>LibraryCard</div>
   )
}
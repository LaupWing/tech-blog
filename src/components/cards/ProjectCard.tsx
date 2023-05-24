import { ProjectFrontmatter } from "@/types/frontmatters"
import clsx from "clsx"
import { ComponentPropsWithoutRef, FC } from "react"

interface ProjectCardProps extends ComponentPropsWithoutRef<"li"> {
   project: ProjectFrontmatter
}

export const ProjectCard:FC<ProjectCardProps> = () => {
   return (
      <li className={clsx(
         "rounded-md md:w-full border dark:border-gray-600 scale-100 hover:scale-[1.02] active:scale-[0.97] motion-safe:transform-gpu transition duration-100 motion-reduce:hover:scale-100 animate-shadow"
         )}
      >
         
      </li>
   )
}
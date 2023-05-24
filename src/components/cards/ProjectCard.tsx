import { ProjectFrontmatter } from "@/types/frontmatters"
import clsx from "clsx"
import { ComponentPropsWithoutRef, FC } from "react"
import { UnstyledLink } from "../links"

interface ProjectCardProps extends ComponentPropsWithoutRef<"li"> {
   project: ProjectFrontmatter
}

export const ProjectCard:FC<ProjectCardProps> = ({
   project,
   className
}) => {
   return (
      <li className={clsx(
         "rounded-md md:w-full border dark:border-gray-600 scale-100 hover:scale-[1.02] active:scale-[0.97] motion-safe:transform-gpu transition duration-100 motion-reduce:hover:scale-100 animate-shadow",
         className
         )}
      >
         <UnstyledLink
            href={`/projects/${project.slug}`}
            className="flex h-full flex-col items-start rounded-md p-4 focus:outline-none focus-visible:ring focus-visible:ring-accent-light"
         >
            <h4>{project.title}</h4>
         </UnstyledLink>
      </li>
   )
}
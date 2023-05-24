import {
   SiFirebase,
   SiGit,
   SiGatsby,
   SiJavascript,
   SiMarkdown,
   SiMongodb,
   SiNextdotjs,
   SiNodedotjs,
   SiReact,
   SiRedux,
   SiTailwindcss,
   SiTypescript,
   SiWordpress,
} from "react-icons/si"
import { IoLogoVercel } from "react-icons/io5"
import { ComponentPropsWithoutRef, FC } from "react"
import clsx from "clsx"
import { Tooltip } from "./elements/Tooltip"

export type TechListType = keyof typeof techList

export interface TechIconsProps extends ComponentPropsWithoutRef<"ul"> {
   techs: Array<TechListType>
}

export const TechIcons:FC<TechIconsProps> = ({
   className,
   techs
}) => {
   return (
      <ul className={clsx(className, "flex gap-2")}>
         {techs.map((tech) => {
            if(!techList[tech]){
               return
            }
            const current = techList[tech]

            return (
               <Tooltip 
                  key={current.name} 
                  tipChildren={<p>{current.name}</p>}
               >
                  <li className="text-xl text-gray-700 dark:text-gray-200">
                     <current.icon />
                  </li>
               </Tooltip>
            )
         })}
      </ul>
   )
}

const techList = {
   react: {
      icon: SiReact,
      name: "React"
   },
   nextjs: {
      icon: SiNextdotjs,
      name: "Next.js"
   },
   tailwindcss: {
      icon: SiTailwindcss,
      name: "Tailwind CSS"
   },
   javascript: {
      icon: SiJavascript,
      name: "Javascript"
   },
   typescript: {
      icon: SiTypescript,
      name: "Typescript"
   },
   nodejs: {
      icon: SiNodedotjs,
      name: "Node.js"
   },
   firebase: {
      icon: SiFirebase,
      name: "Firebase"
   },
   mongodb: {
      icon: SiMongodb,
      name: "MongoDB"
   },
   swr: {
      icon: IoLogoVercel,
      name: "SWR"
   },
   redux: {
      icon: SiRedux,
      name: "Redux"
   },
   mdx: {
      icon: SiMarkdown,
      name: "MDX"
   },
   git: {
      icon: SiGit,
      name: "Git"
   },
   gatsby: {
      icon: SiGatsby,
      name: "Gatsby"
   },
   wordpress: {
      icon: SiWordpress,
      name: "Wordpress"
   },
}
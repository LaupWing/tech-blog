import { FC, ReactNode } from "react"
import { IconType } from "react-icons"
import { IconGithub, IconLinkedin, IconTwitter } from "./Icons"
import { Accent } from "./elements/Accent"

export const Footer:FC = () => {
   return (
      <footer className="mt-4 pb-2">
         <main className="layout flex flex-col items-center border-t pt-6 dark:border-gray-600">
            <p className="mt-12 font-medium text-gray-600 dark:text-gray-300">
               Reach Out
            </p>
         </main>
      </footer>
   )
}


interface Social {
   href: string
   icon: IconType
   id: string
   text: ReactNode
}

const social: Social[] = [
   {
      href: "https://github.com/LaupWing",
      icon: IconGithub,
      id: "Github",
      text: (
         <>
            See my projects on <Accent className="font-medium">Github</Accent>
         </>
      )
   },
   {
      href: "https://www.linkedin.com/in/loc-nguyen-a33896272/",
      icon: IconLinkedin,
      id: "Linkedin",
      text: (
         <>
            Find me on <Accent className="font-medium">Linkedin</Accent>
         </>
      )
   },
   {
      href: "https://twitter.com/LaupWing1994",
      icon: IconTwitter,
      id: "Twitter",
      text: (
         <>
            For tech tips. Follow me on <Accent className="font-medium">Twitter</Accent>
         </>
      )
   },
]
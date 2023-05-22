"use client"
import { useSelectedLayoutSegment } from "next/navigation"
import { FC, useEffect, useState } from "react"
import { UnstyledLink } from "./links"
import clsx from "clsx"

interface HeaderProps {
   large?: boolean
}
export const Header:FC<HeaderProps> = () => {
   const [onTop, setOnTop] = useState<boolean>(false)
   const activeSegment = useSelectedLayoutSegment()

   useEffect(() => {
      const handleScroll = () => {
         setOnTop(window.pageYOffset > 0)
      }
      window.addEventListener("scroll", handleScroll)
      return () => {
         window.removeEventListener("scroll", handleScroll)
      }
   }, [])

   const links = [
      { 
         href: "/",
         label: "Home",
         segement: null
      },
      { 
         href: "/blog",
         label: "Blog",
         segement: "blog"
      },
      { 
         href: "/projects",
         label: "Projects",
         segement: "projects"
      },
      { 
         href: "/library",
         label: "Library",
         segement: "library"
      },
      { 
         href: "/about",
         label: "About",
         segement: "about"
         
      },
   ]

   return (
      <header className={clsx(
         "sticky top-0 z-50 transition-shadow bg-primary",
         onTop && "shadow-sm"
      )}>
         <nav className="layout py-4 flex items-center justify-between">
            <ul className="flex items-center justify-between gap-3 text-xs md:gap-6 md:text-base">
               {links.map(({ href, label, segement }) => (
                  <li key={`${href}-${label}`}>
                     <UnstyledLink
                        href={href}
                        className={clsx(
                           "border-b-[3px] pb-1", 
                           activeSegment === segement ? "border-black" : "border-transparent"
                        )}
                     >
                        {label}
                     </UnstyledLink>
                  </li>
               ))}
            </ul>
         </nav>
      </header>
   )
}
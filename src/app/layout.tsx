"use client"
import "./globals.css"
import { useSelectedLayoutSegment } from "next/navigation"
import { Inter } from "next/font/google"
import clsx from "clsx"
import { FC, useEffect, useState } from "react"
import { UnstyledLink } from "@/components/links"
import { ThemeProvider } from "next-themes"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
   title: "Create Next App",
   description: "Generated by create next app",
}

export default function RootLayout({
   children,
}: {
   children: React.ReactNode
}) {
   return (
      <html 
         lang="en"
         style={{
            colorScheme: "light",
         }}
         className={clsx(inter.className, "light")}
      >
         <body className={inter.className}>
            <ThemeProvider attribute="class" defaultTheme="light">
               <Header />
               <div id="skip-nav">
                  {children}
               </div>
            </ThemeProvider>
         </body>
      </html>
   )
}

interface HeaderProps {
   large?: boolean
}
const Header:FC<HeaderProps> = () => {
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
         segement: "home"
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
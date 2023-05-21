"use client"
import "./globals.css"
import { usePathname } from "next/navigation"
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
      <html lang="en">
         <body className={inter.className}>
            {/* <ThemeProvider> */}
               <Header />
               {children}
            {/* </ThemeProvider> */}
         </body>
      </html>
   )
}

interface HeaderProps {
   large?: boolean
}
const Header:FC<HeaderProps> = () => {
   const pathname = usePathname()
   const baseRoute = `/${pathname.split("/")[0]}`
   const [onTop, setOnTop] = useState<boolean>(false)

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
         label: "Home"
      },
      { 
         href: "/blog",
         label: "Blog"
      },
      { 
         href: "/projects",
         label: "Projects"
      },
      { 
         href: "/library",
         label: "Library"
      },
      { 
         href: "/about",
         label: "About"
      },
   ]

   console.log(baseRoute)
   return (
      <header className={clsx(
         "sticky top-0 z-50 transition-shadow bg-primary",
         onTop && "shadow-sm"
      )}>
         <nav className="layout py-4 flex items-center justify-between">
            <ul className="flex items-center justify-between gap-3 text-xs md:gap-6 md:text-base">
               {links.map(({ href, label }) => (
                  <li key={`${href}-${label}`}>
                     <UnstyledLink
                        href={href}
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
import { Inter } from "next/font/google"
import clsx from "clsx"
import { favicons } from "@/config"
import { Metadata } from "next"
import { Header } from "@/components/Header"
import { AppProvider } from "@/context/AppProvider"
import { Footer } from "@/components/Footer"
import NextTopLoader from "nextjs-toploader"

import "@/styles/globals.css"
import "@/styles/dracula.css"
import "@/styles/mdx.css"
import "react-tippy/dist/tippy.css"
import seo from "@/lib/seo"

const inter = Inter({ subsets: ["latin"], weight: ["400","500","700"] })

export async function generateMetadata(): Promise<Metadata> {
   return {...seo({})}
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
         <head>
            {favicons.map(favicon => (
               <link key={favicon.href} {...favicon} />
            ))}
         </head>
         <body className={`${inter.className} bg-light dark:bg-dark`}>
            <NextTopLoader />
            <AppProvider>  
               <Header />
               <div id="skip-nav">
                  {children}
               </div>
               <Footer />
            </AppProvider>
         </body>
      </html>
   )
}
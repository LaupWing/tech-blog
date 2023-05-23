import "./globals.css"
import { Inter } from "next/font/google"
import clsx from "clsx"
import { defaultMeta } from "@/config"
import { Metadata } from "next"
import { Header } from "@/components/Header"
import { AppProvider } from "@/store/AppProvider"

const inter = Inter({ subsets: ["latin"] })

export async function generateMetadata(): Promise<Metadata> {

   return {
      title: defaultMeta.title,
      robots: defaultMeta.robots,
      description: defaultMeta.description,
      twitter: {
         card: "summary_large_image",
         site: "@laupwing",
         title: defaultMeta.title,
         description: defaultMeta.description
      }
   }
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
         <head />
         <body className={inter.className}>
            <AppProvider>
               <Header />
               <div id="skip-nav">
                  {children}
               </div>
            </AppProvider>
         </body>
      </html>
   )
}
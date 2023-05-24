import "./globals.css"
import { Inter } from "next/font/google"
import clsx from "clsx"
import { defaultMeta, favicons } from "@/config"
import { Metadata } from "next"
import { Header } from "@/components/Header"
import { AppProvider } from "@/context/AppProvider"
import { openGraph } from "@/lib/helpers"

const inter = Inter({ subsets: ["latin"], weight: ["400","500","700"] })

export async function generateMetadata(): Promise<Metadata> {
   const image = openGraph({
      description: defaultMeta.description,
      siteName: defaultMeta.siteName
   })

   return {
      title: defaultMeta.title,
      robots: defaultMeta.robots,
      description: defaultMeta.description,
      twitter: {
         card: "summary_large_image",
         site: "@laupwing",
         title: defaultMeta.title,
         description: defaultMeta.description,
         images: [image]
      },
      openGraph: {
         url: process.env.SITE_URL,
         // @ts-ignore
         type: defaultMeta.type,
         title: defaultMeta.title,
         siteName: defaultMeta.siteName,
         description: defaultMeta.description
      },
      themeColor: "#ffffff"
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
         <head>
            {favicons.map(favicon => (
               <link key={favicon.href} {...favicon} />
            ))}
         </head>
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
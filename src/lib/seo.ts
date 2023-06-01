import { defaultMeta } from "@/config"
import { openGraph } from "./helpers"
import { Metadata } from "next"

interface SeoProps extends Partial<typeof defaultMeta> { 
   date?: string
   templateTitle?: string
   isBlog?: boolean
   banner?: string
   canonical?: string
   params?: string
}

export default function(props: SeoProps){
   const image = openGraph({
      description: defaultMeta.description,
      siteName: defaultMeta.siteName
   })
   const meta = {
      ...defaultMeta,
      ...props,
   }

   return {
      title: {
         template: `%s | ${defaultMeta.title}`
      },
      robots: meta.robots,
      description: meta.description,
      twitter: {
         card: "summary_large_image",
         site: "@laupwing",
         title: meta.title,
         description: meta.description,
         images: [image]
      },
      openGraph: {
         url: process.env.SITE_URL,
         images: [
            {
               url: image,
               width: 1200,
               height: 600
            }
         ],
         type: meta.type,
         title: meta.title,
         siteName: meta.siteName,
         description: meta.description
      },
      themeColor: "#ffffff"
   } as Metadata
}
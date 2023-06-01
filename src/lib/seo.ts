import { defaultMeta } from "@/config"
import { openGraph } from "./helpers"

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
         images: [
            {
               url: image,
               width: 1200,
               height: 600
            }
         ],
         type: defaultMeta.type as "website",
         title: defaultMeta.title,
         siteName: defaultMeta.siteName,
         description: defaultMeta.description
      },
      themeColor: "#ffffff"
   }
}
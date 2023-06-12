import { defaultMeta } from "@/config"
import { openGraph } from "./helpers"
import { Metadata } from "next"

interface SeoProps extends Partial<typeof defaultMeta> { 
   date?: string
   templateTitle?: string
   isBlog?: boolean
   banner?: string
   canonical?: string
   asPath?: string
}

export default function(props: SeoProps){
   const meta = {
      ...defaultMeta,
      ...props,
   }
   const image = openGraph({
      description: meta.description,
      siteName: meta.siteName,
      templateTitle: meta.templateTitle,
      banner: meta.banner,
      isBlog: meta.isBlog
   })

   return {
      title: {
         default: defaultMeta.title,
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
         url: meta.asPath ? `${process.env.SITE_URL}/${meta.asPath}` : process.env.SITE_URL,
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
         description: meta.description,
         ...(props.date ? {
            publishedTime: props.date,
            authors: ["Laup Wing"],
         } : {})
      },
      themeColor: "#ffffff",
   } as Metadata
}
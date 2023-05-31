import { ContentType } from "@/types/frontmatters"
import { ContentMeta } from "@/types/meta"

interface OpenGraphType {
   siteName: string
   description: string
   templateTitle?: string
   logo?: string
   banner?: string
   isBlog?: boolean
}

export const openGraph = ({
   siteName,
   templateTitle,
   description,
   banner,
   logo = `${process.env.SITE_URL}/images/logo.png`,
   isBlog = false
}: OpenGraphType) : string => {
   const ogLogo = encodeURIComponent(logo)
   const ogSiteName = encodeURIComponent(siteName.trim())
   const ogTemplateTitle = templateTitle
      ? encodeURIComponent(templateTitle.trim())
      : undefined
   const ogDescription = encodeURIComponent(description.trim())

   if(isBlog) {
      const ogBanner = banner 
         ? encodeURIComponent(banner.trim())
         : undefined
      
      return `${process.env.SITE_URL}/api/og/blog?templateTitle=${ogTemplateTitle}&banner=${ogBanner}`
   }

   return `${process.env.SITE_URL}/api/og/gradient?siteName=${ogSiteName}&description=${ogDescription}&logo=${ogLogo}${ogTemplateTitle ? `&templateTitle=${ogTemplateTitle}` : ""}`
}

export const getFromSessionStorage = (key: string) => {
   if (typeof sessionStorage !== "undefined"){
      return sessionStorage.getItem(key)
   }
   return null
}

export function pickContentMeta<T extends ContentType>(
   data: Array<ContentMeta> | undefined,
   type: T
): Array<ContentMeta> {
   return (
      data
         ?.filter((item) => item.slug.startsWith(type.slice(0, 1)))
            .map((item) => ({
               ...item,
               slug: item.slug.slice(2)
            })) ?? []
   )
}
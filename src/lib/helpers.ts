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
   // Need to replace this
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

   
   return ""
}
import { defaultMeta } from "@/config"
import { useRouter } from "next/navigation"
import { FC } from "react"


export interface SeoProps extends Partial<typeof defaultMeta> {
   data?: string
   templateTitle?: string
   isBlog?: boolean
   banner?: string
   canonical?: string
}

export const Seo:FC<SeoProps> = () => {
   const router = useRouter()
   

   return (
      <div>Seo</div>
   )
}
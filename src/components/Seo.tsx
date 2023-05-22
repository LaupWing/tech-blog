import { FC } from "react"

const defaultMeta = {
   title: "Laup Wing Tech",
   siteName: "tech.laupwing.com",
   description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet necessitatibus doloribus, omnis delectus obcaecati reprehenderit inventore esse at cum tenetur? Sapiente tenetur molestias odio labore quaerat omnis eos officiis corporis.",
   url: "https://tech.laupwing.com",
   // Need to replace this
   image: "https://www.cgsusa.org/wp-content/uploads/cropped-placeholder.jpg",
   type: "website",
   robots: "follow, index"
}

export interface SeoProps extends Partial<typeof defaultMeta> {
   data?: string
   templateTitle?: string
   isBlog?: boolean
   banner?: string
   canonical?: string
}

export const Seo:FC<SeoProps> = () => {
   return (
      <div>Seo</div>
   )
}
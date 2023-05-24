import { ComponentPropsWithoutRef, FC } from "react"

interface CloudinaryImageProps extends ComponentPropsWithoutRef<"figure"> {
   publicId: string
   height: string | number
   width: string | number
   alt: string
   title?: string
   className?: string
   preview?: boolean
   noStyle?: boolean
   aspect?: {
      width: number
      height: number
   }
   mdx?: boolean
}

export const CloudinaryImage:FC<CloudinaryImageProps> = () => {
   return (
      <div>CloudinaryImage</div>
   )
}
import { buildUrl, extractPublicId} from "cloudinary-build-url"
import { ComponentPropsWithoutRef, FC } from "react"

interface CloudinaryImageProps extends ComponentPropsWithoutRef<"figure"> {
   publicId: string
   height: string | number
   width: string | number
   alt: string
   title?: string
   className?: string
   noStyle?: boolean
   aspect?: {
      width: number
      height: number
   }
   mdx?: boolean
}

export const CloudinaryImage:FC<CloudinaryImageProps> = ({
   publicId,
   height,
   width,
   alt,
   title,
   className,
   noStyle = false,
   mdx = false,
   style,
   aspect,
   ...props
}) => {
   const url = buildUrl(publicId, {
      cloud: {
         cloudName: "laupwing"
      },
      transformations: {
         rawTransformation: aspect 
            ? `c_full,ar_${aspect.width}:${aspect.height},w_${width}`
            : undefined
      }
   })

   return (
      <div>CloudinaryImage</div>
   )
}
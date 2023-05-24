import { buildUrl, extractPublicId} from "cloudinary-build-url"
import clsx from "clsx"
import Image from "next/image"
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
   console.log(publicId)
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

   // console.log(url)
   // console.log(extractPublicId("https://res.cloudinary.com/laupwing/image/upload/v1684915995/samples/bike.jpg"))

   const aspectRatio = aspect ? aspect.height / aspect.width : undefined

   return (
      <figure
         className={clsx(
            className,
            !noStyle && "overflow-hidden rounded shadow dark:shadow-none",
            (mdx && +width <= 800) && "mx-auto w-full"
         )}
         style={{
            ...((mdx && +width <= 800) ? { maxWidth: width } : {}),
            ...style
         }}
         {...props}
      >
         <div
            style={{
               position: "relative",
               height: 0,
               paddingTop: aspectRatio
                  ? `${aspectRatio * 100}%`
                  : `${(+height / +width) * 100}%`
            }}
         >
            <div className="absolute top-0 left-0">
               <Image 
                  width={+width}
                  height={+height}
                  src={"https://res.cloudinary.com/theodorusclarence/image/upload/q_auto,f_auto,c_fill,ar_5:2,w_1200/theodorusclarence/banner/bernd-dittrich-W1NsOMhU8hI-unsplash_ugoyld"}
                  alt={alt}
                  title={title || alt}
               />
            </div>
         </div>
      </figure>
   )
}
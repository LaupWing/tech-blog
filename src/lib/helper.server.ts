import { createHash } from "crypto"
import { z } from "zod"

export const getSessionId = (req: Request) => {
   const ipAddress = req.headers.get("x-forwarded-for") || "0.0.0.0"

   const currentUserId = createHash("md5")
      .update(ipAddress + (process.env.IP_ADDRESS_SALT as string), "utf8")
      .digest("hex")
   return currentUserId
} 

export const extractSlug = (req: Request) => {
   const availableContentTypes = ["library", "blog", "projects"]
   const splitted = req.url.split("/")
   const contentType = splitted[splitted.length - 2]
   if(availableContentTypes.includes(contentType)){
      const slug = z.string().parse(splitted[splitted.length - 1])
      return slug
   }else {
      throw new Error("Content type is not available")
   }

}
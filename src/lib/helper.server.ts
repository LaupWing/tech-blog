import { createHash } from "crypto"
import { z } from "zod"
import { prismaClient } from "./prisma"

export const getSessionId = (req: Request) => {
   const ip_address = req.headers.get("x-forwarded-for") || "0.0.0.0"
   console.log(ip_address)

   const current_user_id = createHash("md5")
      .update(ip_address + (process.env.IP_ADDRESS_SALT as string), "utf8")
      .digest("hex")
   return current_user_id
} 

export const extractSlug = (req: Request) => {
   const splitted = req.url.split("/")
   const availableEndpoints = ["content", "like"]

   if(availableEndpoints.includes(splitted[splitted.length - 2])){
      const slug = z.string().parse(splitted[splitted.length - 1])
      return slug
   }else {
      throw new Error("Not a content API endpoint")
   }
}

export const getUserLikeCount = async ({
   sessionId,
   slug
}: {
   sessionId: string
   slug: string
}) => {
   return await prismaClient.like.count({
      where: {
         sessionId: sessionId,
         ContentMeta: {
            slug: slug
         }
      }
   })
}
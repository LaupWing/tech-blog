import { createHash } from "crypto"
import { z } from "zod"
import { prismaClient } from "./prisma"

export const getSessionId = (req: Request) => {
   const ipAddress = req.headers.get("x-forwarded-for") || "0.0.0.0"

   const currentUserId = createHash("md5")
      .update(ipAddress + (process.env.IP_ADDRESS_SALT as string), "utf8")
      .digest("hex")
   return currentUserId
} 

export const extractSlug = (req: Request) => {
   const splitted = req.url.split("/")
   // Need to add content and like check

   if(splitted[splitted.length - 2] === "content"){
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
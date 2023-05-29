import { createHash } from "crypto"

export const getSessionId = (req: Request) => {
   const ipAddress = req.headers.get("x-forwarded-for") || "0.0.0.0"
   console.log(process.env.IP_ADDRESS_SALT)

   const currentUserId = createHash("md5")
      .update(ipAddress + (process.env.IP_ADDRESS_SALT as string), "utf8")
      .digest("hex")
   return currentUserId
} 
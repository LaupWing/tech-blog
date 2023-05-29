import { createHash } from "crypto"
import { NextRequest } from "next/server"

export const getSessionId = () => {
   const ipAddress = req.headers["x-forwarded-for"] || "0.0.0.0"

   const currentUserId = createHash("md5")
      .update(ipAddress + (process.env.IP_ADDRESS_SALT as string), "utf8")
      .digest("hex")
   return currentUserId
} 
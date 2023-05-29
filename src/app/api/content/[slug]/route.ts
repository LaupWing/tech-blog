import { getSessionId } from "@/lib/helper.server"
import { NextApiRequest, NextApiResponse } from "next"
import { NextRequest } from "next/server"


export async function GET() {
      
}

export async function POST() {
   const sessionId = getSessionId()
   console.log(sessionId)
   res.send({})
}
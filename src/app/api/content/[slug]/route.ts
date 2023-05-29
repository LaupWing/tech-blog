import { getSessionId } from "@/lib/helper.server"
import { NextApiRequest, NextApiResponse } from "next"


export async function GET() {
      
}

export async function POST(req: NextApiRequest, res: NextApiResponse) {
   const sessionId = getSessionId(req)
}
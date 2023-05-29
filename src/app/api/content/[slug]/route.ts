import { getSessionId } from "@/lib/helper.server"
import { NextRequest, NextResponse } from "next/server"


export async function GET() {
   NextResponse.json({
      test: "test"
   })
}

export async function POST(req: NextRequest) {
   const sessionId = getSessionId(req)
   console.log(sessionId)
   
   NextResponse.json({})
}
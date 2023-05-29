import { getSessionId } from "@/lib/helper.server"
import { NextRequest, NextResponse } from "next/server"


export async function GET(req: Request) {
   NextResponse.json({})
}

export async function POST(req: Request) {
   // const sessionId = getSessionId(req)
   // console.log(sessionId)
   
   NextResponse.json({})
}
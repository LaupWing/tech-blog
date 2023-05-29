import { getSessionId } from "@/lib/helper.server"
import { NextRequest, NextResponse } from "next/server"


export async function GET(req: Request) {
   return NextResponse.json({
      "test": "test"
   })
}

export async function POST(req: Request) {
   const sessionId = getSessionId(req)
   
   try {
      // const content = await pr
   } catch(e){
      console.log(e)
   }
   
   return NextResponse.json({})
}
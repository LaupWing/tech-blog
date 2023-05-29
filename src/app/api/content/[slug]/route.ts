import { getSessionId } from "@/lib/helper.server"
import { prismaClient } from "@/lib/prisma"
import { NextRequest, NextResponse } from "next/server"


export async function GET(req: Request) {
   return NextResponse.json({
      "test": "test"
   })
}

export async function POST(req: Request) {
   const sessionId = getSessionId(req)
   // req.
   // try {
   //    // const content = await prismaClient.contentMeta.upsert({
   //    //    where: {
   //    //       slug: slug
   //    //    },
   //    //    create: {
   //    //       slug: slug
   //    //    }
   //    // })
   // } catch(e){
   //    console.log(e)
   // }
   
   return NextResponse.json({})
}
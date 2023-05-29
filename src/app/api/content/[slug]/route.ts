import { getSessionId } from "@/lib/helper.server"
import { prismaClient } from "@/lib/prisma"
import { NextRequest, NextResponse } from "next/server"


export async function GET(req: Request) {
   return NextResponse.json({
      "test": "test"
   })
}

export async function POST(req: NextRequest) {
   const sessionId = getSessionId(req)
   const splitted = req.url.split("/")
   const slug = splitted[splitted.length - 1]
   
   try {
      const content = await prismaClient.contentMeta.upsert({
         where: {
            slug: slug
         },
         create: {
            slug: slug,
            views: {
               create: {
                  sessionId: sessionId
               }
            }
         },
         update: {
            views:{
               create: {
                  sessionId
               }
            }
         },
         include: {
            _count: {
               select: {
                  views: true,
                  likes: true
               }
            }
         }
      })
   } catch(e){
      console.log(e)
   }
   
   return NextResponse.json({})
}
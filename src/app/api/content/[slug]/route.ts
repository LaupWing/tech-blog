import { getSessionId } from "@/lib/helper.server"
import { prismaClient } from "@/lib/prisma"
import { NextRequest, NextResponse } from "next/server"
import { z } from "zod"


export async function GET(req: Request) {
   const slug = z.string().parse(req)

   return NextResponse.json({
      "test": "test"
   })
}

export async function POST(req: Request) {
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
            View: {
               create: {
                  sessionId: sessionId
               }
            }
         },
         update: {
            View:{
               create: {
                  sessionId: sessionId
               }
            }
         },
         include: {
            _count: {
               select: {
                  Like: true,
                  View: true
               }
            }
         }
      })
      return NextResponse.json({
         contentViews: content?._count.View ?? 0,
         contentLikes: content?._count.Like ?? 0
      }, {
         status: 201
      })
   } catch(e: unknown){
      if (e instanceof Error) {
         return NextResponse.json({
            message: e.message ?? "Internal Server Error"
         }, {
            status: 500
         })
      } else {
         return NextResponse.json({
            message: "Internal Server Error"
         }, {
            status: 500
         })
      }
   }
}
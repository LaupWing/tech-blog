import { prismaClient } from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function GET(req: Request) {
   const content = await prismaClient.contentMeta.findMany({
      include: {
         _count: {
            select: {
               View: true,
               Like: true
            }
         }
      }
   })
   // Sort by slug
   content.sort((a, b) => a.slug.localeCompare(b.slug))

   return NextResponse.json({
      "test": "test"
   })
}
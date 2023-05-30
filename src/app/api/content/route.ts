import { prismaClient } from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function GET() {
   console.log("fetching from endpoint")
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
   console.log(content)
   return NextResponse.json(content, {
      status: 200
   })
}
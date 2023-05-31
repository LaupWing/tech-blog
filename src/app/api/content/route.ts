import { prismaClient } from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function GET() {
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
   return NextResponse.json(content.sort((a, b) => a.slug.localeCompare(b.slug)), {
      status: 200
   })
}
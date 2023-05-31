import { Accent } from "@/components/elements/Accent"
import { prismaClient } from "@/lib/prisma"
import { FC } from "react"

const test = async (slug: string) => {
   return prismaClient.contentMeta.findFirst({
      where: {
         slug: slug
      },
      include: {
         _count: {
            select: {
               View: true
            }
         }
      }
   })
}

{/* @ts-expect-error Server Component */}
export const Views:FC<{
   slug: string
}> = async ({ slug }) => {
   const content = await test(slug)
   console.log(content)
   await new Promise((resolve) => {
      setTimeout(() => {
         resolve(true)
      }, 4000)
   })
   return (
      <Accent>test views</Accent>
   )
}
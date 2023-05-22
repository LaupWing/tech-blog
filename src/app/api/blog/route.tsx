import { Inter } from "next/font/google"
import { ImageResponse, NextResponse } from "next/server"

export const inter400 = fetch(
   new URL("Inter-Regular.ttf", import.meta.url)
).then((res) => res.arrayBuffer())

export const runtime = "edge"

export async function GET(request: Request) {
   const interRegular = await inter400
   console.log(new URL("Inter-Regular.ttf", import.meta.url))
   console.log(interRegular)
   return NextResponse.json({
      test: "test"
   })
}
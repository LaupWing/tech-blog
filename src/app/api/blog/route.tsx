import { ImageResponse, NextResponse } from "next/server"

export const inter400 = fetch(
   new URL("@/assets/fonts/Inter-Regular.ttf", import.meta.url)
).then((res) => res.arrayBuffer())

export const inter500 = fetch(
   new URL("@/assets/fonts/Inter-Medium.ttf", import.meta.url)
).then((res) => res.arrayBuffer())

export const runtime = "edge"

export async function GET(request: Request) {
   const interRegular = await inter400
   const interMedium = await inter500

   const { searchParams } = new URL(request.url)
   
   const templateTitle = searchParams.get("templateTitle")
   const banner = searchParams.get("banner")

   const query = {
      templateTitle: templateTitle ?? "Blog Title",
      banner
   }
   
   return new ImageResponse(
      <div
         style={{
            height: "100%",
            width: "100%",
            fontFamily: "Inter",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "4rem 3rem",
            backgroundColor: "#0e0e0e"
         }}
      ></div>
   )
}
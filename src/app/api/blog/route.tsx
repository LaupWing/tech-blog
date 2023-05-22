import { Inter } from "next/font/google"
import { ImageResponse } from "next/server"

const inter = Inter({ subsets: ["latin"] })

export async function GET(request: Request) {
   console.log(inter)
}
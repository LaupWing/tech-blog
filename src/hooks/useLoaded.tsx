"use client"
import { usePreloadeState } from "@/context/PreloadContext"

export const useLoaded = () => {
   const preloaded = usePreloadeState()

   return (
      <div>useLoaded</div>
   )
}
"use client"
import { ThemeProvider } from "next-themes"
import { PreloadProvider } from "./PreloadContext"
import NProgress from "nprogress"
import { FC, PropsWithChildren } from "react"
import NextNProgress from "nextjs-progressbar"
import { useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"
// import { SWRConfig } from "swr"
// import axios from "axios"

export const AppProvider: FC<PropsWithChildren> = ({ children }) => {
   const searchParams = useSearchParams()
   const pathname = usePathname()

   useEffect(() => {
      NProgress.start()
   }, [searchParams])
   useEffect(() => {
      NProgress.start()
   }, [pathname])

   return (
      <ThemeProvider attribute="class" defaultTheme="light">
         <NextNProgress />
         {/* <PreloadProvider> */}
            {/* <SWRConfig
               value={{
                  fetcher: (url) => axios.get(url).then((res) => res.data),
               }}
            > */}
            {children}
            {/* </SWRConfig> */}
         {/* </PreloadProvider> */}
      </ThemeProvider>
   )
}

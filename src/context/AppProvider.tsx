"use client"
import { ThemeProvider } from "next-themes"
import { PreloadProvider } from "./PreloadContext"
import { FC, PropsWithChildren } from "react"
import NextNProgress from "nextjs-progressbar"
// import { SWRConfig } from "swr"
// import axios from "axios"

export const AppProvider: FC<PropsWithChildren> = ({ children }) => {
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

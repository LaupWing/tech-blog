"use client"
import { ThemeProvider } from "next-themes"
// import { PreloadProvider } from "./PreloadContext"
import { FC, PropsWithChildren } from "react"
import { SWRConfig } from "swr"
// import axios from "axios"

export const AppProvider: FC<PropsWithChildren> = ({ children }) => {
   return (
      <ThemeProvider attribute="class" defaultTheme="light">
         {/* <PreloadProvider> */}
            <SWRConfig
               value={{
                  fetcher: (url) => fetch(url).then((res) => res.json()),
               }}
            >
            {children}
            </SWRConfig>
         {/* </PreloadProvider> */}
      </ThemeProvider>
   )
}

"use client"
import { ThemeProvider } from "next-themes"
import { PreloadProvider } from "./PreloadContext"
import { FC, PropsWithChildren } from "react"

export const AppProvider:FC<PropsWithChildren> = ({ children }) => {
   return (
      <ThemeProvider attribute="class" defaultTheme="light">
         <PreloadProvider>
            {children}
         </PreloadProvider>
      </ThemeProvider> 
   )
}
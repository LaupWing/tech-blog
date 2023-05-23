"use client"
import { useTheme } from "next-themes"

export const ThemeButton = () => {
   const { theme } = useTheme()
   console.log(theme)

   return (
      <button>ThemeButton</button>
   )
}
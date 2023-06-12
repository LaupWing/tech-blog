"use client"
import clsx from "clsx"
import { useTheme } from "next-themes"
import { IconMoon, IconSun } from "../Icons"
import { useEffect, useState } from "react"

export const ThemeButton = () => {
   const { theme, setTheme } = useTheme()
   const [mounted, setMounted] = useState(false) 

   useEffect(() => {
      setMounted(true)
   }, [])

   return (
      <button
         className={clsx(
            "rounded-md p-2 focus:outline-none md:p-2.5 border dark:border-gray-600 hover:border-accent-dark hover:text-accent-dark text-lg md:text-xl"
         )}
         onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
         {mounted 
            ?  <>
                  {theme === "light" ? <IconMoon /> : <IconSun />}
               </> 
            : <IconSun/>
         }
      </button>
   )
}
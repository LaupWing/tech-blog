"use client"
import clsx from "clsx"
import { useTheme } from "next-themes"
import { IconMoon } from "../Icons"

export const ThemeButton = () => {
   const { theme } = useTheme()

   return (
      <button
         className={clsx(
            "rounded-md p-2 focus:outline-none md:p-2.5 border dark:border-gray-600 hover:border-accent hover:text-accent text-lg md:text-xl"
         )}
      >
         <IconMoon />
      </button>
   )
}
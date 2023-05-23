import clsx from "clsx"
import { FC, PropsWithChildren, createContext, useContext, useEffect, useState } from "react"

const PreloadContext = createContext<boolean>(false)

export const PreloadProvider:FC<PropsWithChildren> = ({
   children
}) => {
   const [preloaded, setPreloaded] = useState(false)

   useEffect(() => {
      setTimeout(() => {
         setPreloaded(true)
      }, 200)
   }, [])

   return (
      <PreloadContext.Provider value={preloaded}>
         <div
            className={clsx(
               "fixed inset-0 items-center justify-center bg-primary transition-opacity z-[100]",
               preloaded && "pointer-events-none opacity-0"
            )}
         />
         {children}
      </PreloadContext.Provider>
   )
}

export const usePreloadeState = () => useContext(PreloadContext)
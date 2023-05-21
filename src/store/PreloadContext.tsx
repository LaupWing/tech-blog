import { FC, PropsWithChildren, createContext, useEffect, useState } from "react"

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
         {children}
      </PreloadContext.Provider>
   )
}
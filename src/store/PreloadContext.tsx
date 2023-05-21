import { FC, PropsWithChildren, createContext } from "react"

const PreloadContext = createContext<boolean>(false)

export const PreloadProvider:FC<PropsWithChildren> = ({
   children
}) => {
   return (
      <div>PreloadContext</div>
   )
}
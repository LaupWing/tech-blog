"use client"
import { ComponentPropsWithoutRef, FC, useRef, useState } from "react"

interface CustomCodeProps extends ComponentPropsWithoutRef<"code">{}

export const CustomCode:FC<CustomCodeProps> = ({
   className,
   children
}) => {
   const textRef = useRef<HTMLDivElement>(null)
   const [isCopied, setIsCopied] = useState<boolean>(false)
   // const [copy] = 

   return (
      <div>CustomCode</div>
   )
}
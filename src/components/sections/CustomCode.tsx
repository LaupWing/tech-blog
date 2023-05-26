"use client"
import useCopyToClipboard from "@/hooks/useCopyToClipboard"
import { ComponentPropsWithoutRef, FC, useRef, useState } from "react"

interface CustomCodeProps extends ComponentPropsWithoutRef<"code">{}

export const CustomCode:FC<CustomCodeProps> = ({
   className,
   children,
   ...props
}) => {
   const textRef = useRef<HTMLDivElement>(null)
   const [isCopied, setIsCopied] = useState<boolean>(false)
   const [copy] = useCopyToClipboard()

   const language = className?.includes("language")
      ? className.replace("language-", "").replace(" code-highlight", "")
      : null

   return (
      <code {...props} data-code-type={language && "code-block"}>
         {language ? (
            <div ref={textRef} className="overflow-x-auto">
               {children}
            </div>
         ) : (
            <span>{children}</span>
         )}
         {language && (
            <div className="absolute left-6 top-0 rounded-b-md border border-t-0 border-gray-600 px-3 py-1">
               <span className="select-none bg-gradient-to-tr from-accent-light to-accent-dark bg-clip-text font-medium text-transparent">
                  {language}
               </span>
            </div>
         )}
      </code>
   )
}
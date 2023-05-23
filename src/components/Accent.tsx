import clsx from "clsx"
import { ComponentPropsWithoutRef, FC } from "react"

export const Accent:FC<ComponentPropsWithoutRef<"span">> = ({
   children,
   className
}) => {

   return (
      <span
         className={clsx(
            className,
            "transition-colors from-[#f1e69a] bg-gradient-to-r to-[#a79a5a] bg-clip-text text-transparent"
         )}
      >
         {children}
      </span>
   )
}
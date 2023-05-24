import { TooltipProps, Tooltip as TippyTooltip } from "react-tippy"
import { ComponentPropsWithoutRef, ReactNode, FC } from "react"
import clsx from "clsx"

type TooltipTextProps = {
   tipChildren: ReactNode
   children: ReactNode
   className?: string
   spanClassName?: string
   withUnderline?: boolean
} & TooltipProps & Omit<ComponentPropsWithoutRef<"div">, "children" | "className">

export const Tooltip:FC<TooltipTextProps> = ({
   tipChildren,
   children,
   className,
   spanClassName,
   withUnderline = false,
   ...props
}) => {
   return (
      <TippyTooltip
         trigger="mouseenter"
         interactive
         html={
            <div className={clsx(className, "inline-block rounded-md bg-primary p-2 text-gray-600 shadow-md dark:text-gray-200 border dark:border-gray-600")}>
               {tipChildren}
            </div>
         }  
         {...props}
      >
         {withUnderline ? (
            <span 
               className={clsx(spanClassName, "underline")}
               style={{
                  textDecorationStyle: "dotted"
               }}
            >
               {children}
            </span>
         ) : (
            <>{children}</>
         )}
      </TippyTooltip>
   )
}
import { TooltipProps, Tooltip as TippyTooltip } from "react-tippy"
import { ComponentPropsWithoutRef, ReactNode, FC } from "react"

declare module "react-tippy" {
   export interface TooltipProps {
     children?: React.ReactNode;
   }
 }

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
            <div>
               {tipChildren}
            </div>
         }  
         {...props}
      >

      </TippyTooltip>
   )
}
import { LinkProps } from "next/link"
import { ComponentPropsWithRef, FC, ReactNode } from "react"

export interface UnstyledLinkProps extends ComponentPropsWithRef<"a">, LinkProps {
   href: string
   children: ReactNode
   openNewTab?: boolean
   className?: string
}

export const UnstyledLink:FC<UnstyledLinkProps> = () => {
   return (
      <div>UnstyledLink</div>
   )
}
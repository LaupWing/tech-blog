import Link, { LinkProps } from "next/link"
import { ComponentPropsWithRef, FC, ReactNode } from "react"

export interface UnstyledLinkProps extends ComponentPropsWithRef<"a">, LinkProps {
   href: string
   children: ReactNode
   openNewTab?: boolean
   className?: string
}

export const UnstyledLink:FC<UnstyledLinkProps> = ({
   children,
   href,
   openNewTab,
   className,
   ...props
}) => {
   const isNewTab = openNewTab !== undefined
      ? openNewTab
      : href && !href.startsWith("/") && !href.startsWith("#")

   if(!isNewTab) {
      return (
         <Link 
            href={href}
            className={className}
            {...props}
         >
            {children}
         </Link>
      )
   }

   return (
      <a
         target="_blank"
         rel="noopener noreferrer"
         href={href}
         {...props}
         className={className}
      >
         {children}
      </a>
   )
}
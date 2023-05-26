"use client"
import { FC, useMemo } from "react"
import { getMDXComponent } from "mdx-bundler/client"
import { MDXComponents } from "@/components/MDXComponents"

interface ContentProps {
   code: string
}

const Content:FC<ContentProps> = ({
   code
}) => {
   const Component = useMemo(() => getMDXComponent(code), [code])

   return (
      <Component
         components={
            {
               ...MDXComponents
            } as any
         }
      />
   )
}
export default Content
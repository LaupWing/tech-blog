"use client"
import { FC, useMemo } from "react"
import { getMDXComponent } from "mdx-bundler/client"
import { MDXComponents } from "@/components/MDXComponents"
import useContentMeta from "@/hooks/useContentMeta"

interface ContentProps {
   code: string
   slug: string
}

const Content:FC<ContentProps> = ({
   code,
   slug
}) => {
   const Component = useMemo(() => getMDXComponent(code), [code])
   const meta = useContentMeta(slug, {
      runIncrement: true
   })

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
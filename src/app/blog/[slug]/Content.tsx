"use client"
import { FC, useMemo } from "react"
import { getMDXComponent } from "mdx-bundler/client"

interface ContentProps {
   code: string
}

const Content:FC<ContentProps> = ({
   code
}) => {
   const Component = useMemo(() => getMDXComponent(code), [code])

   return (
      <div>Content</div>
   )
}
export default Content
"use client"
import { IconEye } from "@/components/Icons"
import { MDXComponents } from "@/components/MDXComponents"
import { TechIcons, TechListType } from "@/components/TechIcons"
import { Accent } from "@/components/elements/Accent"
import { LibraryFrontmatter } from "@/types/frontmatters"
import { getMDXComponent } from "mdx-bundler/client"
import { FC, useMemo } from "react"

interface ContentSectionProps {
   frontmatter: LibraryFrontmatter
   code: string
}

const ContentSection:FC<ContentSectionProps> = ({
   frontmatter,
   code
}) => {
   const Component = useMemo(() => getMDXComponent(code), [code])
   return (
      <section className="layout">
         <div className="border-b pb-4 dark:border-gray-600">
            <h1>{frontmatter.title}</h1>
            <p className="mt-2 text-sm border-gray-600 dark:text-gray-300">
               {frontmatter.description}
            </p>
            <div className="mt-2 flex items-center justify-start gap-3 text-sm font-medium text-gray-600 dark:text-gray-300">
               <div className="flex items-center gap-1">
                  <IconEye className="inline-block text-base" />
                  <Accent>
                     --- views
                  </Accent>
               </div>
               <span>•</span>
               <TechIcons 
                  techs={frontmatter.tags.split(",") as Array<TechListType>}
               />
            </div>
         </div>
         <hr className="dark:border-gray-600" />
         <section className="lg:grid lg:grid-cols-[auto,250px] lg:gap-8">
            <article className="mdx mt-4 prose mx-auto w-full transition-colors dark:prose-invert">
               <Component
                  components={
                     {
                        ...MDXComponents
                     } as any
                  }
               />
            </article>
         </section>
      </section>
   )
}
export default ContentSection
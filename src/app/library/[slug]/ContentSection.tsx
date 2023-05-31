"use client"
import { IconEye } from "@/components/Icons"
import { MDXComponents } from "@/components/MDXComponents"
import { TechIcons, TechListType } from "@/components/TechIcons"
import { LikeButton } from "@/components/buttons"
import { Accent } from "@/components/elements/Accent"
import { TableContents } from "@/components/sections/TableContents"
import useContentMeta from "@/hooks/useContentMeta"
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
   const meta = useContentMeta(frontmatter.slug, {
      runIncrement: true
   })
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
                  {meta.isLoading ? (
                     <Accent className="animate-pulse"> --- views</Accent>
                  ) :( 
                     <Accent>{meta.views} views</Accent>
                  )}
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
            <aside className="py-4">
               <div className="sticky top-36">
                  <TableContents
                     slug={frontmatter.slug}
                  />
                  <div className="flex items-center justify-center py-8">
                     <LikeButton />
                  </div>
               </div>
            </aside>
         </section>
      </section>
   )
}
export default ContentSection
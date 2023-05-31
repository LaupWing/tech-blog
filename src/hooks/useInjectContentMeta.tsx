"use client"
import { pickContentMeta } from "@/lib/helpers"
import { ContentType, InjectedMeta, PickFrontmatter } from "@/types/frontmatters"
import { ContentMeta } from "@/types/meta"
import { useMemo, useState, useEffect } from "react"
import useSwr from "swr"

export default function useInjectContentMeta<T extends ContentType>(
   type: T,
   frontmatter: Array<PickFrontmatter<T>>
) {
   const { data, isLoading } = useSwr<Array<ContentMeta>>(
      "/api/content"
   )
   const meta = useMemo(
      () => pickContentMeta(data, type),
      [data, type]
   )

   type PopulatedContent = Array<PickFrontmatter<T> & InjectedMeta>

   const [populatedContent, setPopulatedContent] = useState<PopulatedContent>(
      () => [...frontmatter] as PopulatedContent
   )

   useEffect(() => {
      if (meta){
         const mapped = frontmatter.map((fm) => {
            const views = meta.find(meta => meta.slug === fm.slug)?.views
            const likes = meta.find(meta => meta.slug === fm.slug)?.likes

            return {
               ...fm,
               views: views,
               likes: likes
            }
         })
         setPopulatedContent(mapped)
      }
   }, [])

   return populatedContent
}
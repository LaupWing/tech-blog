"use client"
import { ContentType, PickFrontmatter } from "@/types/frontmatters"
import { ContentMeta } from "@/types/meta"
import { useMemo } from "react"
import useSwr from "swr"

export default function useInjectContentMeta<T extends ContentType>(
   type: T,
   frontmatter: Array<PickFrontmatter<T>>
) {
   const { data, isLoading } = useSwr<Array<ContentMeta>>(
      "/api/content"
   )
   const meta = useMemo
}
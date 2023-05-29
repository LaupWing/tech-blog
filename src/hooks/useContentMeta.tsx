import { cacheOnly } from "@/lib/swr"
import { ContentMeta } from "@/types/meta"
import useSWR from "swr"

export default function useContentMeta(
   slug: string,
   {
      runIncrement = false
   } :
   {
      runIncrement?: boolean
   } = {}
){ 
   const { data: allContentMeta } = useSWR<Array<ContentMeta>>(
      "/api/content",
      cacheOnly
   )
   const _preloadMeta = allContentMeta?.find((meta) => meta.slug === slug)
   // const preloadMet
   
}
import { cacheOnly } from "@/lib/swr"
import { ContentMeta, SingleContentMeta } from "@/types/meta"
import { useEffect } from "react"
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
   const preloadMeta: SingleContentMeta | undefined = _preloadMeta
      ? {
         contentLikes: _preloadMeta.likes,
         contentViews: _preloadMeta.views,
         likesByUser: _preloadMeta.likesByUser
      }
      : undefined
   
   const {
      data,
      error: isError,
      mutate
   } = useSWR<SingleContentMeta>(
      "/api/content" + slug,
      {
         fallbackData: preloadMeta
      }
   )

   useEffect(() => {
      if (runIncrement){
         incrementViews(slug)
            .then(data => {
               mutate({
                  ...data
               })
            })
      }
   }, [mutate, runIncrement, slug])
}

async function incrementViews(slug: string) {
   const res = await fetch("/api/content" + slug, {
      method: "POST"
   })
   const data = await res.json()
   return data
}
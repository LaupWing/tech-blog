"use client"
import { cacheOnly } from "@/lib/swr"
import { ContentMeta, SingleContentMeta } from "@/types/meta"
import { debounce } from "lodash"
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
   // const { data: allContentMeta } = useSWR<Array<ContentMeta>>(
   //    "/api/content",
   //    cacheOnly
   // )
   // console.log(allContentMeta)
   // const _preloadMeta = allContentMeta?.find((meta) => meta.slug === slug)
   // const preloadMeta: SingleContentMeta | undefined = _preloadMeta
   //    ? {
   //       contentLikes: _preloadMeta.likes,
   //       contentViews: _preloadMeta.views,
   //       likesByUser: _preloadMeta.likesByUser
   //    }
   //    : undefined
   
   // const {
   //    data,
   //    error: isError,
   //    mutate
   // } = useSWR<SingleContentMeta>(
   //    "/api/content/" + slug,
   //    // {
   //    //    fallbackData: preloadMeta
   //    // }
   // )
   incrementViews(slug)
   // console.log(data)

   // useEffect(() => {
   //    if (runIncrement){
   //       incrementViews(slug)
   //          .then(data => {
   //             mutate({
   //                ...data
   //             })
   //          })
   //    }
   // }, [mutate, runIncrement, slug])

   // const addLike = () => {
   //    if (!data || data.likesByUser >= 5){
   //       return
   //    }

   //    mutate(
   //       {
   //          contentViews: data.contentViews,
   //          contentLikes: data.contentLikes + 1,
   //          likesByUser: data.likesByUser + 1
   //       },
   //       false
   //    )

   //    incrementLikes(slug).then(() => {
   //       debounce(() => {
   //          mutate()
   //       }, 1000)()
   //    })
   // }

   return {
      // isLoading: !isError && !data,
      // isError,
      // views: data?.contentViews,
      // contentLikes: data?.contentLikes ?? 0,
      // likesByUser: data?.likesByUser ?? 0,
      // addLike
   }
}

async function incrementViews(slug: string) {
   const res = await fetch("/api/content/" + slug, {
      method: "POST"
   })
   const data = await res.json()
   return data
}

async function incrementLikes(slug: string) {
   const res = await fetch("/api/like/" + slug, {
      method: "POST"
   })
   const data = await res.json()
   return data
}
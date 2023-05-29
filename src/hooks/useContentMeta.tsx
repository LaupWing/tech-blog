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
   // const { data: allContentMeta } = useSWR<Array<ContentMeta>>(
   //    contentMetaFlag
   // )
}
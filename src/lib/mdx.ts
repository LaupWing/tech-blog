import { ContentType, PickFrontmatter } from "@/types/frontmatters"
import { readFileSync, readdirSync } from "fs"
import { join } from "path"


export async function getAllFilesFrontmatter<T extends ContentType>(type: T) {
   const files = readdirSync(join(process.cwd(), "src", "contents", type))

   return files.reduce((allPosts: Array<PickFrontmatter<T>>, postSlug) => {
      const source = readFileSync(
         join(process.cwd(), "src", "contents", type, postSlug),
         "utf-8"
      )
      // const {}
   })
}
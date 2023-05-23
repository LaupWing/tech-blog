import { ContentType } from "@/types/frontmatters"
import { readdirSync } from "fs"
import { join } from "path"


export async function getAllFilesFrontmatter<T extends ContentType>(type: T) {
   const files = readdirSync(join(process.cwd(), "src", "contents", type))
}
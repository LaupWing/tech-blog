import { ReadTimeResults } from "reading-time"

export interface BlogFrontmatter {
   wordCount: number
   readingTime: ReadTimeResults
   slug: string
   title: string
   description: string
   banner: string
   publishedAt: string
   lastUpdated?: string
   tags: string
   repost?: string
}

export interface ProjectFrontmatter {
   slug: string
   title: string
   publishedAt: string
   lastUpdated?: string
   description: string
   category?: string
   techs: string
   banner: string
   link?: string
   github?: string
}


export type ContentType = "blog" | "library" | "projects"


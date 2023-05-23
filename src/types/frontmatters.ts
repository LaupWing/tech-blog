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

export interface BlogType {
   code: string
   frontmatter: BlogFrontmatter
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

export interface LibraryFrontmatter {
   slug: string
   title: string
   readTime: ReadTimeResults
   description: string
   tags: string
}

export interface LibraryType {
   code: string
   frontmatter: LibraryFrontmatter
}

export interface ProjectType {
   code: string
   frontmatter: ProjectFrontmatter
}

export type ContentType = "blog" | "library" | "projects"

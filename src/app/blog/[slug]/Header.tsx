"use client"
import { BlogFrontmatter } from "@/types/frontmatters"
import { FC } from "react"
import { IconClock, IconEye, IconHistory } from "@/components/Icons"
import { Accent } from "@/components/elements/Accent"
import { CloudinaryImage } from "@/components/images"
import { UnstyledLink } from "@/components/links"
import { format } from "date-fns"

interface HeaderProps {
   frontmatter: BlogFrontmatter
}

const Header:FC<HeaderProps> = ({
   frontmatter
}) => {
   const COMMIT_HISTORY_LINK = `https://github.com/LaupWing/tech-blog/commits/main/src/contents/blog/${frontmatter.slug}.mdx`
   return (
      <header className="pb-4">
         <CloudinaryImage
            publicId="samples/bike"
            alt="Bike"
            width={1200}
            height={(1200 * 2) /5}
            aspect={{
               height: 2,
               width: 5
            }}
         />
         <h1 className="mt-4">{frontmatter.title}</h1>
         <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
            Writton on{" "}
            {format(new Date(frontmatter.publishedAt), "MMMM dd, yyyy")} by
            Laup Wing
         </p>
         {frontmatter.lastUpdated && (
            <div className="mt-2 flex flex-wrap gap-2 text-sm text-gray-700 dark:text-gray-200">
               <p>
                  Last updated{" "}
                  {format(new Date(frontmatter.lastUpdated), "MMMM dd, yyyy")}
                  .
               </p>
               <UnstyledLink
                  href={COMMIT_HISTORY_LINK}
                  className="inline-flex items-center gap-1 rounded-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-accent-light focus:outline-none focus-visible:ring focus-visible:ring-accent-dark"
               >
                  <IconHistory className="text-lg" />
                  <span>See changes</span>
               </UnstyledLink>
            </div>
         )}
         <div className="mt-6 flex items-center justify-start gap-2 text-sm font-medium text-gray-600 dark:text-gray-300">
            <div className="flex items-center gap-1">
               <IconClock className="inline-block text-base" />
               <Accent>{frontmatter.readingTime.text}</Accent>
            </div>
            <div className="flex items-center gap-1">
               <IconEye className="text-base inline-block" />
               <Accent>--- views</Accent>
            </div>
         </div>
      </header>
   )
}
export default Header
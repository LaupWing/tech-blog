import { Accent } from "@/components/Accent"
import { IconNewspaper } from "@/components/Icons"
import { ButtonLink, UnstyledLink } from "@/components/links"
import { getAllFilesFrontmatter, getRecent } from "@/lib/mdx"
import { generateRss } from "@/lib/rss"

const fetchFrontmatters = async () => {
   generateRss()
   const blogs = await getAllFilesFrontmatter("blog")
   const projects = await getAllFilesFrontmatter("projects")
   const library = await getAllFilesFrontmatter("library")

   const recentBlogs = getRecent(blogs)
   const recentProjects = getRecent(projects)
   const recentLibrary = getRecent(library)

   return {
      recentBlogs,
      recentLibrary,
      recentProjects
   }
}

export default async function Home() {
   const {
      recentBlogs, 
      recentLibrary, 
      recentProjects} = await fetchFrontmatters()
   const socialLinkStyle = "inline-flex items-center gap-1 text-sm font-medium md:text-base text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white focus:outline-none focus-visible:ring focus-visible:ring-contrast group"
   return (
      <main>
         <section className="flex min-h-screen flex-col items-center justify-center -mt-20">
            <article className="layout">
               <h2 className="text-2xl md:text-4xl 2xl:text-5xl">
                  Hallo!
               </h2>
               <h1 className="mt-1 text-3xl md:text-5xl 2xl:text-6xl">
                  My name is <Accent>Laup Wing </Accent>
               </h1>
               <p className="mt-4 max-w-4xl text-gray-700 dark:text-gray-200 md:mt-6 md:text-lg 2xl:text-xl">
                  I possess a strong enthusiasm for both programming and fitness, finding fulfillment in assisting individuals either at the gym or in the realm of coding.
               </p>
               <div className="mt-8 flex flex-wrap gap-4 md:!text-lg">
                  <div className="group relative">
                     <div
                        className="absolute -inset-0.5 animate-pulse rounded blur from-[#f1e69a] bg-gradient-to-r to-[#a79a5a] opacity-75 transition duration-1000 group-hover:opacity-100 group-hover:duration-200"
                     />
                     <ButtonLink href="#intro">
                        Read the Blog
                     </ButtonLink>
                  </div>
                  <ButtonLink href="/about">
                     Learn more about me
                  </ButtonLink>
               </div>
               <div className="mt-4 flex flex-wrap gap-4 gap-y-2 md:mt-8">
                  <UnstyledLink
                     href="https://google.com"
                     className={socialLinkStyle}
                  >
                     <IconNewspaper className="shrink-0" />
                     <span>Resume</span>
                  </UnstyledLink>
               </div>
            </article>
         </section>
      </main>
   )
}

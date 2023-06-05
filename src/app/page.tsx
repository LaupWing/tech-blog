import { generateRss } from "@/lib/rss"
import { Suspense } from "react"
import { Accent } from "@/components/elements/Accent"
import { getAllFilesFrontmatter, getRecent } from "@/lib/mdx"
import { BlogCard, LibraryCard, ProjectCard } from "@/components/cards"
import { ButtonLink, UnstyledLink } from "@/components/links"
import { IconGithub, IconNewspaper, IconTwitter } from "@/components/Icons"
import { TC } from "@/components/TC"

export default async function Home() {
   generateRss()
   return (
      <main>
         <HomeIntro />
         <Suspense fallback={"loading"}>
            {/* @ts-expect-error Server Component */}
            <HomeBlogs />
         </Suspense>
         <Suspense fallback={"loading"}>
            {/* @ts-expect-error Server Component */}
            <HomeProjects />
         </Suspense>
         <Suspense fallback={"loading"}>
            {/* @ts-expect-error Server Component */}
            <HomeLibrary />
         </Suspense>
      </main>
   )
}

const fetchRecentBlogs = async () => {
   const blogs = await getAllFilesFrontmatter("blog")
   const recentBlogs = getRecent(blogs)

   return recentBlogs
}

const HomeBlogs = async () => {
   const recentBlogs = await fetchRecentBlogs()

   return (
      <section className="py-20">
         <article className="layout">
            <h2 id="projects" className="text-2xl md:text-4xl">
               <Accent>Recent Blog Posts</Accent>
            </h2>
            <ul className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
               {recentBlogs.map((post, i) => (
                  <BlogCard
                     key={post.slug}
                     post={post}
                  />
               ))}
            </ul>
            <ButtonLink
               className="mt-4"
               href="/blog"
               // Add tracking event
            >
               See more post
            </ButtonLink>
         </article>
      </section>
   )
}

const HomeIntro = () => {
   const socialLinkStyle = "inline-flex items-center gap-1 text-sm font-medium md:text-base text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white focus:outline-none focus-visible:ring focus-visible:ring-accent-light group"
   
   return (
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
               <UnstyledLink
                  href="https://google.com"
                  className={socialLinkStyle}
               >
                  <IconTwitter className="shrink-0 transition-colors group-hover:text-[#1da1f2]" />
                  <span>@laupwing</span>
               </UnstyledLink>
               <UnstyledLink
                  href="https://google.com"
                  className={socialLinkStyle}
               >
                  <IconGithub className="shrink-0" />
                  <span>laupwing</span>
               </UnstyledLink>
            </div>
         </article>
         <TC
            className="absolute bottom-0 right-6 transform-gpu w-[calc(100%-3rem)] md:w-[600px] 2xl:w-[900px] h-[calc(100%-3rem)] md:h-[600px] 2xl:h-[900px] opacity-20 dark:opacity-10 stroke-dark dark:stroke-accent-light"
         />
      </section>
   )
}

const fetchRecentLibrary = async () => {
   const library = await getAllFilesFrontmatter("library")

   const recentLibrary = getRecent(library)

   return recentLibrary
}

const HomeLibrary = async () => {
   const recentLibrary = await fetchRecentLibrary()

   return (
      <section className="py-20">
         <article className="layout">
            <h2 className="text-2xl md:text-4xl" id="library">
               <Accent>Libary of Code Snippets</Accent>
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
               List of code snippets. What is documented is never lost.
            </p>
            <ul className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
               {recentLibrary.map((snippet, i) => (
                  <LibraryCard
                     key={snippet.slug}
                     snippet={snippet}
                  />
               ))}
            </ul>
            <ButtonLink
               className="mt-4"
               href="/library"
               // Add tracking event
            >
               See more snippets
            </ButtonLink>
         </article>
      </section>
   )
}

const fetchRecentProjects = async () => {
   const projects = await getAllFilesFrontmatter("projects")
   const recentProjects = getRecent(projects)

   return recentProjects
}

const HomeProjects = async () => {
   const recentProjects = await fetchRecentProjects()

   return (
      <section className="py-20">
         <article className="layout">
            <h2 id="projects" className="text-2xl md:text-4xl">
               <Accent>Recent Projects</Accent>
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
               My most recent awesome projects.
            </p>
            <ul className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
               {recentProjects.map((project, i) => (
                  <ProjectCard
                     key={project.slug}
                     project={project}
                  />
               ))}
            </ul>
            <ButtonLink
               className="mt-4"
               href="/projects"
               // Add tracking event
            >
               See more projects
            </ButtonLink>
         </article>
      </section>
   )
}
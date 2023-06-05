"use client"
import { Accent } from "@/components/elements/Accent"
import { IconGithub, IconNewspaper, IconTwitter } from "@/components/Icons"
import { ButtonLink, UnstyledLink } from "@/components/links"
import { TC } from "@/components/TC"

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

export default HomeIntro
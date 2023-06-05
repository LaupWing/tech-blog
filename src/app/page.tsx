import { generateRss } from "@/lib/rss"
import HomeIntro from "@/app/components/Home/HomeIntro"
import HomeProjects from "@/app/components/Home/HomeProjects"
import { Suspense } from "react"
import HomeLibrary from "@/app/components/Home/HomeLibrary"

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

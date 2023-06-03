import { generateRss } from "@/lib/rss"
import HomeIntro from "./HomeIntro"
import HomeProjects from "./HomeProjects"
import HomeBlogs from "./HomeBlogs"
import { Suspense } from "react"
import HomeLibrary from "./HomeLibrary"

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



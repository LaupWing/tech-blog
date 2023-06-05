import { generateRss } from "@/lib/rss"
import HomeIntro from "@/app/components/Home/HomeIntro"
import HomeProjects from "@/app/components/Home/HomeProjects"
import HomeBlogs from "@/app/components/Home/HomeBlogs"
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



import { generateRss } from "@/lib/rss"

const fetchFrontmatters = async () => {
   generateRss()
}

export default function Home() {
   const test = fetchFrontmatters()
   console.log(test)
   return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
         
      </main>
   )
}

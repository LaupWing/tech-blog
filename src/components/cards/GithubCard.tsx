"use client"
import { 
   useState, 
   useEffect, 
   ComponentPropsWithoutRef,
   FC
} from "react"

interface GithubRepo {
   full_name: string
   description: string
   forks: number
   stargazers_count: number
   html_url: string
   owner: {
      avatar_url: string
      login: string
      html_url: string
   }
}

interface GithubCardProps extends ComponentPropsWithoutRef<"div"> {
   repo: string
}

export const GithubCard: FC<GithubCardProps> = ({
   repo
}) => {
   const [error, setError] = useState<false|string>(false)
   const [data, setData] = useState<GithubRepo>()

   useEffect(() => {
      const fetchData = async () => {
         const res = await fetch(`https://api.github.com/repos/${repo}`)
         const data = await res.json()
         setData(data)
      }
      fetchData()
   }, [])

   return !error && !data ? (
      <div>
         
      </div>
   ) : (
      <div className="mx-auto !block max-w-xl not-prose px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 animate-pulse bg-gray-300 dark:bg-gray-600 h-[111px]" />
   )
}
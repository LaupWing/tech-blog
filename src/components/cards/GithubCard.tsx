"use client"
import { useState } from "react"

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

export const GithubCard = () => {
   const [error, setError] = useState<false|string>(false)
   const [data, setDate] = useState()

   return (
      <div>GithubCard</div>
   )
}
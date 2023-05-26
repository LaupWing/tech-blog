import clsx from "clsx"
import { FC } from "react"
import { TweetProps, Tweet } from "react-twitter-widgets"

interface TweetCardProps extends TweetProps {
   className?: string
}

export const TweetCard:FC<TweetCardProps> = ({
   tweetId,
   className
}) => {
   return (
      <div className={clsx("not-prose w-[99%]", className)}>
         <Tweet tweetId={tweetId} />
      </div>
   )
}
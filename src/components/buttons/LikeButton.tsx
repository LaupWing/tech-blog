import { FC } from "react"

export const LikeButton = () => {
   return (
      <div>LikeButton</div>
   )
}

const LikeButtonHeart:FC<{ likes: number }> = ({ likes = 6}) => {
   return (
      <div className="relative">
         <div className="absolute w-full text-center text-2xl">

         </div>
      </div>
   )
}
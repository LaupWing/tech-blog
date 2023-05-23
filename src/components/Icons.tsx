import { IoArrowDownOutline, IoNewspaperSharp } from "react-icons/io5"
import { SiGithub, SiTwitter } from "react-icons/si"
import { IconType } from "react-icons"

export const IconNewspaper:IconType = (props) => {
   return (
      <IoNewspaperSharp 
         {...props}
      />
   )
}

export const IconArrowDown:IconType = (props) => {
   return (
      <IoArrowDownOutline
         {...props}
      />
   )
}

export const IconGithub:IconType = (props) => {
   return (
      <SiGithub
         {...props}
      />
   )
}

export const IconTwitter:IconType = (props) => {
   return (
      <SiTwitter
         {...props}
      />
   )
}


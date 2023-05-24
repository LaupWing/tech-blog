import { IoArrowDownOutline, IoNewspaperSharp } from "react-icons/io5"
import { SiGithub, SiTwitter } from "react-icons/si"
import { FiClock, FiEye, FiMoon, FiSun } from "react-icons/fi"
import { GiTechnoHeart } from "react-icons/gi"
import { IconType } from "react-icons"

export const IconNewspaper:IconType = (props) => {
   return (
      <IoNewspaperSharp 
         {...props}
      />
   )
}

export const IconHeart:IconType = (props) => {
   return (
      <GiTechnoHeart 
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

export const IconSun:IconType = (props) => {
   return (
      <FiSun
         {...props}
      />
   )
}

export const IconMoon:IconType = (props) => {
   return (
      <FiMoon
         {...props}
      />
   )
}

export const IconClock:IconType = (props) => {
   return (
      <FiClock
         {...props}
      />
   )
}

export const IconEye:IconType = (props) => {
   return (
      <FiEye
         {...props}
      />
   )
}
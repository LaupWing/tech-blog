import { IoArrowDownOutline, IoNewspaperSharp } from "react-icons/io5"
import { SiGithub, SiLinkedin, SiTwitter } from "react-icons/si"
import { FiClock, FiEye, FiMail, FiMoon, FiSun } from "react-icons/fi"
import { GiTechnoHeart } from "react-icons/gi"
import { HiCalendar, HiSelector } from "react-icons/hi"
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

export const IconLinkedin:IconType = (props) => {
   return (
      <SiLinkedin
         {...props}
      />
   )
}

export const IconMail:IconType = (props) => {
   return (
      <FiMail
         {...props}
      />
   )
}

export const IconCalendar:IconType = (props) => {
   return (
      <HiCalendar
         {...props}
      />
   )
}

export const IconSelector:IconType = (props) => {
   return (
      <HiSelector
         {...props}
      />
   )
}
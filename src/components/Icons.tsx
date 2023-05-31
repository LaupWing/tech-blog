/**
 * @see https://github.com/vercel/next.js/issues/46756
 * Migrated to react-icons to make nextjs run smoother
 */
import { IconType } from "@react-icons/all-files"
import { IoNewspaperSharp } from "@react-icons/all-files/io5/IoNewspaperSharp"
import { GiTechnoHeart } from "@react-icons/all-files/gi/GiTechnoHeart"
import { IoArrowDownOutline } from "@react-icons/all-files/io5/IoArrowDownOutline"
import { SiGithub } from "@react-icons/all-files/si/SiGithub"
import { SiLinkedin } from "@react-icons/all-files/si/SiLinkedin"
import { SiTwitter } from "@react-icons/all-files/si/SiTwitter"
import { FiClock } from "@react-icons/all-files/fi/FiClock"
import { FiEye } from "@react-icons/all-files/fi/FiEye"
import { FiMail } from "@react-icons/all-files/fi/FiMail"
import { FiMoon } from "@react-icons/all-files/fi/FiMoon"
import { FiSun } from "@react-icons/all-files/fi/FiSun"
import { MdHistory } from "@react-icons/all-files/md/MdHistory"
import { BiGitRepoForked } from "@react-icons/all-files/bi/BiGitRepoForked"
import { HiCalendar } from "@react-icons/all-files/hi/HiCalendar"
import { HiCheck } from "@react-icons/all-files/hi/HiCheck"
import { HiCheckCircle } from "@react-icons/all-files/hi/HiCheckCircle"
import { HiClipboard } from "@react-icons/all-files/hi/HiClipboard"
import { HiLink } from "@react-icons/all-files/hi/HiLink"
import { HiOutlineStar } from "@react-icons/all-files/hi/HiOutlineStar"
import { HiSelector } from "@react-icons/all-files/hi/HiSelector"

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

export const IconCheckmark:IconType = (props) => {
   return (
      <HiCheck
         {...props}
      />
   )
}

export const IconHistory:IconType = (props) => {
   return (
      <MdHistory
         {...props}
      />
   )
}

export const IconClipboard:IconType = (props) => {
   return (
      <HiClipboard
         {...props}
      />
   )
}

export const IconCheckCircle:IconType = (props) => {
   return (
      <HiCheckCircle
         {...props}
      />
   )
}

export const IconStar:IconType = (props) => {
   return (
      <HiOutlineStar
         {...props}
      />
   )
}

export const IconRepoForked:IconType = (props) => {
   return (
      <BiGitRepoForked
         {...props}
      />
   )
}

export const IconLink:IconType = (props) => {
   return (
      <HiLink
         {...props}
      />
   )
}
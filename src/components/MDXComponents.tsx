import { CustomLink } from "./links/CustomLink"
import Image from "next/image"
import { Pre } from "./sections"
import { CustomCode } from "./sections/CustomCode"
import { CloudinaryImage } from "./images"
import LiteYouTubeEmbed from "react-lite-youtube-embed"
import { Split } from "./sections/Split"
import { SplitImage } from "./sections/SplitImage"
import { TechIcons } from "./TechIcons"


export const MDXComponents = {
   a: CustomLink,
   Image,
   pre: Pre,
   code: CustomCode,
   CloudinaryImage,
   LiteYouTubeEmbed,
   Split,
   SplitImage,
   TechIcons,
   
}
import { CustomLink } from "./links/CustomLink"
import Image from "next/image"
import { Pre } from "./sections"
import { CustomCode } from "./sections/CustomCode"
import { CloudinaryImage } from "./images"
import LiteYouTubeEmbed from "react-lite-youtube-embed"


export const MDXComponents = {
   a: CustomLink,
   Image,
   pre: Pre,
   code: CustomCode,
   CloudinaryImage,
   LiteYouTubeEmbed,
}
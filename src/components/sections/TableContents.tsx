"use client"
import { FC, useRef, useEffect } from "react"

export type HeadingScrollSpy = Array<{
   id: string
   level: number
   text: string
}>

interface TableOfContentsProps {
   toc?: HeadingScrollSpy
   activeSection: string | null
   minLevel: number
}

export const TableContents:FC<TableOfContentsProps> = ({
   toc,
   activeSection,
   minLevel
}) => {
   const lastPosition = useRef<number>(0)

   useEffect(() => {
      const container = document.getElementById("toc-container")
      const activeLink = document.getElementById(`link-${activeSection}`)

      if (container && activeLink) {
         const cTop = container.scrollTop
         const cBottom = cTop + container.clientHeight

         const lTop = activeLink.offsetTop - container.offsetTop
         const lBottom = lTop + activeLink.clientHeight

         const isTotal = lTop >= cTop && lBottom <= cBottom

         const isScrollingUp = lastPosition.current > window.scrollY
         lastPosition.current = window.scrollY

         if(isTotal) {
            const offset = 25
            const top = isScrollingUp
               ? lTop - container.clientHeight + offset
               : lTop - offset

            container.scrollTo({
               top,
               behavior: "smooth"
            })
         }
      }
   }, [activeSection])

   return (
      <div
         id="toc-container"
         className="hidden max-h-[calc(100vh-9rem-113px)] overflow-hidden pb-4 lg:block"
      >
         <h3 className="text-gray-900 dark:text-gray-100 md:text-xl">
            Table of Contents
         </h3>
      </div>
   )
}
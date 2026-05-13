"use client"

import { useEffect, useState } from "react"

export default function ScrollProgress() {

  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {

    const handleScroll = () => {

      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight

      const scrollPosition = window.scrollY

      const progress =
        (scrollPosition / totalHeight) * 100

      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)

  }, [])

  return (

    <div
      className="
        fixed
        top-0
        left-0
        h-[4px]
        bg-blue-500
        z-[999]
        transition-all
        duration-150
      "
      style={{ width: `${scrollProgress}%` }}
    />

  )
}
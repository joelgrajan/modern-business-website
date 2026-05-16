"use client"

import { useEffect, useState } from "react"

export default function CursorGlow() {

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  })

  useEffect(() => {

    const updateMousePosition = (
      e: MouseEvent
    ) => {

      setPosition({
        x: e.clientX,
        y: e.clientY,
      })

    }

    window.addEventListener(
      "mousemove",
      updateMousePosition
    )

    return () =>
      window.removeEventListener(
        "mousemove",
        updateMousePosition
      )

  }, [])

  return (

    <div
      className="
        pointer-events-none
        fixed
        z-0
        h-[350px]
        w-[350px]
        rounded-full
        bg-blue-500/20
        blur-[120px]
        transition-transform
        duration-200
      "
      style={{
        left: position.x - 175,
        top: position.y - 175,
      }}
    />

  )
}
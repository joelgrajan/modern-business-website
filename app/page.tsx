"use client"
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Services from "@/components/Services"
import Testimonials from "@/components/Testimonials"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import ScrollProgress from "@/components/ScrollProgress"
import CursorGlow from "@/components/CursorGlow"
import { useEffect, useState } from "react"
export default function Home() {
  const [darkMode, setDarkMode] = useState(true)
  useEffect(() => {

  const savedTheme = localStorage.getItem("theme")

  if (savedTheme === "light") {
    setDarkMode(false)
  }

}, [])

useEffect(() => {

  localStorage.setItem(
    "theme",
    darkMode ? "dark" : "light"
  )

}, [darkMode])
  return (
    <div
  className={`
    min-h-screen
    relative
    overflow-hidden
    transition-colors
    duration-500

    ${darkMode
      ? "bg-slate-950 text-white"
      : "bg-slate-100 text-slate-900"}
  `}
>
      <div className="absolute top-[-200px] left-[-150px] w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px]"></div>

<div className="absolute bottom-[-200px] right-[-150px] w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[120px]"></div>
<CursorGlow />
     <div className="relative z-10">
  <ScrollProgress />
  
  <Navbar
  darkMode={darkMode}
  setDarkMode={setDarkMode}
/>

  <Hero darkMode={darkMode} />

  <About />

  <Services darkMode={darkMode} />
  <Testimonials darkMode={darkMode} />

  <Contact />

  <Footer />

</div>

    </div>
  )
}
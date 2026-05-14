"use client"

import { useEffect, useState } from "react"

export default function Navbar({
  darkMode,
  setDarkMode,
}: {
  darkMode: boolean
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>
}) {

  const [menuOpen, setMenuOpen] = useState(false)

  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {

    const handleScroll = () => {

      const sections = [
        "home",
        "about",
        "services",
        "contact",
      ]

      sections.forEach((section) => {

        const element =
          document.getElementById(section)

        if (element) {

          const rect =
            element.getBoundingClientRect()

          if (
            rect.top <= 150 &&
            rect.bottom >= 150
          ) {
            setActiveSection(section)
          }

        }

      })

    }

    window.addEventListener(
      "scroll",
      handleScroll
    )

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      )

  }, [])

  return (

    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[92%] max-w-7xl z-50">

      <div className="flex justify-between items-center">

        {/* Logo Box */}

        <div
         className={`
  backdrop-blur-xl
  border
  rounded-2xl
  px-6
  py-4
  transition-colors
  duration-500

  ${darkMode
    ? "bg-white/5 border-white/10"
    : "bg-black/5 border-black/10"}
`}
        >

          <h1 className="text-2xl lg:text-3xl font-bold">
            ELINS
          </h1>

        </div>

        {/* Navigation Box */}

        <div
          className={`
  backdrop-blur-xl
  border
  rounded-2xl
  px-8
  py-4
  flex
  items-center
  transition-colors
  duration-500

  ${darkMode
    ? "bg-white/5 border-white/10"
    : "bg-black/5 border-black/10"}
`}
        >

          {/* Desktop Menu */}

          <ul className="hidden lg:flex gap-8 text-lg">

            <li>
              <a
                href="#home"
                className={`
                  transition
                  ${activeSection === "home"
                    ? "text-blue-400"
                    : "hover:text-blue-400"}
                `}
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#about"
                className={`
                  transition
                  ${activeSection === "about"
                    ? "text-blue-400"
                    : "hover:text-blue-400"}
                `}
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#services"
                className={`
                  transition
                  ${activeSection === "services"
                    ? "text-blue-400"
                    : "hover:text-blue-400"}
                `}
              >
                Services
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className={`
                  transition
                  ${activeSection === "contact"
                    ? "text-blue-400"
                    : "hover:text-blue-400"}
                `}
              >
                Contact
              </a>
            </li>

          </ul>

          {/* Desktop Theme Toggle */}

          <button
            onClick={() => setDarkMode(!darkMode)}
           className={`
  hidden
  lg:block
  ml-6
  px-4
  py-2
  rounded-xl
  transition

  ${darkMode
    ? "bg-white/10 hover:bg-white/20"
    : "bg-black/10 hover:bg-black/20"}
`}
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          {/* Mobile Menu Button */}

          <button
            className="lg:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

        </div>

      </div>

      {/* Mobile Menu */}

      {menuOpen && (

        <div
          className={`
  mt-4
  backdrop-blur-xl
  border
  border-white/10
  rounded-2xl
  flex
  flex-col
  items-center
  gap-8
  py-10
  lg:hidden
  transition-colors
  duration-500

  ${darkMode
    ? "bg-slate-900/90"
    : "bg-white/90"}
`}
        >

          <a
            href="#home"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </a>

          <a
            href="#about"
            onClick={() => setMenuOpen(false)}
          >
            About
          </a>

          <a
            href="#services"
            onClick={() => setMenuOpen(false)}
          >
            Services
          </a>

          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>

          {/* Mobile Theme Toggle */}

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="
              mt-4
              px-4
              py-2
              rounded-xl
              bg-white/10
            "
          >
            {darkMode
              ? "☀️ Light Mode"
              : "🌙 Dark Mode"}
          </button>

        </div>

      )}

    </nav>

  )
}
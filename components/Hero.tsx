"use client"
import { motion } from "framer-motion"
export default function Hero({
  darkMode,
}: {
  darkMode: boolean
}) {
  return (

    <section
      id="home"
      className="min-h-screen pt-32 flex items-center px-6 lg:px-20"
    >

      <motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="max-w-5xl"
>

        <h1
          className="
            text-5xl
            sm:text-6xl
            lg:text-7xl
            font-bold
            leading-tight
            mb-8
          "
        >
          Build Modern Websites For Your Business
        </h1>

        <p
          className={`
  text-lg
  sm:text-xl
  leading-8
  max-w-3xl
  mb-10

  ${darkMode
    ? "text-gray-300"
    : "text-slate-700"}
`}
        >
          We create professional, responsive, and modern
          digital experiences for growing businesses.
        </p>

        <button
          className={`
  hover:scale-105
  active:scale-95
  transition-all
  duration-300
  px-8
  py-5
  rounded-2xl
  text-lg
  font-medium

  ${darkMode
    ? "bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/20"
    : "bg-slate-900 text-white hover:bg-slate-800 shadow-lg shadow-slate-400/20"}
`}
        >
          Get Started
        </button>

      </motion.div>

    </section>
  )
}
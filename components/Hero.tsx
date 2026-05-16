"use client"
import {
  motion,
  useMotionValue,
  useTransform,
} from "framer-motion"
export default function Hero({
  darkMode,
}: {
  darkMode: boolean
}) {
  const x = useMotionValue(0)

const y = useMotionValue(0)

const rotateX = useTransform(
  y,
  [-50, 50],
  [10, -10]
)

const rotateY = useTransform(
  x,
  [-50, 50],
  [-10, 10]
)
  return (

    <section
  id="home"
  className="
    min-h-screen
    pt-32
    flex
    items-center
    px-6
    lg:px-20

    relative
    overflow-hidden

    bg-cover
    bg-center
    bg-no-repeat
  "

  style={{
    backgroundImage:
      "linear-gradient(rgba(2,6,23,0.82), rgba(2,6,23,0.9)), url('/bg.jpg')",
  }}
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

        <motion.button

  onMouseMove={(e) => {

    const rect =
      e.currentTarget.getBoundingClientRect()

    const centerX =
      rect.left + rect.width / 2

    const centerY =
      rect.top + rect.height / 2

    x.set(e.clientX - centerX)

    y.set(e.clientY - centerY)

  }}

  onMouseLeave={() => {

    x.set(0)

    y.set(0)

  }}

  style={{
    rotateX,
    rotateY,
  }}

  className={`
    px-8
    py-5
    rounded-2xl
    text-lg
    font-medium
    transition-all
    duration-300
    hover:scale-105

    ${darkMode
      ? "bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/20"
      : "bg-slate-900 text-white hover:bg-slate-800 shadow-lg shadow-slate-400/20"}
  `}
>

  Get Started

</motion.button>

      </motion.div>

    </section>
  )
}
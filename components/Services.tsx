"use client"
import { motion } from "framer-motion"
const services = [
  {
    title: "Web Design",
    description:
      "Modern and responsive website designs tailored for your business.",
  },

  {
    title: "Development",
    description:
      "Fast and scalable websites built using modern technologies.",
  },

  {
    title: "SEO Optimization",
    description:
      "Improve your online visibility and reach more customers effectively.",
  },
]

export default function Services({
  darkMode,
}: {
  darkMode: boolean
}) {
  return (
    <section id="services" className="py-28 px-6 lg:px-20">

      <div className="text-center mb-20">

        <h2 className="text-5xl font-bold mb-6">
          Our Services
        </h2>

        <p className="text-slate-300 text-lg">
          Professional digital solutions for modern businesses.
        </p>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {services.map((service, index) => (

          <motion.div
  key={index}

  initial={{ opacity: 0, y: 50 }}

  whileInView={{ opacity: 1, y: 0 }}

  transition={{
    duration: 0.6,
    delay: index * 0.2,
  }}

  viewport={{ once: false, amount: 0.3 }}

  className={`
  backdrop-blur-xl
  border
  rounded-3xl
  p-10
  hover:-translate-y-3
  transition
  duration-300

  ${darkMode
    ? "bg-white/5 border-white/10 shadow-lg shadow-blue-500/10 hover:shadow-blue-500/30"
    : "bg-black/5 border-black/10 shadow-lg shadow-slate-300/20 hover:shadow-slate-400/30"}
`}
>

            <h3 className="text-2xl font-semibold mb-6">
              {service.title}
            </h3>

            <p className="text-slate-300 leading-8">
              {service.description}
            </p>

          </motion.div>

        ))}

      </div>

    </section>
  )
}
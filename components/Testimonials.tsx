"use client"
import { motion } from "framer-motion"
const testimonials = [
  {
    name: "Michael Johnson",
    role: "Startup Founder",
    review:
      "The website completely transformed our online presence. Professional and modern in every aspect.",
  },

  {
    name: "Sarah Williams",
    role: "Business Owner",
    review:
      "Amazing experience working with the team. The final website exceeded expectations.",
  },

  {
    name: "David Smith",
    role: "Marketing Director",
    review:
      "Fast, responsive, and beautifully designed. Highly recommended for modern businesses.",
  },
]

export default function Testimonials() {
  return (
    <section className="py-28 px-6 lg:px-20 bg-slate-900/30">

      <div className="text-center mb-20">

        <h2 className="text-5xl font-bold mb-6">
          What Our Clients Say
        </h2>

        <p className="text-slate-300 text-lg">
          Trusted by businesses and startups worldwide.
        </p>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {testimonials.map((testimonial, index) => (

          <motion.div
  key={index}

  initial={{ opacity: 0, y: 50 }}

  whileInView={{ opacity: 1, y: 0 }}

  transition={{
    duration: 0.6,
    delay: index * 0.2,
  }}

  viewport={{ once: false, amount: 0.3 }}

  className="
    bg-white/5
backdrop-blur-xl
border
border-white/10
shadow-lg
shadow-blue-500/10
    rounded-3xl
    p-10
    hover:-translate-y-3
hover:shadow-blue-500/30
    transition
    duration-300
  "
>

            <p className="text-slate-300 leading-8 mb-4">
              “{testimonial.review}”
            </p>

            <h3 className="text-xl font-semibold mb-0">
              {testimonial.name}
            </h3>

            <span className="text-slate-400">
              {testimonial.role}
            </span>

          </motion.div>

        ))}

      </div>

    </section>
  )
}
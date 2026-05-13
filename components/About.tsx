"use client"
import { motion } from "framer-motion"
export default function About() {
  return (
    <section id="about" className="py-28 px-6 lg:px-20">

      <motion.div
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: false, amount: 0.3 }}
  className="flex flex-col lg:flex-row items-center gap-16"
>

        <div className="flex-1">

          <h2 className="text-5xl font-bold mb-8">
            About Us
          </h2>

          <p className="text-slate-300 text-lg leading-8 mb-6">
            We help businesses establish a strong digital
            presence through modern and responsive websites.
          </p>

          <p className="text-slate-300 text-lg leading-8">
            Our mission is creating premium user experiences
            with clean design and high performance.
          </p>

        </div>

        <div className="flex-1">

          <img
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop"
            alt="Office"
            className="rounded-3xl w-full"
          />

        </div>

      </motion.div>

    </section>
  )
}
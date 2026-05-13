"use client"

import { useState } from "react"
export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  return (
    <section id="contact" className="py-28 px-6 lg:px-20">

      <div className="text-center mb-20">

        <h2 className="text-5xl font-bold mb-6">
          Contact Us
        </h2>

        <p className="text-slate-300 text-lg">
          Let’s build something amazing together.
        </p>

      </div>

      <form

  action="https://formspree.io/f/xjglzlkj"

  method="POST"

  onSubmit={async (e) => {

    e.preventDefault()

    const form = e.currentTarget

    const data = new FormData(form)

    const response = await fetch(form.action, {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    })

    if (response.ok) {

      setSubmitted(true)

      form.reset()
    }

  }}

  className="max-w-3xl mx-auto flex flex-col gap-6"
>

        <input
          type="text"
          name="name"
          

          placeholder="Your Name"
          className="bg-slate-900 border border-slate-800 rounded-2xl px-6 py-5 outline-none"
        />

        <input
  type="email"
  name="email"
  placeholder="Your Email"
  pattern=".+@.+\..+"
  title="Please enter a complete email address (example@gmail.com)"
  required
  className="bg-slate-900 border border-slate-800 rounded-2xl px-6 py-5 outline-none"
/>

        <textarea
        name="message"
          placeholder="Your Message"
          className="bg-slate-900 border border-slate-800 rounded-2xl px-6 py-5 outline-none min-h-[220px]"
        ></textarea>
{submitted && (

  <p className="text-green-400 text-center">
    Message sent successfully!
  </p>

)}
        <button
  className="
    bg-blue-600
    hover:bg-blue-500
    hover:scale-105
    active:scale-95
    transition-all
    duration-300
    rounded-2xl
    py-5
    text-lg
    font-medium
    shadow-lg
    shadow-blue-600/20
  "
>
  Send Message
</button>

      </form>

    </section>
  )
}
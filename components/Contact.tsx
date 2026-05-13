export default function Contact() {
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

      <form className="max-w-3xl mx-auto flex flex-col gap-6">

        <input
          type="text"
          placeholder="Your Name"
          className="bg-slate-900 border border-slate-800 rounded-2xl px-6 py-5 outline-none"
        />

        <input
  type="email"
  placeholder="Your Email"
  pattern=".+@.+\..+"
  title="Please enter a complete email address (example@gmail.com)"
  required
  className="bg-slate-900 border border-slate-800 rounded-2xl px-6 py-5 outline-none"
/>

        <textarea
          placeholder="Your Message"
          className="bg-slate-900 border border-slate-800 rounded-2xl px-6 py-5 outline-none min-h-[220px]"
        ></textarea>

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
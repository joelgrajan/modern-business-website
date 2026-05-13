export default function Footer() {
  return (
    <footer className="border-t border-slate-800 py-10 px-6 lg:px-20">

      <div className="flex flex-col lg:flex-row justify-between items-center gap-6">

        <div>

          <h2 className="text-2xl font-bold mb-2">
            ELINS
          </h2>

          <p className="text-slate-400">
            Building modern digital experiences.
          </p>

        </div>

        <ul className="flex gap-6 text-slate-400">

          <li className="hover:text-white transition cursor-pointer">
            Home
          </li>

          <li className="hover:text-white transition cursor-pointer">
            About
          </li>

          <li className="hover:text-white transition cursor-pointer">
            Services
          </li>

          <li className="hover:text-white transition cursor-pointer">
            Contact
          </li>

        </ul>

      </div>

      <div className="text-center text-slate-500 mt-10">
        © 2026 ELINS. All rights reserved.
      </div>

    </footer>
  )
}
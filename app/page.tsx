import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Services from "@/components/Services"
import Testimonials from "@/components/Testimonials"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import ScrollProgress from "@/components/ScrollProgress"

export default function Home() {
  return (
    <div className="bg-slate-950 min-h-screen text-white relative overflow-hidden">
      <div className="absolute top-[-200px] left-[-150px] w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px]"></div>

<div className="absolute bottom-[-200px] right-[-150px] w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[120px]"></div>

     <div className="relative z-10">
  <ScrollProgress />
  
  <Navbar />

  <Hero />

  <About />

  <Services />

  <Testimonials />

  <Contact />

  <Footer />

</div>

    </div>
  )
}